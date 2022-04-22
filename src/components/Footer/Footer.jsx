import './Footer.css';

function Footer() {
    return (
        <div className="Footer" >
            <a href="https://github.com/brenoalvim" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/brenoalvim" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="mailto:alvimbrenosilva6@gmail.com" target="_blank" rel="noopener noreferrer">
                <i class="fa-solid fa-envelope"></i>
            </a>
            <div className="hr"></div>
            <img src={`https://readme-typing-svg.herokuapp.com?font=Fira+Code&center=true&vCenter=true&width=375&lines=Developed+by%3A+Breno+Alvim.`} alt="" />
        </div>
    );
}

export default Footer;