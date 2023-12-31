import { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Image,
} from 'react-native';

const searchImg = require('../../assets/images/search.png')
const SearchBar = ({value, handleChange}) => {
    const [searchval, setSearchval] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.searchCon}>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: 40}}>
                    <Image resizeMode='center' style={styles.image} source={searchImg} />
                </View>
                <TextInput value={value} onChangeText={handleChange} style={styles.input} />
            </View>
        </View>
    );
}
export default SearchBar;

const styles = StyleSheet.create({
    container: {
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchCon: {
        width: '90%',
        height: 40,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 4,
        elevation: 2,
    },
    image: {
        height: 20,
        width: 20,
    },
    input: {
        flex: 1,
        color: 'gray'
    }
})