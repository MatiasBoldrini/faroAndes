let paragraphs = [...document.querySelectorAll('p.textarea')];
let spans = [];
paragraphs.forEach(paragraph => {
    let htmlString = '';
    let pArray = paragraph.textContent.split(' ');

    for (let i = 0; i < pArray.length; i++) {
        palabra = pArray[i].replace(/\s/g, '');
            htmlString += `<span class = "span-text-reveal">${palabra} </span>`;
    }

    paragraph.innerHTML = htmlString;
});

spans = [...document.querySelectorAll('.span-text-reveal')];

function revealSpans() {
    for (let i = 0; i < spans.length; i++) {
        let span = spans[i];
        let rect = span.getBoundingClientRect();
        let parentRect = span.parentElement.getBoundingClientRect();
        
        if (parentRect.top < window.innerHeight && parentRect.bottom > 0) {
            // Calculate opacity based on position
            let { left, top } = rect;
            top = top - (window.innerHeight * 0.85);
            
            let opacityValue = 1 - ((top * 0.01) + (left * 0.001));
            opacityValue = opacityValue < 0.1 ? 0.1 : opacityValue > 1 ? 1 : opacityValue.toFixed(3);
            
            // Calculate skew angle based on opacity
            let skewAngle = 90 - (opacityValue * 90); // Linear interpolation from 25° to 0°
            // Apply opacity and skew transformation
            span.style.opacity = opacityValue;
            span.style.transform = `skewX(${skewAngle}deg)`;
            
        } else {
            // Element is not visible
            // span.style.transform = 'skewX(0deg)';
            span.style.opacity = 0;
        }
    }
}


window.addEventListener('scroll', revealSpans);
// revealSpans();