#---------------------------Cierres---------------------------#
def get_request(status = 'Con Cierre', since = '2025-07-01'):
    requests = []
    """
    Obtiene todas las solicitudes con cierre desde la fecha que se decida iniciar el cambio.
    Inputs:
        status (str): El estado de las solicitudes a filtrar. Por defecto es 'Con Cierre'.
        since (str): La fecha desde la cual se desean obtener las solicitudes. Por defecto es '2025-07-01'.
    
    Returns:
        requests: Una lista de ID's de solicitudes que cumplen con los criterios especificados.
    """
    return requests

requests = get_request()


def verify_confirmation_purchase(requests):
    dic = {
        'requests_with_confirmation' : [],
        'requests_without_confirmation': []
    }
    """
    Verifica si ya se envió confirmacion de compra
    Inputs:
        requests (list): Una lista de ID's de solicitudes a verificar
    Outputs:
        dic: Un diccionario que en la llave tiene las categorias y en el valor una lista de ID's de solicitudes que estan en esa categoria.
    """
    return dic

request_without_confirmation = verify_confirmation_purchase['request_without_confirmation']

def notification_purchase(requests):
    """
    Envía una notificación de compra para las solicitudes al proveedor y filial.
    Importante dejar Logs de las notificaciones.
    Inputs:
        requests (list): Una lista de ID's de solicitudes a las que se les enviará una notificación.
    Returns:
        None
    """


def verify_origin(requests_without_confirmation):
    out = {}
    """
    Verifica el origen de las solicitudes.
    Inputs:
        requests (list): Una lista de ID's de solicitudes a verificar.
    variable:
        out (dict): Un diccionario que en la llave tiene los origenes y en el valor una lista de ID's de solicitudes que tienen ese origen.
    """
    for origin in out.keys():
        notification_purchase(out[origin])

request_with_confirmation = verify_confirmation_purchase['request_with_confirmation']

def reminder_purchase(requests):
    """
    Envía un recordatorio de confirmacion de compra para las solicitudes.
    Inputs:
        requests (list): Una lista de ID's de solicitudes a las que se les enviará un recordatorio.
    Returns:
        None
    """

def verify_time_confirmation_purchase(request):
    request_more_than_2_days = []
    """
    Revisa hace cuantos dias se solicitó la SC
    Inputs:
        request: Lista de ID's a verificar
    Output:
        request_more_than_2_days: Lista de las solicitudes que se pidió la SC hace mas de 2 dias
    """

def verify_sc(requests_with_confirmation):
    requests_with_sc = []
    requests_without_sc = []
    """
    Verifica si las solicitudes tienen un SC asignado.
    Inputs:
        requests (list): Una lista de ID's de solicitudes a verificar.
    Returns:
        requests_with_sc (list): Una lista de ID's de solicitudes que tienen un SC asignado.
    """
    reminder_purchase(verify_time_confirmation_purchase(requests_without_sc))
    return requests_with_sc

def reminder_purchase_order(requests):
    """
    Envía un recordatorio de falta de oc.
    Inputs:
        requests (list): Una lista de ID's de solicitudes a las que se les enviará un recordatorio.
    Returns:
        None
    """

def verify_po(request_with_sc):
    request_with_po = []
    request_without_po = []
    """
    Verifica si las solicitudes tiene PO asignada
    Inputs:
        requests (list): Una lista de ID's de solicitudes a verificar.
    """
    reminder_purchase_order(request_without_po)
    

#--------------------------------------------------------------#

#---------------------------Revisión---------------------------#
#--------------------------Operaciones-------------------------#
requests = get_request('Revisión OP')

def reminder_review_operations(requests):
    """
    Envía un recordatorio de revisión para las solicitudes de operaciones.
    Inputs:
        requests (list): Una lista de ID's de solicitudes a las que se les enviará un recordatorio.
    Returns:
        None
    """

def alert_review_operations(requests):
    """
    Envía una alerta de revisión para las solicitudes de operaciones.
    Inputs:
        requests (list): Una lista de ID's de solicitudes a las que se les enviará una alerta.
    Returns:
        None
    """

def verify_time_review_operations(requests):
    requests_more_than_2_days = []
    requests_less_equal_than_2_days = []
    """
    Verifica el tiempo de revisión de las solicitudes de operaciones.
    Inputs:
        requests (list): Una lista de ID's de solicitudes a verificar.
    Returns:
        None
    """
    reminder_review_operations(requests_less_equal_than_2_days)
    alert_review_operations(requests_more_than_2_days)
    
#----------------------------Filiales--------------------------#
requests = get_request('Revisión Filial')
def reminder_review_subsidiary(requests):
    """
    Envía un recordatorio de revisión para las solicitudes de filial.
    Inputs:
        requests (list): Una lista de ID's de solicitudes a las que se les enviará un recordatorio.
    Returns:
        None
    """
    
def alert_review_subsidiary(requests):
    """
    Envía una alerta de revisión para las solicitudes de filial.
    Inputs:
        requests (list): Una lista de ID's de solicitudes a las que se les enviará una alerta.
    Returns:
        None
    """
    
def verify_time_review_subsidiary(requests):
    requests_more_than_3_days = []
    requests_less_equal_than_3_days = []
    """
    Verifica el tiempo de revisión de las solicitudes de filial.
    Inputs:
        requests (list): Una lista de ID's de solicitudes a verificar.
    Returns:
        None
    """
    reminder_review_subsidiary(requests_less_equal_than_3_days)
    alert_review_subsidiary(requests_more_than_3_days)