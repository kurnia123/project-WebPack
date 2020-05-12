import "../../component/result-wrap.js";
import DataSourceFavorite from "../../data/data-source-favorite";
import api_key from "../../key/api-key.js";
import homeIcon from "../../../img/moviekang_logo.png";

const main = function() {
    const resultWrap = document.querySelector("result-wrap");

    let url_string = window.location.href;
    let url_object = new URL(url_string);
    let keyword = url_object.searchParams.get("keyword")
    let url_combain = `https://api.themoviedb.org/3/search/multi?api_key=${api_key}&language=en-US&query=${keyword}&page=1&include_adult=false`
    
    const homeIconProfile = document.querySelectorAll(".logo__moviekang");
    homeIconProfile.forEach(element => {
        element.src = "../" + homeIcon;
    })

    const renderResult = results => {
        resultWrap.items = results;
        console.log(results)
    }
    
    const fallbackResult = message => {
        resultWrap.renderError(message)
    }

    const loadData = function(url) {
        DataSourceFavorite.loadData(url)
        .then(renderResult)
        .catch(fallbackResult)
    }

    loadData(url_combain)
}

export default main;