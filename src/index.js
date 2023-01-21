import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import SignupPage from './signupPage'
import Signinp from './signin';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from './firebase-auth';


import {Signin} from './context';

import "./index.css";

function App(){

  const auth = getAuth(app);

  const [ori , setOri] = useState(true);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      
      // const uid = user.uid;

      setOri(false)

        
    } else {
      
        setOri(true);
    }
  });

  if(ori){

    return <>
    
    
        <h1>Chat Application</h1>
    
      < Signin.Consumer>
    
        {({signin})=>(
    
          <div>
          {!signin && <SignupPage />}
          {/*{!signin  && <Signinp />}*/}
          </div>
          
        )}
        
        
    
      </Signin.Consumer>
      
    
      </>

  }else{

    return <h2>hello ab chat karo</h2>
  }


}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

