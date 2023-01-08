import { createStore, combineReducers } from 'redux';

import { contactsReducer } from './contacts/contacts-reducers';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { filterReducer } from './filter/filter-reducers';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const enhancer = devToolsEnhancer();

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistedReducer = persistReducer(contactsPersistConfig, rootReducer);

export const store = createStore(persistedReducer, enhancer);

export const persistor = persistStore(store);
