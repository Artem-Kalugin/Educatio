import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';

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

// persistor.purge();
