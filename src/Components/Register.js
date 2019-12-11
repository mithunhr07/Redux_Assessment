import React, { Component } from 'react';
import {} from '../Actions/Registeraction';
class Register extends Component {
    render() {
        return (
            <div>
                <form>
                <label>FirstName:</label>
		        <input type="text" name="FirstName" placeholder="Enter Firstname"></input><br></br><br></br>
                <label>LastName:</label>
		        <input type="text" name="LastName" placeholder="Enter Lastname"></input><br></br><br></br>
                <label>UserName:</label>
		        <input type="text" name="UserName" placeholder="Enter Username"></input><br></br><br></br>
                <label>Password:</label>
		        <input type="text" name="password" placeholder="Enter your password"></input><br></br><br></br>
                <button type="Register" value="Register">Register</button>
                <button type="Cancel" value="Cancel">Cancel</button>
                
                </form>
            </div>
        );
    }
}
const mapStoreToProps=(state)=>
{
const {FirstName, LastName, UserName, password}=state.RegisterReduce;
return {FirstName, LastName, UserName, password};
};
export default connect(mapStoreToProps,{})(Register);