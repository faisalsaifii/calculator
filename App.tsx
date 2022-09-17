import { useState } from 'react';
import { StyleSheet, View, Switch, SafeAreaView } from 'react-native';
import { ThemeContext } from './context/ThemeContext'; // Allows global declaration of theme
import { myColors } from './styles/Colors';
import MyKeyboard from './components/MyKeyboard';

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}> 
      <SafeAreaView style={theme === 'light' ? styles.containerlight : styles.containerdark}>
        <Switch
          value={theme === 'dark'} // Switch on / true for whichever value is passed
          onValueChange={() => setTheme(theme === 'light'? 'dark' : 'light')}
          style={{marginTop:20,}}
        />
        <MyKeyboard/>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  containerlight: {
    flex: 1,
    backgroundColor: myColors.white,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  containerdark: {
    flex: 1,
    backgroundColor: myColors.black,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
});