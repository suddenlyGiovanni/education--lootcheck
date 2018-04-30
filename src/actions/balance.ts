import { createAction } from 'typesafe-actions';
import { SET_BALANCE } from './constants';

export const setBalance = createAction(SET_BALANCE, (balance: number) => ({
  balance,
  type: SET_BALANCE
}));
