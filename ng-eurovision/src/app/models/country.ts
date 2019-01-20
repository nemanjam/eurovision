
export interface Country {
    name: string;
    flag: string;
    hasVoted: boolean;
    votes: Vote[];
}

export interface Vote {
    points: number;
    country: string;
    voter_country: string;
}

