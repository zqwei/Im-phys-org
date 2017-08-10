# Neural Recording Methodology Comparison

## Aim
This is a website for our project of __Neural Recording Methodology Comparison__


## Git management
* merge your own branch with updated master (Do at your own git)
```bash
    git merge master
```
* Send a pull request to merge your own branch to master (Do with a pull request)
https://help.github.com/articles/creating-a-pull-request/


## Code architecture
### Frontend
* ~~Frontend of the website is based on Semantic-UI and JQuery.~~
* ~~ Frontend of the website is written using Pug (Jade) and express.js.~~
* Frontend of the website is written using HBS and express.js.
* Issue #1: Lack of support of loading json file for pages like using database list.
* Issue #1: Lack of support of mathjax for pages using math equations.

### Backend
* ~~Backend of the website is implemented by Node.Js and CouchDB.~~
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
