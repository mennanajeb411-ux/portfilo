import React from "react";

function Contact() {
    return (
       
        <section id="contact" className="con1">
            <h1>Get In Touch</h1>

            <div className="contact-container" >

                <div className="left">
                  <img src={`${process.env.PUBLIC_URL}/imgs/pngwing.com.png`} alt="my image" id="ani" />
                </div>

                <div className="right">

                    <div className="inputs">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                    </div>

                    <div className="inputs">
                        <input type="email" placeholder="Email Address" />
                        <input type="text" placeholder="Phone No." />
                    </div>

                    <textarea placeholder="Message"></textarea>

                    <button>Send</button>

                </div>

            </div>
            <section className="subscribe-section">

    <div className="subscribe-card">

        <div className="subscribe-text">
            <h3>
                
                Leave Here Your E-mail
                Address.
            </h3>
        </div>

        <div className="subscribe-input">
            <input
                type="email"
                placeholder="Email Address"
            />

            <button>Submit</button>
        </div>

    </div>

</section>


<footer>

    <div className="footer-container">

        <h1>LOGO</h1>

        <div className="footer-right">

            <div className="footer-icons">

                <i className="fa-brands fa-linkedin-in"></i>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-instagram"></i>

            </div>

            <p>
                Copyright © 2026. All Rights Reserved.
            </p>

        </div>

    </div>

</footer>
        </section>
       
    );
}

export default Contact;