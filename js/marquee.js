const marquee = document.getElementById("marquee");
const marqueeContent = marquee.innerText;

// Duplicate the marquee content to create the endless effect
marquee.innerHTML = marqueeContent.repeat(2);
