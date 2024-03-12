import React, { useState } from 'react';
import { Image, View, Platform } from 'react-native';
import { Button } from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';


export default function ImgPick() {

  const [image, setImage] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button 
            icon="camera" 
            mode="contained"
            buttonColor="#7A00DA"  
            style={{width: 300, marginTop: 20}}
            labelStyle={{fontWeight: '800', fontSize: 18}}
            onPress={pickImage} 
        >
            + Foto
        </Button>
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}
