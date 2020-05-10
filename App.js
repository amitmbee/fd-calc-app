import * as React from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [rateOfInterest, setRateOfInterest] = React.useState(0);
  const [depositAmount, setDepositAmount] = React.useState(0);
  const [frequency, setFrequency] = React.useState(0);
  const maturityAmount = 4 * frequency * depositAmount * (1 + rateOfInterest / 25)

  const isValidNumber = (val) => {
    const numericInput = parseFloat(val);
    return !Number.isNaN(numericInput) && typeof numericInput === 'number'
  }

  const setFieldValue = (value, setHook) => {
    isValidNumber(value) ? setHook(value.toString()) : ""
  }

  return (
    <View style={{ width: "80%", height: "80%", marginTop: 60 , marginLeft: 10, marginRight: 10, marginBottom: 30}}>
      <View>
        <Text>Deposit Amount: </Text>
        <TextInput
          label='Deposit Amount'
          value={depositAmount}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          maxLength={20}
          keyboardType='numeric'
          onChangeText={depositAmountString => {
            setFieldValue(depositAmountString, setDepositAmount)
          }}
        />

        <Text>Rate Of Interest:</Text>
        <TextInput
          label='Rate Of Interest'
          value={rateOfInterest}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          keyboardType='numeric'
          maxLength={10}
          onChangeText={rate => {
            setFieldValue(rate, setRateOfInterest)

          }}
        />

        <Text>Compounded Interest Frequency:</Text>
        <TextInput
          label='Compounded Interest Frequency'
          value={frequency}
          maxLength={10}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          keyboardType='numeric'
          onChangeText={frequencyString => {
            setFieldValue(frequencyString, setFrequency)
          }}
        />
      </View>

      <View>
        <Text>Maturity Amount: {isValidNumber(maturityAmount) ? maturityAmount.toString() : ""}</Text>
      </View>
    </View>
  );
}
