import './Outsourced.css';

function Outsourced(props) {

    return (
        <div className="Outsourced" >
            <div className="hr"></div>
            <div className="title">
                <span>
                    Outsourced Information
                </span>
            </div>
            <img src={`https://github-readme-stats.vercel.app/api?username=${props.stats.login}&hide_border=true&count_private=true&show_icons=true&theme=react`} alt="" />
            <img src={`https://github-readme-streak-stats.herokuapp.com/?user=${props.stats.login}&theme=react&hide_border=true`} alt="" />
            <img src={`https://github-readme-stats.vercel.app/api/top-langs?username=${props.stats.login}&show_icons=true&locale=en&layout=compact&hide_border=true&theme=react&langs_count=8`} alt="" />
            <div className="imageW">
                <img src={`https://activity-graph.herokuapp.com/graph?username=${props.stats.login}&bg_color=20232A&color=60D9FA&line=60D9FA&point=f2f2f2&hide_border=true`} alt="" />
                <img src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${props.stats.login}&theme=github_dark&hide_border=true`} alt="" />
            </div>
            <div className="hr"></div>
            <div className="title">
                <span>
                    Awards
                </span>
            </div>
            <div className="imageW">
                <img src={`https://github-profile-trophy.vercel.app/?username=${props.stats.login}&theme=react&margin-w=5&margin-h=5`} alt="" />
            </div>

        </div>
    );
}

export default Outsourced;