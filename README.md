# multi-page-webpack
This is a starter kit showing off how to use webpack in a multi page web app. Flask is used as an example but the same logic would work for any multi-page web framework.

### Features

* ES6+ transpilation
* Minification
* Multi level shared bundles
* Correct handling of client side caching (via hashing)

### How it works
This saves an assetMapping.json file and lets you insert your generated bundle by chunk name with a Jinja2 filter. This makes it easy to slowly migrate from using different javascript module strategies. *(In the long run it might actually be nicer to specify the correct bundles for the correct files inside the webpack config and insert them via the [html-webpack plugin](https://github.com/jantimon/html-webpack-plugin) into the templates.The downside of this is that one would have an intermediate templating step and thus with hashed/cached bundles one would have to have an intermediate template output folder)*

### Usage 

Clone repo

Create new virtual environment

`virtualenv -p python3 webpack-multi-page`

Activate

`source webpack-multi-page/bin/activate`

Install python dependencies

`pip install -r requirements.txt`

Install webpack globally 

`npm install -g webpack`

From frontend folder

Install front-end dependencies

`npm install`

Run 

`npm run start`
