import logo1 from "../assets/images/logowhite.webp";

export function Footer() {
    return ( <div>
         <footer className="pb-[4rem] md:pb-[2rem] z-30 items-center footer pt-[0.5rem] mt-[2rem] flex justify-between px-[2rem]">
        <img alt="logo" className="w-[70px]" src={logo1}/>
        <p className="motto text-[1.5rem]">Buy More ..... Pay Less</p>
      </footer>
    </div> );
    
}

