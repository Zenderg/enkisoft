export let blockScroll = false;

window.addEventListener("load", () => {
    const mobileWidth = 1200;
    const sections = document.querySelectorAll("section");

    const scrollInSection = (delta) => {
        if (blockScroll || window.innerWidth < mobileWidth) return false;

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

    window.addEventListener("wheel", (e) => {
        if (e.target.tagName !== "YMAPS") scrollInSection(e.deltaY)
    });
});
