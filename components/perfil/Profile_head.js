import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import AvatarImg2 from "../avatar_img2";
import { Dimensions } from "react-native";
import LikeBtn from "./LikeBtn";

const screenWidth = Dimensions.get("window").width;

const Profile_head = () => (
  <Card style={{ backgroundColor: "#FEFDF0", maxWidth: screenWidth }}>
    <Card.Cover
      source={{ uri: "https://i.ibb.co/30bLFsJ/avatarbkg.png" }}
      style={{ marginTop: 20 }}
    />
    <Card.Content style={{ flexDirection: "row-reverse", gap: 0 }}>
      <AvatarImg2 />
      <Text
        style={{
          marginRight: 80,
          marginTop: -40,
          color: "#fff",
          fontSize: 30,
          fontWeight: "700",
        }}
        variant="titleLarge">
        Pug Canis
      </Text>
    </Card.Content>
    <LikeBtn />
  </Card>
);

export default Profile_head;
