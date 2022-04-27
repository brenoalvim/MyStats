import './Header.css';

import { useEffect } from 'react';

function Header(props) {

    useEffect(() => {
        let sessionUser = sessionStorage.getItem('username');
        if (sessionUser) {
            getStatsGitHub(sessionUser);
            window.sessionStorage.setItem("username", sessionUser);
        } else {
            getStatsGitHub("brenoalvim");
            window.sessionStorage.setItem("username", "brenoalvim");
        }
    }, []);

    async function getStatsGitHub(username) {
        let response = await fetch(`https://api.github.com/users/${username}`);
        let responseJson = await response.json();
        props.getStats(responseJson);
        saveUsername();
    }

    function saveUsername() {
        let value = document.querySelector(".form-control").value;
        window.sessionStorage.setItem("username", value);
    }

    function getName() {
        getStatsGitHub(document.querySelector(".form-control").value);
    }

    function removeUser() {
        document.querySelector(".form-control").value = "";
        window.sessionStorage.removeItem("username");
    }
    return (
        <div className="Header">
            <div class="input-group">
                <input list="list-Users" type="text" class="form-control" aria-label="Text input with segmented dropdown button" placeholder={props.placeholder} />
                <button title='search user' type="button" class="btn btn-outline-secondary" onClick={getName}>
                    <i class="fas fa-search"></i>
                </button>
                <button title='search user' type="button" class="btn btn-outline-secondary" onClick={removeUser}>
                    <i class="fa-solid fa-delete-left"></i>
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