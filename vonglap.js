// //bai1.a
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// //for
// let do_dai_mang = arr.length
// let sum = 0
// for (let i = 0 ; i < do_dai_mang; i = i + 1) {
//     console.log('phan tu thu %s = %s',i,arr[i])
//     sum = sum + arr[i]
// }

// //1.b
// console.log('tong cac phan tu trong mang =',sum)
// //1.c
// let max = 0
// let min = 10000
// for (let i = 0 ; i < do_dai_mang; i = i + 1) {
//     if (max < arr[i]) {
//         max = arr[i]
//     }
//     if (min > arr[i]) {
//         min = arr[i]
//     }
// }
// console.log('phan tu lon nhat la %s. Phan tu nho nhat la %s',max,min)
// // cau d
// console.log('trung binh cong cac phan tu trong mang =',sum/do_dai_mang)


//while

// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let do_dai_mang = arr.length
// let i = 0
// let sum = 0
// max = 0
// min = 10000
// while (i < do_dai_mang) {
//     if (max < arr[i]) {
//         max = arr[i]
//     }
//     if (min > arr[i]) {
//         min = arr[i]
//     }
//     console.log('phan tu thu %s = %s',i,arr[i])
//     sum = sum + arr[i]
//     i = i + 1
// }
// console.log('tong cac phan tu trong mang =',sum)
// console.log('trung binh cong cac phan tu trong mang =',sum/do_dai_mang)
// console.log('so lon nhat trong mang la',max)
// console.log('so nho nhat trong mang la',min)

// do - while

// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let do_dai_mang = arr.length
// let i = 0
// let sum = 0
// max = 0
// min = 10000
// do {
//      if (max < arr[i]) {
//      max = arr[i]
// }
//      if (min > arr[i]) {
//      min = arr[i]
// }
//     console.log('phan tu thu %s = %s',i,arr[i])
//     sum = sum + arr[i]
//     i = i + 1
// } while (i < do_dai_mang)
// console.log('tong cac phan tu trong mang =',sum)
// console.log('trung binh cong cac phan tu trong mang =',sum/do_dai_mang)


//cau e

// let arr1 = []
// let j = 0
// for (let i = do_dai_mang - 1; i > 0 ; i = i - 1) {   
//         arr1[j] = arr[i]
//         j = j + 1
// }
//swap : dao pha theo kieu duyet nua chuoi
//tao mot bien tam


// //cau f
// // su dung bang cach tao mang rong (KQ)
// // duyet kierm tra mang co phan tu 2 gias tri value & tan suat xuat hien
// let arr = [3,451,5,2,6,76,3,5,1,243,6,4]
// let do_dai_mang = arr.length

// // const tansuatxuathien = {} ;
// // for (let i = 0 ; i < do_dai_mang ; i++) {
// //     const phatuthuI = arr[i]
// //     tansuatxuathien[phatuthuI] = (tansuatxuathien[phatuthuI] || 0) + 1
// // }
// // console.log(tansuatxuathien)

// // //cau e
// for (let i = do_dai_mang - 1; i >=0 ; i--) {
//      arr[i+1] = arr[i]
// }
// arr[0] = 117


// // //cau f
// const dodaimang2 = arr.length
// // let checktangdan = true
// // for ( let i = 0 ; i < dodaimang2 ; i++) {
// //     if (arr[i] > arr[i+1]) {
// //         checktangdan = false
// //         break
// //     }
// // }
// // if (checktangdan === true) {
// //     console.log('mang tang dan')
// // }
// // else {
// //     console.log('mang khong tang dan')
// // }

// //mang tu thap den cao
// for (let i = 0 ; i < dodaimang2 ; i++ ) {
//    for (let j = i + 1; j <dodaimang2; j ++) {
//     if (arr[i] > arr[j]) {
//     let tam = arr[i]
//     arr[i] = arr[j]
//     arr[j] = tam
//    }
// } 
// }

// //mang tu cao den thap
// for (let i = 0 ; i < dodaimang2 ; i++ ) {
//    for (let j = i + 1; j <dodaimang2; j ++) {
//     if (arr[i] < arr[j]) {
//     let tam = arr[i]
//     arr[i] = arr[j]
//     arr[j] = tam
//    }
// } 
// }


// let arr = [3,451,5,2,6,76,3,5,1,243,6,4]
// let do_dai_mang = arr.length
// console.log('>>>> so chan')
// for (let i = 0; i < do_dai_mang; i++) {
//    if (arr[i]%2 == 0 && arr[i] !== 0) {
//       console.log(arr[i]) 
//    }
// }

