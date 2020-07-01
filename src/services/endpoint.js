export default {
  logIn: () => '/api/login',
  levelinfo: id => id ? `http://localhost:8000/levelinfo/${id}` : `http://localhost:8000/levelinfo`,
  shop: id => id ? `http://localhost:8001/shop/${id}` : `http://localhost:8001/shop`,
  news: id => id ? `http://localhost:8002/news/${id}` : `http://localhost:8002/news`,
}
