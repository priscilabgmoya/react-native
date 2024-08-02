/* eslint-disable prettier/prettier */
import { Pressable, Text} from 'react-native';
import { styles } from '../helpers/styles';
import { Card ,} from '@rneui/themed';
import { useState } from 'react';


export default function Cards(props) {
  const [see , setSee] = useState(false)
    const {title, url , text} = props; 
  return (
    // es un div por defecto es flex
    <Card >
    <Card.Title>{title}</Card.Title>
    <Card.Divider />
    <Card.Image
      style={{ padding: 0,  width:"100%" , height:350}}
      source={{
        uri:
         `${url}`,
      }}
    />
    {see?    <Text
      style={styles.textCard}>
        {text}
    </Text> : null }
    <Pressable onPress={()=> setSee(!see)} style={styles.btnCore}>
    <Text
      style={styles.text}>
    {`${see ? "- Información" : "+ Información"}`}
    </Text>
    </Pressable>
  </Card>
  );
}