// console.log('>>>> so le')
// for (let i = 0; i < do_dai_mang; i++) {
//    if (arr[i]%2 !== 0 && arr[i] !== 0) {
//       console.log(arr[i]) 
//    }
// }


////while 

// 1a//
// let arr = [3,451,5,2,6,76,3,5,1,243,6,4]
// let do_dai_mang = arr.length
// let i = 0
// let tong = 0
// while (i < do_dai_mang) {
//    console.log('phan tu thu %s = %s',i,arr[i])
//    tong = tong + arr[i]
//    i++
// }

// //1b
// console.log('tong =',tong)

//1c
// let arr = [3,451,5,2,6,76,3,5,1,243,6,4]
// let do_dai_mang = arr.length
// let i = 0
// let max = arr[i]
// let min = arr[i]

// while (i < do_dai_mang) {
//    if (max < arr[i]) {
//       max = arr[i]
//    }
//    if (min > arr[i]) {
//       min = arr[i]
//    }
//    i++
// }
// console.log('max la',max)
// console.log('min la',min)

//1e
// let arr = [3,451,5,2,6,76,3,5,1,243,6,4]
// let do_dai_mang = arr.length
// let arr1 = []
// let i = do_dai_mang - 1
// let j = 0
// while (i>=0) {
//    arr1[j] = arr[i]
//    i = i - 1
//    j = j + 1
// }
// console.log('>>>>',arr1)

// // const tansuatxuathien = {} ;
// // for (let i = 0 ; i < do_dai_mang ; i++) {
// //     const phatuthuI = arr[i]
// //     tansuatxuathien[phatuthuI] = (tansuatxuathien[phatuthuI] || 0) + 1
// // }
// // console.log(tansuatxuathien)
//1f
let arr = [3,451,5,2,6,76,3,5,1,243,6,4]
let do_dai_mang = arr.length

// const solanxuathien = {}
// while (i < do_dai_mang) {
//    const phantuthuI = arr[i]
//    solanxuathien[phantuthuI] = (solanxuathien[phantuthuI] || 0) + 1
//    i++
// }
// console.log(solanxuathien)

//1g
let i = do_dai_mang
while (i>0) {
    arr[i] = arr[i-1]
    i--
}
arr[0] = 117
// console.log(arr)
// let check = true
// i = 0
// while(i < arr.length) {
//    if (arr[i] > arr[i+1]) {
//       check = false
//       break
//    }
//    i++
// }
// if (check === true) {
//    console.log('mang tang dan')
// }
// else {
//    console.log('mang ko tang dan')
// }

//mang tang dan
// i = 0
// while (i < arr.length) {
//     let j = i+1
//     while (j < arr.length) {
//        if (arr[i] > arr[j]) {
//           let tam = arr[i]
//           arr[i] = arr[j]
//           arr[j] = tam
//        }
//     j++
//    }
//     i++  
//  }
// console.log(arr)


//mang giam dan
// i = 0
// while (i < arr.length) {
//    let j = i+1
//    while (j < arr.length) {
//       if (arr[i] < arr[j]) {
//          let tam = arr[i]
//          arr[i] = arr[j]
//          arr[j] = tam
//       }
//    j++
//    }
//    i++  
// }
// console.log(arr)

////cau 2 a
// let arr = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0,14]
// for (let i = 0; i < arr.length; i++) {
//    for (let j = i+1; j < arr.length; j++) {
//       if (arr[i] + arr[j] == 10) {
//          console.log('cap %s,%s = 10', arr[i],arr[j])
//       }

//    }
// }

//Cau 2c
// let arr = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0,14]
// for (let i = 0; i < arr.length; i++) {
//    for (let j = i+1; j < arr.length; j++) {
//       if (arr[i] < arr[j] ) {
//          let tam = arr[i]
//          arr[i] = arr[j]
//          arr[j] = tam
//       }
//    }
// }
// let summax = 0
// for (let e = 0; e < 3; e++) {
//    summax = summax + arr[e]
// }
// console.log(summax)
// for (let i = 0; i < arr.length;i++) {
//    for (let j = i+1; j < arr.length;j++)
//    if (arr[i] === arr[j]) {
//       arr[i] = ''
//       arr[j] = ''
//    }
// }
// console.log(arr)
