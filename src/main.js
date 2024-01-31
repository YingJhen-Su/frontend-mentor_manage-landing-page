const initApp = () => {
    // 1. mobile menu 處理
    // mobile menu 顯示開關
    const toggle = () => {
        menuBtn.classList.toggle("hidden");
        closeBtn.classList.toggle("hidden");
        menu.classList.toggle("hidden");
        overlay.classList.toggle("hidden");
    };

    const menu = document.getElementById("menu");
    const menuBtn = document.getElementById("menu_btn");
    const closeBtn = document.getElementById("close_btn");
    const overlay = document.getElementById("overlay");
    menuBtn.addEventListener("click", toggle);
    closeBtn.addEventListener("click", toggle);
    menu.addEventListener("click", toggle);
    overlay.addEventListener("click", toggle);

    // 2. email表單送出檢查
    // form 顯示錯誤訊息
    const showError = () => {
        errorMsg.classList.remove("invisible");
        errorMsg.classList.add("visible");
        emailInput.classList.add("error-input");
    };

    // form 隱藏錯誤訊息
    const hideError = () => {
        errorMsg.classList.remove("visible");
        errorMsg.classList.add("invisible");
        emailInput.classList.remove("error-input");
    };

    // 檢查email格式
    const checkEmail = (str) => {
        const regex =
            /^[A-Za-z0-9]+([-_\+\.][A-Za-z0-9]+)*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
        return regex.test(str);
    };
    // /^\w+([-\+\.]\w+)*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
    // /^_?[A-Za-z0-9]+([-_\+\.][A-Za-z0-9]+)*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/

    // submit event 處理
    const handleSubmit = (e) => {
        e.preventDefault();
        const emailValue = emailInput.value.trim();

        if (!emailValue || !checkEmail(emailValue)) {
            showError();
        } else {
            hideError();
        }
    };

    const form = document.getElementById("form");
    const emailInput = document.getElementById("email_input");
    const errorMsg = document.getElementById("error_message");
    form.addEventListener("submit", handleSubmit);

    // 3. draggable slider處理 & 圓點切換
    // 處理 mousedown & touchstart
    const dragStart = (e) => {
        isDragging = true;
        slider.classList.remove("cursor-pointer");
        slider.classList.add("cursor-grabbing");

        prevX = e.pageX || e.touches[0].pageX;
        scrollLeft = slider.scrollLeft;
        // console.log(slider.scrollWidth, scrollLeft, slider.clientWidth, prevX);
    };

    // 處理 mouseup & mouseleave & touchend
    const dragEnd = () => {
        isDragging = false;
        slider.classList.remove("cursor-grabbing");
        slider.classList.add("cursor-pointer");
    };

    // 處理 mousemove & touchmove
    const dragMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();

        const currentX = e.pageX || e.touches[0].pageX;
        const diff = currentX - prevX;
        slider.scrollLeft = scrollLeft - diff;
    };

    // scrollend event 確認是否改變圓點顯示
    const handleScroll = () => {
        const currentIndex = Math.floor(slider.scrollLeft / sliderWidth);
        if (currentIndex !== prevIndex) {
            changeButton(currentIndex);
        }
    };

    // 改變圓點顯示
    const changeButton = (index) => {
        console.log(allButton);
        allButton.forEach((button) => {
            button.classList.remove("bg-primary");
        });

        allButton[index].classList.add("bg-primary");
        prevIndex = index;
    };

    // click event 處理
    const handleClick = (index) => {
        if (index !== prevIndex) {
            changeButton(index);
            slider.scrollLeft = sliderWidth * index;
        }
    };

    const slider = document.getElementById("slider");
    const buttonGroup = document.getElementById("button_group");
    const allButton = buttonGroup.querySelectorAll("button");
    const sliderWidth = slider.clientWidth;

    let isDragging = false;
    let prevIndex = 0;
    let prevX;
    let scrollLeft;

    // mouse event & touch event
    slider.addEventListener("mousedown", dragStart);
    slider.addEventListener("touchstart", dragStart);
    slider.addEventListener("mousemove", dragMove);
    slider.addEventListener("touchmove", dragMove);
    slider.addEventListener("mouseleave", dragEnd);
    slider.addEventListener("mouseup", dragEnd);
    slider.addEventListener("touchend", dragEnd);

    // scrollend event
    slider.addEventListener("scrollend", handleScroll);

    // allButton click event
    allButton.forEach((button, index) => {
        button.addEventListener("click", () => handleClick(index));
    });
};

document.addEventListener("DOMContentLoaded", initApp);
