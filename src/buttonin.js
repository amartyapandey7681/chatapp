import { Signin } from './context'

function buttonin(){

    return <Signin.Provider >
            <button type="button" >Sign-In</button>
    </Signin.Provider>
}

export default buttonin;