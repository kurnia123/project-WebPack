import "./item-list.js";

class WrapList extends HTMLElement {

    constructor() {
        super();
        this._shadowDOM = this.attachShadow({mode:"open"})
    }

    connectedCallback() {
        this.render();
    }

    set item(items) {
        this._items = items;
        this.render();
    }

    renderError(message) {
        this._shadowDOM.innerHTML = `
        <style>
            h2 {
                color: white;
            }
        </style>
        <h2>${message}</h2>
        `
    }

    render() {
        this._shadowDOM.innerHTML = ``
        this._items.forEach(item => {
            const createItemElement = document.createElement("list-item");
            createItemElement.item = item;
            this._shadowDOM.appendChild(createItemElement);
        });
    }
    
}

customElements.define("wrap-list",WrapList);