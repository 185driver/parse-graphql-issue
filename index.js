const express = require('express');
const { default: ParseServer, ParseGraphQLServer } = require('parse-server');

const parseApps = [
  {
    appId: '123456789',
    appName: 'Test App',
  },
];

const appName = process.env.HEROKU_APP_NAME;
const app = express();
app.set('port', (process.env.PORT || 5000));

parseApps.forEach((parseApp) => {
  const parseServer = new ParseServer({
    appId: parseApp.appId,
    databaseURI: process.env.MONGODB_URI,
    masterKey: process.env.MASTER_KEY,
    publicServerURL: `https://${appName}.herokuapp.com/parse`,
    serverURL: `https://${appName}.herokuapp.com/parse`,
  });

  const parseGraphQLServer = new ParseGraphQLServer(
    parseServer,
    {
      graphQLPath: `/graphql`,
      playgroundPath: `/playground`,
    }
  );

  app.use(`/parse`, parseServer.app);
  parseGraphQLServer.applyGraphQL(app); // Mounts the GraphQL API.
  parseGraphQLServer.applyPlayground(app);
});

app.listen(app.get('port'), () => {
  console.log(`Up. Listening on ${app.get('port')}`);
});
