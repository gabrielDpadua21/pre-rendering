import { NextApiRequest, NextApiResponse } from "next";


const handleCourses = (request: NextApiRequest, response: NextApiResponse<number[]>) => {
    response.status(200).json([1, 2, 3, 4]);
}

export default handleCourses