import { productImages } from "./productImagesList"

export const products = [
    {
        name: "Root",
        category: "board-game",
        price: 64,
        quantity: 10,
        id: "root",
        description: `Root is a game of adventure and war where 2 to 4 players battle for control of a vast wilderness.\n
        In Root, players drive the narrative and the differences between each role create an unparalleled level of interaction and replayability.\n
        Ages 10+, 90-120 minute playing time.`,
        images: [...productImages[0].rootImages],
        latestArrival: true,
        totalSelled: 200,
        highlight: false,
    },
    {
        name: "Scythe",
        category: "board-game",
        price: 72,
        quantity: 35,
        id: "scythe",
        description: ` It is a time of unrest in 1920s Europa. The ashes from the first great war still darken the snow. The capitalistic city-state known simply as “The Factory”, which fueled the war with heavily armored mechs, has closed its doors, drawing the attention of several nearby countries.\n
        Lead your faction to victory, building mechs, working the land, and exploring the mysterious factory, all while protecting your territory from the mechs of other encroaching factions.\n
        Explore the alternate-history of 1920 plus Europe through Jakub Różalski's stunning artwork.\n
        For 1-5 players, plays in 90-120 minutes.`,
        images: [...productImages[1].scytheImages],
        latestArrival: false,
        totalSelled: 100,
        highlight: true,
    },
    {
        name: "Ticket To Ride - USA",
        category: "board-game",
        price: 49,
        quantity: 26,
        id: "ticket-to-ride-usa",
        description: ` Build your tracks across the United States in this fast-paced and strategic board game. Connect iconic North American cities across a map of the 20th-century USA and build your train routes to earn points. \n
        Players collect train cards that enable them to claim railway routes connecting cities throughout North America. The longer the routes, the more points they earn. Additional points come to those who can fulfill their Destination Tickets and to the player who builds the longest continuous railway. \n
        For 2 to 5 players. The average playtime is 30-60 minutes.`,
        images: [...productImages[2].ttrImages],
        latestArrival: false,
        totalSelled: 347,
        highlight: false,
    },

    {
        name: "The Voyages of Marco Polo",
        category: "board-game",
        price: 60,
        quantity: 0,
        id: "marco-polo",
        description: `In The Voyages of Marco Polo, players accompany the Polos on this journey, helping them earn money by fulfilling contracts. Starting in Venice, the choices you make affect the course of this journey. You could race to Beijing and secure lucrative bonuses for reaching it first. But you could also take the longer, more lavish route through Sumatra. With your goals shifting from game to game, you must determine which contracts are the best to fulfill while anticipating where and when other players are likely to get in your way. Choose wisely and create your own epic journey! \n
        For 2-4 players, playing time 50 – 100 mins`,
        images: [...productImages[3].marcoPoloImages],
        latestArrival: false,
        totalSelled: 265,
        highlight: true,
    },
    {
        name: "Wingspan",
        category: "board-game",
        price: 60,
        quantity: 45,
        id: "wingspan",
        description: `Wingspan is a competitive, medium-weight, card-driven, engine-building board game from designer Elizabeth Hargrave and Stonemaier Games. It is the 2019 winner of the prestigious Kennerspiel des Jahres award.
        You are bird enthusiasts—researchers, bird watchers, ornithologists, and collectors—seeking to discover and attract the best birds to your network of wildlife preserves.`,
        images: [...productImages[4].wingspanImages],
        latestArrival: true,
        totalSelled: 479,
        highlight: false,
    },
    {
        name: "6 nimmt!",
        category: "board-game",
        price: 15,
        quantity: 135,
        id: "nimmt",
        description: `In 6 nimmt!, you want to score as few points as possible.\n
        To play the game, you shuffle the 104 number cards, lay out four cards face-up to start the four rows, then deal ten cards to each player. Each turn, players simultaneously choose and reveal a card from their hand, then add the cards to the rows, with cards being placed in ascending order based on their number; specifically, each card is placed in the row that ends with the highest number that's below the card's number. When the sixth card is placed in a row, the owner of that card claims the other five cards and the sixth card becomes the first card in a new row.`,
        images: [...productImages[5].nimmtImages],
        latestArrival: false,
        totalSelled: 464,
        highlight: true,
    },

    {
        name: "Splendor",
        category: "board-game",
        price: 40,
        quantity: 4,
        id: "splendor",
        description: `In Splendor, you lead a merchant guild. Using tokens representing gemstones, you will acquire developments which produce new gems (bonuses). These bonuses reduce the cost of your purchases and attract noble patrons.
        Each turn is quick: one, and only one, action!
        The first player to reach fifteen prestige points by accumulating nobles and development cards triggers the end of the game.`,
        images: [...productImages[6].splendorImages],
        latestArrival: false,
        totalSelled: 340,
        highlight: false,
    },

    {
        name: "Pandemic",
        category: "board-game",
        price: 45,
        quantity: 59,
        id: "pandemic",
        description: `Pandemic is a cooperative board game in which players work as a team to treat infections around the world while gathering resources for cures. First published in 2007, the game's unique combination of cooperative gameplay, engrossing premise, and compelling design have proved a hit with everyone from hardcore gamers to casual players. The Pandemic game line now includes multiple expansions and stand-alone titles.`,
        images: [...productImages[7].pandemicImages],
        latestArrival: false,
        totalSelled: 583,
        highlight: true,
    },
    {
        name: "Quantum",
        category: "board-game",
        price: 40,
        quantity: 0,
        id: "quantum",
        description: `An epic science-fiction game of expansion and conquest, where each of your dice are starships powered by quantum uncertainty. An elegant balance of quick play and deep strategy.`,
        images: [...productImages[8].quantumImages],
        latestArrival: false,
        totalSelled: 126,
        highlight: false,
    },
    {
        name: "D&D Essential Kit",
        category: "rpg",
        price: 24,
        quantity: 26,
        id: "d-and-d",
        description: ` Everything you need to create characters and play the new adventures in this introduction to the world’s greatest roleplaying game.\n
        Dungeons & Dragons is a cooperative storytelling game that harnesses your imagination and invites you to explore a fantastic world of adventure, where heroes battle monsters, find treasures, and overcome quests. The D&D Essentials Kit is a new introductory product meant to bring D&D to audiences interested in jumping into a fantasy story.`,
        images: [...productImages[9].dAndDImages],
        latestArrival: false,
        totalSelled: 743,
        highlight: true,
    },
    {
        name: "Carcassone",
        category: "board-game",
        price: 41,
        quantity: 7,
        id: "carcassone",
        description: `Inspired by the medieval fortress in southern France of the same name, Carcassonne is a tile-laying game in which players fill in the countryside around the fortified city. Players choose from tiles that depict cities, roads, monasteries, and fields; each new tile placed creates an ever-expanding board on which players can then add their followers.`,
        images: [...productImages[10].carcassoneImages],
        latestArrival: false,
        totalSelled: 835,
        highlight: false,
    },
    {
        name: "Pathfinder Core Rolebook",
        category: "rpg",
        price: 25,
        quantity: 32,
        id: "pathfinder",
        description: `This comprehensive 640-page guide to the Pathfinder roleplaying game provides everything you need to set out into a world of limitless fantasy adventure! Choose from ancestries like elf, human, and goblin and classes like alchemist, fighter, and sorcerer to create a hero of your own design, destined to become a legend! The new Pathfinder rules are easier to learn and faster to play, and they offer deeper customization than ever before!\n
        This indispensable volume contains the core rules for players and Game Masters, and is your first step on a heroic new journey!`,
        images: [...productImages[11].pathfinderImages],
        latestArrival: true,
        totalSelled: 389,
        highlight: false,
    },
    {
        name: "A Game of Thrones: The Card Game",
        category: "card-game",
        price: 44,
        quantity: 5,
        id: "game-of-thrones",
        description: `The world of Westeros is wracked with war, intrigue, and strife. The Great Houses muster armies and meet in titanic battles, while their assassins and spies struggle in the shadows. Across the Narrow Sea, the first dragons in years have awoken, while in the barren lands beyond the Wall, a nameless threat is stirring, eager to crush the world with freezing cold and endless night. Westeros is unforgiving of mistakes, and in the end, only one game truly matters: the game of thrones!`,
        images: [...productImages[12].gotImages],
        latestArrival: false,
        totalSelled: 290,
        highlight: false,
    }
]