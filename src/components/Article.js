const Article = (props) => {
    return (
    <div className="article-container">
        <img id="artimg" src={props.src} alt="img"/>
        <div>
            <h2 id="article-txt">{props.title}</h2>
            <p id="article-txt">{props.caption}</p>
            <a id="article-action" href="#"> Call To Action here</a>
        </div>
    </div>
    )
}

export default Article