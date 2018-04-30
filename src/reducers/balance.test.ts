import { SET_BALANCE } from '../actions/constants';
import balanceReducer from './balance';

describe('balanceReducer', () => {
  it('sets a balance', () => {
    const balance = 10;

    expect(
      balanceReducer(undefined, {
        balance,
        type: SET_BALANCE
      })
    ).toEqual(balance);
  });
});
