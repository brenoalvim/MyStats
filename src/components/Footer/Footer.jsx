import './Footer.css';

function Footer() {
    return (
        <div className="Footer" >
            <a href="https://github.com/brenoalvim/MyStats"
                target="_blank"
                rel="noopener noreferrer"
                title="Access Source Code">
                <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/brenoalvim"
                target="_blank"
                rel="noopener noreferrer"
                title="Creator's LinkedIn Profile">
                <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="mailto:alvimbrenosilva6@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                title="send email to creator">
                <i class="fa-solid fa-envelope"></i>
            </a>
            <div className="hr"></div>
            <img src={`https://readme-typing-svg.herokuapp.com?font=Fira+Code&center=true&vCenter=true&width=375&lines=Developed+by%3A+Breno+Alvim.`}
                title="Developed by: Breno Alvim." alt="Developed by: Breno Alvim." />
        </div>
    );
}

export default Footer;