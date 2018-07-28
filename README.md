# NodeJS Notes Application

A Simple notes application to demonstrate basic nodeJS functionality

### Prerequisites

This project works with node 10.6.0, testing on 8.11.4 LTS has not been performed check your version below

```
node --version
```

### Installing

Make sure you have node installed on your machine. Then clone this repository, navigate to directory and perform an npm install
For example:
```
Simple-Notes-App-nodeJS YOUR-USERNAME$ npm install
```

## Running

After installing simply run the following commands with their appropriate flags
DISCLAIMER: 
WINDOWS users USE DOUBLE QUOTES
Do not include spaces following flags

Bad Example: 
```
node app.js add --title = 'Example title' --body = 'example body'
```


Working Examples: 


Add Note
```
node app.js add --title ='Example title' --body ='example body'
```


Remove Note
```
node app.js add --title ='Example title'
```

All other functions simply refer to help flag
```
node app.js add --help
```
