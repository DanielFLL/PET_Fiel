import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext(undefined);

const AuthProvider = ({ children }) => {
  const hardcodedEmail = process.env.REACT_APP_HARDCODED_EMAIL || "seu_email";
  const hardcodedPassword =
    process.env.REACT_APP_HARDCODED_PASSWORD || "sua_senha";
  const [token, setToken] = useState(localStorage.getItem("token"));

  const login = (emailAndPassword) => {
    if (typeof emailAndPassword === "string") {
      // Tratamento para login com token
      setToken(emailAndPassword);
      localStorage.setItem("token", emailAndPassword);
    } else {
      // Tratamento para login com credenciais de usuário e senha
      const { email, password } = emailAndPassword;
      if (email === hardcodedEmail && password === hardcodedPassword) {
        const fakeToken = "seu_token_gerado_localmente";
        setToken(fakeToken);
        localStorage.setItem("token", fakeToken);
      } else {
        console.log("Credenciais inválidas");
        toast.error("Credenciais inválidas. Verifique seu e-mail e senha.");
      }
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const authContextValue = {
    token,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
