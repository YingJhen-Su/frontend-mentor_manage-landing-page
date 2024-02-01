# Frontend Mentor - Manage landing page solution

This is a solution to the [Manage landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Table of contents](#table-of-contents)
-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Useful resources](#useful-resources)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the site depending on their device's screen size
-   See hover states for all interactive elements on the page
-   See all testimonials in a horizontal slider
-   Receive an error message when the newsletter sign up `form` is submitted if:
    -   The `input` field is empty
    -   The email address is not formatted correctly

### Screenshot

![screenshot](./images/screenshot.png)

### Links

-   Solution URL: [https://www.frontendmentor.io/solutions/manage-landing-page-using-tailwind-css-0d0Q3bsJDS](https://www.frontendmentor.io/solutions/manage-landing-page-using-tailwind-css-0d0Q3bsJDS)
-   Live Site URL: [https://yingjhen-su.github.io/frontend-mentor_manage-landing-page/](https://yingjhen-su.github.io/frontend-mentor_manage-landing-page/)

## My process

### Built with

-   Semantic HTML5 markup
-   [Tailwind CSS](https://tailwindcss.com/)
-   Mobile-first workflow
-   Javascript

### What I learned

-   Use Tailwind CSS Utility class.

```html
<nav class="hidden lg:block text-lg font-medium text-word">
    <ul class="flex gap-6">
        <li>
            <a class="hover:opacity-70 focus:opacity-70" href="#">Pricing</a>
        </li>
        <li>
            <a class="hover:opacity-70 focus:opacity-70" href="#">Product</a>
        </li>
        <li>
            <a class="hover:opacity-70 focus:opacity-70" href="#">About Us</a>
        </li>
        <li>
            <a class="hover:opacity-70 focus:opacity-70" href="#">Careers</a>
        </li>
        <li>
            <a class="hover:opacity-70 focus:opacity-70" href="#">Community</a>
        </li>
    </ul>
</nav>
```

-   Customize the theme of tailwind.config.js file.

```javascript
theme: {
    extend: {
        fontFamily: {
            beVietnamPro: ["Be Vietnam Pro", "sans-serif"],
        },
        keyframes: {
            "open-menu": {
                "0%": { transform: "scaleY(0)" },
                "80%": { transform: "scaleY(1.2)" },
                "100%": { transform: "scaleY(1)" },
            },
        },
        animation: {
            "open-menu": "open-menu 0.3s ease-in-out",
        },
    },
}
```

-   Use CSS and @layer.

```css
@layer utilities {
    .btn-shadow {
        @apply shadow-lg shadow-primary-light;
    }

    .error-input {
        @apply border border-primary text-primary;
    }
}
```

-   Implement draggable slider.

```javascript
// 處理 mousedown & touchstart
const dragStart = (e) => {
    isDragging = true;
    slider.classList.remove("cursor-pointer");
    slider.classList.add("cursor-grabbing");

    prevX = e.pageX || e.touches[0].pageX;
    scrollLeft = slider.scrollLeft;
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

// mouse event & touch event
slider.addEventListener("mousedown", dragStart);
slider.addEventListener("touchstart", dragStart);
slider.addEventListener("mousemove", dragMove);
slider.addEventListener("touchmove", dragMove);
slider.addEventListener("mouseleave", dragEnd);
slider.addEventListener("mouseup", dragEnd);
slider.addEventListener("touchend", dragEnd);
```

-   Handle scrollend event.

```javascript
// scrollend event 確認是否改變圓點顯示
const handleScroll = () => {
    const currentIndex = Math.floor(slider.scrollLeft / slider.clientWidth);
    if (currentIndex !== prevIndex) {
        changeButton(currentIndex);
    }
};

// scrollend event
slider.addEventListener("scrollend", handleScroll);
```

### Useful resources

-   [[React]Tailwindcss 如何使用、安裝字型？](https://medium.com/@roan6903/react-tailwindcss-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-%E5%AE%89%E8%A3%9D%E5%AD%97%E5%9E%8B-3986bcb5f9f2)
-   [Animations And Transitions With Tailwind CSS](https://blog.openreplay.com/animations-and-transitions-with-tailwind-css/)
-   [[Javascript] Regular Expression – Email 表單驗證](https://ithelp.ithome.com.tw/articles/10094951)
-   [正規表示式做欄位驗證+常用規則](https://hackmd.io/@eating-coding/SJf2U1wyY)
-   [Create A Draggable Image Slider in HTML CSS & JavaScript | Mobile Friendly Slider in JavaScript](https://www.youtube.com/watch?v=7HPsdVQhpRw)

## Author

-   Frontend Mentor - [@YingJhen-Su](https://www.frontendmentor.io/profile/YingJhen-Su)
