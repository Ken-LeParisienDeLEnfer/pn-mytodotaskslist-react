import React, { Component } from "react";
import ReactDOM from "react-dom";
import FormulaireTachePresentational from "../components/FormulaireTachePresentational"

class FormulaireTacheContainer extends Component {
    constructor() {
        super();
        this.state = {
            tache : {
                titre: "Titre"
            }
        };
        console.log("constructor");
        this.handleChange = this.handleChange.bind(this);
        this.handleCreateTask = this.handleCreateTask.bind(this);
    }

    handleChange(event) {
        console.log('value :'+event.target.value);
        this.setState({[event.target.id]: event.target.value});
    }

    handleCreateTask(event) {
        console.log("Creer");
    }

    render() {
        let {tache} = this.state;
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