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
    }
]