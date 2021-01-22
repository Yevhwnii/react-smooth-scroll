import React from 'react';
import {
  FormButton,
  FormContent,
  FormH1,
  FormLabel,
  Container,
  Icon,
  FormInput,
  FormWrap,
  Text,
  Form,
} from './SigninElements';

const SingIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>dolla</Icon>
        </FormWrap>
        <FormContent>
          <Form action='#'>
            <FormH1>Sign in to your accound</FormH1>
            <FormLabel htmlFor='for'>Email</FormLabel>
            <FormInput type='email' required />
            <FormLabel htmlFor='for'>Password</FormLabel>
            <FormInput type='password' required />
            <FormButton type='submit'>Continue</FormButton>
            <Text>Forgot password</Text>
          </Form>
        </FormContent>
      </Container>
    </>
  );
};

export default SingIn;
