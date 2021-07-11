import { ShoppingActionTypes, ShoppingAction } from "../actions/shopping.action";
import { WorldItem } from "../models/world-item.model";
import { v4 as uuidv4 } from "uuid";

export const initialState: Array<WorldItem> = [
    {
        id: uuidv4(), // v4 is random
        name: 'Moonlight GreatSword',
    }
];

export function ShoppingReducer(state: Array<WorldItem> = initialState, action: ShoppingAction) {
    switch (action.type) {
        case ShoppingActionTypes.ADD_ITEM:
            return [...state, action.payload];
        default:
            return state;
    }
}