import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Background,
  Content,
  CameraContent,
  Camera,
  CameraButton,
  ConfirmButton,
} from './styles';

import api from '~/services/api';

export default function DeliveryConfirm({ route }) {
  const navigation = useNavigation();
  const { deliveryId } = route.params;
  const [imageUri, setImageUri] = useState('');
  const cameraRef = useRef(null);
  const auth = useSelector(state => state.auth);

  async function handleSubmit(data) {
    console.tron.log(data);
    try {
      const dataFile = new FormData();

      dataFile.append('file', {
        type: 'image/jpg',
        uri: imageUri,
        name: 'signature.jpg',
      });

      const responseFile = await api.post('/files', dataFile);

      await api.delete(`/deliveries/withdraw/${deliveryId}`, {
        data: {
          deliveryman_id: auth.id,
          signature_id: responseFile.data.id,
        },
      });

      navigation.navigate('Entregas');
    } catch (err) {
      console.tron.log(err);
    }
  }

  async function handleTakePicture() {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      setImageUri(data.uri);
    }
  }

  return (
    <Container>
      <Background />
      <Content>
        <CameraContent>
          <Camera ref={cameraRef} />
          <CameraButton onPress={handleTakePicture}>
            <Icon name="camera-alt" size={28} color="#fff" />
          </CameraButton>
        </CameraContent>
        <ConfirmButton onPress={handleSubmit}>Enviar</ConfirmButton>
      </Content>
    </Container>
  );
}
