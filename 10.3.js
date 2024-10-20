function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var menuBtn = document.getElementById("menu-btn");

    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        document.querySelector('.content').style.marginLeft = "0";
        menuBtn.style.display = "block";  // Hiển thị lại nút Menu sau khi đóng sidebar
    } else {
        sidebar.style.width = "250px";
        document.querySelector('.content').style.marginLeft = "250px";
        menuBtn.style.display = "none";  // Ẩn nút Menu sau khi mở sidebar
    }
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
    document.querySelector('.content').style.marginLeft = "0";
    document.getElementById("menu-btn").style.display = "block";  // Hiển thị lại nút Menu khi đóng sidebar
}

function showSection(id) {
    var sections = document.querySelectorAll('.section');
    
    sections.forEach(function(section) {
        section.classList.remove('active');
    });
    
    var activeSection = document.getElementById(id);
    if (activeSection) {
        activeSection.classList.add('active');
    }

    closeSidebar();  // Đóng sidebar sau khi chọn mục
}
