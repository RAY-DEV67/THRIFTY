import { Topnav } from "../components/topnav";

export function ContactUs() {
    return ( <div>
        <Topnav/>
        <h1 className="p-[1rem] border-y text-center mb-[1rem]">How To Contact Us</h1>
        <div className="px-[1rem]">
        <p>To contact our Support Team, choose the most convenient channel for yourself: Whatsapp chat or email.

<p className="my-[1rem] font-bold">Whatsapp Chat</p>

<p>Whatsapp chat is the fastest way to get a response from us. As soon as you send us a message there, one of out customer care representative will react shortly. We recommend using it for urgent cases.</p> 

<p>To start a chat click here</p>

<p  className="my-[1rem] font-bold">Email</p>

<p>If your case is not urgent, we recommend you send an email to support@jiji.ng</p>

<p  className="my-[1rem]">Here are some tips on how to prepare an efficient email and get assistance faster based on the type of issue you've faced:</p>

<p><p className="font-bold">Something is not working correctly on the platform:</p> If you're using the desktop version, specify what operating system and browser you use. If the issue is about our app, let us know what operating system and app version you use. If possible, take screenshots that show what kind of issue appears;</p>
<p><p className="font-bold">Issues with payments for Premium Services:</p> Describe what kind of issue you've faced. Specify important details: what package you bought, what payment method you used, sum, date of the payment, depositor's name. It's best to attach a payment receipt copy or debit alert proof. This will help us a lot to assist you faster.</p>
<p><p className="font-bold">Scam case:</p> If you've faced a scam or you have suspicions that one of the users may deceive people, please tell us about it in your email. Share a link to the profile of such a user, and describe all the details you have. If possible, attach screenshots of your conversations and other pictures or materials that can prove your words. The more information we have, the higher chances we can take all the necessary steps faster.
</p>

</p>
        </div>
    </div>  );
}

