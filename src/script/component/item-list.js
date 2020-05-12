class ListItem extends HTMLElement {

    constructor() {
        super();
        this._shadowDOM = this.attachShadow({mode:"open"})
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
        
        .wraper__list--img {
            top: 50px;
            display: inline-block;
            height: 230px;
            width: 160px;
            position: relative;
            margin: 0 10px;
            box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.6);
        }

        .forground {
            height: 100%;
            width: 100%;
            position: relative;
            top: 0;
            transition: top 0.5s ease-in-out;
        }

        .bacground {
            position: absolute;
            border-radius: 10px;
            height: 100%;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.6);
            white-space: normal;
        }

        .bacground p {
            color: white;
            position: absolute;
            bottom: 14px;
            padding: 0 12px;
            font-size: 14px;
        }

        .forground img {
            height: 100%;
            width: 100%;
            border-radius: 10px;
        }

        .wraper__list--img:hover .forground {
            top: -65px;
        }

        p {
            margin-block-start: 0px;
            margin-block-end: 0px;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
        }
        </style>

        <a href="./detail/detail.html?id=${this._item.id}&type=${this._item.original_title == undefined ? "tv" : "movie"}">
            <div class="wraper__list--img">
                <div class="bacground">
                    <p>${this._item.original_title == undefined ? this._item.original_name : this._item.original_title}</p>
                </div>
                <div class="forground">
                    <img src="https://image.tmdb.org/t/p/w500${this._item.poster_path}" alt="${this._item.original_title}" srcset="">
                </div>
            </div>
        </a>
        `
    }
}

customElements.define("list-item",ListItem);