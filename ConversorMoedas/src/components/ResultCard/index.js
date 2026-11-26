import { View, Text } from 'react-native';
import { styles } from './styles';

export function ResultCard({
  exchangeRate,
  result,
  fromCurrency,
  toCurrency,
  currencies,
}) {
  // Sem resultado ou sem taxa, não mostra nada.
  if (!result || !exchangeRate) return null;

  const toSymbol = currencies.find((c) => c.code === toCurrency)?.symbol;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Resultado:</Text>
      <Text style={styles.amount}>
        {toSymbol} {result}
      </Text>
      <Text style={styles.rate}>
        Taxa de câmbio: 1 {fromCurrency} = {toSymbol} {exchangeRate.toFixed(4)}{' '}
        {toCurrency}
      </Text>
    </View>
  );
}
