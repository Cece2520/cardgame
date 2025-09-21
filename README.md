## Installing software/dependencies

Install ```nvm``` (node version manager)

```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash```

In your terminal, navigate to the root folder of the repository. Run 

```nvm use 20```

to use ```node``` (which runs javascript/typescript on your computer) version 20. It will also give you ```npm``` (node package manager) to deal with all the dependencies.

Run 

```npm install``` 

to download dependencies (which will include typescript, etc.).

## Running the server and website locally

Again, ensure that you're in the root folder of this project. To start the server locally, run

```npx tsx src/server/Server.ts```.

This will start a script listening to your local port 8789. To check that it is online, you can open [http://localhost:8789/]{http://localhost:8789/} in your browser. You should see 'cannot GET /'.

Now to start the frontend website, run

```npm run dev```.

Then you can open the website at [http://localhost:5173/]{http://localhost:5173/}.
