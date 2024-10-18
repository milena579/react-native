import { Link, router} from "expo-router";
import { useState } from "react";
import { View, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  //const [count, setCount] = useState(0);
  //const onPress = () => setCount(prevCount => prevCount + 1);

  const onPress = () => {
    router.push("/(tabs)")
  }

  console.log(email, pass);
  console.log(typeof email, typeof pass);
  return (
    <>
      <SafeAreaView>
        <Text>Login</Text>
        <Text>E-mail</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          placeholder="Digite seu email"
        />
        <Text>Senha</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPass}
          value={pass}
          placeholder="Ensira sua senha"
          keyboardType="default"
          secureTextEntry={true}
        />
      </SafeAreaView>

      <View>
        {/* <View>
          <Text>Count: {count}</Text>
        </View> */}
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.btnText}>Entrar</Text>
        </TouchableOpacity>
        <View>
            <Link href={"register"}>Cadastrar novo usuário</Link>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: "#505050FF",
    color: "#ffffff",
  },
  button : {
    paddingHorizontal: 5,
    paddingVertical : 5,
    backgroundColor: "#1C7996FF"
  },
  btnText : {
    color: "#ffffff"
  }
});
