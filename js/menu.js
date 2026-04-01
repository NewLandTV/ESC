window.addEventListener("load", () => {
    const menuBar = document.getElementById("menu-bar");
    const menuButtons = document.getElementsByClassName("menu-button");
    const array = Array.from(menuButtons);

    array.forEach(button => {
        button.addEventListener("click", () => {
            // visually-hidden 클래스를 토글(추가 및 제거)
            let show = menuBar.classList.toggle("visually-hidden");

            if (show) {
                menuBar.classList.remove("fade-in-down");   // fade-in-down 클래스 제거
            } else {
                menuBar.classList.add("fade-in-down");  // fade-in-down 클래스 추가
            }
        });
    });
});