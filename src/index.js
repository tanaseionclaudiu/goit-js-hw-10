import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { linksAPIObj } from './js/linksAPI';

const select = new SlimSelect({
  select: '#single',
  settings: {
    showSearch: false,
  },
  events: {
    afterChange: (newVal) => {
      renderDescriptionCat(newVal[0].value);
    }
  }
});

const manualUpdate = null;

// window.addEventListener('load', renderCats());
renderCats();
// linksAPIObj.refs.breedSelectEl.addEventListener('change', manualUpdate);

// function manualUpdate() {
//   console.log('Manual Upfate!@');
// }

function renderCats() {
  fetchBreeds()
    .then(data => {
      const cats = data.map(({ id, name }) => {
        return { text: name, value: id };
      });

      select.setData([...cats]);

      linksAPIObj.addBreedSelect();
      linksAPIObj.removeLoader();

      manualUpdate = false;
    })
    .catch(error => {
      Notify.failure('Oops! Something went wrong! Try reloading the page!');
      linksAPIObj.removeLoader();
    });
}





function renderDescriptionCat(id) {

    linksAPIObj.refs.catInfoEl.innerHTML = '';

    fetchCatByBreed(id)
      .then(data => {
        const { url, breeds } = data;
        const { name, description, temperament } = breeds[0];

        linksAPIObj.refs.catInfoEl.innerHTML = `<img src="${url}" alt="" class="cat-info__img" width="40%"/>
        <div class="cat-info__meta">
          <h1 class="cat-info__title">${name}</h1>
          <p class="cat-info__description">${description}</p>
          <p class="cat-info__temperament">${temperament}</p>
        </div>`;

        linksAPIObj.removeLoader();
      })
      .catch(error => {
        Notify.failure('Oops! Something went wrong! Try reloading the page!');
        linksAPIObj.removeBreedSelect;
      });


}