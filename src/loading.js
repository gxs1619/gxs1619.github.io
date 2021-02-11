import React from "react";
import './App.css';
import ReactLoading from "react-loading";
import {GitHub, Linkedin} from "react-feather";
import HamburgerMenu from "react-hamburger-menu";
import Jump from 'react-reveal/Jump';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { Player } from 'video-react';
import "../node_modules/video-react/dist/video-react.css";
import Video from './castlydemo.mp4';
import Image from './castlylogo.png';
import Slide from 'react-reveal/Slide';

export default class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: undefined,
            textIdx: -1,
            showMenu: false,
            currentExpID: "mindex",
            items: [
                {
                    id: "mindex",
                    name: "Mindex"
                },
                {
                    id: "halcyon",
                    name: "Halcyon Developers"
                },
                {
                    id: "transcat",
                    name: "Transcat"
                },
                {
                    id: "seibold",
                    name: "Seibold Security"
                }
            ]
        };
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    componentDidMount() {
        this.timeout = setInterval(() => {
            let currentIdx = this.state.textIdx;
            this.setState({textIdx: currentIdx + 1, done: true});
        }, 2500);
    }

    componentDidUnmount() {
        clearInterval(this.timeout);
    }

    handleClick() {
        document.getElementById("mobileMenu").style.transitionDuration = "1s"
        if (!this.state.showMenu) {
            document.getElementById("mobileMenu").style.transform = "translate3d(0%, 0, 0)"
            document.getElementById("mobileBlurMenu").style.display = "flex"
        } else {
            document.getElementById("mobileBlurMenu").style.display = "none"
            document.getElementById("mobileMenu").style.transform = "translate3d(100%, 0, 0)"
        }
        this.setState({
            showMenu: !this.state.showMenu
        });
        if (this.state.done) {
            this.timeout = setInterval(() => {
                document.getElementById("App-nav").style.transitionDuration = "0s"
            }, 1000);
        }
    }

    handleScroll(id) {
        var element = document.getElementById(id);
        element.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
        this.handleClick()
        this.setState({
            showMenu: false
        })

    }

    handleScrollDesktop(id) {
        var element = document.getElementById(id);
        element.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
        this.setState({
            showMenu: false
        })

    }

    handleExperienceToggle(item) {
        let id = item.id;
        let oldId = this.state.currentExpID;
        document.getElementById("experienceContainer" + oldId).style.display = "none";
        document.getElementById("experienceContainer" + id).style.display = "flex";
        this.setState({
            currentExpID: id.toString()
        })
    }

    render() {
        const textArray = ['Software', 'Websites', 'Web Applications', 'Desktop Applications', 'Mobile Apps', 'APIs', 'Databases'];
        let changingSoftwareText = textArray[this.state.textIdx % textArray.length];
        return (
            <div>
                {!this.state.done ? (
                    <div className="loadingContainer">
                        <div className="loadingContent">
                            <ReactLoading type={"bars"} color={"#00FF00"}/>
                        </div>
                    </div>
                ) : (
                    <div>
                        <header className="App-header">

                            <div className="helloText" style={{alignItems: "baseline", lineHeight: "0vw"}}>
                                <Jump>
                                    <h1 style={{
                                        color: "#00FF00",
                                        marginRight: "1vw",
                                        fontSize: "8vw"
                                    }}>Hello,</h1>
                                </Jump>
                                <Fade right>
                                    <h1 style={{color: "white", bottom: 0, fontSize: "4vw"}}>my name is
                                        Griffin</h1>
                                </Fade>
                            </div>
                            <div className="makeText">
                                <h3>and I build <span style={{color: "#00FF00"}}>{changingSoftwareText}</span>
                                </h3>
                            </div>
                            <div className="aboutText">
                                <Zoom left>
                                    <div className="aboutWrapper">
                                        <p style={{
                                            paddingLeft: "2vw",
                                            paddingRight: "2vw",
                                            letterSpacing: ".1vw",
                                            lineHeight: "3vh"
                                        }}>
                                            I'm a software engineering student at RIT hoping
                                            to graduate in May 2022. I'm pursuing two minors
                                            in Economics and Business Administration.
                                        </p>
                                        <p style={{
                                            paddingLeft: "2vw",
                                            paddingRight: "2vw",
                                            letterSpacing: ".1vw",
                                            lineHeight: "3vh"
                                        }}>
                                            Located in Rochester, NY.
                                        </p>
                                    </div>
                                </Zoom>
                            </div>
                            <div className="connectWrapper">
                                <div className="connectContent">
                                    <a href={"https://www.linkedin.com/in/griffinseibold/"}>
                                        connect with me
                                    </a>
                                </div>
                            </div>
                            <div className="experienceWrapper">
                                <div className="experienceContent">
                                    <div className="experienceLinkContainer">
                                        <a id="experience"/>
                                    </div>
                                    <h1>Where I've worked</h1>
                                    <div className="experienceBox">
                                        <div className="experienceNav">
                                            <ul id="experienceList">
                                                {this.state.items.map((item, i) =>
                                                    <li className='list-group-item' key={i} data-id={item.id}>
                                                        <button
                                                            onClick={() => this.handleExperienceToggle(item)}
                                                            className='list-group-item-btn'>
                                                            {item.name}
                                                        </button>
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                        <div className="experienceContainermindex"
                                             id="experienceContainermindex">
                                            <ul id="mindexList">
                                                <li className='mindex-list-group-item' key={"mindex1"}
                                                    data-id={"mindex1"}>
                                                    <p>This is just a bunch of garbage text
                                                        to be a placeholder because I need to see
                                                        how pretty this site can be in all its glory
                                                        and if it succeeds Ill be v happy</p>
                                                </li>
                                                <li className='mindex-list-group-item' key={"mindex2"}
                                                    data-id={"mindex2"}>
                                                    <p>This is just a bunch of garbage text
                                                        to be a placeholder because I need to see
                                                        how pretty this site can be</p>
                                                </li>
                                                <li className='mindex-list-group-item' key={"mindex3"}
                                                    data-id={"mindex3"}>
                                                    <p>This is just a bunch of garbage text
                                                        to be a placeholder because I need to see
                                                        how pretty this site can be in all its glory
                                                        and if it succeeds Ill be v happy. Except for
                                                        when I got really mad that one time and caused a
                                                        ruckus</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="experienceContainerhalcyon"
                                             id="experienceContainerhalcyon">
                                            <ul id="halcyonList">
                                                <li className='halcyon-list-group-item' key={"halcyon1"}
                                                    data-id={"halcyon1"}>
                                                    <p>Castly is fuckin awesome and I loved it so much
                                                    that i stopped working on it! RIP Castly, may he
                                                    rise again one day</p>
                                                </li>
                                                <li className='halcyon-list-group-item' key={"halcyon2"}
                                                    data-id={"halcyon2"}>
                                                    <p>This just is here</p>
                                                </li>
                                                <li className='halcyon-list-group-item' key={"halcyon3"}
                                                    data-id={"halcyon3"}>
                                                    <p>T
                                                        ruckus lmao</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="experienceContainertranscat"
                                             id="experienceContainertranscat">
                                            <ul id="transcatList">
                                                <li className='transcat-list-group-item' key={"transcat1"}
                                                    data-id={"transcat1"}>
                                                    <p>This i
                                                        and if it succeeds Ill be v happy</p>
                                                </li>
                                                <li className='transcat-list-group-item' key={"transcat2"}
                                                    data-id={"transcat2"}>
                                                    <p>This is ecause I need to see
                                                        how pretty this site can be</p>
                                                </li>
                                                <li className='transcat-list-group-item' key={"transcat3"}
                                                    data-id={"transcat3"}>
                                                    <p> placeholder because
                                                        ruckus</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="experienceContainerseibold"
                                             id="experienceContainerseibold">
                                            <ul id="seiboldList">
                                                <li className='seibold-list-group-item' key={"seibold1"}
                                                    data-id={"seibold1"}>
                                                    <p>IOT security system with wifi that
                                                    will blow your socks right off your
                                                    feet.</p>
                                                </li>
                                                <li className='seibold-list-group-item' key={"seibold2"}
                                                    data-id={"seibold2"}>
                                                    <p>More filling of space is needed to look
                                                    good</p>
                                                </li>
                                                <li className='seibold-list-group-item' key={"seibold3"}
                                                    data-id={"seibold3"}>
                                                    <p>No more ruckus... oooops</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="projects-wrapper">
                                <div className="projectsLinkContainer">
                                    <a id="projects"/>
                                </div>
                                <div className="projects-container">
                                    <div className="castly-container">
                                        <div className="castlyTxt">
                                            C A S T L Y
                                        </div>
                                        <div className="castly-content">
                                            <div className="castlyImg">
                                                <img alt="Castly logo" src={Image} style={{width: '20vw', height: 'auto'}}/>
                                            </div>
                                            <div className="castlyDesc">
                                                <p style={{textAlign: 'left', paddingBottom: '2vh'}}>
                                                    Castly is a podcast platform aimed at bridging the gap
                                                    between watching a podcast on Youtube and listening to the
                                                    audio version. Seamlessly switch between audio and video versions
                                                    of a podcast all within a single app.
                                                </p>
                                                <p style={{textAlign: 'left', paddingBottom: '3vh'}}>
                                                    Tools used: React Native, AWS, C#, Go
                                                </p>
                                            </div>
                                            <div className="castlyVid">
                                                <iframe width="560" height="315"
                                                        src="https://www.youtube.com/embed/s5Vnz1P7wkU" frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-wrapper">
                                <div className="contactLinkContainer" style={{paddingBottom: '10vh'}}>
                                    <a id="contactA"/>
                                </div>
                                <div className="contact-container">
                                    <div className="contactForm">
                                        <div className="form-container">
                                            <form id="contact" action="https://formspree.io/griffinseibold@gmail.com"
                                                  method="POST">
                                                <h3>Contact</h3>
                                                <h4>Fill out the fields below</h4>
                                                <fieldset>
                                                    <input name="name" placeholder="Your name" type="text" tabIndex="1" required autoFocus/>
                                                </fieldset>
                                                <fieldset>
                                                    <input name="email" placeholder="Your Email Address" type="email"
                                                           tabIndex="2" required/>
                                                </fieldset>
                                                <fieldset>
                                                    <input name="subject" placeholder="Subject" type="text" tabIndex="3"
                                                           required autoFocus/>
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
                                </div>
                            </div>
                            <div className="footer-wrapper">
                                <div className="footer-container">
                                    <div className="footerCopyright">
                                        Handcrafted by Griffin Seibold 2021
                                    </div>
                                </div>
                            </div>
                            <div className="nav-wrapper">
                                <div className="navDesktop">
                                    <div className="navWrapperDesktop">
                                        <div className="socialMediasDesktop">
                                            <a href="https://github.com/gxs1619" style={{marginRight: "10px"}}><GitHub/></a>
                                            <a href="https://www.linkedin.com/in/griffinseibold/"><Linkedin/></a>
                                        </div>
                                        <button className="stylelessBtn" onClick={() => this.handleScrollDesktop("home")} style={{marginRight: "5vw"}}>
                                            <div className="navDesktopHomeWrapper">
                                                Home
                                            </div>
                                        </button>
                                        <button className="stylelessBtn" onClick={() => this.handleScrollDesktop("experience")} style={{marginRight: "5vw"}}>
                                            <div className="navDesktopExperienceWrapper">
                                                Experience
                                            </div>
                                        </button>
                                        <button className="stylelessBtn" onClick={() => this.handleScrollDesktop("projects")} style={{marginRight: "5vw"}}>
                                            <div className="navDesktopProjectsWrapper">
                                                Projects
                                            </div>
                                        </button>
                                        <button className="stylelessBtn" onClick={() => this.handleScrollDesktop("contactA")} style={{marginRight: "7vw"}}>
                                            <div className="navDesktopContactWrapper">
                                                Contact
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div id="mobileMenu">
                                    <div id="mobileBlurMenu" className="mobileBlurMenu"/>
                                    <nav className="App-nav" id="App-nav">
                                        <div className="navWrapperMobile">
                                            <button className="stylelessBtn" onClick={() => this.handleScroll("home")} style={{marginTop: "10vw", fontSize: "5vw"}}>
                                                <div>
                                                    Home
                                                </div>
                                            </button>
                                            <button className="stylelessBtn" onClick={() => this.handleScroll("experience")} style={{marginTop: "10vw", fontSize: "5vw"}}>
                                                <div>
                                                    Experience
                                                </div>
                                            </button>
                                            <button className="stylelessBtn" onClick={() => this.handleScroll("projects")} style={{marginTop: "10vw", fontSize: "5vw"}}>
                                                <div>
                                                    Projects
                                                </div>
                                            </button>
                                            <button className="stylelessBtn" onClick={() => this.handleScroll("contactA")} style={{marginTop: "10vw", fontSize: "5vw"}}>
                                                <div>
                                                    Contact
                                                </div>
                                            </button>
                                            <div className="socialMediasMobile" style={{marginTop: "12vw"}}>
                                                <a href="https://github.com/gxs1619"
                                                   style={{marginRight: "10px"}}><GitHub/></a>
                                                <a href="https://www.linkedin.com/in/griffinseibold/"><Linkedin/></a>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                                <div className="buns" id="buns">
                                    <HamburgerMenu
                                        isOpen={this.state.showMenu}
                                        menuClicked={this.handleClick.bind(this)}
                                        color='#00FF00'
                                        strokeWidth='3'
                                        borderRadius='1'
                                    />
                                </div>
                            </div>
                        </header>
                    </div>
                )}
            </div>
        );
    }
}