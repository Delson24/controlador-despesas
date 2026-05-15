import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  return (
    <SafeAreaView style={styles.safe}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Bom dia,</Text>
        <Text style={styles.name}>Delson</Text>
      </View>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe:  {
    flex: 1,
    backgroundColor: '#1D9E75',
  },
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  header: {
    backgroundColor: '#1D9E75',
    padding: 20,
  },
  greeting: {
    color: '#9FE1CB',
    fontSize: 13,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
})