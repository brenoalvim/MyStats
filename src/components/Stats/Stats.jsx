import './Stats.css';
import Head from './Head/Head';
import Github from './Github/Github';

function Stats(props) {
    return (
        <div className="Stats" >
            <Head stats={props.stats}/>
            <Github stats={props.stats}/>
        </div>
    );
}

export default Stats;