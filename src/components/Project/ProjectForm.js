import React from 'react';
import './ProjectForm.css';
import Card from '../UI/Card';


const ProjectForm = () => {

  return <form>
      <Card className="project">
        <div className="new-project-title"> Dein CO2-Ausgleich</div>
        <div className="new-project__values">
            <div className="new-project__value">
                <label>%Fubadruck</label>
                <input type='number'  min="0%" step="5%" max="100%"/>
            </div>

            <div className="new-project__value">
                <label>Anzahl Jahre </label>
                <input type='number'  min="1" step="1" />
            </div>
        </div>

        <div className="new-project__meassurements">
            <div className="new-project__meassure">
                <div className="meassure-name">Ausgleich von</div>
                <div className="meassure">
                    <div className="meassure-value">
                        <div className="meassure-value__value1">7.2t CO2</div>
                        <img src="" className="logo" alt="logo" />
                    </div>
                </div>
            </div>
        </div>

        <div className="new-project__meassurements separator">
        <div className="new-project__meassure">
            <div className="meassure-name">Ausgleich durch</div>
            <div className="meassure">
                <div className="meassure-value">
                    <div className="meassure-value__value2">1.140l</div>
                    <img src="" className="logo"   alt="logo" />
                </div>
            </div>
        </div>
        </div>

        <div className="new-project__betrag">
        <div className="meassure-name">Betrag</div>
        <div className="meassure-cash">162,00€</div>
        
        </div>
    </Card>

  </form>
};

export default ProjectForm;