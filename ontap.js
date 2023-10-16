function soamduong (a) {
    if (a>0) {
        console.log('%s la so duong',a)
    }
    else if (a<0) {
        console.log('%s la so am',a)
    }
    else {
        console.log('%s ko am ko duong',a)
    }
}

function chanle (n) {
    if (n == 0) {
        console.log('%s ko chan ko le',n)
    }
    else if (n%2 == 0) {
        console.log('%s la so chan',n)
    }
    else {
        console.log('%s la so le',n)
    }
}

function max(a,b,c) {
    let max = a
    if (max < b) {
        max = b
    }
    if (max < c) {
        max = c
    }
    return max
}
function namnhuan(nam) {
    if (nam%4 == 0 && nam%100 !==0) {
        console.log('%s la nam nhuan',nam)
    }
    else if (nam%100 == 0 && nam%400 == 0) {
        console.log('%s la nam nhuan',nam)
    }
    else {console.log('%s ko la nam nhuan',nam)}
}
function cuocdt(phut) {
    let cuoc = 0
    if (phut <50 ) {
        cuoc = (600*phut) + 25000
    }
    if (phut < 200) {
        cuoc = (600*50) + (400*(phut-50)) + 25000
    }
    if (phut > 200) {
        cuoc = (600*50) + (400*150) + (200*(phut-200)) + 25000
    }
    return console.log('cuoc dt cua gia dinh la',cuoc)
}
// cuocdt(300)
let opject = {}
for (let i = 0; i < 10 ; i++) {
    const phantui = i
    opject[phantui] = (opject[phantui] || 0) + 2
}
for (let i = 0; i<15; i++) {
    const phantui = i
    opject[phantui] = (opject[phantui] || 0) + 1
}
console.log(opject)


