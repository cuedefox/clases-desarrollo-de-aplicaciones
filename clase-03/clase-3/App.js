import { View, TextInput, Button, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function App() {
  const [borderColor, setBorderColor] = useState('#AA7DCE');
  const onHandleFocus = () => {
    setBorderColor('#424D9E');
  }
  const onHandleBlur = () => {
    setBorderColor('#AA7DCE')
  }
  return (
    <SafeAreaView style={styles.SafeArea}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={[styles.input, {borderColor: borderColor}]} 
          placeholder='add new task' 
          autoCapitalize='none'
          autoCorrect={false}
          cursorColor='#B7BCE1'
          selectionColor='#B7BCE1'
          placeholderTextColor='#9AA1D5'
          onFocus={onHandleFocus}
          onBlur={onHandleBlur}
          />
          <Button title='add' color={'#AA7DCE'} />
        </View>
      </View>
    </SafeAreaView>
  );
}