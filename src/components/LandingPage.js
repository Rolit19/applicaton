import React from 'react';
import './LandingPage.css';
import HomeImg from '../img/course.png';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import Skrill from '../img/skrill.jfif';
import Google from '../img/google.jfif';
import Amazon from '../img/amazon.jfif';
import Nothern from '../img/nothern.png';


const LandingPage = () => {
    return (
        <div className="Home">
            <div className="Home_Header">
                <div className="Home_Img">
                    <img src={HomeImg} alt="image" />
                </div>
                <div className="Home_Intro">
                    <div className="Home_txt">
                        <h1>Don't worry.<br/>We are here for every Solution.</h1>
                        <p>Bushwick meh Blue Bottle pork belly mustache skateboard 3 wolf<br/>moon. Actually beard single-origin coffee, twee 90's PBR Echo Park</p>
                        <button className="Home_button">
                            Get Started
                        </button>
                        <div className="Home_feild">
                            <p style={{fontSize:"1.8rem",color:"blue"}}><PlayCircleFilledIcon/>Watch now</p>
                        </div>
                        <div>
                            <p style={{fontSize:"2rem"}}>
                                Integrations
                                <img src={Amazon} alt="image" style={{width:"100px",height:"30px", marginLeft:"20px"}}/>
                                <img src={Google} alt="image" style={{width:"100px",height:"30px",marginLeft:"20px"}}/>
                                <img src={Nothern} alt="image" style={{width:"100px",height:"30px",marginLeft:"20px"}}/>
                                <img src={Skrill} alt="image" style={{width:"100px",height:"30px",marginLeft:"20px"}}/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;