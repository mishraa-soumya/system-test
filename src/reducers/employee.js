const employeeData = (state = [], action) => {
    switch (action.type) {
        case 'ADD_EMP':
            return Object.assign({}, state, {data: state.data.concat(action.data)});
        case 'EDIT_EMP': {
            const updatedItems = state.data.map((item) => {
                if (item.id === action.id) {
                    return { ...item, ...action.data }
                }
                return item
            })
            let data = { data: updatedItems};
            return Object.assign({}, data)
           
        }    
        case 'DEL_EMP': {
            if (state.hasOwnProperty('data') && state.data.length > 0) {
                const filteredId = state.data.filter((item) => { 
                    return (item.id !== action.id)
                })
               let data = { data: filteredId};
               return Object.assign({}, data)
            }
            return state;
        }
        default:
            return Object.assign({},state, { data: [] });    
    }
}

export default employeeData;