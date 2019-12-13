window.addEventListener("load", () => {
    let blockScroll = false;
    const sections = document.querySelectorAll("section");

    const scrollInSection = (delta) => {
        if (blockScroll) return false;

        const yArr = [];

        sections.forEach(item => yArr.push(Math.abs(item.getBoundingClientRect().y)));

        yArr.forEach((y, index) => {

            if (y === 0 || y === Math.min(...yArr)) {
                if (delta < 0 ? index === 0 : index === sections.length - 1) return false;
                blockScroll = true;
                sections[delta < 0 ? index - 1 : index + 1].scrollIntoView({ behavior: "smooth" })
            }
        });

        setTimeout(() => blockScroll = false, 700);
    };

    window.addEventListener("wheel", (e) => scrollInSection(e.deltaY));
});