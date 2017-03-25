const Cache = require("async-disk-cache");
const cache = new Cache("good-guy-disk-cache");

module.exports = {
    store: function (key, object) {
        return new Promise(resolve => {

            let value = JSON.stringify(object);
            resolve(cache.set(key, value));

        });
    },
    retrieve: function (key) {
        return new Promise((resolve, reject) =>{

            cache.get(key).then(cacheEntry => {

                if (cacheEntry.isCached) {
                    let object = JSON.parse(cacheEntry.value);
                    resolve(object);
                } else {
                    resolve();
                }

            }).catch(reject);

        });
    },
    evict: function (key) {
        /**
         * NOTE, async-disk-cache does not offer a function to clear one key
         * but it does offer a function to clear all keys
         * TODO fork async-disk-cache and add function to clear one key
         */
        return cache.clear(key);
    }
};
