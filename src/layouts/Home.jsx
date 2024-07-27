/* eslint-disable prettier/prettier */
import { Pressable, SafeAreaView, Text } from "react-native";
import TitleHeader from "../components/title";
import Description from "../components/description";
import { styles } from "../helpers/styles";

export const Home =({ navigation })=>{
    return(
      <SafeAreaView  style={styles.container}>
      <TitleHeader/>
      <Description />
      <Pressable onPress={()=>{navigation.navigate("List")}} style={styles.btnCore}>
      <Text style={styles.text}>Ver Codigo HTTPS</Text>
      </Pressable>
      </SafeAreaView>
    ); 
  }