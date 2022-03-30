import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default (request: NextApiRequest, response: NextApiResponse) => {
  console.log(request.query);

  const users = [
    { id: 1, name: 'João' },
    { id: 2, name: 'Diego' },
    { id: 3, name: 'Lucas' },
    { id: 4, name: 'Mathues' },
  ]

  return response.json(users);
}