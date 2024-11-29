import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f0f0f0',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
        color: '#4CAF50',
    },
    storeheader: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 16,
        color: 'green',
    },
    emptyStateText: {
        fontSize: 18,
        textAlign: 'center',
        color: 'gray',
        marginTop: 30,
    },
    bookItem: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
    },
    bookImage: {
        width: 80,
        height: 120,
        marginRight: 16,
        borderRadius: 8,
    },
    Details: {
        flex: 1,
    },
    bookImageDetail: {
        width: '100%',
        height: 230,
        borderRadius: 8,
        marginBottom: 16,
        resizeMode:'contain',
    },
    bookTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    bookAuthor: {
        marginTop: 8,
    },
    bookAuthors: {
        marginTop: 2,
        marginBottom: 4,
    },
    bookDescription: {
        marginTop: 10,
        fontSize: 16,
        color: '#333',
        lineHeight: 22,
    },
    detailHeader: {
        fontSize: 16,
        fontWeight: 'bold',  // Make sure this is set to bold
        marginBottom: 5,
        color: '#444',
    },
    storeButton: {
        backgroundColor: '#3498db',
        padding: 8,
        borderRadius: 8,
        marginLeft: 8,
        alignSelf: 'flex-start',
    },
    buttonContainer:{
        gap: 5,
    },
    removeButton: {
        backgroundColor: '#e74c3c',
        padding: 8,
        borderRadius: 8,
        marginLeft: 8,
        alignSelf: 'flex-start',
    },
    readButton: {
        backgroundColor: 'green',
        padding: 8,
        borderRadius: 8,
        marginLeft: 8,
        alignSelf: 'flex-start',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 16,
        paddingHorizontal: 10,
    },
    searchIcon: {
        marginRight: 8,
        color: 'gray', // Color for the icon
    },
    searchInput: {
        flex: 1, // Allow the input to take up remaining space
        fontSize: 16,
        color: '#333',
        height: '100%', // Ensure it fits the parent container
    },
    
    
    storedBooksButton: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        backgroundColor: '#faed39',
        padding: 16,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    },
    badge: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: 'red',
        borderRadius: 10,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    badgeText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
    },
    storedBookItem: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        alignItems: 'center',
      },
      storedBookImage: {
        width: 80,
        height: 120,
        borderRadius: 8,
        marginRight: 15,
      },
      storedBookDetails: {
        flex: 1,
      },
      storedBookTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      storedBookPreview: {
        fontSize: 14,
        color: '#888',
        marginBottom: 5,
      },
      storedBookAddedDate: {
        fontSize: 12,
        color: '#888',
      },

      previewButton: {
        backgroundColor: '#1976d2', // Primary blue color
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10, // Adds spacing around the button
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5, // For Android shadow effect
      },
      buttonText: {
        color: '#ffffff', // White text for contrast
        fontSize: 16,
        fontWeight: '600', // Semi-bold for emphasis
        textTransform: 'uppercase', // Makes the text all caps
      },
      
    //   loadingContainer: {
    //     position: 'absolute',
    //     top: 0,
    //     left: 0,
    //     right: 0,
    //     bottom: 0,
    //     backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     zIndex: 1, // Ensure it overlays the WebView
    // },
    // loadingText: {
    //     color: '#black',
    //     marginTop: 10,
    //     fontSize: 16,
    // },
    
});

export default styles;