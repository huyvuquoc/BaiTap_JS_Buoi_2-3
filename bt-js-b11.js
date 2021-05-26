// Bai 1 Tính tiền lương
/**
 * B1: Input: Số ngày lương
 * - 
 * B2: Handle
 * - Tạo biến luongMotNgay, soNgayLuong, tienLuong
 * - Tính lương thực nhận: tienLuong = luongMotNgay * soNgayLuong
 * B3: Output
 * - Xuất ra tiền lương
 */
var btnTinhTienLuong = document.getElementById('btnTinhTienLuong');
var luongMotNgay = 100000;
btnTinhTienLuong.onclick = function() {
    var soNgayLuong = document.getElementById('soNgayLuong').value;
    console.log(soNgayLuong);
    var tienLuong = soNgayLuong * luongMotNgay;
    console.log(tienLuong);
    document.getElementById('inTienLuong').innerHTML = 'Tiền lương = ' + tienLuong.toLocaleString('vi-VN') + ' VND';
}


// Bai 2 Tính giá trị trung bình
/**
 * B1: Input: Giá trị của 5 số thực
 * 
 * B2: Handle
 * - tạo biến so1, so2, so3, so4, so5, giaTriTB
 * - Tính giá trị trung bình: giaTriTB = (so1 + so2 + so3 + so4 + so5)/5;
 * 
 * B3: Output: Xuất giá trị trung bình.
 */
btnTinhTB = document.getElementById('btnTinhTB');

btnTinhTB.onclick = function() {
    var so1 = document.getElementById('so1').value;
    var so2 = document.getElementById('so2').value;
    var so3 = document.getElementById('so3').value;
    var so4 = document.getElementById('so4').value;
    var so5 = document.getElementById('so5').value;

    var giaTriTB = (+so1 + +so2 + +so3 + +so4 + +so5)/5;
    
    document.getElementById('inGiaTriTB').innerHTML = 'Giá trị trung bình là ' + giaTriTB;
}


// Bai 3
/**
 * B1: Input: nhập số tiền USD
 * 
 * B2: Handle
 * - tạo biến tyGiaUSD, soTienUSD, soTienVND
 * - tính số tiền USD: soTienVND = tyGiaUSD * soTienUSD
 * 
 * B3: Output: Xuất ra số tiền VND
 */
var btnTinhTienVND = document.getElementById('tinhTienVND');

btnTinhTienVND.onclick = function() {
    var tyGiaUSD = document.getElementById('tyGiaUSD').value;
    var soTienUSD = document.getElementById('soTienUSD').value;

    var soTienVND = tyGiaUSD * soTienUSD;
    document.getElementById('soTienVND').innerHTML = 'Số tiền quy đổi ra VND là ' + soTienVND.toLocaleString('vi-VN') + ' VND';
}

// Bai 4
/**
 * B1: Input: nhập chiều dài và chiều rộng HCN
 * 
 * B2: Handle
 * - tạo biến chieuDai, chieuRong, chuViHCN, dienTichHCN
 * - tính chu vi HCN: chuViHCN = (chieuDai + chieuRong)*2
 * - tính dien tich HCN: dienTichHCN = chieuDai*chieuRong
 * 
 * B3: Output: Xuất ra chu vi và diện tích HCN
 */
var tinhHCN = document.getElementById('tinhHCN');

tinhHCN.onclick = function() {
    var chieuDai = document.getElementById('chieuDai').value;
    var chieuRong = document.getElementById('chieuRong').value;

    var chuViHCN = (+ chieuDai + +chieuRong)*2;
    var dienTichHCN = chieuDai * chieuRong;

    document.getElementById('chuViHCN').innerHTML = 'Chu vi HCN là ' + chuViHCN;
    document.getElementById('dienTichHCN').innerHTML = 'Diện tích HCN là ' + dienTichHCN;
}

// Bai 5
/**
 * B1: Input: nhập vào số có 2 chữ số
 * 
 * B2: Handle
 * - tạo biến so2ChuSo, soHangChuc, soHangDonVi, tong2KySo
 * - tính chữ số hàng chục: soHangChuc = so2ChuSo / 10 rồi làm tròn xuống
 * - tính chữ số hàng đơn vị: soHangDonVi = so2ChuSo % 10
 * - tính tổng 2 ký số: tong2KySo = soHangChuc + soHangDonVi
 * 
 * B3: Output: Xuất ra chu vi và diện tích HCN
 */
var btnTinhTong2ChuSo = document.getElementById('btnTinhTong2ChuSo');

btnTinhTong2ChuSo.onclick = function() {
    var so2ChuSo = document.getElementById('so2ChuSo').value;

    var soHangChuc = Math.floor(so2ChuSo/10);
    var soHangDonVi = so2ChuSo % 10;

    var tong2KySo = +soHangChuc + +soHangDonVi;

    document.getElementById('tong2KySo').innerHTML = 'Tổng 2 chữ số của số ' + so2ChuSo + ' là ' + tong2KySo;
}