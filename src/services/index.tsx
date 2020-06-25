import React, {useState} from 'react';

export const AuthContext = React.createContext({
  isLoggedOut: true,
  toggleLogged: () => {},
});

export const AtuhProvider = props => {
  const [isLoggedOut, setIsLoggedOut] = useState(true);

  const toggleLogged = () => setIsLoggedOut(!isLoggedOut);

  return (
    <AuthContext.Provider value={{isLoggedOut, toggleLogged}}>
      {props.children}
    </AuthContext.Provider>
  );
};
