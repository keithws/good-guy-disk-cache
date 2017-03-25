const Cache = require("async-disk-cache");

class DiskCache {
    constructor(globalKey) {
        if (!globalKey) {
            throw new Error("Missing arguement");
        }
        this.cache = new Cache(globalKey);
    }
    store(key, object) {
        return new Promise(resolve => {

            let value = JSON.stringify(object);
            resolve(this.cache.set(key, value));

        });
    }
    retrieve(key) {
        return new Promise((resolve, reject) =>{

            this.cache.get(key).then(cacheEntry => {

                if (cacheEntry.isCached) {
                    let object = JSON.parse(cacheEntry.value);
                    resolve(object);
                } else {
                    resolve();
                }

            }).catch(reject);

        });
    }
    evict(key) {
        return this.cache.remove(key);
    }
}

module.exports = DiskCache;
