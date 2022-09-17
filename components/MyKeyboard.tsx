import { View, Text } from 'react-native'
import * as React from 'react'
import Button from './Button'
import { Styles } from '../styles/GlobalStyles'
import { myColors } from '../styles/Colors'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const myKeyboard = () => {

  const [firstNumber, setFirstNumber] = React.useState('');
  const [secondNumber, setSecondNumber] = React.useState('');
  const [operation, setOperation] = React.useState('');
  const [result, setResult] = React.useState<Number | null>(null); // State can be number or null, initially set as null

  const handleNumberPress = (buttonValue : string) => {
    if (firstNumber.length < 10){
      setFirstNumber(firstNumber + buttonValue);
    }
  }

  const handleOperationPress = (buttonValue : string) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber('');
  }

  const clear = () => {
    setFirstNumber('');
    setSecondNumber('');
    setOperation('');
    setResult(null);
  };

  const getResult = () => {
    switch(operation){
      case '+':
        clear();
        setResult(parseFloat(firstNumber) + parseFloat(secondNumber));
        break;
      case '-':
        clear();
        setResult(parseFloat(firstNumber) - parseFloat(secondNumber));
        break;
      case '*':
        clear();
        setResult(parseFloat(firstNumber) * parseFloat(secondNumber));
        break;
      case '/':
        clear();
        setResult(parseFloat(firstNumber) / parseFloat(secondNumber));
        break;
      case '%':
        clear();
        if (parseFloat(secondNumber) != 0)
          setResult((parseFloat(firstNumber) / 100) * parseFloat(secondNumber))
      default:
        clear();
        setResult(0);
        break;
    }
  };

  const firstNumberDisplay = () => {
    if(result !== null){
      return <Text style={result<99999 ? [Styles.screenFirstNumber, {color: myColors.result}] : [Styles.screenFirstNumber, {fontSize: 50,color: myColors.result}]}>{result?.toString()}</Text>;
    }

    if( firstNumber && firstNumber.length < 6){
      return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
    }

    if (firstNumber === "") {
      return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
    }
    
    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
          {firstNumber}
        </Text>
      );
    }

    if (firstNumber. length > 7) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
        {firstNumber}
        </Text>
      );
    }
  };

  // <></> : Fragments
  // A common pattern in React is for a component to return multiple elements
  // Fragments let you group a list of children without adding extra nodes to the DOM

  return (
    <View style={Styles.viewBottom}>
      <View
        style={{
          height: 120,
          width: '90%',
          justifyContent: 'flex-end',
          alignSelf: 'center',
          marginBottom: 10
        }}
      >
        <Text style={Styles.screenSecondNumber}>
          {secondNumber}
          <Text style={{
            color: 'purple',
            fontSize: 50,
            fontWeight: '500',
          }}>
          </Text>
        </Text>
        {firstNumberDisplay()}
      </View>
      <View style={Styles.row}>
        <Button title='C' isGray onPress={clear} btnWidth='83'/>
        <Button title='+/-' isGray onPress={() => handleOperationPress("+/-")} />
        <Button title='%' isGray onPress={() => handleOperationPress("%")} />
        <Button title='÷' isBlue onPress={() => handleOperationPress("/")} />
      </View>
      <View style={Styles.row}>
        <Button title='7' onPress={() => handleNumberPress('7')} />
        <Button title='8' onPress={() => handleNumberPress('8')} />
        <Button title='9' onPress={() => handleNumberPress('9')} />
        <Button title='×' isBlue onPress={() => handleOperationPress("*")} />
      </View>
      <View style={Styles.row}>
        <Button title='4' onPress={() => handleNumberPress('4')} />
        <Button title='5' onPress={() => handleNumberPress('5')} />
        <Button title='6' onPress={() => handleNumberPress('6')} />
        <Button title='-' isBlue onPress={() => handleOperationPress("-")} />
      </View>
      <View style={Styles.row}>
        <Button title='1' onPress={() => handleNumberPress('1')} />
        <Button title='2' onPress={() => handleNumberPress('2')} />
        <Button title='3' onPress={() => handleNumberPress('3')} />
        <Button title='+' isBlue onPress={() => handleOperationPress("+")} />
      </View>
      <View style={Styles.row}>
        <Button title='0' onPress={() => handleNumberPress('0')} />
        <Button title='.' onPress={() => handleNumberPress('.')} />
        <Button title='=' isBlue onPress={() => getResult()} />
      </View>
    </View>
  )
}

export default myKeyboard