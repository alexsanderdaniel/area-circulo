import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CruzeiroBlue = '#0061A7';
const CruzeiroWhite = '#FFFFFF';

const CircumferenceCalculatorScreen = () => {
  const [radius, setRadius] = useState('');
  const [area, setArea] = useState(0);

  const calculateArea = () => {
    if (radius !== '') {
      const radiusValue = parseFloat(radius);
      const calculatedArea = Math.PI * Math.pow(radiusValue, 2);
      setArea(calculatedArea.toFixed(2));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Área da Circunferência</Text>
      <TextInput
        style={styles.input}
        placeholder="Informe o raio"
        keyboardType="numeric"
        value={radius}
        onChangeText={(text) => setRadius(text)}
      />
      <Button title="Calcular" onPress={calculateArea} />
      <Text style={styles.resultText}>Área: {area}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CruzeiroBlue, // Cor de fundo azul do Cruzeiro
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: CruzeiroWhite, // Cor do texto branca
  },
  input: {
    width: 200,
    height: 40,
    borderColor: CruzeiroWhite, // Cor da borda branca
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: CruzeiroBlue, // Cor do texto azul
  },
  resultText: {
    fontSize: 16,
    marginTop: 20,
    color: CruzeiroWhite, // Cor do texto branca
  },
});

export default CircumferenceCalculatorScreen;
