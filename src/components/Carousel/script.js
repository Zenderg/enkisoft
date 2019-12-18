

export function slider() {
    let currentIndex = 0;
    const offset = document.getElementById("carousel-offset");
    const header = document.querySelector(".header");
    const subMenuItems = document.querySelectorAll(".sub-menu-item");

    const indicators = document.querySelectorAll(".slider>.indicator");
    const blocks = document.querySelectorAll(".blocks-container>.block");

    const blockCount = blocks.length;

    const changeCurrentIndex = (newIndex) => {
        currentIndex = newIndex;
        if(header.classList.contains("active")){
            header.classList.remove("active");
        }
        offset.style.marginLeft = `calc(${currentIndex} * -100%)`;
        indicators.forEach((item, i) => {
            item.className = i === currentIndex ? "indicator active" : "indicator";
        });
        blocks.forEach((item, i) => {
            item.className = i === currentIndex ? "block active" : "block";
        });

    };

    const slide = (direction) => {
        const newIndex =  (currentIndex + direction) % blockCount;
        currentIndex = (newIndex < 0) ? blockCount-1 : newIndex;
        changeCurrentIndex(currentIndex);
    };
    const sliderListener = (item, i) => {
        item.addEventListener("click", () => changeCurrentIndex(i));
    };

    subMenuItems.forEach(sliderListener);
    indicators.forEach(sliderListener);

    document.addEventListener("keydown", ({key}) => {
        if(key === "ArrowRight"){
            slide(1);
        } else if(key === "ArrowLeft"){
            slide(-1);
        }
    });
    document.getElementById("carousel-button-prev").addEventListener("click", () => slide(-1));
    document.getElementById("carousel-button-next").addEventListener("click", () => slide( 1));

}
