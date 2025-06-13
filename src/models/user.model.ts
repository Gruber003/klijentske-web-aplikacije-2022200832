import { CartModel } from "./cart.model"

export interface UserModel{
    email: string
    password: string
    cart: CartModel[]
}