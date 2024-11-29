import React, { useState, useEffect, useContext, createContext } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    Alert,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Linking } from 'react-native';
import styles from './styles'; // Assuming external styles
import WebView from 'react-native-webview';

const Stack = createStackNavigator();
const BookData = createContext();

// Context for storing bookmarked books
const BookFetch = ({ children }) => {
    const [storedBooks, setStoredBooks] = useState([]);

    const addBook = (book) => {
        setStoredBooks((prevBooks) => [
            ...prevBooks,
            {
                ...book,
                storedId: Math.random().toString(),
                addedDate: new Date().toLocaleDateString(),
            },
        ]);
    };

    const removeBook = (id) => {
        setStoredBooks((prevBooks) =>
            prevBooks.filter((book) => book.storedId !== id)
        );
    };

    return (
        <BookData.Provider value={{ storedBooks, addBook, removeBook }}>
            {children}
        </BookData.Provider>
    );
};

// Book list screen
const BookListScreen = ({ navigation }) => {
    const [books, setBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('Sherlock Holmes');
    const { addBook, removeBook, storedBooks } = useContext(BookData);

    const fetchBooks = async (query) => {
        try {
            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10`
            );
            const data = await response.json();
            setBooks(data.items || []);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    useEffect(() => {
        fetchBooks(searchQuery);
    }, [searchQuery]);

    const navigateToDetails = (book) => {
        navigation.navigate('Details', { book });
    };

    const renderBookItem = ({ item }) => {
        const bookInfo = item.volumeInfo;
        const isBookStored = storedBooks.some(
            (storedBook) => storedBook.id === item.id
        );

        const handleButtonPress = () => {
            if (isBookStored) {
                removeBook(item.id);
                Alert.alert('Book removed successfully!');
            } else {
                addBook({ ...bookInfo, id: item.id });
            }
        };

        return (
            <TouchableOpacity
                style={styles.bookItem}
                onPress={() => navigateToDetails(bookInfo)}
            >
                <Image
                    style={styles.bookImage}
                    source={{ uri: bookInfo.imageLinks?.thumbnail }}
                />
                <View style={styles.Details}>
                    <Text style={styles.bookTitle}>{bookInfo.title}</Text>
                    <Text style={styles.bookAuthor}>
                        {bookInfo.authors?.join(', ')}
                    </Text>
                </View>
                <TouchableOpacity
                    style={
                        isBookStored ? styles.removeButton : styles.storeButton
                    }
                    onPress={handleButtonPress}
                    disabled={isBookStored}
                >
                    <Text style={styles.buttonText}>
                        {isBookStored ? 'Added' : 'Bookmark'}
                    </Text>
                </TouchableOpacity>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Search for your next book!</Text>

            {/* Updated Search Box */}
            <View style={styles.searchContainer}>
                <MaterialCommunityIcons
                    name="magnify"
                    size={20}
                    color="#888"
                    style={styles.searchIcon}
                />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search books..."
                    onChangeText={(text) => setSearchQuery(text)}
                    value={searchQuery}
                />
            </View>

            <FlatList
                data={books}
                keyExtractor={(item) => item.id || item.etag}
                renderItem={renderBookItem}
            />
            <TouchableOpacity
                style={styles.storedBooksButton}
                onPress={() => navigation.navigate('StoredBooks')}
            >
                <MaterialCommunityIcons
                    name="bookshelf"
                    size={24}
                    color="#4CAF50"
                />
                {storedBooks.length > 0 && (
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>
                            {storedBooks.length}
                        </Text>
                    </View>
                )}
            </TouchableOpacity>
        </View>
    );
};

// Book details screen
const BookDetailsScreen = ({ route, navigation }) => {
    const { book } = route.params;

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={{ flexGrow: 1, padding: 10, paddingBottom: 20 }}
        >
            <Text style={styles.header}>Book Details</Text>
            <Image
                style={styles.bookImageDetail}
                source={{ uri: book.imageLinks?.thumbnail }}
            />
            <Text style={styles.bookTitle}>{book.title}</Text>
            <Text style={styles.bookDescription}>
                {book.description || 'No description available.'}
            </Text>

            <View style={styles.detailSection}>
                <Text style={styles.detailHeader}>Publish Date</Text>
                <Text style={styles.bookPublishment}>
                    {book.publishedDate || 'N/A'}
                </Text>
            </View>

            <View style={styles.detailSection}>
                <Text style={styles.detailHeader}>Authors</Text>
                <Text style={styles.bookAuthors}>
                    {book.authors?.join(', ') || 'Unknown'}
                </Text>
            </View>

            {(book.webReaderLink || book.previewLink) ? (
    <TouchableOpacity
        style={styles.previewButton}
        onPress={() =>
            navigation.navigate('WebReader', {
                link: book.webReaderLink || book.previewLink
            })
        }
    >
        <Text style={styles.buttonText}>Read Book</Text>
    </TouchableOpacity>
) : (
    <Text style={styles.emptyStateText}>No reader link available for this book.</Text>
)}

        </ScrollView>
    );
};

// WebReader screen for rendering WebView
const WebReaderScreen = ({ route }) => {
    const { link } = route.params;

    // Append the parameters for one-page view
    const enhancedLink = `${link}&onepage&q&f=true`;
    

    return link ? (
        <WebView
            source={{ uri: enhancedLink }}
            style={{ flex: 1 }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
        />
    ) : (
        <View style={styles.container}>
            <Text style={styles.emptyStateText}>
                No reader link available for this book.
            </Text>
        </View>
    );
};

// Stored books screen
const StoredBooksScreen = ({ navigation }) => {
    const { storedBooks, removeBook } = useContext(BookData);

    const handleRemoveBook = (storedId) => {
        removeBook(storedId);
        Alert.alert('Book removed successfully!');
    };

    const handleReadBook = (link) => {
        if (link) {
            navigation.navigate('WebReader', { link });
        } else {
            Alert.alert('No reader link available for this book.');
        }
    };

    const renderStoredBookItem = ({ item }) => (
        <View style={styles.storedBookItem}>
            <Image
                style={styles.storedBookImage}
                source={{ uri: item.imageLinks?.thumbnail }}
            />
            <View style={styles.storedBookDetails}>
                <Text style={styles.storedBookTitle}>{item.title}</Text>
                <Text style={styles.storedBookAuthor}>Authors</Text>
                <Text style={styles.storedBookAuthors}>
                    {item.authors?.join(', ') || 'Unknown'}
                </Text>
                <Text style={styles.storedBookAddedDate}>
                    Added on: {item.addedDate}
                </Text>
            </View>
    
            {/* Button container to stack buttons vertically */}
            <View style={styles.buttonContainer}>
                {/* Read Book Button */}
                <TouchableOpacity
                    style={styles.readButton}
                    onPress={() => handleReadBook(item.previewLink || item.webReaderLink)}
                >
                    <Text style={styles.buttonText}>Read Book</Text>
                </TouchableOpacity>
                {/* Remove Book Button */}
                <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => handleRemoveBook(item.storedId)}
                >
                    <Text style={styles.buttonText}>Remove</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
    

    return (
        <FlatList
            data={storedBooks}
            keyExtractor={(item) => item.storedId}
            renderItem={renderStoredBookItem}
            ListHeaderComponent={
                <Text style={styles.storeheader}>Bookmarks</Text>
            }
            ListEmptyComponent={
                <Text style={styles.emptyStateText}>No bookmarks yet.</Text>
            }
        />
    );
};


// Main app component
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="BookHamster">
                <Stack.Screen name="BookHamster" component={BookListScreen} />
                <Stack.Screen name="Details" component={BookDetailsScreen} />
                <Stack.Screen name="StoredBooks" component={StoredBooksScreen} />
                <Stack.Screen name="WebReader" component={WebReaderScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default () => (
    <BookFetch>
        <App />
    </BookFetch>
);
