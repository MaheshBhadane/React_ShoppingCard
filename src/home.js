import './home.css';

function home(props) {

    return(
        <div>
            <div class="card">
                <name> {props.name} </name>
                <img src={props.img} alt="" />
                <p><i> {props.desc} </i></p>
            </div>
        </div>
    );
}

export default home;