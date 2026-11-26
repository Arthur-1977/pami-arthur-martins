const BASE_URL = 'https://api.exchangerate-api.com/v4/latest';

// Busca as cotações em tempo real tendo `fromCurrency` como moeda base.
export async function exchangeRateApi(fromCurrency) {
  const response = await fetch(`${BASE_URL}/${fromCurrency}`);
  if (!response.ok) {
    throw new Error(`Falha ao buscar cotação (status ${response.status})`);
  }
  const data = await response.json();
  return data;
}
