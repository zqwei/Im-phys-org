## Code architecture
### Frontend
Static file folders:
* public/semantic-ui: for support of frontend framework (not tracked git).
* public/results: for static benchmarks (not tracked in git).

### Backend
* Backend of the website is implemented by Node.Js and MongoDB (3.4).
    * install MongoDB (Data format is upgraded after MongoDB 4.0 -- http://dochub.mongodb.org/core/4.0-upgrade-fcv)
    ```bash
    brew install mongodb@3.4
    sudo mkdir -p /data/db
    sudo chown -R `id -un` /data/db
    echo 'export PATH="/usr/local/opt/mongodb@3.4/bin:$PATH"' >> ~/.zshrc
    ```
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
