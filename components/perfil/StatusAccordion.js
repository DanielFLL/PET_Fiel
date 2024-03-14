import * as React from "react";
import { useEffect, useState } from "react";
import { List, Text } from "react-native-paper";
import CheBoxStatus from "./CheckBoxStatus";
import { View } from "react-native";

const StatusAccordion = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  const [opcao, setOpcao] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/status", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        opcaoMarcada: "checked",
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao enviar: " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setOpcao(data);
      })
      .catch((error) => {
        console.error("Erro ao enviar:", error.message);
      });
  }, []);

  return (
    <List.Section>
      {/* Text com a opção do BD */}
      <Text style={{ marginTop: 10, marginLeft: 15 }} variant="titleLarge">
        Status: {opcao}
      </Text>
      <List.Accordion
        title="Status"
        titleStyle={{ color: "#2F2F2F", fontSize: 20 }}
        style={{ backgroundColor: "#FEFDF0" }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: -10 }}>
          <CheBoxStatus />
          <List.Item title="Pais de PET" />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: -10 }}>
          <CheBoxStatus />
          <List.Item title="Adotando PET" />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: -10 }}>
          <CheBoxStatus />
          <List.Item title="Doando PET" />
        </View>
      </List.Accordion>
    </List.Section>
  );
};

export default StatusAccordion;
