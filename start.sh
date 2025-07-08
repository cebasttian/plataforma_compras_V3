#!/bin/bash

# Navegar al directorio del proyecto (por si se ejecuta desde otro lado)
cd "$(dirname "$0")"

# Exportar variables necesarias para Flask (opcional si estás en modo desarrollo también)
export FLASK_ENV=development
export PYTHONPATH=$(pwd)

# Mensaje informativo
echo "🚀 Iniciando backend con Gunicorn..."
echo "📁 Directorio actual: $(pwd)"
echo "🐍 PYTHONPATH: $PYTHONPATH"

# Ejecutar Gunicorn
python3 -m gunicorn -c backend/gunicorn_config.py backend.run:app
