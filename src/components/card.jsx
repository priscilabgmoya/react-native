/* eslint-disable prettier/prettier */
import { Pressable, Text, } from 'react-native';
import { styles } from '../helpers/styles';
import { Card } from '@rneui/themed';
import { Icon } from '@rneui/base';

export default function Cards(props) {
    const {title, url , path, text, nav} = props; 
  return (
    // es un div por defecto es flex
    <Card>
    <Card.Title>{title}</Card.Title>
    <Card.Divider />
    <Card.Image
      style={{ padding: 0, height:50, width:50 }}
      source={{
        uri:
         `${url}`,
      }}
    />
    <Text style={{ marginBottom: 10 }}>
        {text}
    </Text>
    <Pressable onPress={()=> nav(path)}>
    <Text
      icon={
        <Icon
          name="code"
          color="#ffffff"
          iconStyle={{ marginRight: 10 }}
        />
      }
      
      buttonStyle={{
        borderRadius: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
      }}
      title="+ Información"
    />
    </Pressable>
  </Card>
  );
}