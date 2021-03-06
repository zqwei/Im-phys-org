# Neural Recording Methodology Comparison

## Aim
This is a website for our project of __Neural Recording Methodology Comparison__

## Content structure
1. __Home__ page: views/index.hbs
2. __Analysis__ page: views/analysis.hbs
    * Nonsimultaneous Ephys/Imaging tab: views/partials/\_non-ephys-ca.hbs    
    * Simultaneous Ephys-Imaging tab: views/partials/\_ephys-ca.hbs
3. __Datasets__ page: views/data.hbs
    * Collection tab: views/partials/\_data\_collection.hbs
    * Submit a dataset tab: views/partials/\_data\_submit.hbs
4. __Models__ page: views/model.hbs
    * Spike to calcium tab: views/partials/\_s2c\_model.hbs
    * Calcium to spike tab: views/partials/\_c2s\_model.hbs
5. __Codes__ page: views/codes.hbs
    * Development log tab: views/partials/\_code\_collection.hbs
    * Submit a code tab: views/partials/\_code\_submit.hbs

## Run website on a local server using docker
* Build or rebuild website -- one needs to do this every time with any change of files.
```bash
    docker-compose up --force-recreate --build
```
* Close the website -- always do before update or rebuild the website
```bash
    docker-compose down
```

## Run on local server at project folder
1. Install Node
2. Run
```bash
    npm install
```
3. Start server
```bash
    npm start
```
4. It will show the website at local and external addresses ended with port 8080

### Run `Gulp` to monitor the changes online

### Set up gulp
Gulp configure file and task file are `gulpfile.js` and `gulp_task/serve.js` files respectively.

Before starting gulp, one needs to install global command of `gulp` and `nodemon`.
```bash
    npm install -g nodemon
    npm install --save-dev nodemon
    npm install -g gulp
```

## LICENSE
The content of this project itself is licensed under the <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 license</a>, and the underlying source code used to format and display that content is licensed under the <a href="https://github.com/zqwei/Neural-Recording-Methodology-Comparison/blob/master/LICENSE.md">MIT license</a>.
