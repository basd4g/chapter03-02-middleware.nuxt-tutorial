//middleware は export default によってただ一つの関数を返すファイルでなければならない
//nuxt.config.jsにこのファイルを登録する
export default ()=>{
    if(process.browser){
        console.log('console.log() on browser')
    } else {
        console.log('console.log() on SSR server')
    }
}
