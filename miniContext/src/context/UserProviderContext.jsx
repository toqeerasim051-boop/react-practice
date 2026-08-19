import React from "react";
import UserContext from './UserContext'

const UserProviderContext=({children})=>{  // here children like outlet in router passes props as it is for some fixed things like header and footer in router we give
    // children is just generic name (passed as it is things which come from context)
    const [user,setUser]=React.useState(null);
    return(
     <UserContext.Provider value={{user,setUser}}>
        {children}
     </UserContext.Provider>
)

}

export default UserProviderContext