var TimeLimitedCache = function() {
    this.data = {};
    this.cnt = 0
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let exists = key in this.data;

    if (exists) {
        clearTimeout(this.data[key][1]);
    } else {
        this.cnt++;
    }
    let timer = setTimeout(() => {
        delete this.data[key];
        this.cnt--;
    }, duration);

    this.data[key] = [value, timer];

    return exists;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    return key in this.data ? this.data[key][0] : -1;

};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.cnt;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */