import * as React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";
import Avatar_Group from "../grupos/Avatar_Group";

const Groups_Fav = () => {
  const [favoritos, setFavoritos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/favoritos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao enviar: " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        const favoritos = data.map((favorito) => ({
          pageId: favorito.pageId.id,
          pageName: favorito.pageName.name,
          photoId: favorito.photoId.id,
          photoUri: favorito.photoUri.uri,
        }));

        setFavoritos(favoritos);
        setError(null);
      })
      .catch((error) => {
        console.error("Erro ao requisitar:", error.message);
        setError("Ocorreu um erro ao carregar os favoritos.");
      });
  }, []);

  return (
    <View style={styles.container}>
      {/* Renderiza a mensagem de erro, se houver */}
      {error && <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>}

      <Text
        style={{ fontWeight: "700", color: "#00D1FF", fontSize: 28 }}
        variant="titleLarge">
        Grupos Curtidos
      </Text>

      {/* Vincular Nome do Grupo e Foto do Grupo com o BD || Mudar o Avatar_Group com a Props */}
      <Card style={{ backgroundColor: "#FEFDF0" }}>
        {favoritos.map((favorito) => (
          <Card.Content
            key={favorito.pageId.id}
            style={{
              alignItems: "center",
              gap: 10,
              borderWidth: 2,
              borderColor: "#64059F",
              borderRadius: 8,
            }}>
            <Text
              style={{ fontWeight: "700", color: "#64059F" }}
              variant="titleLarge">
              {favorito.pageName.name}
            </Text>
            {favorito.photoUri && <Avatar_Group uri={favorito.photoUri.uri} />}
          </Card.Content>
        ))}

        {/* Retirar estes exemplos */}
        <Card.Content
          style={{
            alignItems: "center",
            gap: 10,
            borderWidth: 2,
            borderColor: "#64059F",
            borderRadius: 8,
          }}>
          <Text
            style={{ fontWeight: "700", color: "#64059F" }}
            variant="titleLarge">
            Página Amigo PET
          </Text>
          <Avatar_Group />
        </Card.Content>

        <Card.Content
          style={{
            alignItems: "center",
            gap: 10,
            marginTop: 20,
            borderWidth: 2,
            borderColor: "#64059F",
            borderRadius: 8,
          }}>
          <Text
            style={{ fontWeight: "700", color: "#64059F" }}
            variant="titleLarge">
            Página VET Amigo
          </Text>
          <Avatar_Group />
        </Card.Content>
      </Card>
    </View>
  );
};

export default Groups_Fav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 10,
    gap: 10,
    backgroundColor: "#FEFDF0",
    alignItems: "center",
    justifyContent: "center",
  },
});
