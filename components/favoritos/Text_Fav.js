import * as React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Dimensions } from "react-native";
import { Text } from "react-native-paper";

const screenWidth = Dimensions.get("window").width;

const Text_Fav = () => {
  const [textos, setTextos] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/favoritos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        favoritos: "textos",
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao enviar: " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        const textos = data.map((texto) => ({
          id: texto.id,
          content: texto.content,
        }));
        setTextos(textos);
      })
      .catch((error) => {
        console.error("Erro ao enviar:", error.message);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text
        style={{ fontWeight: "700", color: "#00D1FF", fontSize: 28 }}
        variant="titleLarge">
        Textos Curtidos
      </Text>

      {/* Integrar com BD */}
      {/* <Text
        style={{
          padding: 10,
          textAlign: "justify",
          borderWidth: 2,
          borderColor: "#64059F",
          borderRadius: 8,
        }}
        variant="bodyLarge">
        {textos.map((texto) => (
          <div key={texto.id}>
            <p>{texto.content}</p>
          </div>
        ))}
      </Text> */}

      {/* Remover textos exemplos */}
      <Text
        style={{
          padding: 10,
          textAlign: "justify",
          borderWidth: 2,
          borderColor: "#64059F",
          borderRadius: 8,
        }}
        variant="bodyLarge">
        Os cachorros são companheiros leais, repletos de alegria e afeto. Suas
        expressões expressam amor puro. Amigos peludos, proporcionam carinho
        incondicional, trazendo luz aos dias de seus donos.
      </Text>
      <Text
        style={{
          padding: 10,
          textAlign: "justify",
          borderWidth: 2,
          borderColor: "#64059F",
          borderRadius: 8,
        }}
        variant="bodyLarge">
        Os cachorros são companheiros leais, repletos de alegria e afeto. Suas
        expressões expressam amor puro. Amigos peludos, proporcionam carinho
        incondicional, trazendo luz aos dias de seus donos.
      </Text>
    </View>
  );
};

export default Text_Fav;

const styles = StyleSheet.create({
  container: {
    maxWidth: screenWidth,
    flex: 1,
    flexDirection: "column",
    gap: 10,
    marginVertical: 20,
    backgroundColor: "#FEFDF0",
    alignItems: "center",
    justifyContent: "center",
  },
});
