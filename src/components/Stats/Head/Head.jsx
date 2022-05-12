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
            <img src={`https://img.shields.io/github/followers/${props.stats.login}?logo=github&style=for-the-badge&color=0891b2&labelColor=1c1917`} alt="" />
        </div>
    );
}

export default Head;