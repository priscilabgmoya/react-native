/* eslint-disable prettier/prettier */

import { Text,   Pressable, SafeAreaView} from 'react-native';
import { styles } from '../helpers/styles';
import { routes } from '../helpers/router';
//<Image source={{uri:"https://http.cat/404"}}  style={styles.img}/>
export const List = ({ navigation })=>{
    return(
      <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tipos de Codigos</Text>
      {
        routes.map((r,i)=>{
            return <Pressable  key={i} onPress={()=>{navigation.navigate(`${r.url}`)}} style={styles.btnCore}>
      <Text style={styles.text}>{r.text}</Text>
      </Pressable>
        })
      }
      </SafeAreaView>
    );
}