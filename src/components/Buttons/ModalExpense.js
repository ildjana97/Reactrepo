import React from "react";
import "./ModuleExpenses.css";
import ProjectForm from "../Project/ProjectForm";

const Expenses = () => {
  return (
    <div className="expenses-page">
      <div className="expenses-title">Expenses</div>
      <div className="expenses-text">
        Total amount of expenses is {amount} Euro
      </div>
    </div>
  );
};
export default Expenses;
