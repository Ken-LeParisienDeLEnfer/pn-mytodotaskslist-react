import React from "react";
import PropTypes from 'prop-types';

class FormulaireTache extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tache : {
                titre : ""
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
        return (
            <div>
                <div className="titre-tache-form">
                    Créer une tâche
                </div>

                        <form className="col-sm-12 form-horizontal" onSubmit={this.handleSubmit}>
                            <div class="form-group">
                                <label className="control-label col-sm-2" for="titre">Titre</label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        label="label-titre-formulaire"
                                        className="form-control"
                                        id="titre"
                                        value={this.state.tache.titre}
                                        onChange={this.handleChangeTitre}
                                    />
                                </div>
                            </div>
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