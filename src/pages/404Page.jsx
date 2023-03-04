import { Link } from "react-router-dom";


export function Page404() {
    return ( <div className="flex flex-col items-center">
        <div className="h-[100vh] flex flex-col items-center justify-center w-[80%] mt-[-3rem]">
            <p className="text-[8rem]">Oops!</p>
            <p className="text-[2rem]">404 - PAGE NOT FOUND</p>
            <p>The page you are looking for might have been removed or temporarily unavailable</p>
        <Link to="/">
        <button className="border mt-[1rem] p-[0.3rem] rounded-[20px] px-[0.5rem]">GO TO HOMEPAGE</button>
        </Link>
        </div>
    </div> );
}




