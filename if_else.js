//bai1.a
function kt_so_duong(n){
    if (n<0){
        console.log('n la so am')
    }
    else if (n > 0) {
        console.log('n la so duong')
    }
    else {
        console.log('n khong am khong duong')
    }
}

//1.b
function kt_chan_le(n){
    if (n%2 == 0){
        console.log('n la so chan')
    }
    else {
        console.log('n la so le')
    }
}

//1.c
function kt_so_lon_nhat(a,b,c){
    if (a>b && a>c) {
        console.log(a,'la so lon nhat')
    }
    else if (b > a && b>c) {
        console.log(b,'la so lon nhat')
    }
    else if (c > a && c > b) {
        console.log(c,'la so lon nhat')
    }
    else {
        console.log('khong co so lon nhat')
    }
}
function ktsolonnhat(a,b,c){
    let max = a
    if (max < b) {
        max = b
    }
    if (max < c) {
        max = c
    }
    console.log(max,'la so lon nhat')
}
// ktsolonnhat(5,3,7)
//1.d
function kt_nam_nhuan(nam) {
    if (nam%4 == 0 && nam%100 != 0) {
        console.log(nam,'la nam nhuan')
    }
    else if (nam%100 == 0 && nam%400 == 0 ) {
        console.log(nam,'la nam nhuan')
    }
    else {
        console.log(nam,'khong phai la nam nhuan')
    }
}

// 1.e
function kt_nguyen_am_phu_am (ky_tu){
    if (ky_tu == 'a' || ky_tu == 'o' || ky_tu == 'i' || ky_tu == 'u' || ky_tu == 'e') {
        console.log(ky_tu,'la nguyen am')
    }
    else {
        console.log(ky_tu,'la phu am')
    }
}

//cau2.a ax**2 + b*x + c = 0
let a = 2
let b = 3
let c = 1
function phuong_trinh_bac_2(a,b,c) {
    let delta = b*b - 4*a*c
    if (a == 0 && b == 0) {
        console.log('phuong trinh vo nghiem')
    }
    else if (a == 0) {
        console.log('phuong trinh co 1 nghiem la',-c/b)
    }
    else if (delta < 0) {
        console.log('phuong trinh vo nghiem')
    }
    else if (delta == 0) {
        console.log('phuong trinh co nghiem x1 = x2 =', -b/2*a)
    }
    else {
        let x1 = (-b + Math.sqrt(delta))/(2*a)
        let x2 = (-b - Math.sqrt(delta))/(2*a)
        console.log('phuong trinh co 2 nghiem la',x1,x2)
    }
}
// phuong_trinh_bac_2(2,4,1)

//2.b
function tinh_luongNET(luong) {
    if (luong < 8000000) {
        console.log('thue thu nhap cua nhan vien la 0')
        console.log('luong NET cua nhan vien la',luong)
     
    }
    else if (luong <= 15000000) {
        let thue = luong*0.15
        console.log('thue thu nhap cua nhan vien la',thue)
        console.log('luong NET cua nhan vien la',luong - thue)
    }
    else {
        let thue = luong*0.2
        console.log('thue thu nhap cua nhan vien la',thue)
        console.log('luong NET cua nhan vien la',luong - thue)
    }
}

//2.c
function hoc_luc(a,b,c) {
    let tbc = (a+b+c)/3
    if (tbc < 5) {
        console.log('diem tb hoc sinh:',tbc,'. Hang F')
    }
    else if (tbc < 7) {
        console.log('diem tb hoc sinh:',tbc,'. Hang C') 
    } 
    else if (tbc < 9) {
        console.log('diem tb hoc sinh:',tbc,'. Hang B')
    }
    else {
        console.log('diem tb hoc sinh:',tbc,'. Hang A')
    }
}


//2.d
function tinh_cuoc_dt(tg) {
    const phi = 25000
    if (tg >= 0 && tg <= 50) {
        console.log('cuoc dien thoai la',phi + (600*tg))
    }
    else if (tg > 50 && tg <= 200) {
        console.log('cuoc dien thoai la',phi + (600*50) + (400*(tg - 50)))
    }
    else if ( tg > 200) {
        console.log('cuoc dien thoai la',phi + (600*50) + (400*150) + (200*(tg-200)))
    }
}
tinh_cuoc_dt(60)