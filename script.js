document.getElementById('fact-btn').addEventListener('click', () => {
    const facts = [
        "Coquí frogs are unique to Puerto Rico and are found nowhere else in the world.",
        "There are 17 different species of Coquí frogs native to Puerto Rico.",
        "The Coquí's signature sound is made only by male frogs to attract mates.",
        "Coquí frogs do not go through a tadpole stage — they hatch as tiny froglets!",
        "The Coquí frog's sound is so loud, it can reach up to 100 decibels!"
    ];

    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('fact-display').textContent = randomFact;
});
