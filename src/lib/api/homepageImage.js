import axios from "axios";
import { HERO_API } from "../config/apiURL";

export const getHeroImages = async () => {
  try {
    const response = await axios.get(HERO_API);
    return response.data;
  } catch (error) {
    console.error("Error fetching home page images  :", error);
    throw error;
  }
};