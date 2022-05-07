export interface iProjects {
    id: number
    name: string
    description: string
    type: string
    link?: string
    image: string
    appreciation: number
    techs: iTechs
};


interface iTechs {
    Frontend: string[]
    Backend: string[]
}