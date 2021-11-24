import './userpainel.css'
import {Link} from 'react-router-dom'
import RotasLog from '../routes/routesLog'

const style = {
    textDecoration: "none",
    marginLeft: "30%",
    fontSize: "18px"
}

function UserPainel() {
    return(
        <div className="painel">
            <div className="sidebar">
                <h4>Menu</h4>
                <hr></hr>
                <ul>
                    <li><Link to="/user/" style={style}>Denunciar</Link></li>
                    <hr/>
                    <li><Link to="/user/overview" style={style}>Overview</Link></li>
                    <hr/>
                    <li><a href="/" style={style}>Sair</a></li>
                </ul>
            </div>
        </div>
    )
}

export default UserPainel