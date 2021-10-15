import * as type from '../types';

const initialState={
    userData: {
        id_usr: null,
        nickname: 'User',
        correo: 'User@user.com',
        psw: 'User',
        tipoUsr: 'a',
        nombre: 'User',
        apellidos: 'User Lastname',
        direccion: 'User, user',
        telefono: '000000000',
        fecha_nacimiento: 'DD-MM-YYYY',
        sta: 1
    }
}

export const postReducer = (state=initialState, action)=>{
    switch(action.type){

        case type.User_Data:
            return{
                ...state,
                userData: action.payload,
            }

        default:
            return state;
    }
}