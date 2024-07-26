(function () {
    var data = [
        "Web Developer",
        "Front End Developer",
        "Full Stack Developer"
    ]

    var el = document.querySelector(".hero-skills"),
        root = document.querySelector(":root"),
        initialDataIndex = 0,
        writtingTime = 50,
        delayTime = 1200,
        clearingTime = 30


    writeText(initialDataIndex)

    function writeText(index) {
        var i = 0
        var interval = setInterval(() => {
            el.innerHTML += data[index][i]
            if (i == data[index].length - 1) {
                i = 0
                clearInterval(interval)
                setTimeout(clearText, delayTime)
            } else {
                i++;
            }
        }, writtingTime);
    }

    var dataIndex = initialDataIndex + 1

    function clearText() {
        var interval = setInterval(() => {
            var elData = el.innerHTML
            if (elData !== "") {
                el.innerHTML = elData.substring(0, elData.length - 1)

            } else {
                clearInterval(interval)
                writeText(dataIndex);

                (dataIndex == data.length - 1) ? dataIndex = 0 : dataIndex++
            }
        }, clearingTime);
    }
})();