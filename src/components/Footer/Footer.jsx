import './Footer.css';

function Footer(props) {
    return (
        <div className="Footer" >
            <a href={`https://github.com/${props.social}/MyStats`}
                target="_blank"
                rel="noopener noreferrer"
                title="Access Source Code">
                <i class="fa-brands fa-github"></i>
            </a>
            <a href={`https://linkedin.com/in/${props.social}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Creator's LinkedIn Profile">
                <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href={`mailto:${props.email}`}
                target="_blank"
                rel="noopener noreferrer"
                title="send email to creator">
                <i class="fa-solid fa-envelope"></i>
            </a>
            <div className="hr"></div>
            <img src={props.linkFont}
                title={`Developed by: ${props.developer}`}
                alt={`Developed by: ${props.developer}`} />
        </div>
    );
}

export default Footer;