import {BASE_URL, ROUTER_PATH} from 'services/config';

export function setLoginToken(token) {
    return dispatch => {
        localStorage.setItem("project_Token", token);
    }
}

export function getLoginToken() {
    return localStorage.getItem("project_Token");
}


export function postData(url, data) {

    var request_data = { 
        'token': getLoginToken(), 
        'data': data 
    }
    return dispatch => {
        return new Promise((resolve, reject) => {
            fetch(BASE_URL + url, {
                method: 'POST',
                body: JSON.stringify(request_data)
            }).then((res) => res.json())
                .then((res) => {

                    if (res.token_status) {
                        dispatch(logOut());
                    }
                    if (res.server_status) {
                        dispatch(logOut());
                    }

                    // if (res.status) {
                    //     dispatch(setLoginTime(moment()))
                    // }

                    resolve(res);
                })
                .catch((error) => {
                    reject(error);
                });
        });

    }
}

export function checkLogin() {
    return dispatch => {
        if (getLoginToken()) {
            return true;
        } else {
            return false
        }
    }
}

export function checkNotLogin() {
    return dispatch => {
        if (!getLoginToken()) {
            return true;
        } else {
            return false
        }
    }
}

export function logOut() {
    return dispatch => {
        localStorage.removeItem('project_Token');
        window.location.replace(ROUTER_PATH);
    }
}
