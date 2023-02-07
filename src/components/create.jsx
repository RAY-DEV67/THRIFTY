import app from "../config/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export function EmailAndPassword() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const auth = getAuth();

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("succesfully created account");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        alert(errorCode);
        // ..
      });
  };

  return (
    <form>
      <div className="flex flex-col">
        <label for="email" className="mt-[1rem]">
          Email:
        </label>
        <input
          type="text"
          id="email"
          placeholder="Thrift@google.com"
          className="rounded-[20px] mt-[1rem] p-[0.5rem]"
          // onChange={(e) => {setemail(e.target.value)}}
        />
      </div>

      <div className="flex flex-col">
        <label for="password" className="mt-[1rem]">
          Password:
        </label>
        <input
          type="password"
          id="email"
          placeholder="Thrift@google.com"
          className="rounded-[20px] mt-[1rem] p-[0.5rem]"
          // onChange={(e) => {setpassword(e.target.value)}}
        />
      </div>

      <input
        type="submit"
        className="login-btn cursor-pointer rounded-[20px] w-[100%] py-[0.3rem] mt-[2rem] flex justify-center"
        value="SIGN UP"
        onClick={signUp}
      />
      <input
        type="submit"
        className="login-btn cursor-pointer rounded-[20px] w-[100%] py-[0.3rem] mt-[2rem] flex justify-center"
        value="SIGN IN"
      />
    </form>
  );
}
