/* eslint-disable prettier/prettier */
import { Text, View, Image, } from 'react-native';
import { styles } from '../helpers/styles';

const img = require("../../assets/image.png"); 
export default function TitleHeader() {
  return (
    // es un div por defecto es flex
    <View style={styles.header}>
      <Image source={img}  />
      <Text style={styles.title}>HTTP Cats</Text>
    </View>
  );
}
