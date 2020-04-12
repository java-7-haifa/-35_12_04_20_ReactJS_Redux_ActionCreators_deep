import * as types from './actionTypes';

export function incCounter(){
    return {
        type: types.INC
    }
}

export function decCounter(){
    return {
        type:types.DEC
    }
}

export function addNumber(num){
    return {
        type:types.ADD_N,
        num
    }
}

export function subNumber(num){
    return {
        type:types.SUB_N,
        num
    }
}