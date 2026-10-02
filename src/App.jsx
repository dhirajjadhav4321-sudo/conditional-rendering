import React, { useState } from 'react'
import Logout from './Logout'



const App = () => {
  const [islogin,setlogin]=useState(false)
  return(
    <div>
      {islogin &&<Logout />}
    </div>
  )

  
    
}

export default App