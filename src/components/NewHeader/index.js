
import Header from '../Header'

import './index.css'

const NewHeader = (props)=>(
    <div className='header-name-container'>
                        <Header/>
                        <p className='user-name'>Welcome, {props.name}</p>
                   </div>
)

export default NewHeader