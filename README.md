# testesNepppe

Dentro da pasta node_modules no prompt de comando:

npm install --save-dev cypress-file-upload  

na pasta node_modules/.bin/cypress/support/ no arquivo commands.js:

import 'cypress-file-upload';

Arquivo a ser utilizado deve estar na pasta fixture

O tipo no documento geralmente é dado por  mimeType: 'application/tipo do documento'

exemplo:

    const fileName = 'data.pdf';    
    cy.fixture(fileName).then(fileContent => {
      cy.get('input[type="file"]').upload({ fileContent, fileName, mimeType: 'application/pdf' });
    });


Tutorial disponivel nesse site :
https://www.npmjs.com/package/cypress-file-upload
