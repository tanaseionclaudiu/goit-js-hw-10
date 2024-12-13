export const linksAPIObj = {
    refs: {
      breedSelectEl: document.querySelector('.breed-select'),
      loaderEl: document.querySelector('.loader'),
      catInfoEl: document.querySelector('.cat-info'),
    },
    addLoader() {
      this.refs.loaderEl.classList.add('visibility');
    },
    removeLoader() {
      this.refs.loaderEl.classList.remove('visibility');
    },
    addBreedSelect() {
        this.refs.breedSelectEl.classList.add('visibility');
      },
      removeBreedSelect() {
        this.refs.breedSelectEl.classList.remove('visibility');
      },
  };