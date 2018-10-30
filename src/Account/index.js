import React, { Component } from 'react';


class Account extends Component {
	constructor(props) {
		super(props)
		this.state={balance:0}
	}
  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">${this.state.balance}</div>
        <input ref={(input)=>this.inputBox =input } type="text" placeholder="enter an amount" />
        <input onClick={this.handleDepositClick} type="button" value="Deposit" />
        <input onClick={this.handleWithdrawClick} type="button" value="Withdraw" />
      </div>
    )
  }
	handleDepositClick = (e) => {
		e.preventDefault();
		const amount = parseInt(this.inputBox.value);
		const newBalance = this.state.balance + amount;
		this.setState({balance: newBalance});
		this.inputBox.value = '';
	}
	handleWithdrawClick = (e) => {
		e.preventDefault();
		const amount = parseInt(this.inputBox.value);
		const newBalance = this.state.balance - amount;
		if (newBalance >0) {
			this.setState({balance: newBalance});
			this.inputBox.value='';
		}
		else this.inputBox.value='you can\'t withdraw more than you have';
	}	
}

export default Account;
