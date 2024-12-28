

import { createContext } from "react";


//create context
export const AuthContext = createContext(null);

//create provider
export default function AuthProvider({children}){

    return <AuthContext.Provider value ={{}} >{children}</AuthContext.Provider>
}