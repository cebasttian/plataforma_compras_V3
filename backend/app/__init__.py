from flask import Flask
from flask_cors import CORS
from .rutas import register_blueprints

def create_app():
    from instance.config import Config

    app = Flask(__name__, instance_relative_config=True, static_folder=None)
    app.config.from_object(Config)

    CORS(app)
    register_blueprints(app)

    print("🔍 Rutas registradas:")
    for rule in app.url_map.iter_rules():
        print(f"{rule.endpoint:30} {rule.rule}")

    return app
