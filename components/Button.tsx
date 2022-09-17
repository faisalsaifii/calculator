import { useState, useContext } from 'react';
import { StyleSheet, View, Switch, TouchableOpacity, Text } from 'react-native';
import { ThemeContext } from '../context/ThemeContext'; // Allows global declaration of theme
import { myColors } from '../styles/Colors';
import { Styles } from '../styles/GlobalStyles';

interface ButtonProps {
    onPress: () => void;
    title: string;
    isBlue?: boolean;
    isGray?: boolean;
    btnWidth?: string;
}

export default function Button({title, onPress, isBlue, isGray}: ButtonProps) {
    const theme = useContext(ThemeContext);
    return(
        <TouchableOpacity
            style={
                title === "0" && theme === "light"?
                Styles.btnZeroLight : title === "0" && theme === "dark"?
                Styles.btnZeroDark : isBlue ?
                Styles.btnBlue : isGray ?
                Styles.btnGray : theme === "light" ?
                Styles.btnLight : Styles.btnDark
            }
            onPress={onPress}
        >
            <Text
                style={
                    isBlue || isGray
                    ? Styles.smallTextLight
                    : theme === "dark"
                    ? Styles.smallTextLight
                    : Styles.smallTextDark
                }
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}