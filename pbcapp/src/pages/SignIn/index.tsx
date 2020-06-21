import React, { useCallback, useRef } from 'react';
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from 'react-native';
import logoimg from '../../assets/logo.png';
import Input from '../../components/Input';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import {
  Conteiner,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateNewAccountButton,
  CreateNewAccountButtonText,
} from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const intupPasswordRef = useRef<TextInput>(null);
  const formRef = useRef<FormHandles>(null);
  const handleSignIn = useCallback((data: object) => {
    console.log(data);
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Conteiner>
            <Image source={logoimg} />
            <View>
              <Title>Faça seu logon</Title>
            </View>
            <Form ref={formRef} onSubmit={handleSignIn}>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email"
                icon="mail"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => {
                  intupPasswordRef.current?.focus();
                }}
              />
              <Input
                ref={intupPasswordRef}
                name="password"
                icon="lock"
                placeholder="Senha"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />
              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Entrar
              </Button>
            </Form>
            <ForgotPassword onPress={() => {}}>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Conteiner>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateNewAccountButton
        onPress={() => {
          navigation.navigate('SignUp');
        }}
      >
        <FeatherIcon name="log-in" size={20} color="#DA3735" />
        <CreateNewAccountButtonText>Criar uma conta</CreateNewAccountButtonText>
      </CreateNewAccountButton>
    </>
  );
};

export default SignIn;
