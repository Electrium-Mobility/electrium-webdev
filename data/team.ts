export const teamOne = {
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
}

export const teamTwo = {
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
}

export const teamThree = {
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

export interface Team {
    description: string,
    teamMembers: Array<string>;
}

export interface Member {
    fullName: string,
    role: string,
    image: string,
    description: string
}