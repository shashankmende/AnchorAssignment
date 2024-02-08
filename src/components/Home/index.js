

import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = ()=>(
     <>
          <Header/>
          <div className='home-container'>        
               <div className='rocket-container'>
                    <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1707374955/mingcute_rocket-fillrocket_upt40y.png' alt='rocket'
                    className='rocket-image'
                    />
                    <p className='rocket-para'>For Indian Users Only</p>
               </div>
               <h1 className='Start-posting-heading '>Start posting anonymously where no one will judge.</h1>
               <p className='welcome-para'>Welcome to Stranger discussion forum</p>
               <Link to='/create-account'>
               <div className='button-arrow-container'>
                    <button type='button' className='create-accout-button'>Create Your Account</button>
                    <img src=' https://res.cloudinary.com/dvvhafkyv/image/upload/v1707375017/Vectorright_arrow_fbchnv.png' 
                    alt='arrow-right'
                    className='right-arrow'
                    />

               </div>
               </Link>
               
               <div className='already-container'>
               
                    <p>Already have account?</p>
                    <button type='button' className='login-button'>Login</button>
                    
               </div>
               
          </div>
     </>
     
)

export default Home