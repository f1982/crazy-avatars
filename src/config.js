// ENV
const env = 'production' // 'development' or 'production'

// WXAPP VERSION
const version = 2.0

// development and production host
const hosts = {
    development: 'http://localhost:3020',
    production: 'https://www.learningwang.top/books/'
}

// apis
const api = {
    user: {
        hootBooks: {
            method: 'GET',
            url: '/getHotBooks/'
        },
        login: {
            method: 'GET',
            url: '/weChatLogin/'
        },
        userInfo: {
            method: 'GET',
            url: '/getUserInfoById/'
        },
        editInfo: {
            url: '/finishUserInfo/',
            method: 'PUT'
        }
    },
    common: {
        hootBooks: {
            method: 'GET',
            url: 'getHotBooks/'
        }
    },

}

module.exports = {
    env,
    version,
    api: disposeUrl(api, hosts[env])
}

/**
 * Put a prefix at url
 * 
 * @param {*} obj 
 * @param {*} prefix 
 */
function disposeUrl(obj, prefix) {
    Object.keys(obj).forEach(v => {
        if (obj[v].url) {
            obj[v].url = prefix + obj[v].url
        } else {
            obj[v] = disposeUrl(obj[v], prefix)
        }
    })
    return obj
}