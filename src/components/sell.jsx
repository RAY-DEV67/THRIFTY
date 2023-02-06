import { Profile } from "./profile";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";


export function Sell() {
    const [user] = useAuthState(auth);

    return ( <div>
{user ? <div>
    <p>Sell your stuffs</p>
</div> : <Profile/>}
    </div> );
}

