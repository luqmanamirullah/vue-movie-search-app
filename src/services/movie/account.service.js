import axiosInstance from "@/config/axios";

export async function getMe() {
  return axiosInstance
    .get(`/account/16201232`)
    .then((res) => {
      const data = res.data;
      return data;
    })
    .catch((error) => {
      const data = {
        status: false,
        response: error.response,
      };
      return data;
    });
}
