import React, {useState} from 'react';

export const AuthContext = React.createContext({
  authState: true,
  toggleLogged: () => {},
});

export const AtuhProvider = props => {
  const [authState, setToggleLogged] = useState(true);

  const toggleLogged = () => setToggleLogged(!authState);

  return (
    <AuthContext.Provider value={{authState, toggleLogged}}>
      {props.children}
    </AuthContext.Provider>
  );
};
