import { Link } from "expo-router";
import { View, Text } from "react-native";


export default function Register(){
    return(
        <>
            <Link href={"/"}>👈🏼Voltar</Link>
            <View>
                <Text>Cadastro de usuário</Text>
            </View>
        </>
    )
}