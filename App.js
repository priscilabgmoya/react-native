import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable} from 'react-native';

const img = require("./assets/409.jpg")
export default function App() {
  return (
    // es un div por defecto es flex
    <View style={styles.container}>
      <Text>Imagen local</Text>
      <Image source={img}  style={styles.img}/>
      <Text>Imagen en línea</Text>
      <Image source={{uri:"https://http.cat/404"}}  style={styles.img}/>
      <Text>Open up App.js to start working on your app! esto es una prueba</Text>
      <Text>siempre tenemos la etiqueta texto</Text>
      <Text>Boton Nativo</Text>
      <Button title='Pulsa Aquí' onPress={()=>{alert("Holu")}}/>
      <Text>Boton Core</Text>
      <Pressable  onPress={()=>{alert("Holu x2")}} style={styles.btnCore}>
      <Text style={styles.text}>Pulsa Aquí</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:"100%",

  },
  img:{
    resizeMode:"center",
    width:300,
    height:200
  },
  btnCore: {
    paddingHorizontal:30,
    paddingVertical:5,
    margin:5,
    backgroundColor:"red",
    borderRadius:20,
  },
  text:{
    fontSize:15,
    color:"#fff"
  }
});
