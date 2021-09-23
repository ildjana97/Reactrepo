import React, {Component} from 'react';
import './Buttons.css';
import Modal from './Modal.js';

class Buttons extends Component{

    constructor() {
        super();
        this.state = {
          show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
      }
    
      showModal = () => {
        this.setState({ show: true });
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };
    
    render() {
    
        return(
            <div className="projects__button">
                <div className="btn-container">
                    <button  type="button" className="btn1" >Als Spende  abzugsfähig</button>
                </div>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <p className="modal-title">Modal</p>
                </Modal>
                <button type="button"  className="btn2" onClick={this.showModal}>Werde jetzt klimaneutral <img src="./images/whitearrow.png" className="logo"   alt="logo" /></button>
                <button type="button"  className="btn3"> Ohne CO2 Auslgeich weiter<img src="" className="logo"   alt="logo" /></button>
            </div>   
        );
    }
}
export default Buttons;