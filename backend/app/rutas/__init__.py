from .inicio import inicio_bp
from .usuarios import usuarios_bp
from .proveedor import proveedor_bp

def register_blueprints(app):
    app.register_blueprint(inicio_bp)
    app.register_blueprint(usuarios_bp)
    app.register_blueprint(proveedor_bp)
