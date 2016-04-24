# chatbot-inn
El video más reciente del canal de INN

**Questions**
* ¿Cuál es el video más reciente de INN?

## Setup

### 1 - Install from github

    $ npm install ChocoyoLabs/chatbot-inn --save

### 2 - Insert commands from seed

    $ sequelize db:seed --seeders-path node_modules/chatbot-inn/seeders --seed chatbot-inn-seeder.js

### 3 - Create command file

On chatbot project create file ./commands/inn.js

    var inn = require('chatbot-inn');

    // exports
    exports.latest = inn.latest;

## To remove this module

### 1 - Delete command file

On chatbot project

    $ rm ./commands/inn.js

### 2 - Remove seed

    $ sequelize db:seed:undo --seeders-path node_modules/chatbot-inn/seeders --seed chatbot-inn-seeder.js

### 3 - Remove module from package

Edit **package.json** to remove **ChocoyoLabs/chatbot-inn**
