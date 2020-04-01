#  BlockChain Lottery Project
### This is the UI for Blockchain Lottery
This is a basic projet based on the line of Block chain , where user can enter into the lottery and the manager can pick a winner .

### Language used
- React JS

### Dependencies
- metamask must be installed in the user's browser  
- Metamask must be connected to Rinkeby Network
- You must have `react JS` and `Node` installed

### How to run this code :
*make the following change in lottery.js*
```
import web3 from './web3';

const address = '0x2639b5c596E99a20aa50102633C5ff5f3A762154';

const abi = [{"constant":true,"inputs":[],......."  A LOT OF TEXT ...."constructor"}];

export default new web3.eth.Contract(abi, address);

 ```

***address*** : it is the address where the contract is deployed .So when you deploy the contract you will get the deployed address on console so copy that and paste it over here .

*After doing the above changes*
open *Command Promt* and run the code in the current folder `npm run start`

you will see the output in the browse at `http://localhost:3000/`

### Further Scope of improvement
- add error handling in buttons
- add the name of the winner who won the Lottery
- We are assuming that the first account in the wallet is participating into the lottery.

#### This is the UI part of the lottery
#### We can have the Lottery contract and the compilation and deployment script at [Sourav Suman ](https://www.linkedin.com/in/srvsmn)

For any query feel free to contact [Sourav Suman ](https://www.linkedin.com/in/srvsmn)

#### Screen Shot :
![project screenshot](/picture/1.png)
