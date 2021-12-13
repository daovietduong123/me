let page = document.getElementById("header")
function loadheader() {
    page.innerHTML = page.innerHTML + 
    `<span class="khoangcach1">Thông báo |</span>
    <span>Trở thành người bán Shoppe |</span>
    <span>Tải ứng dụng |</span>
    <span>Kết nối </span>
    <span class="khoangcach2">Thông báo |</span>
    <span>Hỗ trợ |</span>
    <span>Đăng ký |</span>
    <span>Đăng nhập </span>
    <img id="logo1" src="images/1200px-Shopee.svg.png">
    <input type="text" id="search" placeholder="Tìm kiếm....."></input>`
    }
    loadheader()