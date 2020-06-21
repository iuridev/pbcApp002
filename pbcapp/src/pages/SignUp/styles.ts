import styled from 'styled-components/native';

export const Conteiner = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px 30px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #000000;
  font-family: 'RobotoSlab-Medium';
  margin: 18px 0px 24px;
`;

export const BackToSignIn = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #c4c4c4;
  border-top-width: 1px;
  border-color: #da3735;
  padding: 16px 0;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const BackToSignInText = styled.Text`
  color: #da3735;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;
