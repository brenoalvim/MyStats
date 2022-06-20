import "./Github.css";

function Github(props) {
  return (
    <div className="Github">
      <div className="hr"></div>
      <div className="title">
        <span>Public Information (from GitHub)</span>
      </div>
      <div className="tablePublicInfo">
        <div className="row">
          <div className="rowInfo">
            <span title="Location">Location</span>
            <span title={props.stats.location}>{props.stats.location}</span>
          </div>
        </div>
      </div>
      <div className="tablePublicInfo">
        <div className="row">
          <div className="rowInfo">
            <span title="Company">Company</span>
            <span title={props.stats.company}>{props.stats.company}</span>
          </div>
        </div>
      </div>
      <div className="tablePublicInfo">
        <div className="row">
          <div className="rowInfo">
            <span title="Followers">Followers</span>
            <span title={props.stats.followers}>{props.stats.followers}</span>
          </div>
        </div>
      </div>
      <div className="tablePublicInfo">
        <div className="row">
          <div className="rowInfo">
            <span title="Following">Following</span>
            <span title={props.stats.following}>{props.stats.following}</span>
          </div>
        </div>
      </div>
      <div className="tablePublicInfo">
        <div className="row">
          <div className="rowInfo">
            <span title="Public Repositories">Public Repositories</span>
            <span title={props.stats.public_repos}>
              {props.stats.public_repos}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Github;
