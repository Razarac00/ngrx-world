import { Action, createReducer, on } from "@ngrx/store";
import * as ShopPageActions from "../actions/shop-page.action";

export interface State {
    global: number;
    national: number;
    local: number;
}

export const initialState: State = {
    global: 0,
    national: 0,
    local: 0
}

const shopPageReducer = createReducer(
    initialState,
    on(ShopPageActions.globalShop, state => ({ ...state, global: state.global + 1})),
    on(ShopPageActions.nationalShop, state => ({ ...state, national: state.national + 1})),
    on(ShopPageActions.localShop, state => ({ ...state, local: state.local + 1})),
    on(ShopPageActions.resetShop, state => ({ global: 0, national: 0, local: 0})),
    on(ShopPageActions.setShop, (state, { game }) => ({global: game.global, national: game.national, local: game.local }))
);

export function reducer(state: State | undefined, action: Action) {
    return shopPageReducer(state, action);
}

export const shopPageFeatureKey = 'game';