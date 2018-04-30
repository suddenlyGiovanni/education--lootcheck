import * as Enzyme from 'enzyme';
import * as React from 'react';

import { Wallet } from './Wallet';

describe('Wallet', () => {
  const props = { balance: 20 };
  const wallet = Enzyme.shallow(<Wallet {...props} />);

  it('renders properly', () => {
    expect(wallet).toMatchSnapshot();
  });

  it('displays the balance from props', () => {
    expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20');
  });
});
