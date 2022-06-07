import { Produs } from "./produs.model";

export interface Order {
    product: Produs,
    quantity: number
};