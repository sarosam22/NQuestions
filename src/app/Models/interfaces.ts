export interface IPlayer {
    Name: string
    
}

export interface IQuestion {
    body: string 
    response?: string
    askedBy?: string
}

export interface IAppState {
    players?: string[]
    thisPlayer?: string
    gameStart?: boolean
    currentInquirer?: string
    upcomingInquirer?: string
    currentAsker?: string
    upcomingAsker?: string
}