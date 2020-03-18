import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';
import Button from '~/components/Button';

export const Container = styled.View`
  background: #fff;
  flex: 1;
`;

export const Background = styled.View`
  height: 80px;
  background: #7d40e7;
`;

export const Content = styled.View`
  margin: -60px 20px 0 20px;
  flex: 1;
`;

export const CameraContent = styled.View`
  width: 100%;
  height: 90%;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
`;

export const Camera = styled(RNCamera).attrs({
  autoFocus: RNCamera.Constants.AutoFocus.on,
  flashMode: RNCamera.Constants.FlashMode.off,
  type: RNCamera.Constants.Type.back,
  captureAudio: false,
})`
  flex: 1;
`;

export const CameraButton = styled.TouchableOpacity`
  position: absolute;
  align-self: center;
  top: 85%;
  background: rgba(0, 0, 0, 0.3);
  padding: 15px;
  border-radius: 35px;
`;

export const ConfirmButton = styled(Button)`
  background: #7d40e7;
  margin: 10px 0;
  flex: 1;
`;
