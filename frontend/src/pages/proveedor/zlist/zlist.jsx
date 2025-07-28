import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import "../inicio_proveedor.css";
const traducciones = {
    es: {
        usuario: "Usuario",
        inicio: "Solicitudes de Cotización",
        modo_oscuro: "Modo oscuro"
    },
    en: {
        usuario: "User",
        inicio: "Quotation Requests",
        modo_oscuro: "Dark Mode"
    },
    zh: {
        usuario: "用户",
        inicio: "报价请求",
        modo_oscuro: "深色模式"
    },
    pt: {
        usuario: "Usuário",
        inicio: "Solicitações de Cotação",
        modo_oscuro: "Modo escuro"
    }
};

const columns = {
    es: [
        { field: 'id', headerName: 'ID', width: 80, editable: false, sortable: true },
        { field: 'estado', headerName: 'Estado', width: 120, editable: false, sortable: true },
        { field: 'id_filial', headerName: 'ID Filial', width: 100, editable: false, sortable: true },
        { field: 'fecha', headerName: 'Fecha', width: 110, editable: false, sortable: true },
        { field: 'nombre_producto', headerName: 'Producto', width: 220, editable: false, sortable: true },
        { field: 'id_puerto_destino', headerName: 'ID Puerto Destino', width: 150, editable: false, sortable: true },
        { field: 'kl_solicitados', headerName: 'KL Solicitados', width: 130, editable: false, sortable: true },
        { field: 'responsable', headerName: 'Responsable', width: 140, editable: false, sortable: true },
        { field: 'observacion', headerName: 'Observación', width: 450, editable: false, sortable: true },
        { field: 'id_envase', headerName: 'ID Envase', width: 110, editable: false, sortable: true },
        { field: 'id_familia', headerName: 'ID Familia', width: 110, editable: false, sortable: true },
        { field: 'precio_filial', headerName: 'Precio Filial', width: 120, editable: false, sortable: true },
        { field: 'se_recotizo', headerName: 'Se Recotizó', width: 110, editable: false, sortable: true },
        { field: 'se_envio', headerName: 'Se Envió', width: 100, editable: false, sortable: true },
        { field: 'se_envio_cotizar', headerName: 'Se Envió Cotizar', width: 150, editable: false, sortable: true },
        { field: 'id_solicitud_origen', headerName: 'ID Solicitud Origen', width: 160, editable: false, sortable: true },
        { field: 'fecha_cotizacion', headerName: 'Fecha Cotización', width: 140, editable: false, sortable: true },
        { field: 'fecha_recotizacion', headerName: 'Fecha Recotización', width: 150, editable: false, sortable: true },
        { field: 'fecha_revision_op', headerName: 'Fecha Revisión OP', width: 150, editable: false, sortable: true },
        { field: 'fecha_respuesta_filial', headerName: 'Fecha Respuesta Filial', width: 170, editable: false, sortable: true },
        { field: 'etd', headerName: 'ETD', width: 120, editable: false, sortable: true },
        { field: 'eta', headerName: 'ETA', width: 120, editable: false, sortable: true },
        { field: 'origen', headerName: 'Origen', width: 120, editable: false, sortable: true },
        { field: 'precio_mercado', headerName: 'Precio Mercado', width: 130, editable: false, sortable: true },
        { field: 'se_descargo', headerName: 'Se Descargó', width: 110, editable: false, sortable: true },
        { field: 'responsable_cotizacion', headerName: 'Responsable Cotización', width: 170, editable: false, sortable: true },
        { field: 'responsable_op', headerName: 'Responsable OP', width: 140, editable: false, sortable: true },
        { field: 'responsable_filial', headerName: 'Responsable Filial', width: 150, editable: false, sortable: true },
        { field: 'se_genero_oc', headerName: 'Se Generó OC', width: 130, editable: false, sortable: true },
        { field: 'se_envio_cierre', headerName: 'Se Envió Cierre', width: 140, editable: false, sortable: true },
        { field: 'se_genero_sc', headerName: 'Se Generó SC', width: 130, editable: false, sortable: true },
        { field: 'muestra', headerName: 'Muestra', width: 100, editable: false, sortable: true },
        { field: 'referencia_mercado', headerName: 'Referencia Mercado', width: 160, editable: false, sortable: true },
        { field: 'kl_min', headerName: 'KL Mín', width: 90, editable: false, sortable: true },
        { field: 'id_almacen', headerName: 'ID Almacén', width: 110, editable: false, sortable: true },
        { field: 'clase_pedido', headerName: 'Clase Pedido', width: 130, editable: false, sortable: true },
        { field: 'id_grupo_compras', headerName: 'ID Grupo Compras', width: 150, editable: false, sortable: true },
        { field: 'solped', headerName: 'Solped', width: 100, editable: false, sortable: true },
        { field: 'posicion', headerName: 'Posición', width: 100, editable: false, sortable: true },
        { field: 'UM', headerName: 'UM', width: 80, editable: false, sortable: true },
        { field: 'id_centro', headerName: 'ID Centro', width: 110, editable: false, sortable: true },
        { field: 'origen_solped', headerName: 'Origen Solped', width: 130, editable: false, sortable: true },
        { field: 'oc', headerName: 'OC', width: 90, editable: false, sortable: true },
        { field: 'posicion_oc', headerName: 'Posición OC', width: 110, editable: false, sortable: true },
        { field: 'eliminada', headerName: 'Eliminada', width: 110, editable: false, sortable: true },
        { field: 'tipo_compra', headerName: 'Tipo Compra', width: 130, editable: false, sortable: true },
        { field: 'consolidacion', headerName: 'Consolidación', width: 130, editable: false, sortable: true }
    ],

    pt: [
        { field: 'id', headerName: 'ID', width: 80, editable: false, sortable: true },
        { field: 'estado', headerName: 'Estado', width: 120, editable: false, sortable: true },
        { field: 'id_filial', headerName: 'ID Filial', width: 100, editable: false, sortable: true },
        { field: 'fecha', headerName: 'Data', width: 110, editable: false, sortable: true },
        { field: 'nombre_producto', headerName: 'Produto', width: 220, editable: false, sortable: true },
        { field: 'id_puerto_destino', headerName: 'ID Porto Destino', width: 150, editable: false, sortable: true },
        { field: 'kl_solicitados', headerName: 'KL Solicitados', width: 130, editable: false, sortable: true },
        { field: 'responsable', headerName: 'Responsável', width: 140, editable: false, sortable: true },
        { field: 'observacion', headerName: 'Observação', width: 450, editable: false, sortable: true },
        { field: 'id_envase', headerName: 'ID Embalagem', width: 110, editable: false, sortable: true },
        { field: 'id_familia', headerName: 'ID Família', width: 110, editable: false, sortable: true },
        { field: 'precio_filial', headerName: 'Preço Filial', width: 120, editable: false, sortable: true },
        { field: 'se_recotizo', headerName: 'Foi Recotizado', width: 110, editable: false, sortable: true },
        { field: 'se_envio', headerName: 'Foi Enviado', width: 100, editable: false, sortable: true },
        { field: 'se_envio_cotizar', headerName: 'Foi Enviado para Cotizar', width: 150, editable: false, sortable: true },
        { field: 'id_solicitud_origen', headerName: 'ID Solicitação Origem', width: 160, editable: false, sortable: true },
        { field: 'fecha_cotizacion', headerName: 'Data Cotação', width: 140, editable: false, sortable: true },
        { field: 'fecha_recotizacion', headerName: 'Data Recotação', width: 150, editable: false, sortable: true },
        { field: 'fecha_revision_op', headerName: 'Data Revisão OP', width: 150, editable: false, sortable: true },
        { field: 'fecha_respuesta_filial', headerName: 'Data Resposta Filial', width: 170, editable: false, sortable: true },
        { field: 'etd', headerName: 'ETD', width: 120, editable: false, sortable: true },
        { field: 'eta', headerName: 'ETA', width: 120, editable: false, sortable: true },
        { field: 'origen', headerName: 'Origem', width: 120, editable: false, sortable: true },
        { field: 'precio_mercado', headerName: 'Preço Mercado', width: 130, editable: false, sortable: true },
        { field: 'se_descargo', headerName: 'Foi Descarregado', width: 110, editable: false, sortable: true },
        { field: 'responsable_cotizacion', headerName: 'Responsável Cotação', width: 170, editable: false, sortable: true },
        { field: 'responsable_op', headerName: 'Responsável OP', width: 140, editable: false, sortable: true },
        { field: 'responsable_filial', headerName: 'Responsável Filial', width: 150, editable: false, sortable: true },
        { field: 'se_genero_oc', headerName: 'Foi Gerado OC', width: 130, editable: false, sortable: true },
        { field: 'se_envio_cierre', headerName: 'Foi Enviado Fechamento', width: 140, editable: false, sortable: true },
        { field: 'se_genero_sc', headerName: 'Foi Gerado SC', width: 130, editable: false, sortable: true },
        { field: 'muestra', headerName: 'Amostra', width: 100, editable: false, sortable: true },
        { field: 'referencia_mercado', headerName: 'Referência Mercado', width: 160, editable: false, sortable: true },
        { field: 'kl_min', headerName: 'KL Mín', width: 90, editable: false, sortable: true },
        { field: 'id_almacen', headerName: 'ID Armazém', width: 110, editable: false, sortable: true },
        { field: 'clase_pedido', headerName: 'Classe Pedido', width: 130, editable: false, sortable: true },
        { field: 'id_grupo_compras', headerName: 'ID Grupo Compras', width: 150, editable: false, sortable: true },
        { field: 'solped', headerName: 'Solped', width: 100, editable: false, sortable: true },
        { field: 'posicion', headerName: 'Posição', width: 100, editable: false, sortable: true },
        { field: 'UM', headerName: 'UM', width: 80, editable: false, sortable: true },
        { field: 'id_centro', headerName: 'ID Centro', width: 110, editable: false, sortable: true },
        { field: 'origen_solped', headerName: 'Origem Solped', width: 130, editable: false, sortable: true },
        { field: 'oc', headerName: 'OC', width: 90, editable: false, sortable: true },
        { field: 'posicion_oc', headerName: 'Posição OC', width: 110, editable: false, sortable: true },
        { field: 'eliminada', headerName: 'Eliminada', width: 110, editable: false, sortable: true },
        { field: 'tipo_compra', headerName: 'Tipo Compra', width: 130, editable: false, sortable: true },
        { field: 'consolidacion', headerName: 'Consolidação', width: 130, editable: false, sortable: true }
    ],

    en: [
        { field: 'id', headerName: 'ID', width: 80, editable: false, sortable: true },
        { field: 'estado', headerName: 'Status', width: 120, editable: false, sortable: true },
        { field: 'id_filial', headerName: 'Filial ID', width: 100, editable: false, sortable: true },
        { field: 'fecha', headerName: 'Date', width: 110, editable: false, sortable: true },
        { field: 'nombre_producto', headerName: 'Product', width: 220, editable: false, sortable: true },
        { field: 'id_puerto_destino', headerName: 'Destination Port ID', width: 150, editable: false, sortable: true },
        { field: 'kl_solicitados', headerName: 'KL Requested', width: 130, editable: false, sortable: true },
        { field: 'responsable', headerName: 'Responsible', width: 140, editable: false, sortable: true },
        { field: 'observacion', headerName: 'Observation', width: 450, editable: false, sortable: true },
        { field: 'id_envase', headerName: 'Container ID', width: 110, editable: false, sortable: true },
        { field: 'id_familia', headerName: 'Family ID', width: 110, editable: false, sortable: true },
        { field: 'precio_filial', headerName: 'Branch Price', width: 120, editable: false, sortable: true },
        { field: 'se_recotizo', headerName: 'Requoted', width: 110, editable: false, sortable: true },
        { field: 'se_envio', headerName: 'Sent', width: 100, editable: false, sortable: true },
        { field: 'se_envio_cotizar', headerName: 'Sent to Quote', width: 150, editable: false, sortable: true },
        { field: 'id_solicitud_origen', headerName: 'Origin Request ID', width: 160, editable: false, sortable: true },
        { field: 'fecha_cotizacion', headerName: 'Quotation Date', width: 140, editable: false, sortable: true },
        { field: 'fecha_recotizacion', headerName: 'Requote Date', width: 150, editable: false, sortable: true },
        { field: 'fecha_revision_op', headerName: 'OP Review Date', width: 150, editable: false, sortable: true },
        { field: 'fecha_respuesta_filial', headerName: 'Branch Response Date', width: 170, editable: false, sortable: true },
        { field: 'etd', headerName: 'ETD', width: 120, editable: false, sortable: true },
        { field: 'eta', headerName: 'ETA', width: 120, editable: false, sortable: true },
        { field: 'origen', headerName: 'Origin', width: 120, editable: false, sortable: true },
        { field: 'precio_mercado', headerName: 'Market Price', width: 130, editable: false, sortable: true },
        { field: 'se_descargo', headerName: 'Discharged', width: 110, editable: false, sortable: true },
        { field: 'responsable_cotizacion', headerName: 'Quotation Responsible', width: 170, editable: false, sortable: true },
        { field: 'responsable_op', headerName: 'OP Responsible', width: 140, editable: false, sortable: true },
        { field: 'responsable_filial', headerName: 'Branch Responsible', width: 150, editable: false, sortable: true },
        { field: 'se_genero_oc', headerName: 'PO Generated', width: 130, editable: false, sortable: true },
        { field: 'se_envio_cierre', headerName: 'Sent Close', width: 140, editable: false, sortable: true },
        { field: 'se_genero_sc', headerName: 'SC Generated', width: 130, editable: false, sortable: true },
        { field: 'muestra', headerName: 'Sample', width: 100, editable: false, sortable: true },
        { field: 'referencia_mercado', headerName: 'Market Reference', width: 160, editable: false, sortable: true },
        { field: 'kl_min', headerName: 'Min KL', width: 90, editable: false, sortable: true },
        { field: 'id_almacen', headerName: 'Warehouse ID', width: 110, editable: false, sortable: true },
        { field: 'clase_pedido', headerName: 'Order Class', width: 130, editable: false, sortable: true },
        { field: 'id_grupo_compras', headerName: 'Purchase Group ID', width: 150, editable: false, sortable: true },
        { field: 'solped', headerName: 'Solped', width: 100, editable: false, sortable: true },
        { field: 'posicion', headerName: 'Position', width: 100, editable: false, sortable: true },
        { field: 'UM', headerName: 'UM', width: 80, editable: false, sortable: true },
        { field: 'id_centro', headerName: 'Center ID', width: 110, editable: false, sortable: true },
        { field: 'origen_solped', headerName: 'Solped Origin', width: 130, editable: false, sortable: true },
        { field: 'oc', headerName: 'PO', width: 90, editable: false, sortable: true },
        { field: 'posicion_oc', headerName: 'PO Position', width: 110, editable: false, sortable: true },
        { field: 'eliminada', headerName: 'Deleted', width: 110, editable: false, sortable: true },
        { field: 'tipo_compra', headerName: 'Purchase Type', width: 130, editable: false, sortable: true },
        { field: 'consolidacion', headerName: 'Consolidation', width: 130, editable: false, sortable: true }
    ],

    zh: [
        { field: 'id', headerName: '编号', width: 80, editable: false, sortable: true },
        { field: 'estado', headerName: '状态', width: 120, editable: false, sortable: true },
        { field: 'id_filial', headerName: '分公司编号', width: 100, editable: false, sortable: true },
        { field: 'fecha', headerName: '日期', width: 110, editable: false, sortable: true },
        { field: 'nombre_producto', headerName: '产品', width: 220, editable: false, sortable: true },
        { field: 'id_puerto_destino', headerName: '目的港编号', width: 150, editable: false, sortable: true },
        { field: 'kl_solicitados', headerName: '申请千克', width: 130, editable: false, sortable: true },
        { field: 'responsable', headerName: '负责人', width: 140, editable: false, sortable: true },
        { field: 'observacion', headerName: '备注', width: 450, editable: false, sortable: true },
        { field: 'id_envase', headerName: '容器编号', width: 110, editable: false, sortable: true },
        { field: 'id_familia', headerName: '类别编号', width: 110, editable: false, sortable: true },
        { field: 'precio_filial', headerName: '分公司价格', width: 120, editable: false, sortable: true },
        { field: 'se_recotizo', headerName: '重新报价', width: 110, editable: false, sortable: true },
        { field: 'se_envio', headerName: '已发送', width: 100, editable: false, sortable: true },
        { field: 'se_envio_cotizar', headerName: '已发送报价', width: 150, editable: false, sortable: true },
        { field: 'id_solicitud_origen', headerName: '原始申请编号', width: 160, editable: false, sortable: true },
        { field: 'fecha_cotizacion', headerName: '报价日期', width: 140, editable: false, sortable: true },
        { field: 'fecha_recotizacion', headerName: '重新报价日期', width: 150, editable: false, sortable: true },
        { field: 'fecha_revision_op', headerName: '操作复审日期', width: 150, editable: false, sortable: true },
        { field: 'fecha_respuesta_filial', headerName: '分公司回复日期', width: 170, editable: false, sortable: true },
        { field: 'etd', headerName: '预计离港', width: 120, editable: false, sortable: true },
        { field: 'eta', headerName: '预计到达', width: 120, editable: false, sortable: true },
        { field: 'origen', headerName: '起源', width: 120, editable: false, sortable: true },
        { field: 'precio_mercado', headerName: '市场价格', width: 130, editable: false, sortable: true },
        { field: 'se_descargo', headerName: '已卸货', width: 110, editable: false, sortable: true },
        { field: 'responsable_cotizacion', headerName: '报价负责人', width: 170, editable: false, sortable: true },
        { field: 'responsable_op', headerName: '操作负责人', width: 140, editable: false, sortable: true },
        { field: 'responsable_filial', headerName: '分公司负责人', width: 150, editable: false, sortable: true },
        { field: 'se_genero_oc', headerName: '已生成采购单', width: 130, editable: false, sortable: true },
        { field: 'se_envio_cierre', headerName: '已发送关闭', width: 140, editable: false, sortable: true },
        { field: 'se_genero_sc', headerName: '已生成收货单', width: 130, editable: false, sortable: true },
        { field: 'muestra', headerName: '样品', width: 100, editable: false, sortable: true },
        { field: 'referencia_mercado', headerName: '市场参考', width: 160, editable: false, sortable: true },
        { field: 'kl_min', headerName: '最小千克', width: 90, editable: false, sortable: true },
        { field: 'id_almacen', headerName: '仓库编号', width: 110, editable: false, sortable: true },
        { field: 'clase_pedido', headerName: '订单类型', width: 130, editable: false, sortable: true },
        { field: 'id_grupo_compras', headerName: '采购组编号', width: 150, editable: false, sortable: true },
        { field: 'solped', headerName: '采购申请', width: 100, editable: false, sortable: true },
        { field: 'posicion', headerName: '位置', width: 100, editable: false, sortable: true },
        { field: 'UM', headerName: '计量单位', width: 80, editable: false, sortable: true },
        { field: 'id_centro', headerName: '中心编号', width: 110, editable: false, sortable: true },
        { field: 'origen_solped', headerName: '采购申请来源', width: 130, editable: false, sortable: true },
        { field: 'oc', headerName: '采购订单', width: 90, editable: false, sortable: true },
        { field: 'posicion_oc', headerName: '采购订单位置', width: 110, editable: false, sortable: true },
        { field: 'eliminada', headerName: '已删除', width: 110, editable: false, sortable: true },
        { field: 'tipo_compra', headerName: '采购类型', width: 130, editable: false, sortable: true },
        { field: 'consolidacion', headerName: '合并', width: 130, editable: false, sortable: true }
    ]
};


