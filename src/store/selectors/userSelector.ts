import { RootState } from '../reducers/rootReducer';

export const userCredentials = (state: RootState) =>
  state.auth.userCredentials.payload;
