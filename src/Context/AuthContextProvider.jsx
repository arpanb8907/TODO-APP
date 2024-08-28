import React, { useState } from 'react';
import AuthContext from './AuthContext';


export default function AuthContextProvider({children}) {

  const [auth,setauth] = useState(null)
  return (
    <AuthContext.Provider value={{auth,setauth}}>
      {children}
    </AuthContext.Provider>
  )
}
