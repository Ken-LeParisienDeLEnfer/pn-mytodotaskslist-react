import React from 'react';
import { render } from 'react-dom';
import TachesContainer from "./containers/TachesContainer";
import "../assets/my-todo-tasks-list.css";
import FormulaireTache from "./containers/FormulaireTache";
import "../assets/favicon.ico";


class App extends React.Component {

    constructor() {
        super();
        this.state = { taches: [] } ;
        this.handleTacheEnregistree = this.handleTacheEnregistree.bind(this);
        this.handleModifierEtatTache = this.handleModifierEtatTache.bind(this);
        this.handleBloquerTache = this.handleBloquerTache.bind(this);
        this.handleSupprimerTache = this.handleSupprimerTache.bind(this);
    }



    componentDidMount() {
        var obj = {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        };
        fetch('http://127.0.0.1:3000/tache/', obj).then(function (response) {
            return response.json();
        }).then((result) => {
            this.setState((previousState) => {
                previousState.taches = result;
                return previousState;
            });
        }).catch((err) => {
            console.log('Erreur lors de la récupération des tâches' + err);
        });
    }

    handleModifierEtatTache(tacheModifiee, etatSource, etatCible) {
        let endPoint = 'http://127.0.0.1:3000/tache/' + tacheModifiee._id;
        let obj = {
            method: 'PUT',
            mode: 'CORS',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                etat : etatCible
            })
        };
        fetch(endPoint, obj).then(function (response) {
            return response.json();
        }).then((result) => {
            let tachesMisesAJour = this.state.taches
            tachesMisesAJour = tachesMisesAJour.filter((tache) => tache._id !== result._id);
            tachesMisesAJour.push(result);
            this.setState((previousState) => {
                previousState.taches = tachesMisesAJour;
                return previousState;
            });
        }).catch((err) => {
            console.log("Erreur lors de la mise à jour de la tâche" + err);
        });
    }

    handleSupprimerTache(tache) {
        let endPoint = 'http://127.0.0.1:3000/tache/' + tache._id;
        let obj = {
            method: 'DELETE',
            mode: 'CORS'
        };
        fetch(endPoint, obj).then(function (response) {
            return response;
        }).then((result) => {
            console.log(tache);
            var idTacheSupprimee = result.url.split("/")[4];
            let tachesMisesAJour = this.state.taches
            tachesMisesAJour = tachesMisesAJour.filter((tache) => tache._id !== idTacheSupprimee);
            tachesMisesAJour.push(result);
            this.setState((previousState) => {
                previousState.taches = tachesMisesAJour;
                return previousState;
            });
        }).catch((err) => {
            console.log("Erreur lors de la suppression de la tâche" + err);
        });
    }

    handleBloquerTache(tache) {
        let estBloquee = !tache.bloque;
        let endPoint = 'http://127.0.0.1:3000/tache/' + tache._id;
        let obj = {
            method: 'PUT',
            mode: 'CORS',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                bloque : estBloquee
            })
        };
        debugger
        fetch(endPoint, obj).then(function (response) {
            return response.json();
        }).then((result) => {
            let tachesMisesAJour = this.state.taches
            tachesMisesAJour = tachesMisesAJour.filter((tache) => tache._id !== result._id);
            tachesMisesAJour.push(result);
            this.setState((previousState) => {
                previousState.taches = tachesMisesAJour;
                return previousState;
            });
        }).catch((err) => {
            console.log("Erreur lors de la mise à jour de la tâche bloquee" + err);
        });
    }

    handleTacheEnregistree(tacheEnregistree) {
        console.log("Tache enregistree : ");
        console.log(tacheEnregistree);
        let tachesMisesAJour = this.state.taches;
        tachesMisesAJour.push(tacheEnregistree);
        this.setState((previousState) => {
            previousState.taches = tachesMisesAJour;
            return previousState;
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-3 form-task">
                    <FormulaireTache onTacheEnregistree={this.handleTacheEnregistree} />
                </div>
                <TachesContainer taches={this.state.taches}
                                 onModifierEtatTache={this.handleModifierEtatTache}
                                 onBloquerTache={this.handleBloquerTache}
                                 onSupprimerTache={this.handleSupprimerTache}/>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('app'));