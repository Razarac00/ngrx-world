// anytime we want to do something to an object we use an action class
import { Action } from "@ngrx/store";
import { WorldItem } from "../models/world-item.model";

export enum ShoppingActionTypes {
    ADD_ITEM = '[SHOPPING] Add Item'
    /*
    ADD_ITEM_SUCCESS = '[SHOPPING] Add Item Success',
    ADD_ITEM_FAILURE = '[SHOPPING] Add Item Failure',
    */
}

export class AddItemAction implements Action {
    readonly type = ShoppingActionTypes.ADD_ITEM;

    constructor(public payload: WorldItem) { }
}

export type ShoppingAction = AddItemAction