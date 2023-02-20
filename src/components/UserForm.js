import React, { useState } from  'react';


const UserForm = ( ) => {
    const [fname, setFname] = useState("");
    const [fnameError, setFnameError] = useState("") ;
    const [lname, setLname] = useState("");
    const [lnameError, setLnameError] = useState("") ;
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");  
    const [passwordError, setPasswordError] = useState("");  

    const handleLname = (e) => {
        setLname(e.target.value);
        if(e.target.value.length < 1) {
            setLnameError("Title is required!");
        } else if(e.target.value.length < 3) {
            setLnameError("Title must be 3 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setLnameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Title is required!");
        } else if(e.target.value.length < 3) {
            setEmailError("Title must be 3 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Title is required!");
        } else if(e.target.value.length < 3) {
            setPasswordError("Title must be 3 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setPasswordError("");
        }
    }

    const handleFName = (e) => {
        setFname(e.target.value);
        if(e.target.value.length < 1) {
            setFnameError("Title is required!");
        } else if(e.target.value.length < 3) {
            setFnameError("Title must be 3 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setFnameError("");
        }
    }

    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values
        const newUser = { fname, email, password};
        console.log("Welcome", newUser);
    };

    
    
    {/* this functionality can be repeated for each input needing validation */}
    
    return (
        <form onSubmit={createUser}>
            
            <div>
                <label>First Name: </label>
                <input type="text" onChange={ handleFName } />
                {
                    fnameError ?
                    <p>{ fnameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={ handleLname } />
                {
                    lnameError&& lname.length>1 ?
                    <p>{ lnameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={ handleEmail } />
                {
                    emailError ?
                    <p>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ handlePassword } />
                {
                    passwordError ?
                    <p>{ passwordError }</p> :
                    ''
                }
            </div>
            {
                fnameError ?
                <input type="submit" value="Create Movie" disabled /> : 
                <input type="submit" value="Create Movie" />
            }
        </form>

    );
}
export default UserForm;