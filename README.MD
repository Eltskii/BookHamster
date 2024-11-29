## Overview

**BookHamster** is a book discovery and management app that allows users to search for books, view their details, and bookmark their favorites. The app uses the Google Books API to fetch book information and allows users to store and manage their bookmarks. Users can also view detailed book information, including author details, descriptions, and preview links.

## Features

- **Search Books**: Users can search for books by title using a search bar. The app fetches relevant books from the Google Books API.
- **Bookmark Books**: Users can bookmark books to store them for later reference.
- **View Book Details**: Each book has a detail page with more information, including the author, publish date, and description.
- **Stored Books**: Users can view their stored books in a separate section, where they can remove or read the book if a preview link is available.
- **Read Book**: A WebView is used to open a book's web reader if the book has a preview link.

## Technologies Used

- **React Native**: For building the mobile app.
- **React Navigation**: For navigating between screens.
- **Google Books API**: To fetch books based on user search queries.
- **React Context API**: For managing the state of stored books across components.
- **React Native WebView**: For rendering book preview links.

## Screens

1. **Book List Screen**:
   - Displays a list of books fetched from the Google Books API.
   - Users can search for books by title.
   - Users can bookmark books or remove them if already bookmarked.

2. **Book Details Screen**:
   - Shows detailed information about a selected book, including its authors, publish date, and description.
   - Users can navigate to the WebReader screen to read the book if a preview link is available.

3. **WebReader Screen**:
   - Displays a web-based reader for books that have preview links.

4. **Stored Books Screen**:
   - Displays a list of books that the user has bookmarked.
   - Users can remove books or navigate to the book details to read them.

## Installation

### Prerequisites

- Node.js (preferably the latest stable version)
- npm (for managing dependencies)
- Expo CLI (optional, if you use Expo)

### Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/bookhamster.git
   cd bookhamster
   ```

2. **Install Dependencies**:

   If using npm:

   ```bash
   npm install
   ```

   If using yarn:

   ```bash
   yarn install
   ```

3. **Run the App**:

   If you're using Expo, you can start the app by running:

   ```bash
   expo start
   ```

   Or, if you are using React Native CLI:

   ```bash
   npx react-native run-android  # For Android
   npx react-native run-ios  # For iOS
   ```

4. Open the app on your emulator or device.

## Usage

1. **Search for Books**: Enter a search term in the search bar, and the app will display a list of books related to your query.
2. **Bookmark Books**: Tap the "Bookmark" button to add books to your stored list.
3. **View Book Details**: Tap a book to view its details, including the author, description, and publish date.
4. **Stored Books**: Access your stored books by navigating to the "StoredBooks" screen.
5. **Read Book**: If a preview link is available, tap the "Read Book" button to open it in the WebView.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-name`).
6. Create a new Pull Request.
