"use strict";

import Vue from "vue";
import axios from "axios";
import {
    API_BASE_URL
} from '@/constants'

let config = {
    baseURL: API_BASE_URL,
    timeout: 60 * 1000, // Timeout
    withCredentials: true, // Check cross-site Access-Control
    headers: {
        Accept: 'application/json',
        Authorization: {
            toString() {
                return `Bearer ${localStorage.getItem('user-token')}`
            },
        },
    }
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
    function (config) {
        console.log(config)
        // Сделать что-то до отправки запроса
        return config;
    },
    function (error) {
        // Сделать что-то с ошибкой запроса
        return Promise.reject(error);
    }
);

// Обрабатать успешные и не успешные ответы запроса.
_axios.interceptors.response.use(
    function (response) {
        // Обработать успешные ответ запроса
        console.log(response.config.url, response)
        return response;
    },
    function (error) {
        console.error(response)
        // Обработать не успешные ответ запроса
        if(response.status === 401) {
            // 1.удалить токен из localStorage/Session
            // 2.редирект на страницу авторизации
        }
        return Promise.reject(error);
    }
);

Plugin.install = function (Vue) {
    Vue.axios = _axios; // кладем в экземпляр vue сконфигурированный экземпляр axios
    // window.axios = _axios; // кладем в объект window сконфигурированный экземпляр axios
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return _axios;
            }
        },
        $axios: {
            get() {
                return _axios;
            }
        }
    });
};

Vue.use(Plugin);

export default _axios;