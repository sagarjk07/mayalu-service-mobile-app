import React from 'react';
import { StyleSheet, Image } from 'react-native';

import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/Forms';


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(6).label('Password')
});

function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/logo-red.png')}
      />
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          icon={'email'}
          name={'email'}
          autoCorrect={false}
          placeholder={'Email'}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType={'emailAddress'}
        />
        <AppFormField
          icon={'lock'}
          secureTextEntry
          name={'password'}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder={'Password'}
          textContentType={'password'}
        />
        <SubmitButton title={'Login'} />
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 50,
    marginBottom: 20,
    alignSelf: 'center',
  }
});

export default LoginScreen;
