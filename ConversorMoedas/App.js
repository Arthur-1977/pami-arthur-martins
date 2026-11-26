import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { styles } from './app.styles';
import { Button } from './src/components/Button';
import { Input } from './src/components/Input';
import { ResultCard } from './src/components/ResultCard';
import { currencies } from './src/constants/currencies';
import { exchangeRateApi } from './src/services/api';
import { convertCurrency } from './src/utils/convert';

export default function App() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('BRL');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(null);

  async function fetchExchangeRate() {
    if (!amount) return;

    setLoading(true);
    try {
      const data = await exchangeRateApi(fromCurrency);
      const rate = data.rates[toCurrency];

      setExchangeRate(rate);
      setResult(convertCurrency(amount, rate));
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possível buscar a cotação. Tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  function swapCurrencies() {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setResult('');
    setExchangeRate(null);
  }

  const convertDisabled = !amount || loading;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <StatusBar style="light" />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>Conversor de Moedas</Text>
            <Text style={styles.subtitle}>
              Converta valores entre diferentes moedas
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>De:</Text>
            <View style={styles.currencyGrid}>
              {currencies.map((currency) => (
                <Button
                  key={currency.code}
                  currency={currency}
                  variant="primary"
                  isSelected={fromCurrency === currency.code}
                  onPress={() => setFromCurrency(currency.code)}
                />
              ))}
            </View>

            <Input
              label="Valor:"
              value={amount}
              onChangeText={(text) => setAmount(text.replace(/[^0-9.,]/g, ''))}
            />

            <TouchableOpacity style={styles.swapButton} onPress={swapCurrencies}>
              <Text style={styles.swapButtonText}>↑↓</Text>
            </TouchableOpacity>

            <Text style={styles.label}>Para:</Text>
            <View style={styles.currencyGrid}>
              {currencies.map((currency) => (
                <Button
                  key={currency.code}
                  currency={currency}
                  variant="secondary"
                  isSelected={toCurrency === currency.code}
                  onPress={() => setToCurrency(currency.code)}
                />
              ))}
            </View>

            <TouchableOpacity
              style={[
                styles.convertButton,
                convertDisabled && styles.convertButtonDisabled,
              ]}
              onPress={fetchExchangeRate}
              disabled={convertDisabled}
            >
              {loading ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text style={styles.convertButtonText}>Converter</Text>
              )}
            </TouchableOpacity>
          </View>

          <ResultCard
            exchangeRate={exchangeRate}
            result={result}
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
            currencies={currencies}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
