import './Head.css';

function Head(props) {

    return (
        <div className="Head" >
            <div className="imageUser">
                <img src={props.stats.avatar_url} alt="" />
            </div>
            <div className="name">
                <span>
                    {props.stats.name}
                </span>
            </div>
            <div className="userName">
                <span>
                    <a href={`https://github.com/` + props.stats.login} target="_blank" rel='noreferrer'>
                        {props.stats.login}
                    </a>
                </span>
            </div>
        </div>
    );
}

export default Head;