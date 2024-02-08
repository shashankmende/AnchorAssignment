
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Component} from 'react'
import Home from './components/Home'
import CreateAccount from './components/createAccount'
import OTP from './components/OTP'
import AnchorContext from './context/context'
import Dashboard from './components/Dashboard'

import './App.css'
import AccountCreated from './components/accountCreated'


class App extends Component {

  state = {name:'',email:''}

  setName = (nae)=>{
    this.setState({
      name:nae
    })
  }
  
  setEmail = (eal)=>{
    this.setState({
      email:eal
    })
  }
  
  render(){
    const {name,email}= this.state

    console.log('name',name)
    console.log('email',email)


return (
<AnchorContext.Provider value={{
  name,
  setName:this.setName,
  email,
  setEmail:this.setEmail
}}>

<BrowserRouter>
    <Routes>
      <Route  path='/' Component={Home}/>
      <Route  path='/create-account' Component={CreateAccount} />
      <Route path ='/otp'  Component={OTP}/>
      <Route path='/account-created' Component={AccountCreated}/>
      <Route path='/dash-board' Component={Dashboard}/>
      </Routes>
    </BrowserRouter>


</AnchorContext.Provider>

  
  
    
  
)
  }
}



export default  App