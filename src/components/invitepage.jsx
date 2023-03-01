export function Invite() {
    return ( <div>
        <h1 className="p-[1rem] invitePage text-center mb-[1rem]">Invite Your friends</h1>
      <div className="invite mx-[1rem] p-[1rem]">
      <div className="flex justify-between items-center social pb-[1rem]">
            <p>Whatsapp</p>
            <a href="whatsapp://send?text= Join Me on THRIFT NG: Thrifydemo.netlify.app" target="_blank" rel="noreferrer" className="inviteSocial px-[0.8rem] rounded-[20px]">Invite</a>
        </div>
        <div className="flex justify-between py-[1rem] social">
            <p>Instagram</p>
            <a className="inviteSocial px-[0.8rem] rounded-[20px]" href="Thrifydemo.netlify.app">Invite</a>
        </div>
        <div className="flex justify-between py-[1rem] social">
            <p>Twitter</p>
            <a className="inviteSocial px-[0.8rem] rounded-[20px]" href={`https://twitter.com/intent/tweet?text=Join Me on THRIFT NG: Thrifydemo.netlify.app`} rel="noreferrer" target="_blank">Invite</a>
        </div>
        <div className="flex justify-between pt-[1rem] ">
            <p>Facebook</p>
            <a className="inviteSocial px-[0.8rem] rounded-[20px]" href="Thrifydemo.netlify.app">Invite</a>
        </div>
      </div>
    </div> );
}

