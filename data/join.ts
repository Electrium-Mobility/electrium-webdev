export const hero = {
    title: "Join our Expanding Team",
    description: "Lorem ipsum dolor sit amet consectetur. Tempor dis duis pulvinar."
}

export const reasons = {
    title: "Why Join?",
    description: "Lorem ipsum dolor sit amet consectetur. Tempor dis duis pulvinar. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    points: [
        {
            image: "/logo.png",
            title: "Impact",
            description: "Lorem ipsum dolor sit amet consectetur. Tempor dis duis pulvinar. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            image: "/logo.png",
            title: "Learning",
            description: "Lorem ipsum dolor sit amet consectetur. Tempor dis duis pulvinar. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            image: "/logo.png",
            title: "Networking",
            description: "Lorem ipsum dolor sit amet consectetur. Tempor dis duis pulvinar. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
    ]
}

export const apply = {
    title: "How to Apply?",
    stepOne: {
        number: 1,
        title: "Submit your Application",
        description: "Lorem ipsum dolor sit amet consectetur. Tempor dis duis pulvinar. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/logo.png"
    },
    stepTwo: {
        number: 2,
        title: "Interview with us",
        description: "Lorem ipsum dolor sit amet consectetur. Tempor dis duis pulvinar. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/logo.png"
    },
    stepThree: {
        number: 3,
        title: "Wait for decision",
        description: "Lorem ipsum dolor sit amet consectetur. Tempor dis duis pulvinar. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/logo.png"
    }
}

export interface Point {
    image: string,
    title: string,
    description: string
}