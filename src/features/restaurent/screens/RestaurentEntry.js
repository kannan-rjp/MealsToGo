import React, { useState } from "react";
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
import { restaurentData } from '../../../config/data'
import SearchBar from "../../../components/SearchBar";
import RestaurentInfo from "../components/RestaurentInfo";

const RestaurentEntry = () => {
    const [value, setValue] = useState('');
    const handleChange = (text) => {
        console.log('Yeah',text)
        setValue(text);
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchContainer}>
                <SearchBar value={value} handleChange={handleChange} />
            </View>
            <View style={styles.listContainer}>
                <RestaurentInfo restaurentCol={restaurentData} />
            </View>
        </SafeAreaView>
    );
}
export default RestaurentEntry

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchContainer: {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3
    },
    listContainer: {
        flex: 0.9,
        paddingTop: 20,
        paddingHorizontal: 10
    }
})