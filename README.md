# Calculator using React Native

## Instructions
---
### Create EXPO Project
```
expo init
```

### Create Colors.tsx
```
export const Colors = {
    light : '#FFFFFF',
    dark : '#000000'
}
```

### Create ThemeContext.tsx
```
import { createContext } from 'react';
export const ThemeContext = createContext('light');
```

### Edit App.tsx
```
import { useState } from 'react';
import { StyleSheet, View, Switch } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext'; // Allows global declaration of theme
import { MyColors } from './src/styles/Colors';

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}> 
      <View style={theme === 'light' ? styles.containerlight : styles.containerdark}>
      <Switch
        value={theme === 'dark'} // Switch on / true for whichever value is passed
        onValueChange={() => setTheme(theme === 'light'? 'dark' : 'light')}
      />
    </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  containerlight: {
    flex: 1,
    backgroundColor: MyColors.light,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerdark: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
```

### Create GlobalStyles.tsx
```
import { StyleSheet } from "react-native"
import { myColors } from "./Colors"

export const Styles = StyleSheet.create({
    // Button
    btnBlue:{
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.blue,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnDark: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.btnDark,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnLight: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.white,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnGray : {
        width : 72,
        height : 72,
        borderRadius : 24,
        backgroundColor : myColors.btnGray,
        justifyContent : "center",
        alignItems : "center",
        margin : 8,
    },
    smallTextLight: {
        fontSize: 32,
        color: myColors.white,
    },
    smallTextDark: {
        fontSize: 32,
        color: myColors.black,
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
        color: myColors.gray,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
    screenSecondNumber: {
        fontSize: 40,
        color: myColors.gray,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
})
```

### Create Button.tsx
```
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
```