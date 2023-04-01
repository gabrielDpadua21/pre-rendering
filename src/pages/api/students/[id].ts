import { NextApiRequest, NextApiResponse } from "next";


const handleStudents = (request: NextApiRequest, response: NextApiResponse) => {
    const { id } = request.query;
    
    response.status(200).json({
        'id': +id,
        'name': 'Frajola',
        'email': 'frajola@gmail.com'
    });
}

export default handleStudents