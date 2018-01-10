import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';
const baseServer = 'https://pacific-headland-40187.herokuapp.com';

class Http {


    status = (response) => {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
      } else {
        return Promise.reject(new Error(response.statusText))
      }
    }

    token = () => {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            return jwt
        } else {
            return ''
        }
    }

    json = (response) => {
      return response
    }


    defaults() {
		this.axios.defaults.baseURL = 'https://pacific-headland-40187.herokuapp.com';
		this.axios.defaults.validateStatus = status => status >= 200 && status <= 422;
		this.axios.defaults.headers.common['Accept-Language'] = 'en'
		// this.axios.defaults.headers.common.Accept = 'application/x.ng.v1+json'
	}
    //
    // set token(token) {
	// 	if (token) {
	// 		document.cookie = `token=${token}; path=/`;
	// 	} else {
	// 		document.cookie = 'token=""; path=/';
	// 	}
	// 	this.defaults()
	// }

    get = (url, config) => {
        return axios.get(`${baseServer}${url}&jwt=${this.token}`, config)
        .then(this.status )
    	.then(this.json )
        .then(this.data)
        .catch(this.catchErr)
    };

    post = (url, body, config) => {
        return axios.post(`${baseServer}${url}&jwt=${this.token}`, body, config)
        .then(this.data)
        .catch(this.catchErr);
    };

    put = (url, body, config) => {
        return axios.put(`${baseServer}${url}&jwt=${this.token}`, body, config)
        .then(this.data)
        .catch(this.catchErr);
    };

    del = (url, config) => {
        return axios.delete(`${baseServer}${url}&jwt=${this.token}`, config)
        .then(this.data)
        .catch(this.catchErr)
    };

    data = (response) => {
        //  if (response.status === 401) {
        //     store.dispatch(/* Logout action */)
        // }
        return response.data;
    };

    catchErr = (error) => {
        console.warn(`Error in Http, ${error.message || error}`);
    };
}


const HttpInstance = new Http(axios)

const { get, post, put, del } = HttpInstance

export {
    HttpInstance as Http,
	get,
	post,
	put,
	del
};
