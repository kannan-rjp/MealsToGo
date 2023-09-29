import React, { Component, useState } from 'react'
import { 
  Text, 
  View, StyleSheet, 
  Image, 
  ImageBackground, 
  TouchableOpacity, 
  SafeAreaView, 
  Platform,
  StatusBar,
  TextInput
} from 'react-native'
import SearchBar from './src/components/SearchBar';

const App = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.searchContainer}>
                <SearchBar />
            </View>
            <View style={styles.listContainer}>

            </View>
        </SafeAreaView>
    );
}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchContainer: {
        flex: 0.2
    },
    listContainer: {
        flex: 0.2
    }
})