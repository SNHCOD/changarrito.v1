// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import Locations from '../../../database/models/locations';


const Sequelize = require("sequelize");

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch(req.method) {
    case 'GET':
      return locations(req, res);
  }
  res.status(200).json({ name: 'Location' })
}

const locations = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const Op = Sequelize.Op;
    const locations = await Locations.findAll({
      where: {
        [Op.or]: [
          {name: {
            [Op.like]: '%zz%'
          }},
          {description: {
            [Op.like]: '%zz%'
          }}
        ]
      }
    });
    res.status(200).json({locations});
  } catch (error) {
    let message = 'Unknown Error'
    if (error instanceof Error) message = error.message
    res.status(400).json({error: true, message: message})
  }
}