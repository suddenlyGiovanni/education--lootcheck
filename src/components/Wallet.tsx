import * as React from 'react';
import { connect } from 'react-redux';

export class Wallet extends React.Component<{ balance: number }> {
  public render() {
    // tslint:disable-next-line:no-console
    console.log(this.props);
    return (
      <div>
        <h3 className="balance">Wallet balance: {this.props.balance}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({ balance: state.balance });

export default connect(mapStateToProps, null)(Wallet);
