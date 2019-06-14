interface ICustomer{
    address: string
    city: string
    firstName: string
    gender: string
    id: number
    lastName: string
    latitude?: number
    longitude?: number
    orders: IOrders[]
    state: {abbreviation: string, name: string}
}
interface IOrders{
    productName: string;
    itemCost: number
    
}