import React from "react";

class ListeTaches extends React.Component {

    constructor(props) {
        super(props);

    }


    handleClickChangerEtat(tache) {

        debugger
        var obj = {
            endPoint: 'http://127.0.0.1:3000/tache/' + tache._id,
            method: 'PUT',
            mode: 'CORS',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                etat : "DONE"
            })
        };
        fetch(obj.endPoint, obj).then(function (response) {
            debugger
            console.log(response);
            return response.json();
        }).then((result) => {
            debugger
            console.log(result);
        }).catch((err) => {
            console.log("Erreur lors de la mise à jour de la tâche" + err);
        });
    }


    render() {
        return (
            <div className={this.props.typeSection.conteneurClassName}>
                <p className={this.props.typeSection.titreSectionClassName}>{this.props.typeSection.libelle}</p>
                <ul className="taches-list">
                    {this.props.taches.map( (tache, index) => {
                        console.log(tache);
                        return (
                            <li className="tache-list" key={index}>
                                <div className="prec">
                                    <button type="button" className={this.props.typeSection.btnPrecClassName} onClick={() => this.handleClickChangerEtat(tache)}>
                                        <i className="fa fa-angle-left"></i>
                                    </button>
                                </div>
                                <div className="tache-titre"><p className="titre">
                                    {tache.titre}
                                </p></div>
                                <div className="suiv">
                                    <button type="button" className={this.props.typeSection.btnSuivClassName} onClick={() => this.handleClickChangerEtat(tache)}>
                                        <i className="fa fa-angle-right"></i>
                                    </button>
                                </div>
                            </li>
                        );
                    })}

                </ul>
            </div>
        );
    }
}

export default ListeTaches;
