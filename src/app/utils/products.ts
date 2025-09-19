import { CreateProduct } from "./createProduct";
import { Product } from "./types";

export const generateId = ()=>{
    return Math.round((Math.random() * 111) + Math.random() * 66)
}

export const productList: Product[] = [
    {
        id: 1,
        img: "1",
        name: "PC Gaming Master Race",
        desc: "My old PS4 console, i used this baby for 4 years",
        price: 150,
        status: "New",
        date: "21-07-23",
        authorData: [
            {
            username: "Pedro",
            email: "abakua",
            phoneNumber: 52438437,
            }
        ]  
        },
      {
        id: 2,
        img: "2",
        name: "PS5 Standard",
        desc: "My old PS4 console",
        price: 150,
        status: "Renewed",
        date: "23-07-23",
        authorData: [
            {
            username: "Pedro",
            email: "abakua",
            phoneNumber: 52438437,
            }
        ]  
        },
]