const BaseUrl = 'http://localhost:3000/server/'
const ApiRequests = {
    'getBanners': () => {
        return {
            url: `${BaseUrl}banners/index.get.json`,
            Method: "GET"
        }
    },
    'getCategories': () => {
        return {
            url: `${BaseUrl}categories/index.get.json`,
            Method: "GET"
        }
    },
    'getProducts': () => {
        return {
            url: `${BaseUrl}products/index.get.json`,
            Method: "GET"
        }
    }
}
export default ApiRequests