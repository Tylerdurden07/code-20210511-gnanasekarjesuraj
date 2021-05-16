import {createServer} from './app/Utils/Server';

const PORT = process.env.PORT || 3000;
createServer()
  .then(server => {
    server.listen(PORT, () => {
      console.info(`Server is up and running on ${PORT}`)
    });
  })
  .catch(err => {
    console.error(`Error: ${err}`)
  });