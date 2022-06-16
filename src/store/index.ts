import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { AnyAction, configureStore } from '@reduxjs/toolkit';
import { ThunkDispatch } from 'redux-thunk';

import reducer from './reducers';

const persistConfig = {
  key: 'educatio',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(thunkMiddleware)
      .concat(
        createLogger({
          collapsed: true,
          predicate: () => __DEV__,
        }),
      ),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type TDispatch = ThunkDispatch<RootState, void, AnyAction>;

// persistor.purge();
