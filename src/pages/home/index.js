import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Switch,
  TextInput,
} from "react-native";
import { useState } from "react";
import { ModalPassword } from "../../components/modal";

let charset =
  "abcdefghiofghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";

export function Home() {
  const [size, setSize] = useState(6);
  const [passwordValue, setPasswordValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [showStrength, setShowStrength] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function generatePassword() {
    let password = "";
    for (let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }

    setPasswordValue(password);
    setModalVisible(true);
  }

  function toggleStrength() {
    setShowStrength(!showStrength);
  }

  function handleInputChange(value) {
    setInputValue(value);
    setSize(value);
  }

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      {/* <Text style={styles.title}>Gerador de senha</Text> */}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite o número de caracteres"
          keyboardType="numeric"
          value={inputValue}
          onChangeText={handleInputChange}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword
          password={passwordValue}
          handleClose={() => setModalVisible(false)}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    marginBottom: 60,
    width: 200,
    height: 200,
  },

  inputContainer: {
    marginBottom: 14,
  },

  input: {
    height: 50,
    width: 210,
    backgroundColor: "#474747",
    borderRadius: 8,
    padding: 8,
    color: "#34a02a",
    borderWidth: 1,
    borderColor: "#34a02a",
    marginTop: 20,
  },

  button: {
    backgroundColor: "#34a02a",
    width: 210,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 18,
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
});
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   Modal,
// } from "react-native";
// import Slider from "@react-native-community/slider";
// import { useState } from "react";
// import { ModalPassword } from "../../components/modal";

// let charset =
//   "abcdefghiofghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";

// export function Home() {
//   const [size, setSize] = useState(6);
//   const [passwordValue, setPasswordValue] = useState("");
//   const [modalVisible, setModalVisible] = useState(false);

//   function generatePassword() {
//     let password = "";
//     for (let i = 0, n = charset.length; i < size; i++) {
//       password += charset.charAt(Math.floor(Math.random() * n));
//     }

//     setPasswordValue(password);
//     setModalVisible(true);
//   }

//   return (
//     <View style={styles.container}>
//       <Image source={require("../../assets/logo.png")} style={styles.logo} />
//       <Text style={styles.title}>{size} caracteres</Text>

//       <View style={styles.area}>
//         <Slider
//           style={{ height: 50 }}
//           minimumValue={6}
//           maximumValue={20}
//           maximumTrackTintColor="#f3b6ff"
//           minimumTrackTintColor="#250ff3"
//           thumbTintColor="#250ff3"
//           value={size}
//           onValueChange={(value) => setSize(value.toFixed(0))}
//         />
//       </View>

//       <TouchableOpacity style={styles.button} onPress={generatePassword}>
//         <Text style={styles.buttonText}>Gerar senha</Text>
//       </TouchableOpacity>

//       <Modal visible={modalVisible} animationType="fade" transparent={true}>
//         <ModalPassword
//           password={passwordValue}
//           handleClose={() => setModalVisible(false)}
//         />
//       </Modal>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#202020",
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   logo: {
//     marginBottom: 60,
//   },

//   area: {
//     marginTop: 14,
//     marginBottom: 14,
//     width: "80%",
//     backgroundColor: "#474747",
//     borderRadius: 8,
//     padding: 8,
//   },
//   button: {
//     backgroundColor: "#250ff3",
//     width: "80%",
//     height: 50,
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 8,
//     marginBottom: 18,
//   },

//   buttonText: {
//     color: "#fff",
//     fontSize: 20,
//   },

//   title: {
//     fontSize: 30,
//     fontWeight: "bold",
//     color: "#fff",
//   },
// });
