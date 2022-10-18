import * as types from "@redux/types/recruitment";
import { IOption } from "@designs/MultiSelect";

export const setSortTypeSelected = (payload: IOption) => ({
  type: types.SET_SORT_TYPE_SELECTED,
  payload,
});
