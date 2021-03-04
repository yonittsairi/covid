export const StorageService = {
    load,
    save,
    store,
    clear

}

function load(key) {
    const str = localStorage.getItem(key)
    return JSON.parse(str)
}

function save(key, val) {
    const str = JSON.stringify(val)
    localStorage.setItem(key, str)
}
function clear() {
    sessionStorage.clear();
}

function store(key, value) {
    sessionStorage[key] = JSON.stringify(value);
}
