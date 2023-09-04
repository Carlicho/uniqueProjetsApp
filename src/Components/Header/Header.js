import React,{Component} from "react"
import "bootstrap/dist/css/bootstrap.css"



class Header extends Component{

    render(){
        return(
            <header className="alert alert-primary text-center" >
                <h1 className="display-1">{this.props.titulo}</h1>
                <h2 className="display-2">{this.props.subtitulo}</h2>
            </header>
        )
    }

}
export default Header;