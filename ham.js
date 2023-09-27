// function HelloWorld() {
//     console.log('HelloWorld')
// }

// function Hoten() {
//     console.log('Mai Ngoc Lu')
// }
// function Clear() {
//     console.clear
// }

// function Sao1() {
//     console.log('*****')
//     console.log('*****')
//     console.log('*****')
//     console.log('*****')
//     console.log('*****')
//     console.log('*****')
// }
//  function Sao2() {
//     console.log('    *')
//     console.log('   ***')
//     console.log('  *****')
//     console.log(' *******')
//     console.log('*********')
//  }
//  function Sao3() {
//     console.log(' **     ** ' )
//     console.log('*    *    *' )
//     console.log('*         *' )
//     console.log(' *       * ' )
//     console.log('  *     *  ' )
//     console.log('     *     ' )
//  }
// function toantu() {
//     let a = 3, b = 4
//     tbc = (a+b)/2
//     console.log('tong:',a+b)
//     console.log('hieu:',a-b)
//     console.log('tich:',a*b)
//     console.log('thuong:',a/b)
//     console.log('Trung bình cộng:',tbc)
// }
// function hinh_tron(){
//     let d = 5
//     const pi = 3.14
//     dt = pi*(d/2)**2
//     cv = 2*(d/2)*pi
//     console.log('dien tich la',dt)
//     console.log('chu vi hinh tron la',cv)
// }
// function chu_nhat(){
//     let dai = 15
//         rong = 10
//         cv = (dai + rong)*2
//         dt = dai * rong
//     console.log('chu vi =',cv)
//     console.log('dien tich =',dt)
// }
// function van_toc(){
//     let s = 120, tg = 130 
//     let v = s*60/tg
//     console.log('van toc xe la',v)
// }
// function quang_duong() {
//     let v=60, tg = 150
//     console.log('qiang duong di duoc',v*tg/60)
// }
// function q_cano() {
//     let v = 15.2, tg = 3
//     console.log('quang dg cano di dc',v*t)
// }
// function tinh_AB() {
//     let tg1 = 8 + 1/3
//         tg2 = 11
//         v = 42
//     console.log('do dai AB',((tg2-tg1)*v))
// }
// function tinh_khoi(){
//     let dai = 8
//         cao = 6
//         rong = 5
//     console.log('the tich hinh khoi la',(3*dai*cao*rong)+(dai*cao*rong))
// }
function tinh_tong(a,b) {
    const tong = a+b
    return tong 
}
function tinh_hieu(a,b) {
    const hieu  = a-b
    return hieu
}
function tinh_tich(a,b) {
    const tich = a*b
    return tich
}
function tinh_thuong(a,b) {
    const thuong = a*b
    return thuong
}

//lam a b d e f
function tbc(a,b){
    const tbc = (a+b)/2
    return tbc
}
function cv_tron (d) {
    const pi = 3.14
    const cv_tron = d*pi
    return cv_tron
}

function dt_tron (d) {
    const pi = 3.14
    const dt_tron = pi*(d/2)**2
    return dt_tron
}
function tinh_vt (s,t){
    const v = s/t
    return v
}
function toan_tu(x,y,z) {
    const a = x+y+z
    const b = 2*(x+y+z)
    const c = 3*(x+y+z)
    return console.log(a,b,c)
}
function cv_hcn(a,b) {
    const cv = (a+b)*2
    return cv
}
function dt_hcn(a,b) {
    const dt = a*b
    return dt
}
// console.log(cv_hcn(3,4))
function quang_duonng(v,t) {
    const s = v*t
    return s
}
