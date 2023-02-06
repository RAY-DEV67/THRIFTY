import { Profile } from "./profile";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";


export function Saved() {
    const [user] = useAuthState(auth);

    return ( <div>
{user ? <div>
    <p>Saved Items</p>
</div> : <Profile/>}
    </div> );
}