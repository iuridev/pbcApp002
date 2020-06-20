import styled from 'styled-components/native';

export const Conteiner = styled.View`
  flex:1;
  align-items:center;
  justify-content: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size:20px;
  color: #000000;
  font-family:'RobotoSlab-Medium';
  margin:32px 0px 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top:24px;
`;

export const ForgotPasswordText = styled.Text`
font-size:16px;
color: #000000;
font-family:'RobotoSlab-Regular';
`;

export const CreateNewAccountButton =styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #C4C4C4;
  border-top-width: 1px;
  border-color: #DA3735;
  padding: 16px 0;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  `;

export const CreateNewAccountButtonText = styled.Text`
  color: #DA3735;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;
