export interface MovieModel {
    movieId: number
    directorId: number
    title: string
    originalTitle: string
    description: string
    shortDescription: string
    poster: string
    startDate: string
    runTime: number
    createdAt: string
    director: {
        directorId: number
        name: string
    }
    movieActors: {
        movieActorId: number
        movieId: number
        actorId: number
        actor: {
            actorId: number
            name: string
        }
    }[]
    movieGenres: {
        movieGenreId: number
        movieId: number
        genreId: number
        genre: {
            genreId: number
            name: string
        }
    }[]
}
