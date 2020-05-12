// 封装Storage方法
const Storage={
    set(key,val){
        localStorage.setItem(key,JSON.stringify(val))
    },
    get(key){
        return JSON.parse(localStorage.getItem(key))
    },
    remove(key){
        localStorage.removeItem(key)
    }
}

export default Storage