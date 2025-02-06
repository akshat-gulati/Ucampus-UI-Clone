import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, Touchable, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { UnitType, conversionFactors, convertLength } from '../Components/Lengths'

const LengthScreen = () => {
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState<UnitType>('meters');
  const [toUnit, setToUnit] = useState<UnitType>('meters');
  const [result, setResult] = useState<number | null>(null);

  const handleConvert = () => {
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      const convertedValue = convertLength(numericValue, fromUnit, toUnit);
      setResult(convertedValue);
    } else {
      setResult(null);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={{ position: 'absolute', opacity: 0.1 }} source={require('../Assets/length.jpg')} />
      <Text style={styles.title}> Length Converter</Text>
      <View style={styles.pickerView}>
        <View style={styles.eachPicker}>
          <Text style={{ fontSize: 20, color: 'grey' }}>Convert From</Text>
          <Picker
            selectedValue={fromUnit}
            style={styles.picker}
            onValueChange={(itemValue: UnitType) => setFromUnit(itemValue)}
          >
            <Picker.Item label="Meters" value="meters" />
            <Picker.Item label="Kilometers" value="kilometers" />
            <Picker.Item label="Miles" value="miles" />
            <Picker.Item label="Feet" value="feet" />
            <Picker.Item label="Inches" value="inches" />
          </Picker>
        </View>

        <View style={styles.eachPicker}>
          <Text style={{ fontSize: 20, color: 'grey' }}>Convert To</Text>
          <Picker selectedValue={toUnit} style={styles.picker} onValueChange={(itemValue: UnitType) => setToUnit(itemValue)} >
            <Picker.Item label="Meters" value="meters" />
            <Picker.Item label="Kilometers" value="kilometers" />
            <Picker.Item label="Miles" value="miles" />
            <Picker.Item label="Feet" value="feet" />
            <Picker.Item label="Inches" value="inches" />
          </Picker>
        </View>
      </View>


      <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-evenly' }}>
        <TextInput style={styles.input} placeholder="Enter value" keyboardType="numeric" value={value} onChangeText={setValue}
        />
        <TouchableOpacity onPress={()=>{setValue(''), setResult(null)}}>
        <Image style={{ height: 30, width: 30, objectFit: 'cover', tintColor: 'blue' }} source={require('../Assets/x.circle.fill.png')} />
        </TouchableOpacity>
      </View>
        <Text style={styles.button} onPress={handleConvert}>
          Convert
        </Text>
        {result !== null && (
          <Text style={styles.result}>
            Result: {result.toFixed(2)} {toUnit}
          </Text>
        )}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  title: {
    fontSize: 30,
    marginVertical: 30
  },
  input: {
    backgroundColor:"#ffffff80",
    height: 50,
    width: 350,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius:20,
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  picker: {
    height: 100,
    width: 200,
    marginBottom: 100,
  },
  eachPicker: {
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#ffffff80',
    borderRadius: 20,
    height: 250,
    paddingVertical: 10
  },
  button: {
    padding:7,
    marginTop:30,
    fontSize: 22,
    color: 'blue',
    textAlign: 'center',
    marginBottom: 16,
    borderWidth: 1,
    width:400,
    height: 40,
    backgroundColor:'#ffffff80',
    borderRadius: 20
  },
  result: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 16,
  },
  pickerView: {
    flexDirection: 'row',
    gap: 10
  }
});

export default LengthScreen;