import React, { useState } from "react";
import "./ProjectForm.css";
import Card from "../UI/Card";

const ProjectForm = () => {
  const totalAmount = 0.013 * 7.2 * 1000 + 0.015 * 1.14;
  const [enteredPercentage, setEnteredPercentage] = useState("100");
  const [enteredYears, setEnteredYears] = useState("1");
  const [amount, setAmount] = useState("0");

  const percentageChangeHandler = (event) => {
    setEnteredPercentage(event.target.value);
    setAmount(((totalAmount * event.target.value) / 100).toFixed(2));
  };

  const yearsChangeHandler = (event) => {
    setEnteredYears(event.target.value);
    setAmount((totalAmount * event.target.value).toFixed(2));
  };

  return (
    <form>
      <Card className="project">
        <div className="new-project-title"> Dein CO2-Ausgleich</div>
        <div className="new-project__values">
          <div className="new-project__value">
            <label>%Fubadruck</label>
            <input
              type="number"
              min="0"
              step="10"
              max="100"
              value={enteredPercentage}
              className="percentage"
              onChange={percentageChangeHandler}
            />
          </div>

          <div className="new-project__value">
            <label>Anzahl Jahre </label>
            <input
              type="number"
              min="1"
              step="1"
              className="years"
              value={enteredYears}
              onChange={yearsChangeHandler}
            />
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
          <div className="meassure-cash">{amount}€</div>
        </div>
      </Card>
    </form>
  );
};

export default ProjectForm;
