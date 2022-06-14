import { Order } from "./order.model";

export interface FinalOrder {
    id: string
    obiecte: Order[],
    total: number,
    transport: number
}