import axios from "axios";

export const config = { endpoint: "https://qtify-backend-labs.crio.do" };

export const fetchTopAlbum = async () => {
  try {
    const res = await axios.get(`${config.endpoint}/albums/top`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchNewSongs = async () => {
  try {
    const res = await axios.get(`${config.endpoint}/albums/new`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchSongs = async () => {
  try {
    const res = await axios.get(`${config.endpoint}/songs`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchFilterSongs = async () => {
  try {
    const res = await axios.get(`${config.endpoint}/genres`);
    return res.data.data;
  } catch (error) {
    console.error(error);
  }
};
