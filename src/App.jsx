import React, { useState } from 'react'
import Logout from './Logout'



const App = () => {
  const [islogin,setlogin]=useState(false)
  return(
    <div>
     this is the logical and {islogin &&<Logout />}
    </div>
  )

  
    
}

export default App