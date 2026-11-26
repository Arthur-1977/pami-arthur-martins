// Multiplica o valor digitado pela taxa e devolve com 2 casas decimais.
export function convertCurrency(amount, rate) {
  const value = parseFloat(String(amount).replace(',', '.'));
  if (Number.isNaN(value)) return '0.00';
  return (value * rate).toFixed(2);
}
