document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.querySelector('.card-container');

    const data_arr = [
        {
            title: "Penguin",
            link: "https://en.wikipedia.org/wiki/Penguin",
        },
        {
            title: "Kangaroo",
            link: "https://en.wikipedia.org/wiki/Kangaroo",
        },
        {
            title: "Giraffe",
            link: "https://en.wikipedia.org/wiki/Giraffe",
        },
        {
            title: "Cheetah",
            link: "https://en.wikipedia.org/wiki/Cheetah",
        },
        {
            title: "Giraffe",
            link: "https://en.wikipedia.org/wiki/Giraffe",
        },
        {
            title: "Cheetah",
            link: "https://en.wikipedia.org/wiki/Cheetah",
        },
        {
            title: "Gorilla",
            link: "https://en.wikipedia.org/wiki/Gorilla",
        },
        {
            title: "Hippopotamus",
            link: "https://en.wikipedia.org/wiki/Hippopotamus",
        },
        {
            title: "Zebra",
            link: "https://en.wikipedia.org/wiki/Zebra",
        },
        {
            title: "Koala",
            link: "https://en.wikipedia.org/wiki/Koala",
        },
        {
            title: "Kangaroo",
            link: "https://en.wikipedia.org/wiki/Kangaroo",
        },
        {
            title: "Penguin",
            link: "https://en.wikipedia.org/wiki/Penguin",
        }
    ]

    data_arr.forEach((data, i) => {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-4');
        card.innerHTML = `
            <div class="card h-100" data-id="${i}">
                <div class="card-body">
                    <h5 class="card-title text-center">${data.title}</h5>
                    <p class="card-text text-center">Click to see more details</p>
                </div>
            </div>
        `;
        cardContainer.appendChild(card);
    });

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const cardId = card.getAttribute('data-id');

            window.location.href = data_arr[cardId].link;
        });
    });
});
