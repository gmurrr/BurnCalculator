import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Alert, TouchableOpacity } from 'react-native';
import { useState } from 'react';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <MainScreen />
    </View>
  );
}

function MainScreen() {
  const [litersOfGas, setLitersOfGas] = useState('');
  const [distance, setDistance] = useState('');
  const [price, setPrice] = useState('');

  const handleCalculate = () => {
    const liters = parseFloat(litersOfGas);
    const dist = parseFloat(distance);
    const fuelPrice = parseFloat(price);

    if (isNaN(liters) || isNaN(dist) || isNaN(fuelPrice) || liters <= 0 || dist <= 0 || fuelPrice <= 0) {
      Alert.alert('Błąd', 'Proszę wypełnić poprawnie wszystkie pola');
      return;
    }

    const fuelConsumption = (liters / dist) * 100; 
const cost = (liters / 100) * dist * fuelPrice;

Alert.alert(
  'Wyniki',
  `Spalanie wynosi: ${fuelConsumption.toFixed(2)} L/100km\nKoszt podróży wynosi: ${cost.toFixed(2)} zł`
);
  }

  const resetFields = () => {
    setLitersOfGas('');
    setDistance('');
    setPrice('');
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Burn Calculator</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.title}>Oblicz spalanie oraz koszt podróży</Text>

        <TextInput
          style={styles.input}
          placeholder="Ilość litrów paliwa"
          keyboardType="numeric"
          value={litersOfGas}
          onChangeText={setLitersOfGas}
        />
        <TextInput
          style={styles.input}
          placeholder="Dystans (km)"
          keyboardType="numeric"
          value={distance}
          onChangeText={setDistance}
        />
        <TextInput
          style={styles.input}
          placeholder="Cena paliwa (zł/l)"
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
        />

        <TouchableOpacity style={styles.button} onPress={handleCalculate}>
          <Text style={styles.buttonText}>Oblicz</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={resetFields}>
          <Text style={styles.buttonText}>Resetuj</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFF0', 
  },
  header: {
    backgroundColor: '#006400', 
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold', 
  },
  form: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#006400', 
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
