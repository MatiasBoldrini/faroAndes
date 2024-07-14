// let paragraphs = [...document.querySelectorAll('p.textarea')];
// let spans = [];
// paragraphs.forEach(paragraph => {
//     let htmlString = '';
//     let pArray = paragraph.textContent.split(' ');

//     for (let i = 0; i < pArray.length; i++) {
//         palabra = pArray[i].replace(/\s/g, '');
//             htmlString += `<span class = "span-text-reveal">${palabra} </span>`;
//     }

//     paragraph.innerHTML = htmlString;
// });


// spans = [...document.querySelectorAll('.span-text-reveal')];

// function revealSpans() {
//     for (let i = 0; i < spans.length; i++) {
//         if (spans[i].parentElement.getBoundingClientRect().top < window.innerHeight ) {
//             let { left, top } = spans[i].getBoundingClientRect();
//             top = top - (window.innerHeight *0.85);

//             let opacityValue = 1 - ((top * 0.01) + (left * 0.001));
//             opacityValue = opacityValue < 0.1 ? 0.1 : opacityValue > 1 ? 1 : opacityValue.toFixed(3);
            
//             spans[i].style.opacity = opacityValue;
//         }
//     }
// }

// window.addEventListener('scroll', revealSpans);
// revealSpans();