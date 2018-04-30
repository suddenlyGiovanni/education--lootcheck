import { getType } from 'typesafe-actions';
import { setBalance } from '../actions/balance';

export type State = Readonly<{
  balance: number;
}>;

export const initialState: State = {
  balance: 0
};

const balance = (state = 0, action: any) => {
  switch (action.type) {
    case getType(setBalance):
      return action.balance;
    default:
      return state;
  }
};

export default balance;