export default function ProveedorInicio() {
    const [lang, setLang] = useState(localStorage.getItem("preferred-lang") || "es");
    const [isDark, setIsDark] = useState(localStorage.getItem("preferred-theme") === "dark");

    const location = useLocation();
    const resultado = location.state?.resultado || [];
    console.log(resultado);
    useEffect(() => {
        localStorage.setItem("preferred-lang", lang);
        localStorage.setItem("preferred-theme", isDark ? "dark" : "light");
        document.body.classList.toggle("dark-mode", isDark);


    }, [lang, isDark]);

    const handleDarkSwitch = (e) => {
        setIsDark(e.target.checked);
    };

    const theme = createTheme({
        palette: {
            mode: isDark ? 'dark' : 'light',
            ...(isDark && {
                text: {
                    primary: '#bdbdbd',  // color del texto principal en modo oscuro
                    secondary: '#aaaaaa',
                },
            }),
        },
    });

    return (
        <>
            <div className="navbar-custom">
                <h4 style={{ display: "flex", alignContent: "center" }}>
                    <Link
                        to="/proveedor"
                        style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                        <i className="material-icons" style={{ cursor: 'pointer' }}>
                            arrow_back_ios
                        </i>
                    </Link>
                    <img src="/logo_anasac.png" alt="Anasac" className="logo-anasac" />
                    <span id="page-title">{traducciones[lang].inicio}</span>
                </h4>
                <div className="dropdown">
                    <button className="btn btn-sm bg-transparent border-0 dropdown-toggle d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "var(--text)" }}>
                        <i className="material-icons">account_circle</i>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end" style={{ backgroundColor: "var(--tile-background)", color: "var(--text)" }}>
                        <li className="dropdown-header px-3">{traducciones[lang].usuario}: <strong>Freddy Ramirez</strong></li>
                        <li className="px-3 py-2 d-flex align-items-center justify-content-between">
                            <span>{traducciones[lang].modo_oscuro}</span>
                            <div className="form-check form-switch m-0">
                                <input className="form-check-input" type="checkbox" id="darkSwitch" checked={isDark} onChange={handleDarkSwitch} />
                            </div>
                        </li>
                        <li className="px-3">
                            <select className="form-select form-select-sm w-auto ms-2" value={lang} onChange={e => setLang(e.target.value)}>
                                <option value="es">🇪🇸 Español</option>
                                <option value="en">🇬🇧 English</option>
                                <option value="pt">🇧🇷 Português</option>
                                <option value="zh">🇨🇳 中文</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="category-bar"></div>
            <div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
                <ThemeProvider theme={theme}>
                    <Box sx={{ height: '85dvh', width: '95%' }}>
                        <DataGrid
                            rows={resultado}
                            columns={columns[lang]}
                            density="compact"
                            disableRowSelectionOnClick
                            checkboxSelection
                            hideFooter // ⛔ Oculta paginación y selector de página
                            pagination={false} // ⛔ Desactiva comportamiento de paginación
                        />
                    </Box>
                </ThemeProvider>
            </div>
        </>
    );
}
