from flask import Flask
from flask_cors import CORS
from .gestion_solicitudes.routes import gestion_solicitudes_bp


def create_app():
    from instance.config import Config

    app = Flask(__name__, instance_relative_config=True, static_folder=None)
    app.config.from_object(Config)

    CORS(app)
    app.register_blueprint(gestion_solicitudes_bp)
    
    print("🔍 Rutas registradas:")
    for rule in app.url_map.iter_rules():
        print(f"{rule.endpoint:30} {rule.rule}")

    return app
