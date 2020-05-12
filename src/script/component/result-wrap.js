import "./result-iem.js";

class ResultWrap extends HTMLElement {

    constructor() {
        super();
        this._shadowDOM = this.attachShadow({mode:"open"});
    }

    // connectedCallback() {
    //     this.render();
    // }

    set items(item) {
        this._items = item;
        this.render();
    }

    render() {
        this._shadowDOM.innerHTML = ``;
        this._items.forEach(item => {
            const createElementItem = document.createElement("result-item");
            createElementItem.item = item;
            this._shadowDOM.appendChild(createElementItem)
        });
    }

    renderError(message){
        this._shadowDOM.innerHTML = `
        <h2>${message}</h2>
        `
    }

}

customElements.define("result-wrap",ResultWrap);