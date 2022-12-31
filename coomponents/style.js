import { Dimensions, StyleSheet } from "react-native";
const sc = Dimensions.get('window')
const wi = sc.width / 3
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    }, map: {
        width: '100%',
        height: '100%',
    },
    button: {
        width: wi,
        borderRadius: wi,
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        margin: 6,
        flexDirection: 'row',
        justifyContent: 'center',

    },
    buttontxt: {
        fontSize: 14,
        fontWeight: 'bold',
        alignSelf: "center",
    },
    textinput: {
        borderRadius: 10,
        width: sc.width / 1.5,
        padding: 15,
        marginVertical: 6,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0.01,
        },
        shadowOpacity: 0.10,
        shadowRadius: 1.04,
        elevation: 1,
    },
    simpletext: {
        width: sc.width,
        fontSize: 12,
        fontWeight: 'bold',
    },
    createPost: {
        borderRadius: 10,
        width: sc.width / 1.1,
        height: sc.height / 3,
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        marginVertical: 6,
    },
    forgot: {
        position: 'absolute',
        bottom: 0,
    },
    snack:{
        backgroundColor:'orange'
    }
})
export default styles;