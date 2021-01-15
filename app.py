from flask import Flask, render_template, request, flash, session, redirect, json, jsonify
app = Flask(__name__)

#===============================*    PAGE ROUTES   *========================================#

@app.route('/')
def home():
    return render_template('base.html')

@app.route('/about')
def about():
    return render_template('base.html')

@app.route('/works')
def works():
    return render_template('base.html')

@app.route('/contact')
def contact():
    return render_template('base.html')

#===============================*    USER ROUTES   *========================================#

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)