from flask import Blueprint, jsonify

proveedor_bp = Blueprint('proveedor', __name__, url_prefix='/api/proveedor')

@proveedor_bp.route('/')
def home_proveedor():
    return jsonify({"mensaje": "Proveedor API funcionando"})
