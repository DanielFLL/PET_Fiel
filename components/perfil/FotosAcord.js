import * as React from "react";
import { useState, useEffect } from "react";
import { List, Card } from "react-native-paper";

const FotosAcord = () => {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => setExpanded(!expanded);

  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:8080/fotos", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro ao buscar fotos");
          }
          return response.json();
        })
        .then((data) => {
          const fotos = data.map((foto) => ({
            id: foto.id,
            url: foto.url,
            descrição: foto.descricao,
          }));
          setFotos(fotos);
        })
        .catch((error) => {
          console.error("Erro ao buscar fotos:", error.message);
        });
    };
    fetchData();
  }, []);

  return (
    <List.Section>
      <List.Accordion
        title="Minhas fotos"
        left={(props) => <List.Icon {...props} icon="image" />}
        titleStyle={{ color: "#2F2F2F", fontSize: 20 }}
        style={{ backgroundColor: "#FEFDF0" }}
        expanded={expanded}
        onPress={handlePress}>
        <Card style={{ marginRight: 20, marginLeft: -20 }}>
          {/* Remover as fotos exemplo */}
          <Card.Cover
            style={{ marginBottom: 10 }}
            source={{
              uri: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
          />
          <Card.Cover
            style={{ marginBottom: 10 }}
            source={{
              uri: "https://images.unsplash.com/photo-1494947665470-20322015e3a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
          />
          <Card.Cover
            style={{ marginBottom: 10 }}
            source={{
              uri: "https://images.unsplash.com/photo-1556866261-8763a7662333?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
          />

          {/* Fotos do BD */}
          {fotos.map((foto) => (
            <div key={foto.id} style={{ marginBottom: 10 }}>
              <img src={foto.url} alt={foto.descricao} />
              <p>{foto.descricao}</p>
            </div>
          ))}
        </Card>
      </List.Accordion>
    </List.Section>
  );
};

export default FotosAcord;
