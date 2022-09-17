import { StyleSheet } from "react-native"
import { myColors } from "./Colors"

export const Styles = StyleSheet.create({
    // Button
    btnBlue:{
        width: 75,
        height: 75,
        borderRadius: 50,
        backgroundColor: myColors.blue,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnDark: {
        width: 75,
        height: 75,
        borderRadius: 50,
        backgroundColor: myColors.white,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnLight: {
        width: 75,
        height: 75,
        borderRadius: 50,
        backgroundColor: myColors.black,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnGray : {
        width : 75,
        height : 75,
        borderRadius : 50,
        backgroundColor : myColors.btnGray,
        justifyContent : "center",
        alignItems : "center",
        margin : 8,
    },
    smallTextLight: {
        fontSize: 30,
        color: myColors.black,
    },
    smallTextDark: {
        fontSize: 30,
        color: myColors.white,
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
    screenFirstNumber: {
        fontSize: 96,
        color: myColors.white,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
    screenSecondNumber: {
        fontSize: 40,
        color: myColors.white,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
})