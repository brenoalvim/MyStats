import './Github.css';

function Github(props) {

    return (
        <div className="Github" >
            <div className="hr"></div>
            <div className="title">
                <span>
                    Public Information (from GitHub)
                </span>
            </div>
            <div className="tablePublicInfo">
                <div className="row">
                    <div className="rowInfo">
                        <span>
                            Location
                        </span>
                        <span>
                            <strong>
                                {props.stats.location}
                            </strong>
                        </span>
                    </div>
                </div>
            </div>
            <div className="tablePublicInfo">
                <div className="row">
                    <div className="rowInfo">
                        <span>
                            Company
                        </span>
                        <span>
                            <strong>
                                {props.stats.company}
                            </strong>
                        </span>
                    </div>
                </div>
            </div>
            <div className="tablePublicInfo">
                <div className="row">
                    <div className="rowInfo">
                        <span>
                            Followers
                        </span>
                        <span>
                            <strong>
                                {props.stats.followers}
                            </strong>
                        </span>
                    </div>
                </div>
            </div>
            <div className="tablePublicInfo">
                <div className="row">
                    <div className="rowInfo">
                        <span>
                            Following
                        </span>
                        <span>
                            <strong>
                                {props.stats.following}
                            </strong>
                        </span>
                    </div>
                </div>
            </div>
            <div className="tablePublicInfo">
                <div className="row">
                    <div className="rowInfo">
                        <span>
                            Public Repositories
                        </span>
                        <span>
                            <strong>
                                {props.stats.public_repos}
                            </strong>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Github;