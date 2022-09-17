import { StyleSheet } from "react-native"
import { myColors } from "./Colors"

export const Styles = StyleSheet.create({
    // Button
    btnBlue:{
        width: 83,
        height: 83,
        borderRadius: 50,
        backgroundColor: myColors.blue,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
    },
    btnDark: {
        width: 83,
        height: 83,
        borderRadius: 50,
        backgroundColor: myColors.btnDark,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
    },
    btnLight: {
        width: 83,
        height: 83,
        borderRadius: 50,
        backgroundColor: myColors.light,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
    },
    btnZeroLight: {
        width: 175,
        height: 83,
        borderRadius: 50,
        backgroundColor: myColors.light,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
    },
    btnZeroDark: {
        width: 175,
        height: 83,
        borderRadius: 50,
        backgroundColor: myColors.btnDark,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
    },
    btnGray : {
        width : 83,
        height : 83,
        borderRadius : 50,
        backgroundColor : myColors.btnGray,
        justifyContent : "center",
        alignItems : "center",
        margin : 5,
    },
    smallTextLight: {
        fontSize: 30,
        color: myColors.light,
        fontWeight: 'bold'
    },
    smallTextDark: {
        fontSize: 30,
        fontWeight: 'bold',
        color: myColors.dark,
    },
    // Keyboard
    row: {
        maxWidth: '100%',
        flexDirection: "row",
    },
    viewBottom: {
        position: 'absolute',
        bottom: 50,
    },
    screenFirstNumberLight: {
        fontSize: 96,
        color: myColors.black,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
    screenSecondNumberLight: {
        fontSize: 40,
        color: myColors.black,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
    screenFirstNumberDark: {
        fontSize: 96,
        color: myColors.white,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
    screenSecondNumberDark: {
        fontSize: 40,
        color: myColors.white,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
})