(() => {
    const d = document;
    const $btnBurger = document.querySelector(".burger-btn")
    const $list = document.querySelector(".lista")

    $btnBurger.addEventListener("click", () => {
        $list.classList.toggle("active")
        if ($list.classList.contains("active")) {
            $list.style.display = "inherit"
            // $list.style.display = "flex"
            // $list.style.flexDirection = "column"
            // $list.style.alignItems = "center"

        } else {
            $list.style.display = "none"

        }
    })


})()