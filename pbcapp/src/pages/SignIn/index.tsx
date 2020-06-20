import React from 'react';
import {Image,View, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import logoimg from '../../assets/logo.png';
import Input from '../../components/Input';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';

import {
  Conteiner,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateNewAccountButton,
  CreateNewAccountButtonText } from './styles';

const SignIn:React.FC = ()=> {
  return (
    <>
      <KeyboardAvoidingView
      style ={ {flex:1} }
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled>
        <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{flex:1}}>
          <Conteiner>
            <Image source={logoimg} />
            <View>
              <Title>Faça seu logon</Title>
            </View>
            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />
            <Button onPress={()=>{}} >Entrar</Button>
            <ForgotPassword onPress={()=>{}} >
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Conteiner>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateNewAccountButton onPress={()=>{}}>
        <FeatherIcon name="log-in" size={20} color="#DA3735" />
        <CreateNewAccountButtonText>Criar uma conta</CreateNewAccountButtonText>
      </CreateNewAccountButton>
    </>
  )
}

export default SignIn;
