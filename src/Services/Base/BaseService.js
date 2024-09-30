"use client";
import axios from "axios";

export class BaseService {
  constructor(urlBase) {
    this.url = urlBase;
    this.axiosInstance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_URL_API_ACCOUNT_V1,
    });
    this.initAxios();
  }

  getToken() {
    if (typeof window !== "undefined") {
      let token = window.localStorage.getItem("token");
      return token;
    }
    return null;
  }

  initAxios() {
    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token = getToken();

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      },
      (error) => Promise.reject(error)
    );

    this.handlerError401();
  }

  handlerError401() {
    // this.axiosInstance.interceptors.response.use(
    //   (response) => response,
    //   (error) => {
    //     if (
    //       error.response &&
    //       error.response.status === 4001 &&
    //       typeof window !== "undefined"
    //     ) {
    //       let response = JSON.parse(error.request.response);

    //       if (response.status === 401) {
    //         new LoginService().doLogout();
    //       }
    //     }
    //     return Promise.reject(error);
    //   }
    // );
  }
}
