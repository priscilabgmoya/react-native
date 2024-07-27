/* eslint-disable prettier/prettier */
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
    flexDirection:"column",
    width: "100%",
    fontFamily:"serif",
    flexWrap:"wrap"
  },
  header:{
    flexDirection:"row",
    alignItems: "center",
  }, 
  title: {
    paddingVertical: 20,
    fontSize:30, 
    color:"#D0342F", 
    fontWeight:"800",
  }, 
  description:{
    textAlign:"justify",
    color:"#fff", 
    marginHorizontal:35
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
    fontSize: 15,
    color: "#fff",
  },
});
