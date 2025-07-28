from flask import Flask
from flask_cors import CORS

def create_app():
    from instance.config import Config
    from backend.app.request.routes import request_bp  # Importa aquí para evitar ciclos

    app = Flask(__name__, instance_relative_config=True, static_folder=None)
    app.config.from_object(Config)

    CORS(app)

    # Registro de Blueprints
    app.register_blueprint(request_bp)

    # Log de rutas registradas
    print("🔍 Rutas registradas:")
    for rule in app.url_map.iter_rules():
        print(f"{rule.endpoint:30} {rule.rule}")

    return app
