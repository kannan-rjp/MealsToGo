import {
    View,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native'

const RestaurentInfo = (props) => {
    const {restaurentCollection, bottomGap} = props;
    const { address, name, photo, isOpened } = restaurentCollection;
    const imageBottom = { marginBottom: Number(bottomGap)}
    return (
        <>
            <TouchableOpacity onPress={()=>{console.log('Yeah')}}>
                <View style={[styles.imageContainer, imageBottom]}>
                    <View>
                        <Image source={photo} style={styles.restImages} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.headText}>{name}</Text>
                        <Text style={styles.subText}>{address}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    );
}
export default RestaurentInfo;

const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: 20,
        overflow: 'hidden',
        elevation: 2,
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
