const BASE_URL = 'https://api.thecatapi.com/v1';
const ENDPOINTS = {
  all: `${BASE_URL}/breeds`,
  searchByBreedID: keyword => `${BASE_URL}/images/search?breed_id=${keyword}`,
  cat: id => `${BASE_URL}/images/${id}`
}

function request(url) {
  return fetch(url)
    .then(res=> res.json())
}

const getAllCats = ()=> request(ENDPOINTS.all);
const getCatBySearch = (keyword)=> request(ENDPOINTS.searchByBreedID(keyword));
const getCatByID = (id)=> request(ENDPOINTS.cat(id));

export {
  getAllCats,
  getCatBySearch,
  getCatByID
}