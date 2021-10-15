const IsLoged = (isLoged = false, action) => {
    switch(action.type){
        case 'SET_LOGGED':
            return !isLoged;
    }
}

export default IsLoged;