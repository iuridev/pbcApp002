import React, { useCallback, useRef } from 'react';
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from 'react-native';
import logoimg from '../../assets/logoCompany.png';
import Input from '../../components/Input';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { Conteiner, Title, BackToSignIn, BackToSignInText } from './styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const intupCNPJRef = useRef<TextInput>(null);
  const intupPhoneRef = useRef<TextInput>(null);
  const intupEmailRef = useRef<TextInput>(null);
  const intupPasswordRef = useRef<TextInput>(null);

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
              <Title>Crie sua Conta</Title>
            </View>
            <Form ref={formRef} onSubmit={() => {}}>
              <Input
                autoCapitalize="words"
                name="name"
                icon="user"
                placeholder="Nome da Empresa"
                returnKeyType="next"
                onSubmitEditing={() => {
                  intupCNPJRef.current?.focus();
                }}
              />
              <Input
                ref={intupCNPJRef}
                keyboardType="numeric"
                name="cnpj"
                icon="shield"
                placeholder="CNPJ"
                returnKeyType="next"
                onSubmitEditing={() => {
                  intupPhoneRef.current?.focus();
                }}
              />
              <Input
                ref={intupPhoneRef}
                keyboardType="phone-pad"
                name="phone"
                icon="phone"
                placeholder="telefone com DDD"
                returnKeyType="next"
                onSubmitEditing={() => {
                  intupEmailRef.current?.focus();
                }}
              />
              <Input
                ref={intupEmailRef}
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
                secureTextEntry
                textContentType="newPassword"
                returnKeyType="send"
                name="password"
                icon="lock"
                placeholder="Senha"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />
              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Cadastrar
              </Button>
            </Form>
          </Conteiner>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToSignIn onPress={() => navigation.goBack()}>
        <FeatherIcon name="arrow-left" size={20} color="#DA3735" />
        <BackToSignInText>Voltar para logon</BackToSignInText>
      </BackToSignIn>
    </>
  );
};

export default SignUp;
