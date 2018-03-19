import React, { Component } from "react";
import ReactDOM from "react-dom";
import FormulaireTachePresentational from "../presentational/FormulaireTachePresentational"

class FormulaireTacheContainer extends Component {
    constructor() {
        super();
        this.state = {
            tache : {
                titre: "Titre"
            }
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    render() {
        const {tache} = this.state;
        return (
            <form id="article-form">
                <FormulaireTachePresentational
                    tache={tache}
                    handleChange={this.handleChange}
                />
            </form>
        );
    }
}
export default FormulaireTacheContainer;

const wrapper = document.getElementById("formulaire-tache");
wrapper ? ReactDOM.render(<FormulaireTacheContainer />, wrapper) : false;