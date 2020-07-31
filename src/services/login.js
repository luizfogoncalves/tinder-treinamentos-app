import axios from 'axios'

import { config } from '../config'

export const makeLogin = async (email, password) => {
  const result = await axios.post(`https://${config.API_ID}.${config.URL_AMAZON}/${config.STAGE}/user/login`,
    {
      email,
      password
    },
    {
      headers: {
        'x-api-key': config.X_API_KEY
      }
    })
  console.log(result);
  return result;
}