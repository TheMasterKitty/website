document.querySelector('.intro').style.opacity = 1;
/* document.querySelector('.info').style.opacity = 0; */

// Show/hide scroll to div button based on scroll position
window.onscroll = function () {
    scrollFunction();
};

var resizeTimer;

function handleResize() {
    // Clear the previous timeout to debounce the resize event
    clearTimeout(resizeTimer);

    // Set a new timeout
    resizeTimer = setTimeout(function () {
        // Your code to run when the window is resized (debounced)
        console.log("Window resized!");
    }, 20); // Adjust the timeout duration as needed
}

window.addEventListener("resize", handleResize);
handleResize(); // Initial call


function scrollFunction() {
    var scrollToDivBtn = document.getElementById("scrollToDivBtn");

    // Adjust 'targetDiv' to the ID of the div you want to scroll to
    var targetDiv = document.getElementById("targetDiv");
}


// Scroll to target div function
function scrollToDiv(divname) {
    switch (divname) {
        case "contentdiv1":
            window.scrollTo({
                top: 700,
                left: 0,
                behavior: "smooth"
            });
            
            break;
        case "contentdiv2":
            window.scrollTo({
                top: 1500,
                left: 0,
                behavior: "smooth"
            });
            
            break;
        case "contentdiv3":
            window.scrollTo({
                top: 2500,
                left: 0,
                behavior: "smooth"
            });
            break;
        case "contentdiv4":
            window.scrollTo({
                top: 3600,
                left: 0,
                behavior: "smooth"
            });
            
            break;
        default:
            console.log("SEX!!!")
    }
    
}

// Check if an element is in the viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
var slidein = -100
var frame = 0;

contentdiv1 = document.getElementById("contentdiv1");
contentdiv2 = document.getElementById("contentdiv2");
contentdiv3 = document.getElementById("contentdiv3");
contentdiv4 = document.getElementById("contentdiv4");


document.addEventListener('scroll', function () {
    // Get the scroll position
    const scrollPosition = window.scrollY;
  
    // Calculate the opacity based on the scroll position
    const opacityIntro = 1 - (scrollPosition / 250); // Adjust as needed
    const opacityborders = (scrollPosition / 250) - 1;

    const opacityInfo = (0 - Math.abs(3 - (scrollPosition / 250))) + 2;

    // if over limit fade in content and fade out info
    const opacityContent = (0 - Math.abs(7 - (scrollPosition / 250))) + 2;
    const opacityContent2 = (0 - Math.abs(11 - (scrollPosition / 250))) + 2;
    const opacityContent3 = (0 - Math.abs(15 - (scrollPosition / 250))) + 2;
    // console.log(scrollPosition)

    if (scrollPosition > 1200) {
        
    }

    console.log(contentdiv1.style.opacity)
    if (contentdiv1.style.opacity <= 0) {
        console.log("ses")
        contentdiv1.style.visibility = "hidden";
    }
    else {
        contentdiv1.style.visibility = "visible";
    }
    if (contentdiv2.style.opacity <= 0) {
        contentdiv2.style.visibility = "hidden";
    }
    else {
        contentdiv2.style.visibility = "visible";
    }
    if (contentdiv3.style.opacity <= 0) {
        contentdiv3.style.visibility = "hidden";
    }
    else {
        contentdiv3.style.visibility = "visible";
    }
    if (contentdiv4.style.opacity <= 0) {
        contentdiv4.style.visibility = "hidden";
    }
    else {
        contentdiv4.style.visibility = "visible";
    }
   
    

    

    // Apply the opacity to the div
    document.querySelector('.intro').style.opacity = opacityIntro;
    document.getElementById("conboarders").style.opacity = opacityborders;
    document.getElementById('contentdiv1').style.opacity = opacityInfo;
    document.getElementById('contentdiv2').style.opacity = opacityContent;
    document.getElementById('contentdiv3').style.opacity = opacityContent2;
    document.getElementById('contentdiv4').style.opacity = opacityContent3;
    document.getElementById('navdotcd1').style.opacity = opacityInfo;
    document.getElementById('navdotcd2').style.opacity = opacityContent;
    document.getElementById('navdotcd3').style.opacity = opacityContent2;
    document.getElementById('navdotcd4').style.opacity = opacityContent3;
    
});