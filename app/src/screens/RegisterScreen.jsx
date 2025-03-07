import React, { useState } from "react";
import {
    View,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform
} from "react-native";
import { Text, TextInput, Button, Checkbox } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { FontAwesome } from "@expo/vector-icons";

export default function RegisterScreen({ navigation }) {
    const [form, setForm] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        cpf: "",
        birthDate: "",
        comorbidity: "",
        address: { street: "", number: "", neighborhood: "" },
        termsAccepted: false,
    });

    const handleRegister = async () => {
        if (!form.termsAccepted) {
            Alert.alert("Erro", "Você precisa aceitar os termos e condições.");
            return;
        }

        const requestData = {
            email: form.email, //tem que botar email = eve.holt@reqres.in e password = pistol
            password: form.password
        };

        try {
            const response = await fetch("https://reqres.in/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(requestData),
            });

            const data = await response.json();
            if (response.ok) {
                console.log("Resposta da API:", data);
                navigation.navigate("Home")
            } 
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <Image source={require("../../../assets/logo.png")} style={styles.logo} />

                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.loginText}>
                        <Text style={styles.loginLabel}>Já possui uma conta? </Text>
                        <Text style={styles.loginLink}>Entrar</Text>
                    </Text>
                </TouchableOpacity>

                <Text style={styles.title}>Crie uma conta</Text>

                <TextInput
                    label="E-mail"
                    mode="outlined"
                    placeholder="Digite seu e-mail"
                    value={form.email}
                    onChangeText={(text) => setForm({ ...form, email: text })}
                    style={styles.input}
                    theme={{ colors: { background: "white", text: "black" } }}
                />
                <TextInput
                    label="Senha"
                    mode="outlined"
                    placeholder="Digite sua senha"
                    secureTextEntry
                    value={form.password}
                    onChangeText={(text) => setForm({ ...form, password: text })}
                    style={styles.input}
                    theme={{ colors: { background: "white", text: "black" } }}
                />
                <TextInput
                    label="Confirmar senha"
                    mode="outlined"
                    placeholder="Digite sua senha novamente"
                    secureTextEntry
                    value={form.confirmPassword}
                    onChangeText={(text) => setForm({ ...form, confirmPassword: text })}
                    style={styles.input}
                    theme={{ colors: { background: "white", text: "black" } }}
                />
                <TextInput
                    label="CPF"
                    mode="outlined"
                    placeholder="Digite seu CPF"
                    keyboardType="numeric"
                    value={form.cpf}
                    onChangeText={(text) => setForm({ ...form, cpf: text })}
                    style={styles.input}
                    theme={{ colors: { background: "white", text: "black" } }}
                />
                <TextInput
                    label="Data de nascimento"
                    mode="outlined"
                    placeholder="dd/mm/aaaa"
                    value={form.birthDate}
                    onChangeText={(text) => setForm({ ...form, birthDate: text })}
                    style={styles.input}
                    theme={{ colors: { background: "white", text: "black" } }}
                />

                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={form.comorbidity}
                        onValueChange={(value) => setForm({ ...form, comorbidity: value })}
                    >
                        <Picker.Item label="Selecione suas comorbidades" value="" />
                        <Picker.Item label="Diabetes" value="diabetes" />
                        <Picker.Item label="Hipertensão" value="hipertensao" />
                        <Picker.Item label="Doença cardíaca" value="cardiaca" />
                    </Picker>
                </View>

                <Text style={styles.sectionTitle}>Endereço</Text>
                <TextInput
                    label="Rua"
                    mode="outlined"
                    placeholder="Digite aqui..."
                    value={form.address.street}
                    onChangeText={(text) =>
                        setForm({ ...form, address: { ...form.address, street: text } })
                    }
                    style={styles.input}
                    theme={{ colors: { background: "white", text: "black" } }}
                />
                <TextInput
                    label="Número"
                    mode="outlined"
                    placeholder="Digite aqui..."
                    keyboardType="numeric"
                    value={form.address.number}
                    onChangeText={(text) =>
                        setForm({ ...form, address: { ...form.address, number: text } })
                    }
                    style={styles.input}
                    theme={{ colors: { background: "white", text: "black" } }}
                />
                <TextInput
                    label="Bairro"
                    mode="outlined"
                    placeholder="Digite aqui..."
                    value={form.address.neighborhood}
                    onChangeText={(text) =>
                        setForm({ ...form, address: { ...form.address, neighborhood: text } })
                    }
                    style={styles.input}
                    theme={{ colors: { background: "white", text: "black" } }}
                />

                <Text style={styles.orText}>Ou cadastre-se com</Text>
                <View style={styles.socialButtons}>
                    <FontAwesome name="google" size={30} color="#DB4437" />
                    <FontAwesome name="facebook" size={30} color="#4267B2" />
                </View>

                <View style={styles.checkboxContainer}>
                    <Checkbox
                        status={form.termsAccepted ? "checked" : "unchecked"}
                        onPress={() =>
                            setForm({ ...form, termsAccepted: !form.termsAccepted })
                        }
                    />
                    <Text>Eu li e concordo com os termos e condições</Text>
                </View>

                <Button
                    mode="contained"
                    style={styles.button}
                    disabled={!form.termsAccepted}
                    onPress={handleRegister}
                >
                    Cadastrar
                </Button>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#FFF",
    },
    logo: {
        width: 150,
        height: 150,
        alignSelf: "center",
        marginBottom: 10,
        resizeMode: "contain",
    },
    loginText: {
        textAlign: "center",
        marginBottom: 20,
    },
    loginLabel: {
        color: "#000", 
    },
    loginLink: {
        color: "#007AFF",
        fontWeight: "bold",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: "#000",
    },
    input: {
        marginBottom: 12,
        backgroundColor: "white",
        color: "black"
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: "#CCC",
        borderRadius: 5,
        marginBottom: 12,
        padding: 4,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 10,
        color: "#000",
    },
    orText: {
        textAlign: "center",
        marginVertical: 12,
        color: "#000",
    },
    socialButtons: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 20,
        marginBottom: 16,
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },
    button: {
        backgroundColor: "#007AFF",
        paddingVertical: 6,
    },
});