import { createContext, useContext, useReducer } from "react";
import { AuthReducer, initialState } from "./reducer";

const AuthStateContext = createContext(null)
const AuthDispatchContext = createContext(null)

export const useAuthState = () => {
  const context = useContext(AuthStateContext)

  if (context === undefined)
    throw new Error("useAuthState must be used inside of AuthProvider.")

  return context
}

export const useAuthDispatch = () => {
  const context = useContext(AuthDispatchContext)

  if (context === undefined)
    throw new Error("useAuthDispatch must be used inside of AuthProvider.")

  return context
}

export const AuthProvider = ({ children }: any) => {
  const [user, dispatch] = useReducer(AuthReducer, initialState)

  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch as any}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}