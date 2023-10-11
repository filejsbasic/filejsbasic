//cau1 a,b,c,d

let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
let i = 0
let sum = 0
let max = arr[0]
let min = arr[0]

// do  {
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
// while (arr[i] !== undefined)
// console.log('tong mang = %s',sum)
// console.log('trung binh cong cac phan tu trong mang = %s',sum/i)
// console.log('max = %s',max)
// console.log('min = %s',min)

//cau 1e
i = 0
let j = arr.length - 1
let tam = 0
do {
    tam = arr[i]
    arr[i] = arr[j]
    arr[j] = tam
    i++
    j--
}    
while (i < j)
// console.log(arr)

//cau f
i = 0
let solanxuahien = {}
do {
    const phantuI = arr[i]
    solanxuahien[phantuI] = (solanxuahien[phantuI] || 0) + 1
    i++
}
while (arr[i] !== undefined)
// console.log(solanxuahien)

// cau g

i = arr.length - 1
do {
    arr[i] = arr[i-1]
    i--
}
while (arr[i] !== undefined)
arr[0] = 117
// console.log(arr)

//cau h
// i = 0
// let check = true
// do {
//     if (arr[i] > arr[i+1]) {
//         check_mang = false
//         break
//     }
// }
// while (arr[i] !== undefined)
// if (check_mang === true) {
//     console.log('mang tang dan')
// }
// else {
//     console.log('mang khong tang dan')
// }

//cau i
i = 0
j = 0
do {
    j = i + 1
    do {
        if (arr[i] > arr[j]) {
            tam = arr[i]
            arr[i] = arr[j]
            arr[j] = tam
        }
        j++
    }
    while (arr[j] !== undefined)
    i++
}
while (arr[i] !== undefined)


//cauj

i = 0
j = 0
do {
    j = i + 1
    do {
        if (arr[i] < arr[j]) {
            tam = arr[i]
            arr[i] = arr[j]
            arr[j] = tam
        }
        j++
    }
    while (arr[j] !== undefined)
    i++
}
while (arr[i] !== undefined)

// cau k
// i = 0
// console.log('so le')
// do {
//     if (arr[i]%2 !== 0) {
//         console.log(arr[i])
//     }
//     i++
// }
// while (arr[i] !== undefined)

// i = 0
// console.log('so chan')
// do {
//     if (arr[i]%2 == 0) {
//         console.log(arr[i])
//     }
//     i++
// }
// while (arr[i] !== undefined)

//cau2 a
let arr2 = [5,-2,5,-6,23,69,100,-13,10,0,14]
i = 0
j = 0
do {
    j = i + 1
    do {
        if (arr2[i] + arr2[j] == 10) {
            console.log('cap so %s va %s = 10',arr2[i],arr2[j])
        }
        j++
    }
    while (arr2[j] !== undefined)    
    i++
}
while (arr2[i] !== undefined)

//cau2 b
// i = 0
// j = 0
// do {
//     j = i + 1
//     do {
//         if (arr2[i] === arr2[j]) {
//             arr2[i] = undefined
//             arr2[j] = undefined
//         }
//         j++
//     }
//     while (arr2[j] !== undefined)    
//     i++
// }
// while (arr2[i] !== undefined)
// console.log(arr2)

//cau 2d
i = 0
j = 0
do {
    j = i + 1
    do {
        if (arr2[i] < arr2[j]) {
           tam = arr2[i]
           arr2[i] = arr2[j]
           arr2[j] = tam
        }
        j++
    }
    while (arr2[j] !== undefined)    
    i++
}
while (arr2[i] !== undefined)
console.log(arr2)
console.log('3 so lon nhat trong mang la',arr2[0],arr2[1],arr2[3])
console.log('TBC 3 so lon nhat =',(arr2[0]+arr2[1]+arr2[2])/3)
console.log('chenh lech lon nhat giua so lon nhat va nho nhat la',arr2[0]-arr2[arr2.length-1])




