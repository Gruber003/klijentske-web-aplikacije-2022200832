export interface CartModel {
    movieId: number
    title: string
    count: number
    pricePerTicket: number
    status: 'reserved' | 'watched' | 'canceled'
    rating: null | boolean
}