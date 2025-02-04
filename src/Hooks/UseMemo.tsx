import { Button, StyleSheet, Text, View } from 'react-native'
import { useMemo, useState } from 'react'

const UseMemo = () => {
    const [count, setcount] = useState(0)
    const [input, setinput] = useState('')
    const expensiveValue = useMemo(() =>{
        console.log('====================================');
        console.log("Calculating...");
        console.log('====================================');
        let total = 0;
        for(let i =0; i<1e7; i++){
            total += i
        }
        return total;
    }, [count])


  return (
    <View>
      <Text>Expensive Calculation{expensiveValue}</Text>
      <Button title="Increase Count" onPress={() => setcount(count + 1)} />
      <Button title="Update Input" onPress={() => setinput(input + '!')} />
    </View>
  )
}

export default UseMemo

