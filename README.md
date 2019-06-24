# Mobile Web Specialist Certification Course

* * *

## I have done the following steps to complete the Project

### Cloning and Downloading the Project

-   After reading the Instructions, I have downloaded the skeleton project of _Restaurant Review_ from a link of GitHub which is provided by **Udacity**.
-   Then I unzipped the skeleton project folder.
-   After that I thoroughly checked `css`,`js` and other important folders.
-   I checked the styles provided in css file.
-   I understood how the application basically works.

### How to run the Application

1.  In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

    -   In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
    -   Note -  For Windows systems, Python 3.x is installed as `python` by default. To start a Python 3.x server, you can simply enter `python -m http.server 8000`.

2.  With your server running, visit the site: `http://localhost:8000`.

### Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/) in `main.js` and `restaurant_info.js` files.

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future-proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write.

### Code Modifications

-   For achieving responsiveness first we need to add viewport in both html pages i.e. `index.html` and `restaurant.html`.
-   Then I wrote code for responsiveness for both small and medium screens in `styles.css` for both html pages.
-   In order to have a high accessibility I wrote _aria_, _label_, _tabindex_ for elements.
-   Then  I added _alt_ attributes to images.
-   Then in order to make the application work offline I wrote the code for _service worker_ in separate file named as `sw.js`.
-   Then I linked the file to root html file.
-   So the application now works offline too.
