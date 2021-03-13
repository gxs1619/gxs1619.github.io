import React from "react";
import './App.css';

export default class Contact extends React.Component {
    render() {
        return (
            <div className="contactForm">
                <div className="form-container">
                    <form id="contact" action="https://formspree.io/griffinseibold@gmail.com"
                          method="POST">
                        <h3>Contact</h3>
                        <h4>Fill out the fields below</h4>
                        <fieldset>
                            <input name="name" placeholder="Your name" type="text" tabIndex="1" required/>
                        </fieldset>
                        <fieldset>
                            <input name="email" placeholder="Your Email Address" type="email"
                                   tabIndex="2" required/>
                        </fieldset>
                        <fieldset>
                            <input name="subject" placeholder="Subject" type="text" tabIndex="3"
                                   required/>
                        </fieldset>
                        <fieldset>
                            <textarea name="message" placeholder="Type your Message Here...."
                                      tabIndex="4" required/>
                        </fieldset>
                        <fieldset>
                            <button name="submit" type="submit" id="contact-submit"
                                    data-submit="...Sending">Submit
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}
