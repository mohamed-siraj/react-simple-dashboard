class StorageService {

    /**
     * @description store value
     * @param key 
     * @param value 
     */
    async setItem(key: string, value: any) {
        await localStorage.setItem(key, value);
    }

    /**
     * @description get value from store
     * @param key 
     * @returns any
     */
    async getItem(key: string) {
        return await localStorage.getItem(key);
    }


};

export default StorageService;