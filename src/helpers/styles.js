/* eslint-disable prettier/prettier */
import { StatusBar } from "react-native";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222222",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    fontFamily:"serif",

  },
  containerCard: {
    flex: 1,
    backgroundColor: "#222222",
    alignItems: "center",
    justifyContent: "center",
    flexDirection:"row",
    width: "100%",
    fontFamily:"serif",
    flexWrap:"wrap",
    paddingTop: StatusBar.currentHeight,
  },
  header:{
    flexDirection:"row",
    alignItems: "center",
  }, 
  title: {
    paddingVertical: 20,
    fontSize:40, 
    color:"#D0342F", 
    fontWeight:"800",
  }, 
  description:{
    textAlign:"justify",
    color:"#fff", 
    marginHorizontal:35,
    fontSize:20, 
  },
  img: {
    resizeMode: "center",
    width: 300,
    height: 200,
  },
  btnCore: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    margin: 5,
    backgroundColor: "#D0342F",
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    color: "#fff",
    textAlign:"center"
  },
  textCard: {
    fontSize: 20,
    color: "#D0342F",
    textAlign:"justify"
  },
  containerCodes: {
    margin:10, 
    width:"95%",
  }, 
  titleCodes:{
    fontSize:30, 
    fontWeight:"600", 
    textDecorationLine:"underline", 
    color: "#fff",
  },  
  textCodes: {
    fontSize: 23,
    color: "#fff",
    textAlign:"justify"
  },
});
