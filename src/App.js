import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import lottery from './lottery';
import { Card, Header, Segment, Form, Container ,Button } from 'semantic-ui-react'

class App extends Component {

state={
  manager: '' ,
  players: [] ,
  balance: '' ,
  value: '',
  message: ''
    };

async componentDidMount() {
  const manager = await lottery.methods.manager().call();
  const players = await lottery.methods.getPlayers().call();
  const balance = await web3.eth.getBalance(lottery.options.address);
  this.setState({manager, players, balance});
}
HeaderExampleFloating(){
    return (<Segment clearing style = {{marginTop : '20px'}} >
    <Header as='h2' color='blue' textAlign ='center'>
      LOTTERY CONTRACT
    </Header>

  </Segment>);

}

renderForm(){

}

renderCards(){
  const items = [
    {
      header:  this.state.manager,
      description:
        'Owner/Creator of the lottery',
      meta:'MANAGER',
      color: 'red',
      doubling: true,
      centered: true,
      style:{overflowWrap: 'break-word'},
    },
    {
      header: this.state.players.length,
      description:
        'Total participants in the lottery',
      meta: 'TOTAL PARTICIPANTS',
      color: 'yellow',
      centered: true

    },
    {
      header: web3.utils.fromWei(this.state.balance, 'ether'),
      description:
        'Total monry in current lottery',
      meta: 'TOTAL MONEY',
      color: 'blue',
      centered: true

    },
  ]
  return <Card.Group centered items={items} style = {{marginTop : '10px'}}/>;
}



onSubmit = async event =>{
  event.preventDefault();
    await window.ethereum.enable() ;
  const accounts = await web3.eth.getAccounts();
  this.setState({message: 'Waiting on transaction Success ...'});
  await lottery.methods.enter().send({
    from:accounts[0] ,
    value: web3.utils.toWei(this.state.value, 'ether')
    });
    this.setState({message: 'You have been entered !'});
    window.location.reload(false);
  };

onClick = async () =>{
  const accounts = await web3.eth.getAccounts();
  this.setState({message:'waiting for trransaction success ....!'});

  await lottery.methods.pickWinner().send({
    from: accounts[0]
  });
  this.setState({message: 'A Winner has been picked '});
  window.location.reload(false);
};


render() {
  return (
  <div>
  <p>
  {this.HeaderExampleFloating()}
  </p>
  <p>
  {this.renderCards()}
  </p>
  <Container style = {{marginTop : '30px'}}>
  <Card  centered= {true} color = 'yellow' centered ={true} fluid ={true}>
  <Form onSubmit = {this.onSubmit} size ="big" >
  <p><h2 align = 'center' color='blue'>Want to try luck ?</h2></p>
          <Form.Input
            placeholder='Amount in ETH'
            name='name'
            value={this.state.value}
            onChange={event => this.setState({value :event.target.value})}
          />
          <div>
<Button type='submit' positive ={true} fluid ={true}>Submit</Button>
</div>
</Form>
</Card>
</Container>
<Container style = {{marginTop : '30px'}}>
<Card  centered= {true} color = 'yellow' centered ={true} fluid ={true} >
<p><h2 align = 'center' color='blue'>Ready to pick a winner?</h2></p>
<Button type='submit' positive ={true} fluid ={true} onClick ={this.onClick}>Pick a winner !</Button>
<h5>{this.state.message}</h5>
</Card>
</Container>



  </div>
  );
}
}

export default App;
