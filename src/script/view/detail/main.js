import DataSourceDetail from "../../data/data-source-detail.js";
import api_key from "../../key/api-key.js";
import "../../component/detail-item.js";
import homeIcon from "../../../img/moviekang_logo.png";

const main = function() {

    let url_combain = ''
    let url_string = window.location.href;
    let url_object = new URL(url_string);
    let id = url_object.searchParams.get("id")
    let type = url_object.searchParams.get("type")
    const detail_item = document.querySelector("detail-item");

    const homeIconProfile = document.querySelectorAll(".logo__moviekang");
    homeIconProfile.forEach(element => {
        element.src = "../" + homeIcon;
    })
    
    
    const renderResult = results => {
        detail_item.items = results;
    }

    const fallbackResult = results => {
        detail_item.messageError = results;
    }

    const loadData = function(url) {
        DataSourceDetail.loadData(url)
        .then(renderResult)
        .catch(fallbackResult)
    }
    
    const url_tv = "https://api.themoviedb.org/3/tv/";
    const url_movie = "https://api.themoviedb.org/3/movie/";

    if(type == "movie") {
        url_combain = `${url_movie + id}?api_key=${api_key}&language=en-US&page=1`
        console.log(url_combain)
        loadData(url_combain);
    } else {
        url_combain = `${url_tv + id}?api_key=${api_key}&language=en-US&page=1`
        loadData(url_combain);
    }


}

export default main;