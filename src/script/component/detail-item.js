import Circles from "../view/detail/circles-master/circles.js"

class DetailItem extends HTMLElement {

    constructor() {
        super();
        this.url = "https://image.tmdb.org/t/p/w780";
        this.genre = "";
    }

    connectedCallback(){
        this.render();
    }

    set items(item) {
        this._items = item;
        this._items.genres.forEach((item,index) => {
            if (this._items.genres.length-1== index) {
                this.genre += item.name;
            } else {
                this.genre += item.name + ",";
            }
        })
        this.render();
    }

    set messageError(message) {
        this._messageError = message;
        this.renderError();
    }

    renderError() {
        this.innerHTML = `
            <h2>${this._messageError}</h2>
        `;
    }

    render() {
        this.innerHTML = `
        <style>
            .container__header {
                min-height: 100%;
                width: 100%;
                background: #34495e;
                display: flex;
                background-image: url("${this.url+this._items.backdrop_path}");
                background-size: cover;
                background-position: right;
            }
            .container {
                min-height: 100%;
                width: 100%;
                padding: 50px;
                display: flex;
                background-image: linear-gradient(90deg , rgba(52, 73, 94,1.0), rgba(52, 73, 94,.94), rgba(52, 73, 94,.4));
            }
            
            .poster {
                height: 80%;
                width: 300px;
                border-radius: 10px;
                position: relative;
            }
            
            .poster .banner__poster {
                border-radius: 0 0 10px 10px;
                background-color: #2c3e50;
                position: absolute;
                bottom: 110px;
                height: 80px;
                width: 100%;
            }
            
            .description__movie {
                margin-left: 40px;
                padding: 20px;
            }
            
            .description__movie h2 {
                font-size: 40px;
                color: white;
            }
            
            .description__movie .genre, .duration {
                font-size: 18px;
                color: white;
                font-weight: bold;
            }
            
            .average {
                position: relative;
                margin-top: 15px;
                display: flex;
                flex-direction: row;
                align-items: center;
            }
            
            .average .circles-text {
                color: white;
            }
            
            .average span {
                color: white;
                font-size: 30px;
                width: 40px;
                font-weight: bold;
                margin-left: 10px;
            }
            
            .overview {
                width: 70%;
                color: white;
                margin-top: 25px;
            }
            
            .overview .overview__title {
                margin-bottom: 10px;
                font-weight: bold;
                font-size: 24px;
            }
            
            .overview .overview__description {
                font-size: 20px;
            }

            .circles-1 {
                z-index: 999;
            }
        
        </style>

        <div class="container__header">
            <div class="container">
                <div class="poster">
                    <img class="poster" src="${this.url+this._items.poster_path}" alt="Poster Film" srcset="">
                </div>

                <div class="description__movie">
                    <h2>${this._items.original_title == undefined ? this._items.original_name + ` (${this._items.first_air_date.split("-",1)})` : this._items.original_title + ` (${this._items.release_date.split("-",1)})`}</h2>
                    <p>
                        <span class="genre">
                            ${this.genre}
                        </span>
                        <span class="period" style="font-size: 30px; font-weight: bold; color: white;"> | </span>
                        <span class="duration">${this._items.original_title == undefined ? this._items.episode_run_time + "m per Episode" : this._items.runtime + "m"}</span>
                    </p>
                    
                    <div class="average">
                        <div class="circle" id="circles-1"></div>
                        <span>User Score</span>
                        
                    </div>
                    
                    <div class="overview">
                        <p class="overview__title">Overview</p>
                        <p class="overview__description">${this._items.overview}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
        var myCircle = Circles.create({
            id:                  'circles-1',
            radius:              60,
            value:               this._items.vote_average * 10,
            maxValue:            100,
            width:               10,
            text:                function(value){return value + '%';},
            colors:              ['#95a5a6', '#2ecc71'],
            duration:            400,
            wrpClass:            'circles-wrp',
            textClass:           'circles-text',
            valueStrokeClass:    'circles-valueStroke',
            maxValueStrokeClass: 'circles-maxValueStroke',
            styleWrapper:        true,
            styleText:           true
          });
    }
}

customElements.define("detail-item",DetailItem);