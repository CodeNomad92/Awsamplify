
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react'
Amplify.configure(awsconfig);
function App() {
  return (
    <div className="App" id="appBpdy">
      <img src="src\images\US-supreme.png" alt="Supreme Court" ></img>
<h3 id="toph">Welcome to the claim management </h3>


      <header className="App-header">
        
        <div id='main'>
        <div id='nav'>
        <ul id='Menu'>
          <li><a href="#">Home</a>
            
          </li>
          <li> <a href="#"> Services</a>
            
          </li>
          <li><a href="#"> Claims</a>
            <ul>
              <li>Property</li>
              <li>Insurance</li>
              <li>Health</li>

            </ul>
          </li>
          <li><a href="#"> About us</a>
            
          </li>
        </ul>
        </div>
        <div id="bodyData"> 
        Civil Litigation Management Manual<br/>
The Civil Litigation Management Manual, Second Edition (2010) provides trial judges a handbook on managing civil cases.<br/>

The second edition of the Civil Litigation Management Manual, which was approved by the Judicial Conference of the <br/>
United States at its March 2010 session, was prepared under the direction of the Judicial Conference Committee on Court Administration <br/>
and Case Management during the chairmanship of Judges Julie A. Robinson and John R. Tunheim, with substantial contributions by the Administrative Office of the U.S. <br/>
Courts and the Federal Judicial Center. The manual was updated for United States judges to help them secure “the just,<br/>
 speedy and inexpensive determination of every action.”<br/>
<a href="https://www.uscourts.gov/statistics-reports/publications/civil-litigation-management-manual">You can visit think link for more details</a> 
        
        
        </div><br/>
        <div id='midShell'>
          <h3>Share the claim details</h3>
          <form action="#" method="post" action="mailto:santosh.jadhav@theinnoconsult.com" id="submitClaim">
                        <input placeholder="First Name" name="Name" type="text" required=""/>
                              <br/>
                        <input placeholder="Last Name" name="Name" type="text" required=""/>
                        <br/>
                        <input placeholder="Phone Number" name="Number"type="text" required=""/>
                              <br/>
                        <input placeholder="Email" name="mail" type="text" required=""/>
                              <br/>
                        
                        <textarea placeholder="Enter Claim Info"></textarea>
                        <br/>
                        <input type="submit" value="Submit Claim Details"/>
                     
            </form>
        </div>
        <div id='bottomShell'> Copyright@2021, claimManagement... </div>

        <AmplifySignOut/>
        
        
        </div>

      </header>
      
    </div>
    
  );
}

export default withAuthenticator(App);
