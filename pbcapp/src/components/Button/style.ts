import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  height: 60px;
  background: #DA3735;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

export const ButtonText = styled.Text`
  font-family:'RobotoSlab-Medium';
  color: #FFFFFF;
  font-size:18px;
`;
