import React, { Component } from 'react'
import my_pic from "./sarguna.jpg";
import katomaran from "./kato.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import resume from "./SargunaResume.pdf"
class Portfolio extends Component {
    render() {
        return (
            <div
                className="card_body"
            >
                <div class="card">
                    <div class="card-body text-center" style={{ padding: "0px" }}>
                        <img src={my_pic} style={{ width: "100%" }}></img>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body text-center">
                        <div style={{ display: "flex", alignItems: "center", paddingBottom: "20px" }}>
                            <div style={{ width: "50%", textAlign: "initial" }}>
                                <h2 className="name">Sarguna K</h2>
                                <p class="card-text" style={{ color: "#847d7d" }}>Junior Software Developer</p>
                            </div>
                            <div style={{ width: "50%", display: "flex" }}>
                                <div style={{ width: "12%", textAlign: "center" }}>
                                    <img src={katomaran} className="company_logo"></img>
                                </div>
                                <p class="card-text" style={{ color: "#847d7d" }}>Katomaran Technology and Business Solution</p>
                            </div>
                        </div>
                        <p className="about" >
                            Active Learner, Loves to learn new technologies.
                            Proficient in Full Stack Development .
                            Passionate about implementing and launching new projects.
                        </p>
                        <a href="https://github.com/sarguna07/" target="_blank" style={{ paddingRight: "15px", cursor: "pointer", color: "black" }}>
                            <i class="fa fa-github" aria-hidden="true">
                            </i>
                        </a>
                        <button type="button" class="btn btn-success">
                            <a href={resume} download style={{ color: "white", textDecoration: "none" }}>Resume</a>
                        </button>
                        <a href="https://www.linkedin.com/in/sarguna-k" target="_blank" style={{ paddingLeft: "15px", cursor: "pointer", color: "black" }}>
                            <i class="fa fa-linkedin" aria-hidden="true">
                            </i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Portfolio;
