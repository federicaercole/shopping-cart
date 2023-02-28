import { productImages } from "./productImagesList"

export const products = [
    {
        name: "Root",
        category: "board-game",
        stocked: true,
        price: 64,
        quantity: 10,
        id: "root",
        description: `Root is a game of adventure and war where 2 to 4 players battle for control of a vast wilderness.\n
        In Root, players drive the narrative and the differences between each role create an unparalleled level of interaction and replayability.\n
        Ages 10+, 90-120 minute playing time`,
        images: [...productImages[0].rootImages],
        latestArrival: false,
        totalSelled: 200,
        highlight: false,
    },
    {
        name: "Scythe",
        category: "board-game",
        stocked: true,
        price: 72,
        quantity: 35,
        id: "scythe",
        description: ` It is a time of unrest in 1920s Europa. The ashes from the first great war still darken the snow. The capitalistic city-state known simply as “The Factory”, which fueled the war with heavily armored mechs, has closed its doors, drawing the attention of several nearby countries.\n
        Lead your faction to victory, building mechs, working the land, and exploring the mysterious factory, all while protecting your territory from the mechs of other encroaching factions.\n
        Explore the alternate-history of 1920 plus Europe through Jakub Różalski's stunning artwork.\n
        For 1-5 players, plays in 90-120 minutes`,
        images: [...productImages[1].scytheImages],
        latestArrival: false,
        totalSelled: 100,
        highlight: false,
    }
]