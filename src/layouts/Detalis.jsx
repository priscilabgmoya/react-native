/* eslint-disable prettier/prettier */

import { Text, Pressable, SafeAreaView,  ScrollView } from "react-native";
import { styles } from "../helpers/styles";
import { routes } from "../helpers/router";
//<Image source={{uri:"https://http.cat/404"}}  style={styles.img}/>
export const List = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tipos de Codigos</Text>
      <ScrollView>
        {routes.map((r, i) => {
          return (
            <SafeAreaView key={i} style={styles.containerCodes}>
              <Text style={styles.titleCodes}>{r.title}</Text>
              <Text style={styles.textCodes}>{r.text}</Text>
              <Pressable
                key={i}
                onPress={() => {
                  navigation.navigate(`${r.url}`);
                }}
                style={styles.btnCore}
              >
                <Text style={styles.text}>{r.label}</Text>
              </Pressable>
            </SafeAreaView>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
