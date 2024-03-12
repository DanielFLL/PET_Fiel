import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

const FontSizeAdjuster = () => {
  // Estado para controlar o tamanho da fonte
  const [fontSize, setFontSize] = useState(24);

  // Funções
  const increaseFontSize = () =>
    setFontSize((prevFontSize) => prevFontSize + 1);
  const decreaseFontSize = () =>
    setFontSize((prevFontSize) => prevFontSize - 1);

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/*diminuir*/}
      <Button
        // icon="alpha-a-box-outline"
        compact
        mode="contained"
        onPress={decreaseFontSize}
      >
        A-
      </Button>
      {/* Tamanho atual da fonte */}
      <Text style={{ fontSize, paddingHorizontal: 20 }}>{fontSize}</Text>
      {/*aumentar*/}
      <Button
        // icon="alpha-a-box"
        compact
        mode="contained"
        onPress={increaseFontSize}
      >
        A+
      </Button>
    </View>
  );
};

export default FontSizeAdjuster;
