const characters = [
    {
        id: 1,
        name: "Eleven",
        role: "The Girl with Powers",
        image: "imgs/eleven.png",
        shortBio: "A girl with psychokinetic abilities who escaped from a secret laboratory.",
        fullBio: "Eleven, born Jane Ives, is a young girl with psychokinetic and telepathic abilities who escaped from Hawkins National Laboratory. She was experimented on as a child and developed extraordinary powers. Despite her traumatic past, she finds a home with Mike Wheeler and his friends, becoming a crucial member of the group in their fight against the supernatural forces threatening Hawkins.",
        actor: "Millie Bobby Brown",
        traits: ["Brave", "Powerful", "Loyal", "Protective"],
        firstAppearance: "Season 1, Episode 1",
        quote: "Friends don't lie."
    },
    {
        id: 2,
        name: "Mike Wheeler",
        role: "The Leader",
        image: "imgs/mike.png",
        shortBio: "The heart of the group who leads his friends through supernatural mysteries.",
        fullBio: "Mike Wheeler is the de facto leader of the group of friends. He's intelligent, loyal, and deeply caring, especially toward Eleven, with whom he develops a romantic relationship. Mike is known for his strategic thinking and his unwavering dedication to his friends. He's the one who often comes up with plans to deal with the supernatural threats facing Hawkins.",
        actor: "Finn Wolfhard",
        traits: ["Leader", "Loyal", "Determined", "Caring"],
        firstAppearance: "Season 1, Episode 1",
        quote: "We're going to find him. I promise."
    },
    {
        id: 3,
        name: "Dustin Henderson",
        role: "The Brain",
        image: "imgs/dustin.png",
        shortBio: "The smartest member of the group with a love for science and technology.",
        fullBio: "Dustin Henderson is the comic relief and scientific genius of the group. With his distinctive hat and missing teeth (later replaced), Dustin brings both humor and intelligence to every situation. He has a deep love for science, technology, and his girlfriend Suzie. His curiosity often leads to important discoveries, and his friendship with Steve Harrington becomes one of the show's most beloved relationships.",
        actor: "Gaten Matarazzo",
        traits: ["Intelligent", "Funny", "Curious", "Scientific"],
        firstAppearance: "Season 1, Episode 1",
        quote: "She's our friend and she's crazy!"
    },
    {
        id: 4,
        name: "Lucas Sinclair",
        role: "The Skeptic",
        image: "imgs/lucas.png",
        shortBio: "The pragmatic member who questions everything but stands by his friends.",
        fullBio: "Lucas Sinclair is the most pragmatic and skeptical member of the group. He's practical, brave, and protective of his friends, though he initially distrusts Eleven. Lucas is also athletic and confident, with a strong sense of right and wrong. His relationship with Max Mayfield adds depth to his character as he learns to open up emotionally.",
        actor: "Caleb McLaughlin",
        traits: ["Pragmatic", "Brave", "Honest", "Athletic"],
        firstAppearance: "Season 1, Episode 1",
        quote: "We have a lot of rules in our party, but the most important is: friends don't lie."
    },
    {
        id: 5,
        name: "Will Byers",
        role: "The Lost Boy",
        image: "imgs/will.png",
        shortBio: "The quiet artist whose disappearance started it all.",
        fullBio: "Will Byers is the sensitive, artistic member of the group whose disappearance in Season 1 kicks off the entire series. After being trapped in the Upside Down, Will struggles with the psychological and supernatural effects of his experience. Despite his trauma, he remains kind, creative, and loyal to his friends. His connection to the Upside Down makes him crucial to understanding the supernatural forces at play.",
        actor: "Noah Schnapp",
        traits: ["Artistic", "Sensitive", "Kind", "Resilient"],
        firstAppearance: "Season 1, Episode 1",
        quote: "He likes it cold."
    },
    {
        id: 6,
        name: "Max Mayfield",
        role: "The New Kid",
        image: "imgs/max.png",
        shortBio: "The tough tomboy who brings a fresh perspective to the group.",
        fullBio: "Max Mayfield, known as 'Mad Max,' moves to Hawkins in Season 2 and quickly becomes part of the group. She's tough, independent, and an excellent skateboarder and gamer. Max struggles with an abusive home life but finds strength and friendship with the group, particularly with Lucas. Her resilience and determination make her a formidable ally against the supernatural threats.",
        actor: "Sadie Sink",
        traits: ["Tough", "Independent", "Brave", "Skilled"],
        firstAppearance: "Season 2, Episode 1",
        quote: "I dump your ass."
    }
];

function renderCharacters() {
    const container = document.getElementById('charactersContainer');
    container.innerHTML = '';

    characters.forEach(character => {
        const card = document.createElement('div');
        card.className = 'character-card';
        card.onclick = () => selectCharacter(character.id);

        card.innerHTML = `
            <div class="character-image">
                <img src="${character.image}" alt="${character.name}" onerror="this.src='placeholder.jpg'">
            </div>
            <div class="character-info">
                <h3>${character.name}</h3>
                <p class="character-role">${character.role}</p>
                <p>${character.shortBio}</p>
            </div>
        `;

        container.appendChild(card);
    });
}

function selectCharacter(characterId) {
    sessionStorage.setItem('selectedCharacterId', characterId);
    
    loadCharacterPage(characterId);
}