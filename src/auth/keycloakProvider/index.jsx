import React, { createContext, useContext, useEffect, useState } from "react";
import { initKeycloak, keycloak, logout } from "../../auth/keycloakConfig";

const KeycloakContext = createContext({
  initialized: false,
  authenticated: false,
  account: null,
  logout: () => {},
});

export const KeycloakProvider = ({ children }) => {
  const [initialized, setInitialized] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      initKeycloak()
        .then((auth) => {
          setAuthenticated(auth);
          if (keycloak && auth) {
            setAccount({
              name: keycloak?.tokenParsed?.name,
              numberDocument: keycloak?.tokenParsed?.preferred_username,
              email: keycloak?.tokenParsed?.email,
            });
            localStorage.setItem("token", keycloak?.token);
          }
          setInitialized(true);
        })
        .catch((err) => console.error("Failed to initialize Keycloak", err));
    }
  }, []);

  return (
    <KeycloakContext.Provider
      value={{ initialized, authenticated, account, logout }}
    >
      {children}
    </KeycloakContext.Provider>
  );
};

export const useKeycloak = () => useContext(KeycloakContext);
