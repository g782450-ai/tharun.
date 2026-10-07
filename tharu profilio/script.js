// script.js

document.addEventListener("DOMContentLoaded", () => {
    const headerTitle = document.querySelector("header h1");
    const currentTime = new Date().getHours();
    let greeting = "Hi, I'm Tharun";

    if (currentTime < 12) {
        greeting = "Good Morning, I'm Tharun ☀️";
    } else if (currentTime < 18) {
        greeting = "Good Afternoon, I'm Tharun 🌤️";
    } else {
        greeting = "Good Evening, I'm Tharun 🌙";
    }

    if (headerTitle) {
        headerTitle.textContent = greeting;
    }

    const cursorBall = document.querySelector(".cursor-ball");
    const profilePhoto = document.querySelector(".profile-photo");
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches || window.innerWidth <= 480;

    const setColorMode = (active) => {
        if (!profilePhoto) return;
        profilePhoto.classList.toggle("is-color", active);
    };

    if (profilePhoto) {
        profilePhoto.addEventListener("click", () => {
            if (isTouchDevice) {
                setColorMode(!profilePhoto.classList.contains("is-color"));
            }
        });
    }

    if (!isTouchDevice && cursorBall) {
        document.addEventListener("pointermove", (event) => {
            const isInsidePhoto = profilePhoto && profilePhoto.matches(":hover");

            if (isInsidePhoto) {
                cursorBall.style.left = `${event.clientX}px`;
                cursorBall.style.top = `${event.clientY}px`;
                cursorBall.classList.add("visible");
            } else {
                cursorBall.classList.remove("visible");
            }
        });
    }

    if (!isTouchDevice && profilePhoto && cursorBall) {
        profilePhoto.addEventListener("mouseenter", () => {
            cursorBall.classList.add("visible");
            cursorBall.classList.add("active");
        });

        profilePhoto.addEventListener("mouseleave", () => {
            cursorBall.classList.remove("visible");
            cursorBall.classList.remove("active");
        });
    }
});