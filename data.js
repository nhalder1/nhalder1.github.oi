
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
document.addEventListener("DOMContentLoaded", function () {
    const featuredMedia = document.querySelector(".featured-media");
    const zoomableImage = document.querySelector(".zoomable-image");

    window.addEventListener("scroll", function () {
        const scrollY = window.scrollY;
        const mediaOffset = featuredMedia.offsetTop;
        const windowHeight = window.innerHeight;

        const maxScaleFactor = 2; // Adjust this value as needed

        if (scrollY > mediaOffset - windowHeight / 2) {
            let scaleFactor = 1 + (scrollY - (mediaOffset - windowHeight / 2)) / windowHeight;
            scaleFactor = Math.min(scaleFactor, maxScaleFactor); // Limit scale factor

            zoomableImage.style.transform = `scale(${scaleFactor})`;
            featuredMedia.style.height = `${400 * scaleFactor}px`;
        }
    });
});

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// info file
document.addEventListener("DOMContentLoaded", function () {
    const historySection = document.querySelector(".history");
    const gameRulesSection = document.querySelector(".game-rules");
    const tipsSection = document.querySelector(".tips-section");

    window.addEventListener("scroll", function () {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        const slideInFromLeft = (section) => {
            const sectionOffset = section.offsetTop;
            if (scrollY > sectionOffset - windowHeight / 2) {
                section.style.opacity = "1";
                section.style.transform = "translateX(0)";
            }
        };

        slideInFromLeft(historySection);
        slideInFromLeft(gameRulesSection);
        slideInFromLeft(tipsSection);
    });
});

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

window.reviewData = [
    {
        name: "John Doe",
        date: "2023-08-01",
        rating: 4,
        text: "Great game! I love playing Ludo with my friends.",
        avatar: "jonh.jpg"
    },
    {
        name: "Jane Smith",
        date: "2023-07-28",
        rating: 5,
        text: "Ludo is so much fun. It brings back childhood memories.",
        avatar: "jane.jpg"
    },
    {
        name: "Mike Johnson",
        date: "2023-07-25",
        rating: 3,
        text: "Decent game, but could use some improvements.",
        avatar: "mike.jpg" 
    },
    {
        name: "Emily Williams",
        date: "2023-07-20",
        rating: 5,
        text: "I'm addicted to this game. It's simple yet entertaining.",
        avatar: "emily.jpg"
    },
    {
        name: "David Brown",
        date: "2023-07-15",
        rating: 4,
        text: "Ludo is a great way to pass the time with friends.",
        avatar: "david.jpg"
    },
];


// Load review data and creates review cards
// Load review data and creates review cards
document.addEventListener("DOMContentLoaded", function () {
    const reviewCardsContainer = document.querySelector("#review-cards");

    // Loop through reviewData to create review cards
    reviewData.forEach(review => {
        const card = document.createElement("div");
        card.classList.add("card");

        const avatarImg = document.createElement("img");
        avatarImg.src = `${review.avatar}`;
        avatarImg.alt = `${review.name}'s Avatar`;
        avatarImg.classList.add("avatar-img");
        card.appendChild(avatarImg);

        const container = document.createElement("div");
        container.classList.add("container");

        const name = document.createElement("h4");
        name.innerHTML = `<b>${review.name}</b>`;
        container.appendChild(name);

        const reviewText = document.createElement("p");
        reviewText.textContent = review.text;
        container.appendChild(reviewText);

        card.appendChild(container);
        reviewCardsContainer.appendChild(card);
    });
});


var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function openSignUpModal() {
    const modal = document.getElementById('id01');
    if (modal) {
        modal.style.display = 'block';
    }
}
