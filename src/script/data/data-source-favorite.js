class DataSourceFavorite {

    static loadData(url) {
        
        return fetch(url)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.results != null) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject("Cannot find");
            }
        })
    }
}

export default DataSourceFavorite;