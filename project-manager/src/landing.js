import React from 'react';
import './css/landing.css';

function Landing(){
    return(
        <div className='content'>
            <h1 className='headerTitle'>Create a New Project.</h1>
            <h3 className='headerSub'> Then get ready for your project to be more organized than ever</h3>
            <form>
                <input type='text' name='pName' placeholder='Project Name'></input>
                <textarea type='text' rows='9' name='pDesc' placeholder='Project Description'></textarea>
                <div className='buttonContainer'>
                    <input type='button' name='pGithubLink' value='Github'></input>
                    <input type='button' name='pFileLocation' value='Location'></input>
                    <input type='button' name='pCreate' value='Create'></input>
                </div>
            </form>
        </div>
    )
}

export default Landing;