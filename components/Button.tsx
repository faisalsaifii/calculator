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
}

export default function Button({title, onPress, isBlue, isGray}: ButtonProps) {
    const theme = useContext(ThemeContext);
    return(
        <TouchableOpacity
            style={
                isBlue ?
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