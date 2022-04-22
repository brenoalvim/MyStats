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
                        <span title='Location'>
                            Location
                        </span>
                        <span title={props.stats.location}>
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
                        <span title='Company'>
                            Company
                        </span>
                        <span title={props.stats.company}>
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
                        <span title='Followers'>
                            Followers
                        </span>
                        <span title={props.stats.followers}>
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
                        <span title='Following'>
                            Following
                        </span>
                        <span title={props.stats.following}>
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
                        <span title='Public Repositories'>
                            Public Repositories
                        </span>
                        <span title={props.stats.public_repos}>
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