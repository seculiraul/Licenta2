import { Order } from "./order.model";

export interface FinalOrder {
    obiecte: Order[],
    total: number,
    transport: number
}