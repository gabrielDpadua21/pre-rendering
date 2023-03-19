import { NextApiRequest, NextApiResponse } from "next";


type Data = {
    id: number,
    title: string,
    price: number
}


export default function handler(
    request: NextApiRequest,
    response: NextApiResponse<Data[]>
) {
    response.status(200).json([
        { 
            id: 1,
            title: 'Resident Evil 2 - Remake',
            price: 149.90
        },
        { 
            id: 1,
            title: 'Resident Evil 3 - Remake',
            price: 149.90
        },
        { 
            id: 1,
            title: 'Resident Evil 4 - Remake',
            price: 149.90
        },
        { 
            id: 1,
            title: 'Resident Evil Village',
            price: 149.90
        },
    ])
}