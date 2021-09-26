import React, { useState } from 'react';
import './ProjectForm.css';
import Card from '../UI/Card';

class ProjectForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      percentage: 100,
      years: 1,
      result: 0.013* 7.2* 1000 + 0.015*1.140
    };
    this._changePercentage = this._changePercentage.bind(this);
    this._changeYears = this._changeYears.bind(this);
  }

      
  _changePercentage(e) {
    const totalAmount = 0.013* 7.2* 1000 + 0.015*1.140
    if (e.target.validity.valid) {
      var newPercentage = e.target.value
      this.setState({
          percentage: newPercentage,
          result: newPercentage/100 * totalAmount * this.state.years
        }); 
    }
  }
  
  _changeYears(e) {
      const totalAmount = 0.013* 7.2* 1000 + 0.015*1.140
  if (e.target.validity.valid) {
    var newYears = e.target.value
    this.setState({
        years: newYears,
        result: totalAmount * newYears * this.state.percentage/100
      }); 
  }
}

      
  render () {
  return (
    <form > 
      <Card className="project">
        <div className="new-project-title"> Dein CO2-Ausgleich</div>
        <div className="new-project__values">
            <div className="new-project__value">
                <label>%Fubadruck</label>
                <input type='number'  min="0" step="10"  className="percentage" 
               value={this.state.percentage} onChange={ this._changePercentage}/>
            </div>

            <div className="new-project__value">
                <label>Anzahl Jahre </label>
                <input type='number'  min="1" step="1"  className="years"  
               value={this.state.years} onChange={this._changeYears}/>

            </div>
        </div>

        <div className="new-project__meassurements">
            <div className="new-project__meassure">
                <div className="meassure-name">Ausgleich von</div>
                <div className="meassure">
                    <div className="meassure-value">
                        <div className="meassure-value__value1">7.2t CO2💨</div>
                    </div>
                </div>
            </div>
        </div>

        <div className="new-project__meassurements separator">
            <div className="new-project__meassure">
                <div className="meassure-name">Ausgleich durch</div>
                <div className="meassure">
                    <div className="meassure-value">
                        <div className="meassure-value__value2">1.140l💧</div>
                    </div>
                </div>
            </div>
            </div>

            <div className="new-project__betrag">
            <div className="meassure-name">Betrag</div>
           <div className="meassure-cash"> {this.state.result}€</div> 
           <div className="meassure-cash"> {}€</div> 
            
        </div>
    </Card>

  </form>
  
};

export default ProjectForm;