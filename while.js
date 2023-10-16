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

//cau1e
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
// console.log(arr)
i = 0
let solanxuahien = {}
while (arr[i] !== undefined) {
    const phantuI = arr[i]
    solanxuahien[phantuI] = (solanxuahien[phantuI] || 0) + 1
    i++
}
// console.log(solanxuahien)

//cau 1g
// 

i = arr.length -1
while (arr[i] !== undefined) {
    arr[i] = arr[i-1]
    i--
}
arr[0] = 117
// console.log(arr)

// //cau1 i
function Check_TD(arr) {
i = 0
check_mang = true
while (arr[i] !== undefined) {
    if (arr[i] > arr[i+1]) {
        check_mang = false
        break
    }
}
if (check_mang === true) {
    console.log('mang tang dan')
}
else {
    console.log('mang khong tang dan')
}
}
//cau1 i

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
// console.log(arr)
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
// console.log(arr)
// console.log('so chan')
// i = 0
// while (arr[i] !== undefined) {
//     if (arr[i]%2 == 0) {
//         console.log(arr[i])
//     }
//     i++
// }
// console.log('so le')
// i = 0
// while (arr[i] !== undefined) {
//     if (arr[i]%2 !== 0) {
//         console.log(arr[i])
//     }
//     i++
// }

//cau 2a
let arr2 = [5,-2,5,-6,23,69,100,-13,10,0,14]
i = 0
j = 0
while (arr2[i] !== undefined) {
    j = i + 1
    while (arr2[j] !== undefined) {
        if (arr2[i] + arr2[j] == 10) {
            console.log('cap so %s va %s tong bang 10',arr2[i],arr2[j])
        }
        j++
    }
    i++
}
console.clear()
//cau 2b
i = 0
j = 0
let arr3 = []
while (arr2[i]!==undefined) {
    j = i+1
    while (arr2[j]!==undefined) {
        if (arr2[i] == arr2[j]) {
            arr2[i] = null
            arr2[j] = null   
        }
        j++
    }
    i++
}
console.log(arr2)
i = 0
j = 0
while (arr2[i] !== undefined) {
    if (arr2[i] !== null) {
        arr3[j] = arr2[i]
        j = j + 1
    }
    else {
        arr3[j] = arr2[i+1]
        i = i + 1
        j = j + 1
    }
    i = i + 1
}
console.log(arr3)

//cau2d
// i = 0
// j = 0
// tam = 0
// while (arr2[i] !== undefined) {
//     j = i + 1
//     while (arr2[j] !== undefined) {
//         if (arr2[i] < arr2[j]) {
//             tam = arr2[i]
//             arr2[i] = arr2[j]
//             arr2[j] = tam
//         }
//         j++
//     }
//     i++
// }
// console.log(arr2)
// console.log(arr2.length)
// let summax = (arr2[0] + arr2[1] + arr2[2])/3
// console.log('TBC 3 so lon nhat %s, %s, %s la %s',arr2[0],arr2[1],arr2[2],summax)
// console.log('do lech lon nhat trong mang la', arr2[0] - arr2[arr2.length-1])








