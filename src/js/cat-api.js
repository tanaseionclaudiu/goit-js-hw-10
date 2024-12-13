import axios from 'axios';
import './axiosAPI';
import { linksAPIObj } from './linksAPI';

export async function fetchBreeds() {
  linksAPIObj.addLoader();

  const breeds = await axios.get('breeds');
  const data = await breeds.data;

  return data;
}

export async function fetchCatByBreed(breedId) {
  linksAPIObj.addLoader();

  const catInfo = await axios.get(`images/search?breed_ids=${breedId}`);

  const data = await catInfo.data[0];

  return data;
}
