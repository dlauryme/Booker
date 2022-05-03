function init() {
    document.querySelectorAll("div.return-top-button button").forEach(el => {
        el.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        })
    })

    document.querySelectorAll("div#main-catalog button").forEach(el => {
        el.addEventListener('click', () => {
            document.querySelectorAll("div#catalog").forEach(el => {
                if (el.classList.contains("catalog-disabled")) {
                    el.classList.remove("catalog-disabled");
                } else {
                    el.classList.add("catalog-disabled");
                }
            })
        })
    })
}

window.onload = init;
