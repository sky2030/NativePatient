import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { Chip } from "react-native-paper";
export default function SearchScreen() {
  const [doctor_name, setDoctor_name] = useState("");
  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");
  const theme = {
    colors: {
      primary: "#006aff",
    },
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    root: {
      flex: 1,
      width: "100%",
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
    inputStyle: {
      margin: 2,
      width: "100%",
      height: 50,
    },
    button: {
      margin: 5,
      padding: 5,
      marginVertical: 20,
      width: "100%",
      backgroundColor: "#009387",
    },
    chip: {
      margin: 3,
    },
    chipView: {
      //   flex: 1,
      flexWrap: "wrap",
      flexDirection: "row",
      marginVertical: 10,
      justifyContent: "center",
    },
  });
  return (
    <View style={styles.container}>
      <ScrollView>
        <KeyboardAvoidingView behavior="position" style={styles.root}>
          <TextInput
            label="Name"
            style={styles.inputStyle}
            value={doctor_name}
            theme={theme}
            mode="outlined"
            onChangeText={(text) => setDoctor_name(text)}
          />
          <TextInput
            label="Location"
            style={styles.inputStyle}
            value={location}
            theme={theme}
            mode="outlined"
            onChangeText={(text) => setLocation(text)}
          />
          <TextInput
            label="Department"
            style={styles.inputStyle}
            value={department}
            theme={theme}
            mode="outlined"
            onChangeText={(text) => setDepartment(text)}
          />
          <View style={styles.chipView}>
            <Chip
              onPress={() => console.log("Pressed")}
              style={styles.chip}
              selected
            >
              symptoms
            </Chip>
            <Chip
              onPress={() => console.log("Pressed")}
              style={styles.chip}
              selected
            >
              symptoms
            </Chip>
            <Chip
              onPress={() => console.log("Pressed")}
              style={styles.chip}
              selected
            >
              symptoms
            </Chip>
            <Chip
              onPress={() => console.log("Pressed")}
              style={styles.chip}
              selected
            >
              symptoms
            </Chip>
            <Chip
              onPress={() => console.log("Pressed")}
              style={styles.chip}
              selected
            >
              symptoms
            </Chip>
            <Chip
              onPress={() => console.log("Pressed")}
              style={styles.chip}
              selected
            >
              symptoms
            </Chip>
          </View>
          <Button
            style={styles.button}
            mode="contained"
            icon="account-search"
            theme={theme}
            onPress={() => {}}
          >
            search
          </Button>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}
