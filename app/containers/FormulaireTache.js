import React from "react";
import PropTypes from 'prop-types';
import { InputTache } from '../presentational/formulaire/InputTache';
import {RadioBoutonsPriorite} from "../presentational/formulaire/RadioBoutonsPriorite";
import {PRIORITES} from "../constants/PrioriteConstants";

class FormulaireTache extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tache : {
                titre : "",
                priorite: "P1"
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeTitre = this.handleChangeTitre.bind(this);

    }

    handleChangeTitre(event) {
        console.log("handleChangeTitre: " + event);
        this.setState({
            tache : {
                titre :event.target.value
            }
        });
    }

    handleChangePriorite(event) {
        console.log("handleChangePriorite: " + event);
    }

    handleSubmit(event) {
        var obj = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                titre : this.state.tache.titre
            })
        };
        fetch('http://127.0.0.1:3000/tache/', obj).then(function (response) {
            console.log(response);
            return response.json();
        }).then((result) => {
            console.log(result);
            this.setState({
                tache: {
                    titre: ''
                }
            })
            this.props.onTacheEnregistree(result);
        }).catch((err) => {
            console.log("Erreur lors de l'enregistrement de la tâche" + err);
        });

        event.preventDefault();
    }

    render() {
        let priorites = [];
        Object.keys(PRIORITES).forEach((key) => {
            priorites.push(PRIORITES[key]);
        });
        console.log(priorites);
        return (
            <div>
                <div className="titre-tache-form">
                    Créer une tâche
                </div>

                        <form className="col-sm-12 form-horizontal" onSubmit={this.handleSubmit}>
                            <InputTache inputType={'text'}
                                    id={'titre'}
                                    libelle={'Titre'}
                                    value={this.state.tache.titre}
                                    handleChangeTitre={this.handleChangeTitre} />
                            <RadioBoutonsPriorite optionsPriorite={priorites}
                                                  selectedOptions={this.state.tache.priorite}
                                                  handleChangePriorite={this.handleChangePriorite}
                                                  libelle={'Priorité'}/>
                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <input className="btn btn-primary" type="submit" value="Enregistrer"/>
                                </div>
                            </div>
                        </form>
            </div>
        )
    }
};

FormulaireTache.propTypes = {
    onTacheEnregistree: PropTypes.func.isRequired
};

export default FormulaireTache;