import { createAction } from "../../utils/reducer/reducer.utls";
import { CATEGORIES_ACTION_TYPE } from "./category.type";

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoriesArray);
