/*
! 기능 개요
* 1. 개요 클릭시 해당하는 개요 요소 배경 색깔 주기
* 2. 개요 클릭시 해당하는 개요의 내용으로 결과물과 느낀점 변경
* 3. 화살표를 클릭시 개요 변경
* 4. 메인, 활동 버튼 클릭시 각 버튼에 맞는 페이지로 이동 -> a태그로 교체
* 5. 메인, 활동 버튼 일정 width값 이하일 때 Home버튼으로 교체 -> 현재 css로 적용 중
* 6. Home버튼 누르면 드롭다운 나타내기
*/

/*
* 1번 기능 start
? 클릭시 배경 색을 초기화하는 함수를 실행하고, 
? 클릭한 요쇼의 배경 색만 바뀌게 만들었습니다. */
var subtitle = document.getElementsByClassName('side_subtitle');
for(var i = 0; i < subtitle.length; i++) {
    subtitle[i].addEventListener('click', function() {
        subtitle_bg_clear();
        this.style.backgroundColor = '#a1a1a1';
    })
}

const subtitle_bg_clear = function() {
    var bg_claer = document.getElementsByClassName('side_subtitle');
    for (var i = 0; i < subtitle.length; i++) {
        bg_claer[i].style.backgroundColor = '#00000000';
    }
}
/*
*1번 기능 end */

/*
*2번 기능 start*/
let title_page = 0;
const right_arrow_btn = document.getElementById('right_arrow_btn');
const left_arrow_btn = document.getElementById('left_arrow_btn');
window.onload = () => {
    change_div(title_page);
}
const change_div = function(id) {
    var subtitle = document.getElementsByClassName('side_subtitle');
    title_page = id;
    var main = document.getElementById('main');
    if(id === 0) {
        main.innerHTML = pirataje;
        subtitle_bg_clear();    
        subtitle[id].style.backgroundColor = '#a1a1a1';
        document.getElementById('left_arrow_btn').style.visibility = 'hidden';
    }
    else if(id === 1) {
        main.innerHTML = template;
        subtitle_bg_clear();
        subtitle[id].style.backgroundColor = '#a1a1a1';
    }
    else if(id === 2) {
        main.innerHTML = requiz;
        subtitle_bg_clear();
        subtitle[id].style.backgroundColor = '#a1a1a1';
        document.getElementById('right_arrow_btn').style.visibility = 'hidden';
    }
    else if(id > 2) {
        alert("페이지 업 오류");
        title_page = 2;
        return;
    }
    else if (id < 0) {
        alert("페이지 다운 오류");
        title_page = 0;
        return;
    }
    else {
        alert("페이지 이동 오류");
        return;
    }
}
/*
*2번 기능 end*/
/*
! 각 주제별 HTML을 만들었습니다. 
! 요소가 클릭되었을 때 HTML을 넣는 방식입니다.
! 이 부분은 안 좋은 코드 같다고 생각합니다.
? 더 좋은 방법이 있을까요? */
const intro = `<div id="intro">
                    <div id="descrip">
                        <h1 class="in_desc" id="name">이성진</h1>
                        <h2 class="in_desc" id="job">Web Developer</h2>
                        <h4 class="in_desc" id="nickname"> 개발자</h4>
                    </div>
                </div>`

