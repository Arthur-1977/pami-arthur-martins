import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

export function Button({
  currency,
  onPress,
  variant = 'primary',
  isSelected = false,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        isSelected && (variant === 'primary' ? styles.primary : styles.secondary),
      ]}
    >
      <Text style={styles.buttonText}>{currency.code}</Text>
    </TouchableOpacity>
  );
}
