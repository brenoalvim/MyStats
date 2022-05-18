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
        let response = await fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .catch(error => console.log(error));
        props.getStats(response);
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
                <input list="list-Users"
                    type="text"
                    class="form-control"
                    aria-label="Text input with segmented dropdown button"
                    placeholder={props.placeholder} />
                <button title='search user'
                    type="button"
                    class="btn btn-outline-secondary"
                    onClick={getName}>
                    <i class="fas fa-search"></i>
                </button>
                <button title='search user'
                    type="button"
                    class="btn btn-outline-secondary"
                    onClick={removeUser}>
                    <i class="fa-solid fa-delete-left"></i>
                </button>
            </div>
            <datalist id="list-Users">
                <option value="brenoalvim">
                    Breno Alvim
                </option>
                <option value="matthew-sbrito" >
                    Matheus Brito
                </option>
                <option value="viniciochavess" >
                    Vinicio Chaves
                </option>
                <option value="ericqueirozc" >
                    Eric Queiroz
                </option>
                <option value="torvalds" >
                    Linus Torvalds
                </option>
                <option value="filipedeschamps" >
                    Filipe Deschamps
                </option>
                <option value="fabiohora" >
                    Fabio Hora
                </option>
                <option value="nynonet" >
                    Andeson de Jesus
                </option>
                <option value="rafaballerini" >
                    Rafaella Ballerini
                </option>
            </datalist>
        </div>
    );
}

export default Header;