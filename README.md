# parse-graphql-issue

Self-hosted parse-server instance utilizing graphql.

## Setting up Heroku

Create a fresh instance:

```bash
heroku apps:create <app name>
```

If we're going to reuse an existing application, add the git remote:

```bash
cd path/to/git/repository
heroku git:remote --app <app name>
```

This addon exposes the HEROKU_APP_NAME variable:

```bash
heroku labs:enable runtime-dyno-metadata --app <app name>
```

Set the environment variable for the Mongo DB:

```bash
heroku config:set MONGODB_URI=mongodb+srv://<username>:<password>@<domain>.mongodb.net/<dbname>?retryWrites=true&w=majority --app <app name>
```

Set the environment variable for the master key:

```bash
heroku config:set MASTER_KEY=SuperSecretKey --app <app name>
```

Create a git commit:

```bash
git commit -am "Place commit description here."
```

Push the application's code to heroku:

```bash
git push heroku master
```

To open the website in a browser:

```bash
heroku open --app <app name>
```
