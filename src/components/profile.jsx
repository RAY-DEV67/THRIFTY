import {auth, provider} from "../config/firebase"
import {signInWithPopup, signOut} from "firebase/auth"
import {useAuthState} from "react-firebase-hooks/auth"

export function Profile() {

    const [user] = useAuthState(auth)
    const SignUserOut = async () => {
await signOut(auth)
    }

const signInWithGoogle = async () => {
const result = await signInWithPopup(auth, provider)
console.log(result)
}

    return ( <div>
     { user ?  ( <div>
    <p>{user?.displayName}</p>
    <button onClick={SignUserOut} className="border mt-[2rem] bg-red-400">Sign Out</button>
  
   </div>) :
     (<div>
       <p>Sign in with Google</p>
        <button onClick={signInWithGoogle} className="border mt-[2rem] bg-red-400">Sign in with google</button>
       </div>)}
    </div> );
}

