
import './Hero.css'; // Create a CSS file for styling
import React, { useState } from 'react';




const Hero = () => {



    const [isSignUp, setIsSignUp] = useState(false);

    const toggleForm = () => {
        setIsSignUp(prevState => !prevState);


    }


  return (
    <>
    <div className='mainconatainer'>

        <div>
        <section className="hero-section" >
      
      <div className="hero-content">
        
        
        <div className="text-content">
          <h5>Our people and society</h5>
          <h1>
            Best Treatment for <span className="highlight">healthy life</span>
          </h1>
          <p>
          Effortlessly empower seamless healthcare solutions with CareHub’s holistic virtual clinic platform.<br />
          Dynamically streamline access to personalized care pathways and optimize patient engagement  <br />
          for critical health outcomes across all wellness journeys.
          </p>
          <button className="cta-button">View All Services</button>
        </div>
      </div>
    </section>
        </div>


        <div className='right-div'> 

        <main>
                <div className="container">
                    {/* Sign In Form */}
                    {!isSignUp && (
                        <div className="form-container sign-in-container">
                            <form>
                                <h1>Sign In</h1>
                                <input type="email" placeholder="Email" required />
                                <input type="password" placeholder="Password" required />
                                <button type="submit">Sign In</button>
                                <p>
                                    Don't have an account? <span onClick={toggleForm}>Sign Up</span>
                                </p>
                            </form>
                        </div>
                    )}

                    {/* Sign Up Form */}
                    {isSignUp && (
                        <div className="form-container sign-up-container">
                            <form>
                                <h1>Sign Up</h1>
                                <label htmlFor="">Card type</label>
                                <select name="" id="">
                                    <option value="">Individual</option>
                                    <option value="">Family</option>
                                </select>
                                <input type="text" placeholder="Full-Name" required />
                                <input type="email" placeholder="Email" required />
                                <input type='text' placeholder='Mobile-Number' required  />
                                <input type="password" placeholder="Password" required />
                                <p>Please upload a picture:</p>
                                <input type="file" accept="image/*" required />
                                <button type="submit">Sign Up</button>
                                <p>
                                    Already have an account? <span onClick={toggleForm}>Sign In</span>
                                </p>
                            </form>
                        </div>
                    )}
                </div>
            </main>

        </div>

    </div>
    </>
  );
};

export default Hero;
