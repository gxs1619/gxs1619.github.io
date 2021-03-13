import React from "react";
import './App.css';
import Contact from "./contact";
import ReactLoading from "react-loading";
import {GitHub, Linkedin} from "react-feather";
import HamburgerMenu from "react-hamburger-menu";
import Jump from 'react-reveal/Jump';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import {Player} from 'video-react';
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
        window.scrollTo(0, 0);
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
                            <ReactLoading type={"cylon"} color={"#00FF00"} height={167} width={75}/>
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
                                        fontSize: "6vw"
                                    }}>Hello,</h1>
                                </Jump>
                                <Fade right>
                                    <h1 style={{color: "white", bottom: 0, fontSize: "5vw"}}>my name is
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
                                        <h3 style={{
                                            paddingLeft: "2vw",
                                            paddingRight: "2vw",
                                            fontSize: "1.65vh"
                                        }}>
                                            A software engineering student at RIT pursuing
                                            two minors in economics and business administration.
                                            Looking for interesting and complex problems to solve.
                                        </h3>
                                        <p style={{
                                            paddingLeft: "2vw",
                                            paddingRight: "2vw",
                                            fontSize: "1.7vh"
                                        }}>
                                            Located in Rochester, NY.
                                        </p>
                                        <p style={{
                                            paddingLeft: "2vw",
                                            paddingRight: "2vw",
                                            fontSize: "1.5vh"
                                        }}>
                                            Graduation Year: May 2022
                                        </p>
                                    </div>
                                </Zoom>
                            </div>
                            <div className="connectWrapper">
                                <div className="connectContent">
                                    <a href={"https://www.linkedin.com/in/griffinseibold/"}>
                                        Connect With Me
                                    </a>
                                </div>
                            </div>
                            <div className="experienceWrapper">
                                <div className="experienceContent">
                                    <div className="experienceLinkContainer">
                                        <a id="techstack"/>
                                    </div>
                                    <div className="experienceContainer">
                                        <Fade left>
                                            <div className="techStackArea">
                                                <div>
                                                    <h1>
                                                        Tech Stack
                                                    </h1>
                                                </div>
                                                <li>
                                                    C#
                                                </li>
                                                <li>
                                                    Java
                                                </li>
                                                <li>
                                                    SQL
                                                </li>
                                                <li>
                                                    Javascript
                                                </li>
                                                <li>
                                                    KnockoutJS, AngularJS, and ReactJS
                                                </li>
                                                <li>
                                                    .NET Framework and .NET Core
                                                </li>
                                                <li>
                                                    PHP
                                                </li>
                                                <li>
                                                    Python
                                                </li>
                                                <li>
                                                    Node.JS
                                                </li>
                                                <li>
                                                    GoLang
                                                </li>
                                                <li>
                                                    Ruby
                                                </li>
                                            </div>
                                        </Fade>
                                        <Fade right>
                                            <div className="skillsArea">
                                                <div className="knowledgeable">
                                                    <h1>
                                                        Knowledgeable in
                                                    </h1>
                                                </div>
                                                <li>
                                                    Software Development
                                                </li>
                                                <li>
                                                    Agile Methodologies
                                                </li>
                                                <li>
                                                    Software Design Patterns
                                                </li>
                                                <li>
                                                    Containerized Software Deployment
                                                </li>
                                                <li>
                                                    Microservices Architecture
                                                </li>
                                                <li>
                                                    Cloud Architecture
                                                </li>
                                                <li>
                                                    Continuous Integration/Delivery
                                                </li>
                                                <li>
                                                    Version Control
                                                </li>
                                                <li>
                                                    Distributed systems
                                                </li>
                                                <li>
                                                    Algorithms
                                                </li>
                                            </div>
                                        </Fade>
                                    </div>
                                </div>
                            </div>
                            <div className="projects-wrapper">
                                <div className="projectsLinkContainer">
                                    <a id="projects"/>
                                </div>
                                <div className="projects-container">
                                    <Zoom top>
                                        <div className="castly-container">
                                            <div className="castlyTxt">
                                                <h3>
                                                    C A S T L Y
                                                </h3>
                                            </div>
                                            <div className="castly-content">
                                                <div className="castlyImg">
                                                    <img alt="Castly logo" src={Image}
                                                         style={{width: '20vw', height: 'auto'}}/>
                                                </div>
                                                <div className="castlyDesc">
                                                    <p style={{textAlign: 'left', paddingBottom: '2vh'}}>
                                                        Castly is a podcast platform aimed at bridging the gap
                                                        between watching a podcast and listening to the
                                                        audio version. Seamlessly switch between audio and video
                                                        versions
                                                        of a podcast all within a single app.
                                                    </p>
                                                    <p style={{textAlign: 'left', paddingBottom: '3vh'}}>
                                                        Tools used: React Native, AWS, Typescript, C#, Go, MySQL
                                                    </p>
                                                </div>
                                                <div className="castlyVid">
                                                    <iframe width="100%" height="350"
                                                            src="https://www.youtube.com/embed/s5Vnz1P7wkU"
                                                            frameBorder="0"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowFullScreen></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </Zoom>
                                </div>
                            </div>
                            <div className="contact-wrapper">
                                <div className="contactLinkContainer" style={{paddingBottom: '10vh'}}>
                                    <a id="contactA"/>
                                </div>
                                <div className="contact-container">
                                    <Contact/>
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
                                        <button className="stylelessBtn"
                                                onClick={() => this.handleScrollDesktop("home")}
                                                style={{marginRight: "5vw"}}>
                                            <div className="navDesktopHomeWrapper">
                                                Home
                                            </div>
                                        </button>
                                        <button className="stylelessBtn"
                                                onClick={() => this.handleScrollDesktop("techstack")}
                                                style={{marginRight: "5vw"}}>
                                            <div className="navDesktopExperienceWrapper">
                                                Experience
                                            </div>
                                        </button>
                                        <button className="stylelessBtn"
                                                onClick={() => this.handleScrollDesktop("projects")}
                                                style={{marginRight: "5vw"}}>
                                            <div className="navDesktopProjectsWrapper">
                                                Projects
                                            </div>
                                        </button>
                                        <button className="stylelessBtn"
                                                onClick={() => this.handleScrollDesktop("contactA")}
                                                style={{marginRight: "7vw"}}>
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
                                            <button className="stylelessBtn" onClick={() => this.handleScroll("home")}
                                                    style={{marginTop: "10vw", fontSize: "5vw"}}>
                                                <div>
                                                    Home
                                                </div>
                                            </button>
                                            <button className="stylelessBtn"
                                                    onClick={() => this.handleScroll("techstack")}
                                                    style={{marginTop: "10vw", fontSize: "5vw"}}>
                                                <div>
                                                    Experience
                                                </div>
                                            </button>
                                            <button className="stylelessBtn"
                                                    onClick={() => this.handleScroll("projects")}
                                                    style={{marginTop: "10vw", fontSize: "5vw"}}>
                                                <div>
                                                    Projects
                                                </div>
                                            </button>
                                            <button className="stylelessBtn"
                                                    onClick={() => this.handleScroll("contactA")}
                                                    style={{marginTop: "10vw", fontSize: "5vw"}}>
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