import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';
import { colors } from '../../styles/colors';

export function Input({ label, value, onChangeText }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder="0.00"
        placeholderTextColor={colors.placeholder}
        keyboardType="numeric"
      />
    </View>
  );
}
