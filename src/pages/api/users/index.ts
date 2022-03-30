import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default (request: NextApiRequest, response: NextApiResponse) => {

  const users = [
    { id: 1, name: 'João' },
    { id: 2, name: 'Diego' },
    { id: 3, name: 'Lucas' },
    { id: 4, name: 'Mathues' },
  ]

  return response.json(users);
}



/*
//estrategias
// JWT (STORAGE)
// NEXT AUTH (SOCIAL)
// COGNITO, AUTH0 (Authenticat as a service) 

// eslint-disable-next-line import/no-anonymous-default-export
export default (request: NextApiRequest, response: NextApiResponse) => {

  const users = [
    { id: 1, name: 'João' },
    { id: 2, name: 'Diego' },
    { id: 3, name: 'Lucas' },
    { id: 4, name: 'Mathues' },
  ]

  return response.json(users);
}

//SERVELESS 
// SUBIR UM 'AMBIENTE IZOLADO' 


*/