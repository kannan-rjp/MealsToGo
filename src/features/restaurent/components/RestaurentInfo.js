import {
    View, 
    Image,
    StyleSheet,
    Text,
} from 'react-native'

const RestaurentInfo = (props) => {
    const { address, name, photo, isOpened } = props.restaurentCol[0];
    return(
        <>
        <View style={styles.imageContainer}>
            <View>
                <Image source={photo} style={styles.restImages} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.headText}>{name}</Text>
                <Text style={styles.subText}>{address}</Text>
            </View>
        </View>
        </>
    );
}
export default RestaurentInfo;

const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: 20,
        overflow: 'hidden',
        elevation: 3
        
    },
    restImages: {
        height: 200,
        width: '100%',
        resizeMode: 'stretch',
    },
    textContainer: {
        padding: 10
    },
    headText: {
        fontSize: 18,
        fontWeight: '500',
        letterSpacing: 1
    },
    subText: {
        fontSize: 12,
        color: 'gray'
    }
})
