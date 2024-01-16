import { ADD_CATALOG_LIST} from "../store/categoryListReducer"


export function fetchCategory(){
    return function(dispatch){
        fetch('http://localhost:3333/categories/all')
            .then(res => res.json())
            .then(data => dispatch(ADD_CATALOG_LIST(data)))
    }
}