const pirataje = intro+`
                <div id="pic_btns">
                    <button id="left_arrow_btn" onclick="move_page(-1);"><img id="left_arrow" class="arrow_img" src="imgs/left_arrow.svg" alt="left_arrow"></button>
                    <button id="right_arrow_btn" onclick="move_page(1);"><img id="right_arrow" class="arrow_img" src="imgs/right-arrow.svg" alt="right_arrow"></button>
                </div>
                <div id="explan" class="pirataje">
                    <div class="in_explan">
                        <div class="explan_title">
                            <h1 class="explan_h1">피라타제</h1>
                        </div>
                        <div class="explan_subtitle">
                            <h2 class="explan_h2">나의 첫 프론트</h2>
                            <p class="explan_p">웹 프론트의 시작, 힘들지만 좋은 경험</p>
                        </div>
                    </div>
                </div>
                <div id="feel">
                    <div id="in_feel">
                        <h1 id="feel_title" class="feel_text">생의 첫 협업</h1>
                        <p id="feel_content" class="feel_text">
                            - HTML을 작성할 때 특정한 형식을 따라서 작성하는 방법을 익힘<br>
                            - CSS에 처음으로 <strong>반응형</strong> 헤더 버튼을 구현함<br>
                            - 피라타제를 통해 각 문서를 정리하고, 모듈화를 통해 <strong>HTML, CSS, Javascript</strong>문서의 이해를 배움<br>
                            - PHP와 <strong>협업</strong>을 통해 프론트와 백의 관계를 이해함
                        </p>
                    </div>
                </div>
                <div id="pics">
                    <div id="pic">
                        <h3>메인 페이지</h3>
                        <img class="pirataje imgs"src="imgs/pirataje/pirataje1.png" alt="img" class="in_pic">
                        <h3>게시판 페이지</h3>
                        <img class="pirataje imgs" src="imgs/pirataje/pirataje2.png" alt="img" class="in_pic">
                        <h3>랭크 페이지</h3>
                        <img class="pirataje imgs" src="imgs/pirataje/pirataje3.png" alt="img" class="in_pic">
                    </div>
                </div>`
const template = intro+`
                <div id="pic_btns">
                    <button id="left_arrow_btn" onclick="move_page(-1);"><img id="left_arrow" class="arrow_img" src="imgs/left_arrow.svg" alt="left_arrow"></button>
                    <button id="right_arrow_btn" onclick="move_page(1);"><img id="right_arrow" class="arrow_img" src="imgs/right-arrow.svg" alt="right_arrow"></button>
                </div>
                <div id="explan" class="template">
                    <div class="in_explan">
                        <div class="explan_title">
                            <h1 class="explan_h1">템플릿</h1>
                        </div>
                        <div class="explan_subtitle">
                            <h2 class="explan_h2">템플릿을 만들어보자!</h2>
                            <p class="explan_p">사람들이 많이 사용하는 레이아웃의 기본 틀을 작성하고 구현</p>
                        </div>
                    </div>
                </div>
                <div id="feel">
                    <div id="in_feel">
                        <h1 id="feel_title" class="feel_text">일반적인 레이아웃 개념을 알다.</h1>
                        <p id="feel_content" class="feel_text">
                            - 대다수의 웹 사이트가 사용하는 레이아웃을 작성하고 구현함<br>
                            - 헤더, 메인, 풋터의 관계를 이해함<br>
                            - 메뉴에 드롭다운 기능을 사용함<br>
                        </p>
                    </div>
                </div>
                <div id="pics">
                    <div id="pic">
                        <h3>메인 페이지</h3>
                        <img class="pirataje imgs" src="imgs/template/template1.png" alt="img" class="in_pic">
                        <h3>메인 페이지2</h3>
                        <img class="pirataje imgs" src="imgs/template/template3.png" alt="img" class="in_pic">
                        <h3>게시판 페이지</h3>
                        <img class="pirataje imgs" src="imgs/template/template2.png" alt="img" class="in_pic">
                    </div>
                </div>`
