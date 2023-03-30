import { createContext } from 'react'

export const ClientContext = createContext()

export const ClientsContextProvider = ({children}) => {

    return (
        <ClientContext.Provider value={{clients: []}}>
          { children }
        </ClientContext.Provider>
    )
}