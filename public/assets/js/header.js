(function () {
    const menu = document.querySelector(".headerPart .container nav");

    Array.from(document.querySelectorAll(".headerPart .container nav ul li a"))
        .forEach((item, index) => {
            item.onmouseover = () => {
                menu.dataset.activeIndex = index;
            }
        });
})();