import api from "@/common/services/api";
import {
  type AnyAction,
  type ThunkDispatch,
  Action,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";

import reducer from "@/modules/redux/reducers";

export const configureAppStore = () => {
  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });

  return store;
};

const store = configureAppStore();

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"] &
  ThunkDispatch<RootState, void, AnyAction>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
