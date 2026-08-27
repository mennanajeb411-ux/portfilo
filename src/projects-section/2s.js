import React from "react";

function Second() {
    return (
        <section id="contact">
            <h1>Get In Touch</h1>

            <div className="contact-container">

                <div className="left">
                   <img src="/imgs/pngwing.com.png" alt="my image" />
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
        </section>
    );
}

export default Second;