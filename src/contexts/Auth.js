import React, { createContext, useState, useEffect, useContext } from 'react';
// import AsyncStorage from "@react-native-async-storage/async-storage";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setuserInfo] = useState(null);
  return (
    <AuthContext.Provider
      value={[userInfo,setuserInfo]}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}