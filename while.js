//cau1 a,b,c,d

// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let i = 0
// let sum = 0
// let max = arr[0]
// let min = arr[0]
// while (arr[i] !== undefined) {
//     console.log('phan tu thu %s = %s',i,arr[i])
//     if (max < arr[i]) {
//         max = arr[i]
//     }
//     if (min > arr[i]) {
//         min = arr[i]
//     }
//     sum += arr[i]
//     i++
// }
// console.log('tong mang = %s',sum)
// console.log('trung binh cong cac phan tu trong mang = %s',sum/i)
// console.log('max = %s',max)
// console.log('min = %s',min)

//cau 1e
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let arr1 = []
// let i = 0
// let j = arr.length - 1
// while (arr[i] !== undefined) {
//     arr1[j] = arr[i]
//     i++
//     j--
// }
// console.log(arr1)

//cau1f
let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
let i = 0
let j = arr.length - 1
let tam = 0
while (i<j) {
    tam = arr[i]
    arr[i] = arr[j]
    arr[j] = tam
    i++
    j--
}
console.log(arr)
// let i = 0
// let solanxuahien = {}
// while (arr[i] !== undefined) {
//     const phantuI = arr[i]
//     solanxuahien[phantuI] = (solanxuahien[phantuI] || 0) + 1
//     i++
// }
// console.log(solanxuahien)

//cau 1g
// 

i = arr.length -1
while (i>0) {
    arr[i] = arr[i-1]
    i--
}
arr[0] = 117
console.log(arr)

// //cau1 i
// i = 0
// check_mang = true
// while (arr[i] !== undefined) {
//     if (arr[i] > arr[i+1]) {
//         check_mang = false
//         break
//     }
// }
// if (check_mang === true) {
//     console.log('mang tang dan')
// }
// else {
//     console.log('mang khong tang dan')
// }
// console.clear()
//cau1 j

// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
i = 0
j = 0
while (arr[i] !== undefined) {
    j = i + 1
    while (arr[j] !== undefined) {
        if (arr[i] > arr[j]) {
            let tam = arr[i]
            arr[i] = arr[j]
            arr[j] = tam
        }
        j++
    }
    i++
}
console.log(arr)
i = 0
j = 0
while (arr[i] !== undefined) {
    j = i + 1
    while (arr[j] !== undefined) {
        if (arr[i] < arr[j]) {
            tam = arr[i]
            arr[i] = arr[j]
            arr[j] = tam
        }
        j++
    }
    i++
}
console.log(arr)








