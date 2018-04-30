import * as Enzyme from 'enzyme';
import * as React from 'react';

import App from './App';

describe('App', () => {
  const app = Enzyme.shallow(<App />);

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('contains a connected wallet component', () => {
    expect(app.find('Connect(Wallet)').exists()).toBe(true);
  });
});
