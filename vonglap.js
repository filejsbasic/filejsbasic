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
let arr = [3,451,5,2,6,76,3,5,1,243,6,4]
// let arr1 = []
let do_dai_mang = arr.length
// let j = 0
// for (let i = do_dai_mang - 1; i > 0 ; i = i - 1) {   
//         arr1[j] = arr[i]
//         j = j + 1
// }
//swap : dao pha theo kieu duyet nua chuoi
//tao mot bien tam


//cau f
let so_lan_xuat_hien_PT_1 = 0
for (let i = 0; i < do_dai_mang ; i = i + 1) {
    if (arr[i] = arr[0]) {
        so_lan_xuat_hien_PT_1 = so_lan_xuat_hien_PT_1 + 1
    }
}
console.log('so lan xuat hien phan tu %s la',arr[0],so_lan_xuat_hien_PT_1)

