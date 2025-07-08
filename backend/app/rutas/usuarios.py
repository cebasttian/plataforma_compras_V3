from flask import Blueprint, jsonify

usuarios_bp = Blueprint('usuarios', __name__, url_prefix='/api/usuarios')

@usuarios_bp.route('/', methods=['GET'])
def listar_usuarios():
    return jsonify([
        {"id": 1, "nombre": "Seba"},
        {"id": 2, "nombre": "Lucas"}
    ])
