
import {Component} from 'react'
import './App.css';

class App extends  Component {

  state = {otp:new Array(4).fill('')}

   handleChange = (e,index)=>{

    const {otp} = this.state
    if (isNaN(e.target.value)) return false

    this.setState({
      otp: [...otp.map((data,indx)=> index=== indx? e.target.value: data)]
    })

    if (e.target.value && e.target.nextSibling){
      e.target.nextSibling.focus()
    }

  }

  render(){
    const {otp} = this.state
    console.log(otp)
    return (
      <div className='otp-container'>
        <h1>creating otp input fields</h1>
        {otp.map((data,i)=>
        <input type='text'
        maxLength={1}
        value={data}
        onChange={(e)=>this.handleChange(e,i)}
        />
        )}


      </div>
    
      )

  }
 
}

export default App;
