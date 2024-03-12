import * as React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-native-paper";

const LikeBtn = () => {
  const [like, setLike] = useState("heart-outline");
  const [color, setColor] = useState("#2f2f2f");

  function likeChange() {
    if (like === "heart-outline") {
      setLike("heart");
      setColor("red");
    } else {
      setLike("heart-outline");
      setColor("#2f2f2f");
    }
  }

  useEffect(() => {
    const enviarLike = () => {
      fetch("http://localhost:8080/like", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          profile: "profile.id",
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

    const removerLike = () => {
      fetch("http://localhost:8080/like", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          profile: "profile.id",
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro ao remover: " + response.statusText);
          }
          return response.json();
        })
        .then((data) => {
          // Lógica adicional após remover, se necessário
        })
        .catch((error) => {
          console.error("Erro ao remover:", error.message);
        });
    };

    if (like === "heart") {
      enviarLike();
    }

    if (like === "heart-outline") {
      removerLike();
    }
  }, []);

  const aparece = "flex";
  //   if (profile.id === meuId) {
  //     const aparece = "none";
  //   } else {
  //     const aparece = "flex";
  //   }

  return (
    <Button
      icon={like}
      labelStyle={{ color: color, fontSize: 36 }}
      mode="outlined"
      style={{ borderColor: "transparent", display: aparece }}
      onPress={() => likeChange()}></Button>
  );
};

export default LikeBtn;
