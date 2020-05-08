import {add, multiply} from './Calculate';


export const total = (shipping, subTotal) => {
    return '$' + add(shipping, subTotal);
};

export const tax = (salary) => {
    return '$' + multiply( salary, 0.75);
}