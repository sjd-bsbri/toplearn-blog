import React, { createContext, useContext, useState } from 'react';

// Import fake auth instead of Firebase
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    uid: 'user123',
    displayName: 'کاربر',
    email: 'user@example.com',
    isAnonymous: false
  });
  
  const signInAsGuest = async () => {
    console.log('Signed in as guest');
    setCurrentUser({
      uid: 'guest' + Date.now(),
      displayName: 'کاربر مهمان',
      email: null,
      isAnonymous: true
    });
    return Promise.resolve();
  };

  const signInWithGoogle = async () => {
    console.log('Simulating Google sign in');
    setCurrentUser({
      uid: 'user_' + Date.now(),
      displayName: 'کاربر گوگل',
      email: 'user@gmail.com',
      isAnonymous: false
    });
    return Promise.resolve();
  };
  
  const signOut = async () => {
    console.log('User signed out');
    setCurrentUser(null);
    return Promise.resolve();
  };

  const value = {
    currentUser,
    signInWithGoogle,
    signInAsGuest,
    signOut
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 