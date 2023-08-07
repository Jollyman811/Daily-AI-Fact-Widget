const factContent = document.getElementById('fact-content');
const factImage = document.getElementById('fact-image');
const loadNewFactBtn = document.getElementById('load-new-fact');

// Fetch facts from the JSON file
function fetchFacts() {
    return fetch('ai_facts.json')
        .then(response => response.json())
        .then(data => data);
}

async function loadRandomFact() {
    const facts = await fetchFacts();
    const randomIndex = Math.floor(Math.random() * facts.length);
    factContent.textContent = facts[randomIndex].fact;
    factImage.src = facts[randomIndex].image;
}

loadNewFactBtn.addEventListener('click', loadRandomFact);

// Load the first fact on startup
loadRandomFact();
