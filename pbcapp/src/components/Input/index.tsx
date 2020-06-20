import React, {useEffect, useRef, useImperativeHandle, forwardRef, useState, useCallback} from 'react';
import { TextInputProps } from 'react-native';
import {Container, TextInput, Icon} from './style';
import {useField} from '@unform/core';

interface InputProps extends TextInputProps{
  name: string;
  icon: string;
}

interface InputRef{
  value:string;
}

interface RefFocus{
  focus(): void;
}

const Input: React.RefForwardingComponent<RefFocus, InputProps> = ({name, icon, ... rest}, ref) =>{
  const {registerField, defaultValue ='', fieldName, error} = useField(name);
  const inputElementRef = useRef<any>(null);
  const inputRef = useRef<InputRef>({value:defaultValue});

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const hanflesFocus = useCallback(()=>{
    setIsFocused(true);
  },[])

  const hanflesBlur = useCallback(()=>{
    setIsFocused(false);
    setIsFilled(!!inputRef.current.value);
  },[])

  useImperativeHandle(ref, ()=>({
    focus(){
      inputElementRef.current.focus();
    }
  }))

  useEffect(()=>{
    registerField<string>({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref:any, value){
        inputRef.current.value = value;
        inputElementRef.current.setNativeProps({text:value});
      },
      clearValue(){
        inputRef.current.value = '';
        inputElementRef.current.clear();
      }
    });
  }, [fieldName, registerField]);
  return (<Container isfocused = {isFocused}>
    <Icon name={icon} size={20} color={isFocused || isFilled ? "#DA3735" : "#7E7E7E"} />
    <TextInput
    ref={inputElementRef}
    defaultValue={defaultValue}
    onFocus = {hanflesFocus}
    onBlur = {hanflesBlur}
    onChangeText={(value)=>{
      inputRef.current.value=value;
    }}
    {... rest}
    />
  </Container>)
};

export default forwardRef(Input);
