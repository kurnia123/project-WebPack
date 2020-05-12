import DataSourceFavorite from "../../data/data-source-favorite";
import api_key from "../../key/api-key.js";
import "../../component/wrap-list.js";
import homeIcon from "../../../img/moviekang_logo.png";

const slideShow = function(data) {
    let data_slide = data;
    let index = 1;

    let selectSlide = document.querySelector(".header__container");
    // slide show
    setInterval( () => {
        if(index >= data_slide.length -1) {
            index = 1;
        } else {
            selectSlide.style.background = `url('https://image.tmdb.org/t/p/w500${data_slide[index].backdrop_path}')`;
            selectSlide.style.backgroundSize = "cover";
            selectSlide.style.backgroundRepeat = "no-repeat";
            index++
        }
    },3800)
}

const main = function() {
    const nav = document.querySelector(".nav__scrolldown");
    const wrapList = document.querySelector("wrap-list");
    const homeIconProfile = document.querySelectorAll(".logo__moviekang");
    homeIconProfile.forEach(element => {
        element.src = "./" + homeIcon;
    })

    document.addEventListener("scroll",() => {
        let scrolPositionY = window.pageYOffset;
        console.log(scrolPositionY)
        console.log(nav.style.top)
    
        if (scrolPositionY > 100) {
            nav.style.top = "0";
        } else {
            nav.style.top = "-80px";
        }
    })

    const renderResult = results => {
        wrapList.item = results;
        slideShow(results);
    }
    
    const fallbackResult = message => {
        wrapList.renderError(message)
    }
    
    const loadData = function (url) {
        DataSourceFavorite.loadData(url)
        .then(renderResult)
        .catch(fallbackResult)
    }
    
    loadData(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=1`);
    
    let selectorAll = document.querySelectorAll(".listItem");

    selectorAll.forEach(item => {
        item.addEventListener("click", () => {
            let attr = item.getAttribute("class").split(" ")

            if (attr[attr.length -1] == "active") {

            } else {
                selectorAll.forEach(set => {
                    if (set.getAttribute("class").split(" ")[1] == "active") {
                        set.setAttribute("class","listItem");
                    }
                })

                item.setAttribute("class","listItem active")
                let node = document.querySelector("wrap-list").shadowRoot.querySelector("list-item")
                node.parentNode.removeChild(node)
                loadData(item.getAttribute("source") + api_key + "&language=en-US&page=1");
            }

        })
    })
}

export default main;