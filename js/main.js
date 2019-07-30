/*
* 4. 메인, 활동 버튼 클릭시 각 버튼에 맞는 페이지로 이동
* 6. Home버튼 누르면 드롭다운 나타내기 */

/*
* 4번 기능 start */
function goPage(page) {
    location.href = page;
}
/*
* 4번 기능 end */

/*
* 6번 기능 시작 */
window.addEventListener('resize', () => {
    width = window.innerWidth;
    if (width > 940) {
        mouse_over();
    } else {
        mouse_out();
    }
})
function mouser_click(select) {
    if (select === true) {
        mouse_over();
    } else {
        mouse_out();
    }
}
function mouse_over() {
    document.getElementById('go_main').style.display = "block";
    document.getElementById('go_activity').style.display = "block";
}
function mouse_out() {
    document.getElementById('go_main').style.display = "none";
    document.getElementById('go_activity').style.display = "none";
}

let mouse_key = false;
document.getElementById('view_menu').addEventListener('click', () => {
    mouse_key = !mouse_key;
    mouser_click(mouse_key);
})
/*
* 6번 기능 끝  */





























