import { createContext, useReducer } from "react"

export const Context = createContext()

const ContextProvider = ({children}) => {

    const reducer = (state, action) => {

        switch(action.type) {


        }
    }


    const [state, dispatch] = useReducer(reducer,{
        products:[],
        cart:[],

    })
  return (
    <Context.Provider value={{state, dispatch}}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider