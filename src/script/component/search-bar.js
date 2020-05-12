class SearchBar extends HTMLElement {

    constructor() {
        super();
        this._shadowDOM = this.attachShadow({mode:"open"});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this._shadowDOM.innerHTML = `
        <style>
            .title__search {
                font-size: 40px;
            }
            
            .title__description {
                font-size: 20px;
                margin: 0 10px;
            }
            
            .search {
                color: white;
                text-align: center;
                margin-top: 20%;
            }
            
            .search__box {
                position: relative;
                margin-top: 30px;
                margin: 30px auto;
                width: 68%;
                height: 50px;
                border-radius: 25px;
                background: white;
                padding: 0;
                display: flex;
            }
            
            .search__box > .input__text {
                width: 100%;
                border-radius: 31px;
                margin-left: 10px;
                padding: 8px;
                border: 0;
                font-weight: bold;
                font-size: 16px;
                color: #2c3e50;
            }
            
            .search__box > input:focus {
                outline: 0;
            }
            
            .search__box > .search__box:focus::placeholder {
                font-weight: bold;
            }
            
            .button_submit {
                height: 100%;
                width: 100px;
                border: 0;
                border-radius: 25px;
                position: absolute;
                color: white;
                background-image: linear-gradient(to right,#67baf1,#bf7bda);
                cursor: pointer;
                right: 0;
                font-weight: bold;
                font-size: 18px;
            }
            
            .button_submit:hover {
                font-weight: bold;
                color: #2c3e50;
            }
        </style>

        <div class="search">
            <h1 class="title__search">Welcome</h1>
            <h3 class="title__description">Millions of movies and TV shows to discover. Explore now.</h3>
            
            <form action="./result/result.html" method="GET">
                <div class="search__box">
                    <input class="input__text" type="text" id="keyword" name="keyword" placeholder="search movie and TV show...">
                    <input class="button_submit" type="submit" value="Search">
                </div>
            </form>
        </div>
        `
    }
}

customElements.define("search-bar",SearchBar);