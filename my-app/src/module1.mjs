const a = 1
const b = 2
const c = 3
const d = 4
export default d // -- the d is exporting by default
// * But what if we have to export a ,b ,c then
export {a,b,c} // * if variable is not exporting by default then we can export it like {variable}