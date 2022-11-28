import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css'

 const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
 
  componentDidMount() {
   console.log("Modal componentDidMount");
  
   window.addEventListener('keydown', this.handleKeyDown);
  }
  
  componentWillUnmount () {
    console.log("Modal componentWillMount");
    window.removeEventListener('keydown', this.handleKeyDown);
    
  }

handleKeyDown = e => {
  if (e.code === 'Escape') {
    console.log('yfgg');
    this.props.onClose();
  }
}

handleBackdropClick = event => {
  console.log ('Кликнули в бекдроп');
  console.log ('обработчик события', event.currentTarget);
  console.log ('событие', event.target);

  if(event.currentTarget === event.target) {
    this.props.onClose();
  }

}


  render() {
     return createPortal(
     <div className={css.Modal__backdrop} onClick={this.handleBackdropClick}>
      <div className={css.Modal__content}>{this.props.children}
      </div>
      </div>, modalRoot,
           
    );
    }
}
//<div class="overlay">
  //<div class="modal">
  //  <img src="" alt="" />
  //</div>
//</div>