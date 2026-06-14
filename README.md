# WEB103 Project 2 - Vietnamese Food Guide for College Students

Submitted by: **Long Ta**

About this web app: **A listicle web app that helps college students explore cheap and easy Vietnamese meals. In Project 2, the app is connected to a Render PostgreSQL database, and the food list data is retrieved from a structured foods table using backend API routes.**

Time spent: **6** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->

* [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
* [x] **The web app is connected to a PostgreSQL database, with an appropriately structured database table for the list items**

  * [x] **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  * [x] **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.**

The following **optional** features are implemented:

* [ ] The user can search for items by a specific attribute

The following **additional** features are implemented:

* [x] The app uses a Render PostgreSQL database to store Vietnamese food list items.
* [x] The app includes a reset script that creates and seeds the foods table.
* [x] The backend API retrieves food data from PostgreSQL instead of serving only hardcoded data.
* [x] The app includes both a homepage list view and individual detail pages for each food item.
* [x] The API includes routes for retrieving all foods and retrieving a single food by id.
* [x] The project keeps the frontend simple with vanilla JavaScript while integrating a database-backed backend.

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='WEB103project2.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->

GIF created with ScreenToGif

<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

One challenge I encountered was connecting the existing Express app to a Render PostgreSQL database while keeping the vanilla JavaScript frontend mostly unchanged. I also had to debug database connection issues, configure environment variables correctly, create and seed the foods table, and verify the table contents with psql using `SELECT * FROM foods;`.

## License

Copyright 2026 Long Ta

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
