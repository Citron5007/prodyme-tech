const SocialLink = (props) => {
    return(
        <a href={props.link}>
            <img id="icon" src={props.icon} alt="icon"/>
        </a>
        ) 
        
}
export default SocialLink