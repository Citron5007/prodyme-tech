const Hero = (props) => {
    return (
    <div className="hero-container">
        <img id="StoryImg" src={props.src} alt="img"/>
        <div className="hero-text">
            <h2 id='hText'>{props.title}</h2>
            <p id='para'>{props.caption}</p>
            <a id="article-action" href="#"> Call To Action here</a>
        </div>
    </div>
    )
}

export default Hero