import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/LogIn';
import axios from "axios";
import Debits from "./components/Debits";
import Credits from "./components/Credits";

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 0,
      totalDebit: 0,
      totalCredit: 0,
      debits: [],
      credits: [],
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/92',
      }
    }
  }
  componentDidMount() {
    //get dedbit data for api
    axios.get("https://moj-api.herokuapp.com/debits").then((response) => {
        let data = response.data;
        this.setState({
          debits: data,
        });
        let totalDebit1 = 0;

        for (let item of data) {
          totalDebit1 += item.amount;
        }
        let newbalance=this.state.accountBalance-totalDebit1;
        this.setState({
         totalDebit:totalDebit1,
          accountBalance:newbalance.toFixed(2),
        });
      }) .catch((error) => {
        //error massage
        console.log(error);
      });
      //get credit data for api
    axios.get("https://moj-api.herokuapp.com/credits").then((response) => {
        let data = response.data;
        this.setState({credits: data,});
        let totalCredit1 = 0;
        for (let item of data) {
          totalCredit1 += item.amount;
        }
        let newbalance=parseFloat(this.state.accountBalance)+parseFloat(totalCredit1);
        this.setState({ 
          totalCredit:totalCredit1,
          accountBalance:newbalance.toFixed(2),
        });
      }).catch((error) => {
        //error massage
        console.log(error);
      });
  }
  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  //add debit card
  newDebit = (debit) => {
    debit.id = (Math.random()+Math.random()).toString(30);
    const date = new Date();
    debit.date = date.toISOString();
    const newDebits = [debit, ...this.state.debits];
    this.setState({ 
      debits: newDebits,
      accountBalance: this.state.accountBalance - debit.amount,
    });
  };

  //add credit card
  newCredit = (credit) => {
    credit.id = (Math.random()+Math.random()).toString(30);
    const date = new Date();
    credit.date = date.toISOString();
    const newCredits = [credit, ...this.state.credits];
    let newbalance=parseFloat(this.state.accountBalance)+ parseFloat(credit.amount);
    this.setState({ 
      credits: newCredits,
      accountBalance: newbalance,
     });
  };

  render() {
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const CreditsComponent = () => (
      <Credits
        accountBalance={this.state.accountBalance}
        credits={this.state.credits}
        totalCredit={this.state.totalCredit}
        newCredit={this.newCredit}
      />
    );
    const DebitsComponent = () => (
      <Debits
        accountBalance={this.state.accountBalance}
        debits={this.state.debits}
        totalDebit={this.state.totalDebit}
        newDebit={this.newDebit}
      />
    ); 

    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path="/credits" render={CreditsComponent} />
            <Route exact path="/debits" render={DebitsComponent} />
          </div>
        </Router>
    );
  }

}

export default App;