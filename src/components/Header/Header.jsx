import './Header.css';

function Header(props) {
    
    async function getStatsGitHub(username) {
        let response = await fetch(`https://api.github.com/users/${username}`);
        let responseJson = await response.json();
        console.log(responseJson);
        props.getStats(responseJson);
    }

    function getName() {
        getStatsGitHub(document.querySelector(".form-control").value);
    }

    return (
        <div className="Header">
            <div class="input-group">
                <input type="text" class="form-control" aria-label="Text input with segmented dropdown button" placeholder={props.placeholder} />
                <button type="button" class="btn btn-outline-secondary" onClick={getName}>
                    <i class="fas fa-search"></i>
                </button>
            </div>
        </div>
    );
}

export default Header;