class DataSourceDetail {

    static loadData(url) {
        return fetch(url)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            return Promise.resolve(responseJson);
            // if (responseJson != null) {
            // } else {
            //     return Promise.reject("not found")
            // }
        })
    }
}

export default DataSourceDetail;