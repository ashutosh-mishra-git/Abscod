import './strategy.css';
import "../../../../common/utility.css";
import { FiLoader,FiMessageSquare } from 'react-icons/fi';



export default function Strategy() {
  return (
    <div className="main-container">
    <div className='statergy'>
        <div className="upper">
            <div className="heading">
                <h1>
                We use strategy and experience to generate results
                </h1>
             </div>
            <div className="para">
            <p>
                    Our team specializes in on-page and off-page SEO as well as PPC. We have a proven track record in increasing search engine rankings for our clients. Our strategies are designed to achieve one or more of the following goals:
                </p>
            </div>
        </div>
        <div className="mid">
            <div className="util">
            <div className="icons" style={{backgroundColor:'#c77fe9'}}>
            <FiLoader style={{fontSize:"3rem", margin:"22px" , color:"white"}} />
                </div>
                <div className="util__content">
                <h2>
                Call To Action
                    </h2>
                    <p>
                    Inspire the target audience from social networks to visit your website 
                    </p>
                </div>
            </div>
            <div className="util">
                    <div className="icons" style={{backgroundColor:'#faba60'}}>
                    <FiMessageSquare style={{fontSize:"3rem", margin:"22px" , color:"white"}} />
                    </div>
                <div className="util__content">
                <h2>
                    Engage
                    </h2>
                    <p>
                    Encourage dialogue and coverage from influential people and sites.
                    </p>
                </div>
            </div>
            <div className="util">
            <div className="icons" style={{backgroundColor:'#64d1a7'}}>
            <i class="fa-regular fa-heart"></i>  
            </div>
            <div className="util__content">
                <h2>
                Inspire
                    </h2>
                    <p>
                    Inspire the target audience to visit your website from social networks.
                    </p>
                </div>
            </div>
        </div>
        <div className="lower">
            <div className="leftpar pd1">
                <p>
                We can help you achieve great results across several key areas including Search Engine Optimization, Social Media Marketing, Email Marketing and Digital Marketing.
                </p>
            </div>
            <div className="rightpar pd1">
                <p>
                We combine creative ideas with our vast experience in search technologies to deliver measurable results for our clients. We can help you engaging them with the clients using social media promotion.
                </p>
            </div>
        </div>
    </div>
    </div>
  )
}
