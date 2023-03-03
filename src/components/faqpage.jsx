import { useState } from "react";

export function FAQ() {
const [faq1, setfaq1] = useState(false);
const [faq2, setfaq2] = useState(false);
const [faq3, setfaq3] = useState(false);
const [faq4, setfaq4] = useState(false);
const [faq5, setfaq5] = useState(false);
const [faq6, setfaq6] = useState(false);
const [faq7, setfaq7] = useState(false);
const [faq8, setfaq8] = useState(false);
const [faq9, setfaq9] = useState(false);
const [faq10, setfaq10] = useState(false);
const [faq11, setfaq11] = useState(false);
const [faq12, setfaq12] = useState(false);


    return ( <div className="md:mt-[5rem] productfont">
       <p className="faq text-center p-[1rem] mb-[1rem]">Frequently Asked Questions?</p>
       <div className="faq faq1 px-[1rem] flex justify-between">
       <h2 className="py-[1rem]" onClick={() => {setfaq1(!faq1)}}>How do i contact Support Team</h2>
       <svg viewBox="0 0 1024 1024" width="15px" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000"></path></g></svg>
       </div>
    {faq1 ? <div className="p-[1rem] border-b">
    <p>To contact our Support Team, choose the most convenient channel for yourself: Whatsapp chat or email.

<p className="my-[1rem]">Whatsapp Chat</p>

<p>Whatsapp chat is the fastest way to get a response from us. As soon as you send us a message there, one of out customer care representative will react shortly. We recommend using it for urgent cases.</p> 

<p>To start a chat click here</p>

<p  className="my-[1rem]">Email</p>

<p>If your case is not urgent, we recommend you send an email to support@jiji.ng</p>

<p  className="my-[1rem]">Here are some tips on how to prepare an efficient email and get assistance faster based on the type of issue you've faced:</p>

<p><p className="font-bold">Something is not working correctly on the platform:</p> If you're using the desktop version, specify what operating system and browser you use. If the issue is about our app, let us know what operating system and app version you use. If possible, take screenshots that show what kind of issue appears;</p>
<p><p className="font-bold">Issues with payments for Premium Services:</p> Describe what kind of issue you've faced. Specify important details: what package you bought, what payment method you used, sum, date of the payment, depositor's name. It's best to attach a payment receipt copy or debit alert proof. This will help us a lot to assist you faster.</p>
<p><p className="font-bold">Scam case:</p> If you've faced a scam or you have suspicions that one of the users may deceive people, please tell us about it in your email. Share a link to the profile of such a user, and describe all the details you have. If possible, attach screenshots of your conversations and other pictures or materials that can prove your words. The more information we have, the higher chances we can take all the necessary steps faster.
</p>

</p>
    </div>
 : ""}
         <div className="flex faq px-[1rem] justify-between">
         <h2 className="py-[1rem]" onClick={() => {
            setfaq2(!faq2)
           }}>How can i sell on Thrift Ng</h2>
           <svg viewBox="0 0 1024 1024"  width="15px" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000"></path></g></svg>
         </div>
       {faq2 ? <div className="p-[1rem] border-t">
       <p className="mb-[1rem]">Post your ads on Jiji effortlessly by following the steps below:</p>

<p>1. Sign in to your profile on Jiji;</p>

<p>2. Click on the button "Sell" or just click here;</p>

<p>3. You would be redirected to a customer care representative who would guide you through the process and verify you.</p>
       </div> : ""}
       <div className="faq px-[1rem] flex justify-between">
       <h2 className="py-[1rem]" onClick={() => {
        setfaq3(!faq3)
       }}>How to buy something on Thrift Ng</h2>
       <svg viewBox="0 0 1024 1024" width="15px" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000"></path></g></svg>
       
       </div>
       
       {faq3 ? <div className="p-[1rem] border-b">
       <p className="mb-[1rem]">To fully enjoy shopping on Jiji, follow our simple guide:</p>

<p>1. Search for the item</p>

<p>Use a search panel with filters and find what you need. We have over a million adverts, so you can choose exactly what you are looking for.</p>
<p className="mt-[1rem]">2. Contact a seller</p>

<p>You may chat on Jiji or call a seller via phone and set up a meeting face to face, discuss some details or negotiate about the price.</p>
<p className="mt-[1rem]">3. Take your item or order a delivery</p>
       </div> : ""}
       <div className="faq px-[1rem] flex justify-between">
       <h2 className="py-[1rem]" onClick={() => {
        setfaq4(!faq4)
       }}>What is Thrift Market Place</h2>
       <svg viewBox="0 0 1024 1024" width="15px" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000"></path></g></svg>
       
       </div>
       {faq4 ? <p className="p-[1rem] border-b">An online marketplace is a place where people buy from people. It’s like a local market, but with one difference: you can buy and sell online without even leaving a room. More than that, here you can also find a job or order services from Nigerians that are close to you.

Basically, whatever you need is here. Just type it in search</p> : ""}



<div className="px-[1rem] faq flex justify-between">
<h2 className="py-[1rem]" onClick={() => {
        setfaq5(!faq5)
       }}>Do you have any stores</h2>
         <svg viewBox="0 0 1024 1024" width="15px" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000"></path></g></svg>
     
</div>


     
       {faq5 ? <p className="p-[1rem] border-t">No, as we are not a shop. Jiji is the marketplace — here you can sell your stuff, buy goods from real people, find a job or services you need. Any deal you make, you make with people. And we exist just to help you find each other.</p> : "" }
      



       <div className="px-[1rem] faq flex justify-between">
       <h2 className=" py-[1rem]" onClick={() => {setfaq6(!faq6)}}>Do you have a delivery</h2>
       <svg viewBox="0 0 1024 1024" width="15px" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000"></path></g></svg>
     
       </div>
     
       {faq6 ? <p className="p-[1rem] border-b">No, we don’t. But you can always discuss with the seller a comfortable way of delivering.</p> : ""}
      
      
       <div className="px-[1rem] faq flex justify-between">
       <h2 className=" py-[1rem]" onClick={() => {setfaq7(!faq7)}}>What can i do to sell better</h2>
       <svg viewBox="0 0 1024 1024" width="15px" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000"></path></g></svg>
     
       </div>
      
       {faq7 ? <div className="p-[1rem] border-t"><p>We've prepared a few pieces of advice to help you sell like a pro:</p>

<p className="mt-[1rem]">1.Pay attention to details</p>
<p>Take relevant pictures of your goods, write a clear, detailed description and fill out all the fields in your profile. These will help your customers learn more about you and your product.

</p>
<p className="mt-[1rem]">2.Make your advert as risk-free as possible</p>

<p>Remember that people are afraid of sending prepayments so we strongly recommend not to request them. Find a way to collaborate with delivery services that allow buyers to pay after they inspect the product and make sure it's what they want.
</p>
<p className="mt-[1rem]">3.Stay in touch</p>

<p>Don't make potential buyers wait for your replies too long. Instead, be online or use Boost Packages to always get SMS notifications on new messages.
</p>
<p className="mt-[1rem]">4.Use Premium Services to get up to 500x more customers!
</p>
<p>If you really need to sell something fast, Premium Services are your way out! Whatever your item is, you’ll get the most effective and unbelievable promotion for it! To learn more about the different types of Premium Services we offer, click here.
</p>
</div> : ""}



<div className="px-[1rem] faq flex justify-between">
<h2 className=" py-[1rem]" onClick={() => {setfaq8(!faq8)}}>Tips for creating an effective ad</h2>
       <svg viewBox="0 0 1024 1024" width="15px" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000"></path></g></svg>
     
</div>
     
       {faq8 ? <div className="p-[1rem]"><p className="mb-[1rem]">If you really want to create a great ad, we highly recommend you following the tips below:
</p>
<p>1. Use a clear title which includes the name of the item you sell. Try to make your title appealing and eye-catching.
</p>
<p>2. Set an appropriate price for your item so that the advert is approved. If the price is not relevant, it may be declined. Make sure to carry out some investigation of the prices for a particular item.
</p>
<p>3.The description of your product must be informative enough and mustn’t contain any false information regarding your product or service.
</p>
<p>4. Upload only unique and high-quality photos of your items taken by yourself and not downloaded from the Internet. The better photos you add, the more attractive your ad looks to the potential buyers and the more calls you receive.
</p>
<p>5. Indicate correct contact details for the potential buyers/clients to be able to reach you easily. Try to respond all the incoming calls or to call back your customers once available.
</p>
<p>6. Try to fill out all the fields of your profile page, as well as those of your advert, to let your customers dispose of all the necessary information about you as a seller and the products you sell.
</p>
<p>7. The better rating you have on our website, the more chances you get to attract a lot of buyers. Remember that it is important to build trust in your business. Your rating depends on the number of positive/negative feedback received from your previous customers.
</p>
<p>8.Make your advert as risk-free as possible. Underline that no prepayments are required and be ready to list those delivery services which presuppose payment on the delivery of the product ordered.
</p> </div> : ""}


<div className="px-[1rem] faq flex justify-between">
<h2 className="py-[1rem]" onClick={() => {setfaq12(!faq12)}}>My Advert has been Declined. Why?</h2>
       <svg viewBox="0 0 1024 1024" width="15px" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000"></path></g></svg>
     
</div>
       
     
       {faq12 ? <p className="p-[1rem] border-b">No worries, it can be fixed! Our moderators could decline your ad for several reasons:

You've tried to post a few items within one ad. Please post each item separately. We have a rule: 1 ad = 1 product.
You've posted nudity pictures or images containing contact details, watermarks, etc. Please, remove them and add real photos of the item you intend to sell.
You've set an irrelevant price. Make sure to carry out some investigation of market value and input a fair price for your product.
Make the required edits and click on the "Post ad" button. If everything is fine, your ad will be live within an hour or two.

We hope any issues you've faced will be resolved shortly.</p> : ""}




<div className="px-[1rem] faq flex justify-between">
<h2 className=" py-[1rem]" onClick={() => {setfaq9(!faq9)}}>How long would my ads stay on Thrift Ng</h2>
       <svg viewBox="0 0 1024 1024" width="15px" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000"></path></g></svg>
     
</div>
     
       { faq9 ? <p className="p-[1rem] border-t">Your ads remain on the site for 1-3 months (since the date of the last renewal) before they are automatically deleted or until you decide to deactivate them.

Please note that you can always update your ad if you haven't sold your item.</p> : ""}

      
<div className="px-[1rem] faq flex justify-between">
<h2 className=" py-[1rem]" onClick={() => {setfaq10(!faq10)}}>What are thre types of premium services on Thrift Ng</h2>
       <svg viewBox="0 0 1024 1024" width="15px" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000"></path></g></svg>
     
</div>
      
      
     
       {faq10 ? <div className="p-[1rem] border-b"><p>Jiji offers 2 types of Premium Packages that can help you to promote your ads: Top and Boost Packages.</p>

<p className="mt-[1rem]">1. With Top, your ad is placed at the top of the search results page for either 7 or 30 days, depending on the duration you have chosen. It means that your potential clients would be able to find your ad easier, so, as a result, you will get up to 15 times more customers.
</p>
<p className="mt-[1rem]">2. With Boost Packages, all your ads will appear in search results more often during 1, 3, 6 or 12 months; besides, your products will be constantly shown on Similar Ads area. This way you can get up to 500 times more customers. We recommend using Boost Packages if you have more than 5 active ads.
</p>
<p className="mt-[1rem]">There are 6 types of Boost Packages with a certain set of features offered:
</p>
<p className="my-[1rem]">Basic Package:</p>

<p>Up to 2 times more clients for ads</p>
<p>Promotion is search results and categories</p>
<p>Auto-renew of ads every 48 hours</p>
<p className="my-[1rem]">Premium Package:</p>

<p>Up to 5 times more clients for your ads 
</p>
<p>Promotion in search results and categories
</p>
<p>Auto-renew ads every 24 hours
</p>
<p>5 TOP+</p>
<p className="my-[1rem]">VIP Package:
</p>
<p>Up to 7 times more clients for ads 
</p>
<p>Promotion in search results and categories
</p>
<p>Auto-renew ads every 12 hours
</p>
<p>10 VIP TOP+
</p> 
</div> : ""}


<div className="px-[1rem] faq  flex justify-between">
<h2 className=" py-[1rem]" onClick={() => { setfaq11(!faq11)}}>How to buy Premium Services</h2>
       <svg viewBox="0 0 1024 1024" width="15px" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000"></path></g></svg>
     
</div>
     
       {faq11 ? <p className="p-[1rem] border-t">To buy Premium Services, click here, select the category that fits your product best and check out available Packages.

As soon as you choose the Package and the duration of the promotion that meet your needs and budget, simply click on the "Buy" button to proceed with the purchase.

You can also pay for the Package via bank using an invoice. To get the invoice, click on the "Get payment details" button. The download will start shortly after that.

If you feel unsure of the Package to choose, request a call from the Jiji Manager for a recommendation.</p> : ""}
       
<div className="px-[1rem] pb-[5rem]  flex justify-between">
<h2 className=" py-[1rem]">How can I protect myself from being scammed?</h2>
       <svg viewBox="0 0 1024 1024" width="15px" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000"></path></g></svg>
     
</div>
       
       
    </div> );
}

