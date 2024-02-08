
import {Link} from 'react-router-dom'
import {Component} from 'react'
import Header from '../Header'
import './index.css'


class OTP extends Component {

    state ={name:"",email:""}

    render(){
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
                <p className='otp-para'>Please verify your email ID to continue. 
We have sent an OTP to this emailID</p>
                <input type='text' placeholder='Enter OTP' className='input-name'/>
                <Link to='/account-created'>
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
    }

}

export default OTP

