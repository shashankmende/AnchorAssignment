
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import AnchorContext from '../../context/context'
import './index.css'


class CreateAccount extends Component {

    state ={name:"",email:""}

    render(){
        return (
            <AnchorContext.Consumer>
                {value =>{
                    const {name,setName,email,setEmail}  = value

                    const onChangeName = (e)=>{

                        setName(e.target.value)
                    }

                    const onChangeEmail = (e)=>{
                        setEmail(e.target.value)
                    }

                   return (
                    <>
                    <Header/>
            <div className='bg-create-container'>
                <form className='form-container'>
                    <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1707374955/mingcute_rocket-fillrocket_upt40y.png'
                     alt='logo'
                     className='rocket-create-image'
                     />
                     <h1 className='create-account-heading'>Create Your Accont</h1>
                <input type='text' placeholder='Enter Your Name' className='input-name' onChange={onChangeName}/>
                <input type='text' placeholder='Enter Your Email' className='input-name' onChange={onChangeEmail}/>
                <Link to='/otp'> 
                <div className='continue-arrow-container'>
                    <button type='button' className='continue-button'>Continue</button>
                    <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1707375017/Vectorright_arrow_fbchnv.png' 
                    alt='right-icon'
                    className='right-image'
                    />
                </div>
                </Link>
                </form>
            </div>

        </>

        )



                }}
            </AnchorContext.Consumer>
            
            
        )
    }

}

export default CreateAccount

