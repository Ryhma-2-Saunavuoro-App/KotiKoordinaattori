import React, { useState } from "react";
import CameraComponent from "../components/Camera";
import { TouchableOpacity, Text, View } from "react-native";
import styles from "../components/AppStyles";

const CameraScreen = ({ onPhotoTaken }) => {
  const [isCameraVisible, setIsCameraVisible] = useState(false);

  //Handle the photo capture
  const handleCapture = () => {
    onPhotoTaken(uri);
    setIsCameraVisible(false);
  };

  //Open the camera
  const openCamera = () => {
    setIsCameraVisible(true);
  };

  //Close the camera
  const closeCamera = () => {
    setIsCameraVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lue saamasi QR-koodi</Text>
      {isCameraVisible && (
        <CameraComponent
          isVisible={isCameraVisible}
          onCapture={handleCapture}
          onClose={closeCamera}
        />
      )}
      {!isCameraVisible && (
        <TouchableOpacity style={styles.button} onPress={openCamera}>
          <Text style={styles.buttonText}>Avaa lukija</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CameraScreen;
