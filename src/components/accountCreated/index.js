
import {Link} from 'react-router-dom'
import AnchorContext from '../../context/context' 
import Header from '../Header'
import NewHeader from '../NewHeader'
import './index.css'

const AccountCreated = ()=>(
    <AnchorContext.Consumer>
        {value =>{
            const {name} = value
            return (
                <>
                <NewHeader name={name}/>
                
                   <div className='bg-create-container'>
                <form className='form-container'>
                    <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1707375084/Groupsuccess_hfautr.png'
                     alt='logo'
                     className='rocket-create-image'
                     />
                     <h1 className='create-account-heading'>Account Created 
Successfully</h1>
                
                <Link to='/dash-board'> 
                <div className='continue-arrow-container'>
                    <button type='button' className='continue-button'>Create Your First Post</button>
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

export default AccountCreated