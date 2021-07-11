import { createAction, props } from "@ngrx/store";

export const globalShop = createAction('[Shop Page] Global');
export const nationalShop = createAction('[Shop Page] National');
export const localShop = createAction('[Shop Page] Local');
export const resetShop = createAction('[Shop Page] Reset Shop');
export const setShop = createAction('[Shop Page] Set Scores', props<{game: Game}>());