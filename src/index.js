import 'slim-select/dist/slimselect.css';
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}

function showError(message) {
  error.textContent = message;
  error.style.display = 'block';
  error.style.color = 'red';
  breedSelect.style.display = 'none';
}

function hideError() {
  error.style.display = 'none';
}

function showCatInfo(cat) {
  const img = document.createElement('img');
  img.src = cat[0].url;

  const name = document.createElement('h2');
  name.textContent = cat[0].breeds[0].name;

  const description = document.createElement('p');
  description.textContent = cat[0].breeds[0].description;

  const temperament = document.createElement('p');
  temperament.textContent = cat[0].breeds[0].temperament;

  catInfo.innerHTML = '';
  catInfo.appendChild(img);
  catInfo.appendChild(name);
  catInfo.appendChild(description);
  catInfo.appendChild(temperament);
  catInfo.style.display = 'block';
}

function populateBreedSelect(breeds) {
  breeds.forEach(breed => {
    const option = document.createElement('option');
    option.value = breed.id;
    option.textContent = breed.name;
    breedSelect.appendChild(option);
  });
}

function handleBreedSelectChange(event) {
  const breedId = event.target.value;

  hideError();
  hideCatInfo();
  showLoader();

  fetchCatByBreed(breedId)
    .then(cat => {
      hideLoader();
      showCatInfo(cat);
    })
    .catch(error => {
      hideLoader();
      showError('Oops! Something went wrong! Try reloading the page!');
    });
}

function hideCatInfo() {
  catInfo.style.display = 'none';
}

breedSelect.addEventListener('change', handleBreedSelectChange);

showLoader();
hideError();

fetchBreeds()
  .then(breeds => {
    hideLoader();
    populateBreedSelect(breeds);
  })
  .catch(error => {
    hideLoader();
    showError('Oops! Something went wrong! Try reloading the page!');
  });
