import { useEffect, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase-auth";


function SigninPage (){

    let [email,setEmail] = useState(' ');
    let [password,setPass] = useState('');
    let [obj,setObj] = useState({email:' ',password:' '});

    let [show,setShow] = useState(false);



     function signin(e){

        e.preventDefault();

        let r= email;
        let s= password;

        setEmail(' ');
        setPass('');

        setObj({email:r , password:s});
        
        

    }


    useEffect(()=>{

        const auth = getAuth(app);

        if(obj.email !== ' ' && obj.password!== ''){

            console.log(obj.email, " ", obj.password);

            signInWithEmailAndPassword(auth, obj.email, obj.password)
            .then(() => {
                
                console.log('signed in');
                
                setShow(true);
                
            })
            .catch((error) => {
                console.log('error');
            });

        }

        

            
    },[obj])

    return <>
    <h2>
    Sign-In Page

    <div>

        <form onSubmit={(e)=>signin(e)}>
        <label>Email : </label>
        <input

        id="email"
        name = "email"
        type= "email"
        value={email}
        onChange = {(event)=>setEmail(event.target.value)}
        />

        
        <label>Password : </label>
        <input
        id="password"
        name="password"
        type = "password"
        value={password}
        onChange = {(event)=>setPass(event.target.value)}
        />
        <button type = "submit" >Signin</button>
        </form>

        {show && <h2>Sign-in Successful</h2>}
    </div>
    </h2></>

}

export default SigninPage;