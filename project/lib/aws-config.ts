import { Amplify } from 'aws-amplify';
import { cognitoUserPoolsTokenProvider } from '@aws-amplify/auth/cognito';
import AsyncStorage from '@react-native-async-storage/async-storage';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.EXPO_PUBLIC_COGNITO_USER_POOL_ID as string,
      userPoolClientId: process.env.EXPO_PUBLIC_COGNITO_CLIENT_ID as string,
      signUpVerificationMethod: 'code',
      loginWith: {
        username: true,
        email: true
      }
    }
  }
});

// Configure token signing for API requests
cognitoUserPoolsTokenProvider.setKeyValueStorage(AsyncStorage); 