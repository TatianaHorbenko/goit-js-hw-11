// export default class LoadMoreBtn{
//     constructor({ selector, hidden = false }) {
//         this.refs = this.getRefs(selector);

//         hidden && this.hide();
//     }
// getRefs(selector){
//     const refs = {};
//     refs.button = document.querySelector(selector);
//     refs.label = refs.button.querySelector('.label');
   
    

//     return refs;
// }

// enable(){
//     this.refs.button.disabled = false;
//     this.refs.label.textContent = 'Load more';
//     // this.loadMoreSpinner.classList.add(this.classList);
//     }

// disable(){
//     this.refs.button.disabled = true;
//     this.refs.label.textContent = 'Loading...';
//     // this.loadMoreSpinner.classList.remove(this.classList);
   
//    }

// show(){
//     this.refs.button.classList.remove('is-hidden');
//     // this.loadMoreSpinner.classList.remove(this.classList);
    
// }

// hide(){
//     this.refs.button.classList.add('is-hidden')
  
//     }
    
// }





export default class LoadMoreBtn {
    constructor({ selector, hidden = false }) {
      this.refs = this.getRefs(selector);
      hidden && this.hide();
    }
    getRefs(selector) {
      const refs = {};
      refs.button = document.querySelector(selector);
      return refs;
    }
    enable() {
      this.refs.button.disabled = false;
     
    }
    disable() {
      this.refs.button.disabled = true;
      ;

    }
    show() {
      this.refs.button.classList.remove('is-hidden');
     
    }
    hide() {
      this.refs.button.classList.add('is-hidden');
    }
  }



