/* eslint-env node */

module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/list-of-vue/'
        : '/'
};