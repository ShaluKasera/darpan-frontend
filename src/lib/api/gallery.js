import axios from "axios";
import { GALLERY_API } from "../config/apiURL";



export const getAllPhotos = async (category) => {
  try {
    const params = category && category !== "All" ? { category } : {};
    const response = await axios.get(`${GALLERY_API}/photos`, { params });

    // Expecting { success: true, data: [...] }
    if (response.data?.success && Array.isArray(response.data.data)) {
      return response.data.data;
    }
    return [];
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};

export const getPhotoById = async (id) => {
  try {
    const response = await axios.get(`${GALLERY_API}/${id}`);
    if (response.data?.success) {
      return response.data.data;
    }
    return null;
  } catch (error) {
    console.error("Error fetching image by id:", error);
    return null;
  }
};

export const getAllPhotosVideos = async () => {
  try {
    const response = await axios.get(GALLERY_API);
    return response.data;
  } catch (error) {
    console.error("Error fetching all images and videos :", error);
    throw error;
  }
};
export const getAllVideos = async () => {
  try {
    const response = await axios.get(`${GALLERY_API}/videos`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all videos :", error);
    throw error;
  }
};

export const getVideoById = async () => {
  try {
    const response = await axios.get(`${GALLERY_API}/videos/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching video by id :", error);
    throw error;
  }
};

//getAllPhotosVideos
//getAllPhotos
//getPhotoById
//getAllVideos
//getVideoById