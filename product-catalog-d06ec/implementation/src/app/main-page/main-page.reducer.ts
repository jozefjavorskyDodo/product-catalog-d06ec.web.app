
import { createReducer, on } from "@ngrx/store";

import {
    render_state_all_products, render_state_category_1,
    render_state_category_2, render_state_category_2_1,
    render_state_category_2_2, render_state_category_2_2_1,
    render_state_category_3, render_state_category_4
} from "./main-page.actions";

export const initialState = '';

export const categoryReducer = createReducer(
    initialState,
    on(render_state_all_products, (towards) => towards = initialState),
    on(render_state_category_1, (towards) => towards = "1638da6d-4507-4a66-8bc7-67f1249407c6"),
    on(render_state_category_2, (towards) => towards = "eb520870-c61a-4e32-b7a9-2f8c42b1e6b9"),
    on(render_state_category_2_1, (towards) => towards = "ad104b15-daad-41e3-961b-67caf5f4af58"),
    on(render_state_category_2_2, (towards) => towards = "c093645d-cbdd-4bb4-9440-56456e9e6aa3"),
    on(render_state_category_2_2_1, (towards) => towards = "9649ba96-4e24-438c-8a40-a6cda0f4deb7"),
    on(render_state_category_3, (towards) => towards = "0a5607eb-50f4-42f4-8b59-541dd5d8f5af"),
    on(render_state_category_4, (towards) => towards = "221f4f47-ee72-4d46-b4ef-0f05b604b10e")
);
