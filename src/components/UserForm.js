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
    const [confirmation, setConfirmation] = useState("");  
    const [confirmationError, setConfirmationError] = useState("");  

    const handleLname = (e) => {
        setLname(e.target.value);
        if(e.target.value.length < 1) {
            setLnameError("last name is required!");
        } else if(e.target.value.length < 3) {
            setLnameError("Title must be 2 characters or longer!");
        } else {
            setLnameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("email required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Title must be 5 characters or longer!");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length > confirmation) {
            setPasswordError("Gotta Match!");
        } else if(e.target.value.length < 8) {
            setPasswordError("Title must be 8 characters or longer!");
        } else {
            setPasswordError("");
        }
    }

    const handleConfirmation = (e) => {
        setConfirmation(e.target.value);
        if((e.target.value) > password) {
            setConfirmationError("gotta match!");
        } else {
            setConfirmationError("");
        }
    }

    const handleFName = (e) => {
        setFname(e.target.value);
        if(e.target.value.length < 1) {
            setFnameError("first name!");
        } else if(e.target.value.length < 3) {
            setFnameError("first name must be 3 characters or longer!");
        } else {
            setFnameError("");
        }
    }

    const createUser = (e) => {
        //  prevent the default refresh of the browser
        e.preventDefault();
    
        // create a javascript object to hold all of the values wowza
        const newUser = { fname, email, password};
        console.log("Welcome", newUser);
    };

    
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
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ handleConfirmation } />
                {
                    confirmationError ?
                    <p>{ confirmationError }</p> :
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