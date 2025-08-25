import React from 'react';
import { AuthContext, useAuthState } from '../../hooks/useAuth';

const AuthProvider = ({ children }) => {
  const authState = useAuthState();

  return (
    <AuthContext.Provider value={authState}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;