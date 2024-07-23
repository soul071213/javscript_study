const getScrollPrecent = () => {
    //스크롤 양
    const scrolled = window.scrollY;

    //페이지 전체 높이
    const pageHeight = document.documentElement.scrollHeight;

    //표시 영역 높이
    const viewHeight = document.documentElement.clientHeight;

    //스크롤 한 비율 식 :  스크롤 양 / (페이지 전체 높이 - 표시 영역 높이) * 100
    const percenteage = scrolled / (pageHeight - viewHeight) * 100;

    document.querySelector('#bar').style.width=`${percenteage}%`; //%붙여 줘야함

} 

window.addEventListener('scroll',getScrollPrecent);