import { FinalOrder } from "./finalOrder.model";

export interface User {
    id: string,
    username: string,
    orders: FinalOrder[]
}