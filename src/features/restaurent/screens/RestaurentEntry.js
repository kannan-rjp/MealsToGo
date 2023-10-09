import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import {
    Text,
    View, StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity,
    SafeAreaView,
    Platform,
    StatusBar,
    TextInput,
    FlatList,
    ScrollView
} from 'react-native'
import { restaurentData } from '../../../config/data'
import SearchBar from "../../../components/SearchBar";
import RestaurentInfo from "../components/RestaurentInfo";

const RestaurentEntry = (props) => {
    const [value, setValue] = useState('');
    const handleChange = (text) => {
        console.log('Yeah', text)
        setValue(text);
    }
    console.log('This is my state', props.restaurentReducer)
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.searchContainer}>
                    <SearchBar value={value} handleChange={handleChange} />
                </View>
                <View style={styles.listContainer}>
                    {restaurentData && restaurentData.map((data, index) => {
                        return (<RestaurentInfo bottomGap={10} key={index} restaurentCollection={data} />);
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const mapStateToProps = state => ({
    restaurentReducer: state.restaurentReducer
}) 
export default connect(mapStateToProps)(RestaurentEntry)

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