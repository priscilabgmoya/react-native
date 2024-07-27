/* eslint-disable prettier/prettier */
import {  SafeAreaView } from "react-native";
import { styles } from "../helpers/styles";
import Cards from "../components/card";
import { code100 } from "../helpers/router";

export const List100 =({ navigation })=>{
    const nav = (path) =>{
        navigation.navigate(path); 
    }
    return(
      <SafeAreaView  style={styles.containerCard}>
        {
            code100.map((c, i)=>{
                return <Cards key={i} nav={nav} url={c.url} title={c.title} text={c.text} path={c.path} />
            })
        }
      </SafeAreaView>
    ); 
  }