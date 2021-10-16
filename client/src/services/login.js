
export const isLogin = () => {
    if (localStorage.getItem('loginsuccess')) {
        return true;
    }
    return false;
}

export const userInfo = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        return user;
    }
    return '';
}

export const userType = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        return user[0].role;
    }
    return '';
}