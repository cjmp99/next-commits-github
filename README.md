
## Getting Started

First, run the development server:

* You must create an .env file in the root of the project and define an environment variable called NEXT_PUBLIC_APP_TOKEN_GB where you must put the token of your github account to have access to the api

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

* When you load the view, you'll see a message asking the user to enter the name of the owner of a repository on github and the name of the repository.

* When executing this action, it will search through the github API for the commits that have been made in the repository

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
