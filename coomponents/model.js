import { Modal, Image, Text, Pressable ,View} from 'react-native';
import { StyleSheet } from 'react-native';
const MyModel = (props) => {
    return (
        <Modal animationType='slide' visible={props.visible} transparent={true}>
            <View style={styles.container}>
                <View style={styles.modalView}>
                    <Image style={styles.image} source={require('../assets/star.png')} />
                    <Text style={{ color: 'white', fontWeight: 'bold', margin: 2 }} >Enjoyed</Text>
                    <View style={{flexDirection:'row'}}>
                    <Pressable style={styles.button} onPress={props.Rate}><Text>Rate Us</Text></Pressable>
                    <Pressable style={styles.button} onPress={props.Rate}><Text> Later </Text></Pressable>
                    </View>
                    <Pressable style={styles.button} onPress={props.Logout}><Text>Logout</Text></Pressable>
                </View>
            </View>
        </Modal>
    )
}
export default MyModel;
const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    }, modalView: {
        margin: 20,
        backgroundColor: "#13a6b0",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    }, button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        backgroundColor:'#7abbbf',
        alignContent:"center",
        alignItems:"center",
        margin:2,
    },
    image:{ height: 100, width: 100 ,position:'absolute',bottom:130}
})