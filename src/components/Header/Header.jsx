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
                <input list="list-Users" type="text" class="form-control" aria-label="Text input with segmented dropdown button" placeholder={props.placeholder} />
                <button type="button" class="btn btn-outline-secondary" onClick={getName}>
                    <i class="fas fa-search"></i>
                </button>
            </div>
            <datalist id="list-Users">
                <option value="brenoalvim" />
                <option value="matthew-sbrito" />
            </datalist>
        </div>
    );
}

export default Header;