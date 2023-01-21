import { createContext } from "react";

export const Signin = createContext({
    signin :false,
    change : ()=>{

        this.signin = !this.signin;
    }
});
