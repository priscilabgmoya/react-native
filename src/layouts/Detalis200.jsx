/* eslint-disable prettier/prettier */
import {  SafeAreaView, ScrollView } from "react-native";
import { styles } from "../helpers/styles";
import Cards from "../components/card";
import { codes } from "../helpers/router";

export const List200 =({ navigation })=>{
    return(
      <SafeAreaView  style={styles.containerCard}>
        <ScrollView>
        {
            codes.code200.map((c, i)=>{
                return <Cards key={i}  url={c.url} title={c.title} text={c.text}  />
            })
        }
        </ScrollView>
      </SafeAreaView>
    ); 
  }