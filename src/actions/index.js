let EmpId = 1;
export const addEmp = (data) => {
    return {
        type: 'ADD_EMP',
        data: Object.assign({}, data, { id: EmpId++ })
    }
}

export const deleteEmp = (id) => {
    return {
        type: 'DEL_EMP',
        id
    }
}

export const updateEmp = (id, data) => {
    return {
        type: 'EDIT_EMP',
        id,
        data
    }
}