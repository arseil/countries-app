import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoriteReducer } from "./favorites/favorites.slice";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";

import {storage} from "./storage";
import { useDispatch } from "react-redux";

const reducers = combineReducers({
	favorites: favoriteReducer,
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof reducers>
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()


const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
