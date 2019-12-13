window.onload = () => {
    const sections = document.querySelectorAll("section");

    window.onwheel = (e) => {
        const deltaY = e.deltaY;

        if (deltaY < 0) console.log("ВВЕРХ");
        else if (deltaY > 0) console.log("ВНИЗ");

        sections.forEach(item => {
            const y = item.getBoundingClientRect().y;
        })
    };
};