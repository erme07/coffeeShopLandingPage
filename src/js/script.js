
const $container = document.querySelector(".container")
const $testimonial = document.getElementById("testimonial");
const $testDotContainer = document.getElementById("dotContainerTest")
const $cards = document.getElementById("cards");
const $cardsDotContainer = document.getElementById("dotContainerCards");
const $menu = document.getElementById("menu");
const $navbar = document.getElementById("navbar");

let testimonial_pnumber = 0
let cards_pnumber = 0

let testimonialwidth = $testimonial.parentElement.clientWidth + parseFloat(getComputedStyle($testimonial).gap)
let cardWidth= $cards.parentElement.clientWidth + parseFloat(getComputedStyle($cards).gap)

let startX = 0;

let testPress = false
let cardPress = false


const changeDot = (typeDot) => {
    let dots = Array.from(document.querySelectorAll(`[data-name='${typeDot}']`))
    dots.forEach((element)=>{
        element.classList.remove("text-brand")
    })
}

const createHtmlDot=(value,count,first)=>{
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "cursor-pointer");
    if(first)
        svg.classList.add("text-brand")
    svg.setAttribute("width", "8");
    svg.setAttribute("height", "8");
    svg.setAttribute("viewBox", "0 0 8 8");
    svg.setAttribute("fill", "none");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("data-name", value);
    svg.setAttribute("data-value", count);
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", "4");
    circle.setAttribute("cy", "4");
    circle.setAttribute("r", "4");
    circle.setAttribute("fill", "currentColor");
    circle.setAttribute("class", "pointer-events-none");
    svg.appendChild(circle)
    return svg
}

const getScreenSize=()=>{
    if($container.clientWidth <640)
        return "mobile"
    if($container.clientWidth >= 1024)
        return "lg"
    if($container.clientWidth >= 768)
        return "md"
    if($container.clientWidth >= 640 )
        return "sm"
}

const orderDots=()=>{
    $testDotContainer.innerHTML = ""
    $cardsDotContainer.innerHTML = ""
    $cards.style.translate = "0px"
    $testimonial.style.translate = "0px"
    let countTest,countCards;
    if(screensize === "mobile"){
        countTest = 6;
        countCards = 12;
    }else if(screensize == "sm"){
        countTest = 3;
        countCards = 6;
    }else if(screensize== "md"){
        countTest = 3;
        countCards = 4;
    }else if(screensize == "lg"){
        countTest = 2;
        countCards = 3;
    }
    for(let i=0;i<countTest;i++){
        if(i===0) $testDotContainer.appendChild(createHtmlDot("testimonialDot",i,true))
        else $testDotContainer.appendChild(createHtmlDot("testimonialDot",i,false))
    }
    for(let i=0;i<countCards;i++){
        if(i===0) $cardsDotContainer.appendChild(createHtmlDot("cardsDot",i,true))
        else $cardsDotContainer.appendChild(createHtmlDot("cardsDot",i,false))
    }
}

const handleMoveCards = (e) =>{
    let deltX = e.clientX - startX;
    let newTranslate = -cards_pnumber * cardWidth + deltX;

    $cards.style.translate = `${newTranslate}px`;

    if (Math.abs(deltX) > 150) {
        const direction = deltX < -150 ? 1 : -1;
        const newCardNumber = cards_pnumber + direction;
        if (newCardNumber >= 0 && newCardNumber < $cardsDotContainer.children.length) {
            cards_pnumber = newCardNumber;
            changeDot("cardsDot");
            $cardsDotContainer.children[cards_pnumber].classList.add("text-brand");
        }
        $cards.style.translate = `-${cards_pnumber * cardWidth}px`;
        $cards.removeEventListener("mousemove", handleMoveCards);
    }
}

const handleMoveCardsTouch = (e) =>{
    let deltX = e.touches[0].clientX - startX;
    let newTranslate = -cards_pnumber * cardWidth + deltX;

    $cards.style.translate = `${newTranslate}px`;

    if (Math.abs(deltX) > 150) {
        const direction = deltX < -150 ? 1 : -1;
        const newCardNumber = cards_pnumber + direction;
        if (newCardNumber >= 0 && newCardNumber < $cardsDotContainer.children.length) {
            cards_pnumber = newCardNumber;
            changeDot("cardsDot");
            $cardsDotContainer.children[cards_pnumber].classList.add("text-brand");
        }
        $cards.style.translate = `-${cards_pnumber * cardWidth}px`;
        $cards.removeEventListener("touchmove", handleMoveCardsTouch);
    }
}

