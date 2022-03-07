## Creation du fichier package.json
```shell
npm init
```

## Dans package.json
Permet d'utiliser l'importation moderne
```
"type": "module"
```

## Installation de package pour le projet
```shell
npm install dotenv@8.2.0 express@4.17.1 mongoose@5.10.7
```

```shell
npm install -D nodemon@2.0.4
```

## Ajout d'un script dans le fichier package.json

```
  "scripts": {
    "start": "node server.js",
    "watch": "nodemon server.js",
    "client": "cd client && npm start",
    "build": "cd client && npm run build",
    "install-client": "cd client && npm install",
    "heroku-postbuild": "npm run install-client && npm run build",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

## Demarrer le server via nodemon
```shell
npm start
```
(Cette commande est un alias de: node server.js, que nous avons configuré dans le package.json)
