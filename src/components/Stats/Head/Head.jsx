import './Head.css';

function Head(props) {

    return (
        <div className="Head" >
            <div className="imageUser">
                <img src={props.stats.avatar_url} title="User profile picture" alt="User profile picture" />
            </div>
            <div className="name">
                <span title={props.stats.name}>
                    {props.stats.name}
                </span>
            </div>
            <div className="userName">
                <span title='Access user Github profile'>
                    <a href={`https://github.com/` + props.stats.login} target="_blank" rel="noopener noreferrer">
                        {props.stats.login}
                    </a>
                </span>
            </div>
            <img src={`https://visitor-badge.glitch.me/badge?page_id==${props.stats.login}.visitor-badge`} alt="" />
        </div>
    );
}

export default Head;