const handleMoveTest = (e) =>{
    let deltX = e.clientX - startX;
    let newTranslate = -testimonial_pnumber * testimonialwidth + deltX;

    $testimonial.style.translate = `${newTranslate}px`;

    if (Math.abs(deltX) > 150) {
        const direction = deltX < -150 ? 1 : -1;
        const newTestNumber = testimonial_pnumber + direction;
        if (newTestNumber >= 0 && newTestNumber < $testDotContainer.children.length) {
            testimonial_pnumber = newTestNumber;
            changeDot("testimonialDot");
            $testDotContainer.children[testimonial_pnumber].classList.add("text-brand");
        }
        $testimonial.style.translate = `-${testimonial_pnumber * testimonialwidth}px`;
        $testimonial.removeEventListener("mousemove", handleMoveTest);
    }
}

const handleMoveTestTouch = (e) =>{
    let deltX = e.touches[0].clientX - startX;
    let newTranslate = -testimonial_pnumber * testimonialwidth + deltX;

    $testimonial.style.translate = `${newTranslate}px`;

    if (Math.abs(deltX) > 150) {
        const direction = deltX < -150 ? 1 : -1;
        const newTestNumber = testimonial_pnumber + direction;
        if (newTestNumber >= 0 && newTestNumber < $testDotContainer.children.length) {
            testimonial_pnumber = newTestNumber;
            changeDot("testimonialDot");
            $testDotContainer.children[testimonial_pnumber].classList.add("text-brand");
        }
        $testimonial.style.translate = `-${testimonial_pnumber * testimonialwidth}px`;
        $testimonial.removeEventListener("touchmove", handleMoveTestTouch);
    }
}

const handleUpEvents = () =>{
    console.log("primer parte")
    if(testPress){
        $testimonial.removeEventListener("mousemove", handleMoveTest)
        $testimonial.removeEventListener("touchmove", handleMoveTestTouch);
        $testimonial.classList.remove("grabbing");
        $testimonial.style.translate = `-${testimonial_pnumber*testimonialwidth}px`
        testPress = false
    }
    if(cardPress){
        console.log("segunda parte")
        $cards.removeEventListener("mousemove", handleMoveCards)
        $cards.removeEventListener("touchmove", handleMoveCardsTouch);
        $cards.style.translate = `-${cards_pnumber*cardWidth}px`
        $cards.classList.remove("grabbing");
        cardPress = false
    }
}

let screensize = getScreenSize();
orderDots()

window.addEventListener("resize", (e)=>{
    if(getScreenSize() != screensize){
        testimonialwidth = $testimonial.parentElement.clientWidth + parseFloat(getComputedStyle($testimonial).gap)
        cardWidth= $cards.parentElement.clientWidth + parseFloat(getComputedStyle($cards).gap)
        testimonial_pnumber = 0
        cards_pnumber = 0
        screensize = getScreenSize()
        orderDots()
    }
})

document.addEventListener("click", (e)=>{
    if(e.target.getAttribute("data-name")=="testimonialDot"){
        let element_value = Number(e.target.getAttribute("data-value"))
        if(element_value != testimonial_pnumber){
            testimonial_pnumber = element_value
            $testimonial.style.translate = `-${testimonial_pnumber*testimonialwidth}px`
            changeDot("testimonialDot")
            e.target.classList.add("text-brand")
        }
    }
    else if(e.target.getAttribute("data-name")=="cardsDot"){
        let element_value = Number(e.target.getAttribute("data-value"))
        if(element_value != cards_pnumber){
            cards_pnumber = element_value
            $cards.style.translate = `-${cards_pnumber*cardWidth}px`
            changeDot("cardsDot")
            e.target.classList.add("text-brand")
        }
    }
    else if(e.target.id === "burguer"){
        e.target.classList.toggle("active")
        $navbar.classList.toggle("backdrop-blur-md")
        $menu.classList.toggle("backdrop-blur-md")
        $menu.classList.toggle("show")
    }
})

document.addEventListener('touchstart', (e) =>{
    if(e.touches[0].target.closest("#cards")){
        cardPress = true
        startX = e.touches[0].clientX;
        $cards.classList.add("cursor-grabbing");
        $cards.addEventListener("touchmove", handleMoveCardsTouch)
    }
    else if(e.touches[0].target.closest("#testimonial")){
        testPress = true
        startX = e.touches[0].clientX;
        $testimonial.classList.add("cursor-grabbing");
        $testimonial.addEventListener("touchmove", handleMoveTestTouch)
    }
});

document.addEventListener('mousedown', (e) => {
    if(e.target.closest("#cards")){
        cardPress = true
        startX = e.clientX;
        $cards.classList.add("cursor-grabbing");
        $cards.addEventListener("mousemove", handleMoveCards)
    }
    else if(e.target.closest("#testimonial")){
        testPress = true
        startX = e.clientX;
        $testimonial.classList.add("cursor-grabbing");
        $testimonial.addEventListener("mousemove", handleMoveTest)
    }
});

document.addEventListener('mouseup', handleUpEvents);
document.addEventListener('touchend', handleUpEvents);
