import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto1}>Isabella Bertolo dos Santos, Número do Notebook:08, Armário:01</Text>
      <Text style={styles.texto2}>Isabella Bertolo dos Santos, Número do Notebook:08, Armário:01</Text>
      <Text style={styles.inicio}>Me chamo Isabella Bertolo dos Santos </Text>
      <Text style={styles.desenvolvimento}>Sou uma menina muito estudiosa e sonhadora</Text>
      <Text style={styles.conclusão}>Amo música, gosto de fazer alguma atividade física e sou apaixonada por animais, adoro fazer novos amigos e tenho 3 cachorrinhas.  Acredito que a vida é repleta de coisas boas e vale a pena viver com Deus sendo o guia.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: '1',
    backgroundColor: '#fff',
    alignItems: 'top',
    justifyContent: 'left',
  },

  texto1: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  texto2: {
    backgroundColor: 'lightblue',
    borderWidth: 1,
    borderColor: 'blue',
    padding: 5,
    marginTop: 10,
  },

  inicio: {
    borderWidth: 2,
    fontSize: 30,
  },

  desenvolvimento: {
    marginTop: 10,
  },

  conclusão: {
    marginTop: 10,
  }
});
