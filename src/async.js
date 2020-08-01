export default {
    fetchData() {
        return new Promise((resolve, reject) => {
            resolve('peanut butter');
        });
    },
    fetechError() {
        return new Promise((resolve, reject) => {
            reject('error')
        })
    }
}