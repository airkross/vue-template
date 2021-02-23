"use strict";

import Vue from "vue";
import axios from "axios";
import {
    API_BASE_URL
} from '@/constants'

localStorage.setItem('user-token', 1233)

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
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
_axios.interceptors.response.use(
    function (response) {
        // Do something with response data
        return response;
    },
    function (error) {
        // Do something with response error
        return Promise.reject(error);
    }
);

Plugin.install = function (Vue) {
    Vue.axios = _axios;
    window.axios = _axios;
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

export default Plugin;