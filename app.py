from flask import Flask, render_template, url_for, redirect
import json
import os.path

app = Flask(__name__)
app.config.from_object('config')

@app.template_filter('insertJs')
def insertJs(name):
    asset_mapping_path = os.path.join(app.root_path, 'assetMapping.json')
    return os.path.join('static', json.load(open(asset_mapping_path))[name]['js'])


@app.route('/')
def home():
    return render_template('page1.html', home=True)

@app.route('/<page>')
def page2(page):
  try:
    return render_template(page)
  except:
    return redirect(url_for('home'))


if __name__ == '__main__':
    app.run(debug=app.config["DEBUG"], extra_files=[os.path.join(app.root_path, 'assetMapping.json')])
