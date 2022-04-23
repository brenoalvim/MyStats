import './Stats.css';
import Head from './Head/Head';
import Github from './Github/Github';
import Outsourced from './Outsourced/Outsourced';

function Stats(props) {

    if (props.stats.id) {
        return (
            <div className="Stats" >
                <Head stats={props.stats} />
                <Github stats={props.stats} />
                <Outsourced stats={props.stats} />
            </div>
        );
    } else {
        return (
            <div className='StatsAlert'>
                <div className="spanAlert">
                    <div class="alert alert-danger" role="alert">
                        {props.text}
                    </div>
                </div>
            </div>
        );
    }
}

export default Stats;