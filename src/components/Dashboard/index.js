
import {Component} from 'react'
import NewHeader from '../NewHeader'
import AnchorContext  from '../../context/context'

import './index.css'

const tabs =[
    {
        id:0,
        label:'All Post',
        active: true,
    },
    {
        id:1,
        label:'Commented Post',
        active:false
    }
    ,
    {
        id:2,
        label:"Replied Post",
        active:false
    }
]

class Dashboard extends Component {

    state = { commentDetails:[
        {
            id:1,
            commentTitle:'This is Post Title',
            numberOfComments:12,
            numberOfReplies:3
        },
        {
            id:2,
            commentTitle:'This is Post 2 Title',
            numberOfComments:18,
            numberOfReplies:8
        }
        ,{
            id:3,
            commentTitle:'This is Post 3 Title',
            numberOfComments:12,
            numberOfReplies:3
        },
        {
            id:4,
            commentTitle:'This is Post 4 Title',
            numberOfComments:12,
            numberOfReplies:3
        },{
            id:5,
            commentTitle:'This is Post 5 Title',
            numberOfComments:12,
            numberOfReplies:3
        }
        ,
        {
            id:6,
            commentTitle:'This is Post,6 Title',
            numberOfComments:12,
            numberOfReplies:3
        },
        {
            id:7,
            commentTitle:'This is Post 7 Title',
            numberOfComments:12,
            numberOfReplies:3
        },
        {
            id:8,
            commentTitle:'This is Post 8  Title',
            numberOfComments:12,
            numberOfReplies:3
        },
        {
            id:9,
            commentTitle:'This is Post 9 Title',
            numberOfComments:12,
            numberOfReplies:3
        },
        {
            id:10,
            commentTitle:'This is Post 10 Title',
            numberOfComments:12,
            numberOfReplies:3
        }
    ] , createPost: false}





    render(){
        return(
    <AnchorContext.Consumer>
        {value=>{
            const {name,createPost} = value
            return (
                <>
                <NewHeader name={name}/>
                <div className='dash-board-bg-container'>
                    <div className='dash-board-left-container'>
                    <div className='buttons-container'>
                        {tabs.map(each=>
                            
                                <button type='button' key={each.id}  className='button-name'>{each.label}</button>
                            
                            )}
                    </div>
                    <br/>
                    <button type='button' className='create-post-button'>
                            <img src=' https://res.cloudinary.com/dvvhafkyv/image/upload/v1707375136/Vectorplus_icon_ofak9f.png' 
                            alt='plus icon'
                            className='plus-symbol'
                            
                            />
                            <p>Create Post</p>

                    </button>
                    </div>
                    <div>
                        {createPost ? '': 
                        (
                            <form className='create-post-form-container'>
                                <h1>Create Post</h1>
                                <input type='text' placeholder='Post Title...' className='title-input'/>
                                <input type='text' placeholder='Describe your post' className='description-input'/>
                            </form>
                        )
                        
                        }
                    </div>
                </div>
    </>
            )
        }}
    </AnchorContext.Consumer>
    
    
)
    }
}

export default Dashboard