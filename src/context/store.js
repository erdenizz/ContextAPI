import { createContext} from 'react'

export const initialState ={
    user: {},
    catFacts: [],
    filteredCats:[]
}

export default Context = createContext(initialState)