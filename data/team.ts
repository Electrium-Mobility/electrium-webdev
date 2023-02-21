export const teamHeroText = {
    bigText: "Meet the Team",
    smallText: "Lorem ipsum dolor sit amet consectetur. Tempor dis duis pulvinar."
}

export const teams = [
    {
        title: "Team One",
        description: "Lorem ipsum dolor sit amet consectetur. Tempor dis duis pulvinar. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        teamMembers: [
            {
                fullName: "ksaisd sdfg",
                role: "developer",
                image: "/logo.png",
                description: "words words words words words words words words"
            }
        ]
    },
    {
        title: "Team Two",
        description: "Lorem ipsum dolor sit amet consectetur. Tempor dis duis pulvinar. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        teamMembers: [
            {
                fullName: "ksaisd sdfg",
                role: "developer",
                image: "/logo.png",
                description: "words words words words words words words words"
            }
        ]
    },
    {
        title: "Team Three",
        description: "Lorem ipsum dolor sit amet consectetur. Tempor dis duis pulvinar. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        teamMembers: [
            {
                fullName: "ksaisd sdfg",
                role: "developer",
                image: "/logo.png",
                description: "words words words words words words words words"
            }
        ]
    }
]

export interface TeamContent {
    title: string,
    description: string,
    teamMembers: Array<Member>;
}

export interface Member {
    fullName: string,
    role: string,
    image: string,
    description: string
}