import { ShoppingActionTypes, ShoppingAction } from "../actions/shopping.action";
import { WorldItem } from "../models/world-item.model";

const initialState: Array<WorldItem> = [
    {
        id: "",
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