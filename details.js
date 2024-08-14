document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const cardId = params.get('id');

    const detailsContent = document.getElementById('details-content');

    const cardDetails = {
        1: { title: "Card 1", description: "Details about Card 1..." },
        2: { title: "Card 2", description: "Details about Card 2..." },
        3: { title: "Card 3", description: "Details about Card 3..." },
        4: { title: "Card 4", description: "Details about Card 4..." },
        5: { title: "Card 5", description: "Details about Card 5..." },
        6: { title: "Card 6", description: "Details about Card 6..." },
        7: { title: "Card 7", description: "Details about Card 7..." },
        8: { title: "Card 8", description: "Details about Card 8..." },
        9: { title: "Card 9", description: "Details about Card 9..." },
        10: { title: "Card 10", description: "Details about Card 10..." },
        11: { title: "Card 11", description: "Details about Card 11..." },
        12: { title: "Card 12", description: "Details about Card 12..." },
    };

    if (cardDetails[cardId]) {
        detailsContent.innerHTML = `
            <h2>${cardDetails[cardId].title}</h2>
            <p>${cardDetails[cardId].description}</p>
        `;
    } else {
        detailsContent.innerHTML = `<p>Details not found.</p>`;
    }
});