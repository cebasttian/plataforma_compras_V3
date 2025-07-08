from flask import Blueprint, jsonify

inicio_bp = Blueprint('inicio', __name__, url_prefix='/api/inicio')

@inicio_bp.route('/')
def home():
    return jsonify({"mensaje": "Inicio API funcionando"})
