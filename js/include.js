window.addEventListener("DOMContentLoaded", () => {
    // 모든 HTML 요소를 가져옵니다.
    const elements = document.getElementsByTagName("*");
    const array = Array.from(elements);

    array.forEach(element => {
        // 포함할 HTML 파일을 속성에서 불러옵니다.
        const includePath = element.dataset.includePath;
        
        if (!includePath) {
            return;
        }

        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                element.innerHTML = this.responseText;
            }
        }
        xhr.open("GET", includePath, true);
        xhr.send();
    });
});