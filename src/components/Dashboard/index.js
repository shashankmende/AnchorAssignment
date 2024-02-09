
import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import NewHeader from '../NewHeader'
import AnchorContext  from '../../context/context'

import './index.css'

let tabs =[
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
            numberOfReplies:3,
            commentDescription:`This is the post description for this topic,Lorem Ipsum is simply 
            dummy text of the printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard dummy text ever since
             the 1500s`,
             comments:[
                {
                    name:'jimmy',
                    text:'This is the First Comment for this post'
                },
                {
                    name:'Ravi',
                    text:'This is the Second Comment for this post'
                },
                {
                    name:"jimmy",
                    text:'This is the Second Comment for this post'
                },
                {
                    name:"Ravi",
                    text:'This is the Second Comment for this post'
                }
             ]
        },
        {
            id:2,
            commentTitle:'This is Post 2 Title',
            numberOfComments:18,
            numberOfReplies:8,
            commentDescription:`This is the post description for this topic,Lorem Ipsum is simply 
            dummy text of the printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard dummy text ever since
             the 1500s`,
             comments:[
                {
                    name:'jimmy',
                    text:'This is the First Comment for this post'
                },
                {
                    name:'Ravi',
                    text:'This is the Second Comment for this post'
                },
                {
                    name:"jimmy",
                    text:'This is the Second Comment for this post'
                },
                {
                    name:"Ravi",
                    text:'This is the Second Comment for this post'
                }
             ]
        }
        ,{
            id:3,
            commentTitle:'This is Post 3 Title',
            numberOfComments:12,
            numberOfReplies:3,
            commentDescription:`This is the post description for this topic,Lorem Ipsum is simply 
            dummy text of the printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard dummy text ever since
             the 1500s`,
             comments:[
                {
                    name:'jimmy',
                    text:'This is the First Comment for this post'
                },
                {
                    name:'Ravi',
                    text:'This is the Second Comment for this post'
                },
                {
                    name:"jimmy",
                    text:'This is the Second Comment for this post'
                },
                {
                    name:"Ravi",
                    text:'This is the Second Comment for this post'
                }
             ]
        },
        {
            id:4,
            commentTitle:'This is Post 4 Title',
            numberOfComments:12,
            numberOfReplies:3,
            commentDescription:`This is the post description for this topic,Lorem Ipsum is simply 
            dummy text of the printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard dummy text ever since
             the 1500s`,
             comments:[
                {
                    name:'jimmy',
                    text:'This is the First Comment for this post'
                },
                {
                    name:'Ravi',
                    text:'This is the Second Comment for this post'
                },
                {
                    name:"jimmy",
                    text:'This is the Second Comment for this post'
                },
                {
                    name:"Ravi",
                    text:'This is the Second Comment for this post'
                }
             ]
        },{
            id:5,
            commentTitle:'This is Post 5 Title',
            numberOfComments:12,
            numberOfReplies:3,
            commentDescription:`This is the post description for this topic,Lorem Ipsum is simply 
            dummy text of the printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard dummy text ever since
             the 1500s`,
             comments:[
                {
                    name:'jimmy',
                    text:'This is the First Comment for this post'
                },
                {
                    name:'Ravi',
                    text:'This is the Second Comment for this post'
                },
                {
                    name:"jimmy",
                    text:'This is the Second Comment for this post'
                },
                {
                    name:"Ravi",
                    text:'This is the Second Comment for this post'
                }
             ]
        }
        ,
        {
            id:6,
            commentTitle:'This is Post,6 Title',
            numberOfComments:12,
            numberOfReplies:3,
            commentDescription:`This is the post description for this topic,Lorem Ipsum is simply 
            dummy text of the printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard dummy text ever since
             the 1500s`,
             comments:[
                {
                    name:'jimmy',
                    text:'This is the First Comment for this post'
                },
                {
                    name:'Ravi',
                    text:'This is the Second Comment for this post'
                },
                {
                    name:"jimmy",
                    text:'This is the Second Comment for this post'
                },
                {
                    name:"Ravi",
                    text:'This is the Second Comment for this post'
                }
             ]
        },
        {
            id:7,
            commentTitle:'This is Post 7 Title',
            numberOfComments:12,
            numberOfReplies:3,
            commentDescription:`This is the post description for this topic,Lorem Ipsum is simply 
            dummy text of the printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard dummy text ever since
             the 1500s`,
             comments:[
                {
                    name:'jimmy',
                    text:'This is the First Comment for this post'
                },
                {
                    name:'Ravi',
                    text:'This is the Second Comment for this post'
                },
                {
                    name:"jimmy",
                    text:'This is the Second Comment for this post'
                },
                {
                    name:"Ravi",
                    text:'This is the Second Comment for this post'
                }
             ]
        },
        {
            id:8,
            commentTitle:'This is Post 8  Title',
            numberOfComments:12,
            numberOfReplies:3,
            commentDescription:`This is the post description for this topic,Lorem Ipsum is simply 
            dummy text of the printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard dummy text ever since
             the 1500s`,
             comments:[
                {
                    name:'jimmy',
                    text:'This is the First Comment for this post'
                },
                {
                    name:'Ravi',
                    text:'This is the Second Comment for this post'
                },
                {
                    name:"jimmy",
                    text:'This is the Second Comment for this post'
                },
                {
                    name:"Ravi",
                    text:'This is the Second Comment for this post'
                }
             ]
        },
        {
            id:9,
            commentTitle:'This is Post 9 Title',
            numberOfComments:12,
            numberOfReplies:3,
            commentDescription:`This is the post description for this topic,Lorem Ipsum is simply 
            dummy text of the printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard dummy text ever since
             the 1500s`,
             comments:[
                {
                    name:'jimmy',
                    text:'This is the First Comment for this post'
                },
                {
                    name:'Ravi',
                    text:'This is the Second Comment for this post'
                },
                {
                    name:"jimmy",
                    text:'This is the Second Comment for this post'
                },
                {
                    name:"Ravi",
                    text:'This is the Second Comment for this post'
                }
             ]
        },
        {
            id:10,
            commentTitle:'This is Post 10 Title',
            numberOfComments:12,
            numberOfReplies:3,
            commentDescription:`This is the post description for this topic,Lorem Ipsum is simply 
            dummy text of the printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard dummy text ever since
             the 1500s`,
             comments:[
                {
                    name:'jimmy',
                    text:'This is the First Comment for this post'
                },
                {
                    name:'Ravi',
                    text:'This is the Second Comment for this post'
                },
                {
                    name:"jimmy",
                    text:'This is the Second Comment for this post'
                },
                {
                    name:"Ravi",
                    text:'This is the Second Comment for this post'
                }
             ]
        }
    ] , createPost: false , title:'', description:''}



    onClickCreatePost = ()=>{
        
        

        this.setState({
            createPost: false
        })
    }

    onClickTabs =()=>{
        
        this.setState({
            createPost:true
        })

    }

    onChangeTitle = (e)=>{
        this.setState({
            title: e.target.value,
            
        })
    }

    onChangeDescription = (e)=>{
        this.setState({
            description: e.target.value
        })
    }

    onClickPostSubmit = ()=>{
        const {commentDetails,title,description} = this.state
        const newPost = {
            id: uuidv4(),
            commentTitle:title,
            commentDescription:description,
            numberOfComments:0,
            numberOfReplies:0,


        }
        this.setState({
            commentDetails: [...commentDetails,newPost],
            title:'',
            description:''
        })
    }




    render(){
        const {createPost,commentDetails} = this.state
        
        return(
    <AnchorContext.Consumer>
        {value=>{
            const {name} = value

            
            return (
                <>
                <NewHeader name={name}/>
                <div className='dash-board-bg-container'>
                    <div className='dash-board-left-container'>
                    <div className='buttons-container'>
                        {tabs.map(each=>{
                            const {active} = each

                            const activeCls = active ? 'add-color':''
                            return (
                                <button type='button' key={each.id}  className={`button-name ${activeCls}`} onClick={this.onClickTabs}>{each.label}</button>
                            )
                        }
                            
                            
                            
                            )}
                    </div>
                    <br/>
                    <button type='button' className='create-post-button' onClick={this.onClickCreatePost}>
                            <img src=' https://res.cloudinary.com/dvvhafkyv/image/upload/v1707375136/Vectorplus_icon_ofak9f.png' 
                            alt='plus icon'
                            className='plus-symbol'

                            
                            />
                            <p>Create Post</p>

                    </button>
                    </div>
                    <div>
                        {createPost ? (
                            <div className='comments-container'>
                                <h1 className='create-post-heading'>All Post ({commentDetails.length})</h1>
                                <div className='post-container-parent'>
                                    {commentDetails.map(each=>(
                                        <div className='post-container-individual'>
                                            <h1 className='comment-heading'>{each.commentTitle}</h1>
                                            <div className='number-of-comments-and-replies'>
                                                <p>{each.numberOfComments} comments</p>
                                                <p>{each.numberOfReplies} replies</p>
                                            </div>
                                        </div>

                                    ))}
                                </div>
                            </div>
                        ): 
                        (
                            <form className='create-post-form-container'>
                                <h1 className='create-post-heading'>Create Post</h1>
                                <input type='text' placeholder='Post Title...' className='title-input' onChange={this.onChangeTitle}/>
                                <input type='text' placeholder='Describe your post' className='description-input' onChange={this.onChangeDescription}/>
                                <div className='post-button-container ' onClick={this.onClickPostSubmit}>
                                    <button type='button' className='post-submit' >Post Submit </button>
                                </div>
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