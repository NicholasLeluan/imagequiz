import React from 'react';
import{
    Link
}from "react-router-dom"
import './Home.css';
import daffodil from "./images/daffodil.png";
import cherryblossum from "./images/cherryblossom.png";
import daisy from "./images/daisy.jpg";
import lily from "./images/lily.jpg";
import rose from "./images/rose.png";
import sunflower from "./images/sunflower.png";
import tulip from "./images/tulip.png";
import waterlily from "./images/waterlily.png";

class Home extends React.Component{
    //Here is the state, this needs a constructor
    //states are used to change the website dynamically based
    //on parameters.
    constructor(props){
        super(props);
        this.state = {
            username:''
        };
    }


    render(){
        let user = '';
        const location = this.props.location
        if(location){
            if (location.state){
                if (location.state.user){
                    user = location.state.user;
                }
            }
        }
                {/*user = location.state.user ? location.state.user : '' ;*/}

        return(
            
            <div>
                {/*<div className='loginButton'>*/}
                    {user.length > 0 ? 
                    <div className='loggedinContainer'>
                        <div className='loggedinMessage'>
                        <b>Hello, {user}!</b><br/>
                        check out these flowers!<br/>
                        <Link to='/imagequiz/' >Log Out</Link>
                        </div>
                     </div>
                    : <div className='loginButtonContainer'>
                        <div className='loginButton'>
                        <Link to='/login'>Login</Link>
                        </div>
                        </div>}
                    {/*use the this becasue you are referring to a 
                    function inside of the current class*/}
                    <div class="disclaimer">CLICK THE DAFFODIL, CHERRYBLOSSUM, or DAISY IMAGE FOR QUIZ QUESTIONS!!</div>
                    <div className='flowerDiv'>
                        
                        <table>
                        <tr>
                            <td><Link to="/quizzes"><img src={daffodil}/></Link><br />Daffodil</td>
                            <td><Link to= '/quizzes2'><img src={cherryblossum}/></Link><br/>Cherryblossum</td>
                            <td><Link to= '/quizzes3'><img src={daisy}/></Link><br/>Daisy</td>
                            <td><img src={lily}/><br/>Lily</td>
                        </tr>
                        <tr>
                            <td><img src={rose}/><br/>Rose</td>
                            <td><img src={sunflower}/><br/>Sunflower</td>
                            <td><img src={tulip}/><br/>Tulip</td>
                            <td><img src={waterlily}/><br/>Waterlily</td>
                        </tr>
                        </table>
                    
                    </div>
                    A change has been made
                </div>


        );
                }
            }
                
    

//This line is needed. This allows other components to use this component
export default Home;