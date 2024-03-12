import * as React from "react";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { Checkbox } from "react-native-paper";

const CheBoxStatus = () => {
  const [checked, setChecked] = useState(false);
  const [opcao, setOpcao] = useState("");

  useEffect(() => {
    const enviarDadosParaBD = () => {
      fetch("http://localhost:8080/status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          opcaoMarcada: checked,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro ao enviar: " + response.statusText);
          }
          return response.json();
        })
        .then((data) => {
          // Lógica adicional após o envio, se necessário
        })
        .catch((error) => {
          console.error("Erro ao enviar:", error.message);
        });
    };

    if (checked) {
      enviarDadosParaBD();
    }
  }, [checked]);

  useEffect(() => {
    fetch("http://localhost:8080/status", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        opcaoMarcada: checked,
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
    // Adicionar aqui o Status com Text ou algo similar!!! Requisitar do BD.
    <View>
      <Text variant="headlineMedium">{opcao}</Text>
      <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={() => {
          setChecked(!checked);
        }}
      />
    </View>
  );
};

export default CheBoxStatus;
