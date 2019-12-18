window.addEventListener("load", () => {
    const links = document.querySelectorAll(".menu-link");
    const burger = document.querySelector(".burger");
    const header = document.querySelector(".header");

    links.forEach(item => {
        item.addEventListener("click", () => {
            const href = item.getAttribute("data-href");
            burger.click();

            document.querySelector(`.${ href }`).scrollIntoView({ behavior: "smooth" });
        });
    });

    document.addEventListener("scroll", (e) => {
        const scrollValue = window.scrollY;

        const iter = (item, index = 0) => {
            const href = item.getAttribute("data-href");
            const anchor = document.querySelector(`.${ href }`);
            const y = anchor.getBoundingClientRect().y;
            const diff = scrollValue - y;
            const offset = 200;

            if (diff >= offset) {
                const nextI = index + 1;
                return links[nextI] ? iter(links[nextI], nextI) : links[index].classList.add("link-active")
            }

            if (index === 0) return item.classList.add("link-active");
            return links[index - 1].classList.add("link-active");
        };

        links.forEach(link => link.classList.remove("link-active"));

        iter(links[0]);
    });

    burger.addEventListener("click", () => {
        if (header.classList.contains("active")) return header.classList.remove("active");
        else header.classList.add("active");
    });
});