const requiz = intro +`
                <div id="pic_btns">
                    <button id="left_arrow_btn" onclick="move_page(-1);"><img id="left_arrow" class="arrow_img" src="imgs/left_arrow.svg" alt="left_arrow"></button>
                    <button id="right_arrow_btn" onclick="move_page(1);"><img id="right_arrow" class="arrow_img" src="imgs/right-arrow.svg" alt="right_arrow"></button>
                </div>
                <div id="explan" class="template">
                    <div class="in_explan">
                        <div class="explan_title">
                            <h1 class="explan_h1">리퀴즈</h1>
                        </div>
                        <div class="explan_subtitle">
                            <h2 class="explan_h2">생애 첫 팀 프로젝트</h2>
                            <p class="explan_p">퀴즈 시스템을 기획하고 퀴즈 사이트 구현</p>
                        </div>
                    </div>
                </div>
                <div id="feel">
                    <div id="in_feel">
                        <h1 id="feel_title" class="feel_text">팀 프로젝트와 PM</h1>
                        <p id="feel_content" class="feel_text">
                            - 3개의 분야(Web, Android, Desktop)와 12명의 학생들이 참여한 프로젝트<br>
                            - Web Front-end 100% 기여함<br>
                            - 서버와 연동하면서 회원 관리, 문제 관리 등의 서버 통신 관련 작업을 수행함<br>
                            - 프로젝트 <strong>PM 역할</strong>을 수행하면서 프로젝트 명세서와 보고서를 작성함<br>
                            <a href="https://docs.google.com/spreadsheets/d/1RPMrH_2cXKqIZuvVyFlz9yOC1_GlQLksw_WDsCS843w/edit#gid=0" target="_blank">명세서 보러가기(새 탭)</a><br>
                            <a href="https://docs.google.com/document/d/1-gP4Lq9t7tZ22GSVdHbV02cpLuXMjfCqiV3IjJAFpgU/edit" target="_blank">보고서 보러가기(새 탭)</a><br>
                        </p>
                    </div>
                </div>
                <div id="pics">
                    <div id="pic">
                        <h3>메인 페이지</h3>
                        <img class="pirataje imgs" src="imgs/requiz/requiz1.png" alt="img" class="in_pic">
                        <h3>단어장 페이지</h3>
                        <img class="pirataje imgs" src="imgs/requiz/requiz2.png" alt="img" class="in_pic">
                        <h3>퀴즈 풀기</h3>
                        <img class="pirataje imgs" src="imgs/requiz/requiz3.png" alt="img" class="in_pic">
                        <h3>회원 정보 수정 페이지</h3>
                        <img class="pirataje imgs" src="imgs/requiz/requiz4.png" alt="img" class="in_pic">
                    </div>
                </div>`

/*
* 3번 기능 start */
const move_page = function(page) {
    move = title_page + page;
    change_div(move);
}

/*
* 4번 기능 start */
// function goPage(page) {
//     location.href = page;
// }
/*
* 4번 기능 end */

/*
* 5번 기능 start 
* 5번 기능 도움을 준 사이트
* https://stackoverflow.com/questions/15840347/get-browser-width-and-height-after-user-resizes-the-window
* https://blog.outsider.ne.kr/1153
*/

/*
* 방법 1: 
var in_header = document.getElementById('in_header');
var original_main = document.getElementById('go_main');
var original_activity = document.getElementById('go_activity');
var change_button = document.createElement('button');
change_button.setAttribute('id', 'view_menu');
change_button.setAttribute('class', 'header_btn');
change_button.innerHTML = "Home"
window.addEventListener('resize', (e) => {
    width = e.target.innerWidth;
    if (width <= 940) {
        in_header.innerHTML = "";
        in_header.appendChild(change_button);
    }
    else {
        in_header.innerHTML = "";
        in_header.appendChild(original_main);
        in_header.appendChild(original_activity);
    }
})
*/
/*
* 방법 2 
var in_header = document.getElementById('in_header');
var original_main = document.getElementById('go_main');
var original_activity = document.getElementById('go_activity');
var change_menu = document.getElementById('view_menu');
window.addEventListener('resize', (width) => {
    width = width.target.innerWidth;
    if(width > 940) {
        view_menu();
    }
    else {
        view_menu2();
    }
})
var view_menu = function() {
    original_main.style.display = 'block';
    original_activity.style.display = 'block';
    change_menu.style.display = 'none';
}
var view_menu2 = function() {
    original_main.style.display = 'none';
    original_activity.style.display = 'none';
    change_menu.style.display = 'block';
}
*/

/*
* 6번 기능 시작 */
window.addEventListener('resize', () => {
    width = window.innerWidth;
    if(width > 940) {
        mouse_over();
    }
})
function mouser_click(select) {
    if(select === true) {
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






























