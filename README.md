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

## Git management
* merge your own branch with updated master (Do at your own git)
```bash
    git merge master
```
* Send a pull request to merge your own branch to master (Do with a pull request)
https://help.github.com/articles/creating-a-pull-request/


## Code architecture
### Frontend
Static file folders:
* public/semantic-ui: for support of frontend framework (not tracked git).
* public/results: for static benchmarks (not tracked in git).

### Backend
* Backend of the website is implemented by Node.Js and MongoDB.
    * start MongoDB connections
    ```bash
    mongod
    ```
    * run MongoDB
    ```bash
    mongo
    ```
    * GUI for MongoDB -- __Robo 3T__
    * _TODO_: render data from MongoDB to each html when __get__ request is sent.

* Set up of MongoDB
    * set path to current project folder
    ```bash
    mongod --dbpath <project_folder>/data
    ```
    * copy ephys_imaging_datasets dataset to current MongoDB
    ```bash
    mongorestore -d ephys_imaging_datasets <location_for_dumped file>
    ```

## Testing website on a local server

### Set up local server at project folder
1. Install Node
2. Run
```bash
    npm install
```
3. Start server
```bash
    npm start
```
4. It will show the website at local and external addresses ended with port 10001

### Install other node packages

```bash
    npm install mathjax --save
```

## Run `Gulp` to monitor the changes online

### Set up gulp
Gulp configure file and task file are `gulpfile.js` and `gulp_task/serve.js` files respectively.

Before starting gulp, one needs to install global command of `gulp` and `nodemon`.
```bash
    npm install -g nodemon
    npm install --save-dev nodemon
    npm install -g gulp
```

## Basic function in `Git`
* Create a new branch
```bash
    git checkout -b <branch name>
```

* Update your branch with master branch
```bash
    git checkout master
    git pull
    git checkout <your branch>
    git merge master
```

* Delete your branch
```bash
    git checkout master # switch to any branches which is not to be deleted
    git branch -d <your branch>
```

## LICENSE
The content of this project itself is licensed under the <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 license</a>, and the underlying source code used to format and display that content is licensed under the <a href="https://github.com/zqwei/Neural-Recording-Methodology-Comparison/blob/master/LICENSE.md">MIT license</a>.
