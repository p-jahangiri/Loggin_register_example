import React, { createContext } from "react";

export const Context = createContext({
      setUserContext: () => {},
      userContext: {},
});

export default function ContextProvider({ children }) {
      const [state, setState] = React.useState();
      return (
            <Context.Provider
                  value={{
                        setUserContext: (data) => setState(data),
                        userContext: state,
                  }}
            >
                  {children}
            </Context.Provider>
      );
}
