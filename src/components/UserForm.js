import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmation, setConfirmation] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);  

    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values
        const newUser = { fname, email, password, confirmation};
        console.log("Welcome", newUser);
        setFname("");
        setLname("");
    	setEmail("");
    	setPassword("");

        setHasBeenSubmitted( true );
    };
    const formMessage = () => {
        if( hasBeenSubmitted ) {
	    return "Thank you for submitting the form!";
	} else {
	    return "Welcome, please submit the form";
	}
    };


    return(
        <>
            <form onSubmit={createUser}>
                {
                    hasBeenSubmitted
                    ? <h3>Thank you for submitting the form!</h3>
                    : <h3>Welcome, please submit the form.</h3>
                }
                <div>
                    <label>first name: </label>
                    <input type="text" onChange={(e) => setFname(e.target.value)} value={fname} />
                </div>
                <div>
                    <label>last name: </label>
                    <input type="text" onChange={(e) => setLname(e.target.value)} value={lname} />
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={(e) => setConfirmation(e.target.value)} value={confirmation} />
                </div>
                <input type="submit" value="Create User" />
            </form>
            <p>First Name: {fname}</p>
            <p>Last Name: {lname}</p>
            <p>Password: {password}</p>
            <p>Email: {email}</p>
            <p>Confirm Password: {confirmation}</p>
        </>
    );
};
    
export default UserForm;
