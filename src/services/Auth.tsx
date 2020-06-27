import React from 'react';

import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = React.createContext({
  signIn: async (userName: string, password: string) => {
    userName;
    password;
  },
  signOut: () => {},
  isLoading: true,
  isSignout: true,
  userToken: '' || null,
});

const AtuhProvider = ({children}: any) => {
  const [state, dispatch] = React.useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: true,
      userToken: null,
    },
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken: string | null;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.

      setTimeout(() => {
        dispatch({type: 'RESTORE_TOKEN', token: userToken});
      }, 3000);
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (userName?: string, password?: string) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        try {
          const userToken =
            userName && password ? `${userName}:${password}` : '';

          await AsyncStorage.setItem('userToken', userToken);

          dispatch({type: 'SIGN_IN', token: userToken});
        } catch (e) {
          // Some error ocurred to save token
        }
      },
      signOut: async () => {
        await AsyncStorage.removeItem('userToken');

        dispatch({type: 'SIGN_OUT'});
      },
      isLoading: state.isLoading,
      isSignout: state.isSignout,
      userToken: state.userToken,
    }),
    [state],
  );

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export default AtuhProvider;
