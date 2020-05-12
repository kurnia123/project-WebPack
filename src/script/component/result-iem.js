class ResultItem extends HTMLElement {

    constructor() {
        super();
        this._shadowDOM = this.attachShadow({mode:"open"});
    }

    connectedCallback() {
        this.render();
    }

    set item(item) {
        this._item = item;
        this.render();
    }

    render() {
        this._shadowDOM.innerHTML = 
        `
        <style>
            p {
                margin-block-start: 0px;
                margin-block-end: 0px;
                margin-inline-start: 0px;
                margin-inline-end: 0px;            
            }

            .item_result {
                height: 180px;
                width: 100%;
                border-radius: 10px;
                background-color: white;
                margin: 20px 0;
                display: flex;
                flex-direction: row;
                align-items: center;
                box-shadow: 3px 3px 30px black;
            }
            
            .img__result {
                height: 100%;
            }
            
            .img__result img {
                height: 100%;
                border-radius: 10px 0 0 10px;
            }
            
            .content__description {
                padding: 10px 0;
                margin-left: 15px;
            }
            
            .content__description .title {
                font-size: 28px;
                font-weight: bold;
            }
            
            .content__description .release {
                color: #95a5a6;
                font-size: 20px;
            }
            
            .content__description .overview {
                font-weight: bold;
                margin-top: 20px;
            }
        </style>

        <div class="item_result">
            <div class="img__result">
                <a href="../detail/detail.html?id=${this._item.id}&type=${this._item.media_type}">
                    <img src="https://image.tmdb.org/t/p/w500${this._item.poster_path}" alt="">
                </a>
            </div>
            <div class="content__description">
                <p class="title">${this._item.original_title}</p>
                <p class="release">${this._item.release_date}</p>
                <p class="overview">
                    ${this._item.overview.substring(0,100)}
                </p>
            </div>
        </div>
        `
    }
}

customElements.define("result-item",ResultItem);