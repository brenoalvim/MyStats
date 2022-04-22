import './Header.css';

function Header(props) {

    async function getStatsGitHub(username) {
        let response = await fetch(`https://api.github.com/users/${username}`);
        let responseJson = await response.json();
        props.getStats(responseJson);
        document.querySelector(".form-control").value = ``;
        sessionStorage.setItem('username', document.querySelector(".form-control").value);
    }

    function getName() {
        getStatsGitHub(document.querySelector(".form-control").value);
    }
    return (
        <div className="Header">
            <div class="input-group">
                <input list="list-Users" type="text" class="form-control" aria-label="Text input with segmented dropdown button" placeholder={props.placeholder} />
                <button title='search user' type="button" class="btn btn-outline-secondary" onClick={getName}>
                    <i class="fas fa-search"></i>
                </button>
            </div>
            <datalist id="list-Users">
                <option value="brenoalvim" />
                <option value="matthew-sbrito" />
                <option value="viniciochavess" />
                <option value="ericqueirozc" />
                <option value="torvalds" />
                <option value="filipedeschamps" />
                <option value="fabiohora" />
                <option value="nynonet" />
                <option value="rafaballerini" />
            </datalist>
        </div>
    );
}

export default Header;