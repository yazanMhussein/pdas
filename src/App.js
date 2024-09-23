import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";


function App(){
return(
<div>

    <section className="hero is-link">
        <div className="hero-body">
            <p className="title">
            <div>Personal Digital Assistants</div>
            </p>
        </div>
    </section>
    
    
    <div className="container">
    <section className="section">    
    <div className="columns">
    <div className="column is-4">
    <ProfileCard 
    image = {AlexaImage} 
    title = "Alexa"  
    handle = "@alexa99"
    description ="Alexa was created by Amazon and helps you buy things."
    />
    </div>
    <div className="column is-4">
    <ProfileCard 
    image = {CortanaImage}
    title = "Cortana" 
    handle = "@cortana32"
    description ="Cortana was created by Micorsoft and to help you with your tesk."
    />
    </div>
    <div className="column is-4">
    <ProfileCard 
    image = {SiriImage}
    title = "Siri" 
    handle = "@siri01"
    description ="Siri was created by Apple and is on iphone."
    />
    </div>
    </div>
    </section>
    </div>
</div>

);
}

export default App;