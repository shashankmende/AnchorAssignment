

import React from 'react'

const AnchorContext = React.createContext({
  name:'',
  setName: ()=>{},
  email:'',
  setEmail:()=>{}
})

export default AnchorContext