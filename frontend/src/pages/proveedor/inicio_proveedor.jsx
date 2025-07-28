import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./inicio_proveedor.css";
const traducciones = {
	es: {
		usuario: "Usuario",
		modo_oscuro: "Modo oscuro",
		categorias: {
			"MM - PUR - Gestión de Solicitudes": "MM - PUR - Gestión de Solicitudes",
			"MM - PUR - Gestión de Órdenes de Compra": "MM - PUR - Gestión de Órdenes de Compra",
			"MM - PUR - Gestión de Documentos de Producto": "MM - PUR - Gestión de Documentos de Producto",
			"MM - PUR - Gestión Contrato de Venta": "MM - PUR - Gestión Contrato de Venta",
		}
	},
	en: {
		usuario: "User",
		modo_oscuro: "Dark Mode",
		categorias: {
			"MM - PUR - Gestión de Solicitudes": "MM - PUR - RFQ Management",
			"MM - PUR - Gestión de Órdenes de Compra": "MM - PUR - Purchase Order Management",
			"MM - PUR - Gestión de Documentos de Producto": "MM - PUR - Product Document Management",
			"MM - PUR - Gestión Contrato de Venta": "MM - PUR - Sales Contract Management"
		}
	},
	zh: {
		usuario: "用户",
		modo_oscuro: "深色模式",
		categorias: {
			"MM - PUR - Gestión de Solicitudes": "MM - PUR - 询价请求管理",
			"MM - PUR - Gestión de Órdenes de Compra": "MM - PUR - 采购订单管理",
			"MM - PUR - Gestión de Documentos de Producto": "MM - PUR - 产品文档管理",
			"MM - PUR - Gestión Contrato de Venta": "MM - PUR - 合同管理"
		}
	},
	pt: {
		usuario: "Usuário",
		modo_oscuro: "Modo escuro",
		categorias: {
			"MM - PUR - Gestión de Solicitudes": "MM - PUR - Gestão de Solicitações de Cotação",
			"MM - PUR - Gestión de Órdenes de Compra": "MM - PUR - Gestão de Ordens de Compra",
			"MM - PUR - Gestión de Documentos de Producto": "MM - PUR - Gestão de Documentos do Produto",
			"MM - PUR - Gestión Contrato de Venta": "MM - PUR - Gestão de Contrato de Venda"
		}
	}
};

const data = {
	"MM - PUR - Gestión de Solicitudes": [
		/*{
			"title": {
				"es": "Crear Solicitud de Cotización",
				"en": "Create Request for Quotation",
				"zh": "创建询价请求",
				"pt": "Criar Solicitação de Cotação"
			},
			"subtitle": {
				"es": "Registrar una nueva solicitud para proveedores",
				"en": "Register a new request for suppliers",
				"zh": "登记新的供应商询价请求",
				"pt": "Registrar nova solicitação para fornecedores"
			},
			"icon": "add_business",
			"code": "ME41",
			"enabled": false
		},*/
		/*{
			"title": {
				"es": "Editar Solicitud de Cotización",
				"en": "Edit Request for Quotation",
				"zh": "编辑询价请求",
				"pt": "Editar Solicitação de Cotação"
			},
			"subtitle": {
				"es": "Modificar condiciones o productos solicitados",
				"en": "Modify conditions or requested products",
				"zh": "修改请求的条件或产品",
				"pt": "Modificar condições ou produtos solicitados"
			},
			"icon": "edit_note",
			"code": "ME42",
			"enabled": false
		},*/
		/*{
			"title": {
				"es": "Visualizar Solicitud de Cotización",
				"en": "View Request for Quotation",
				"zh": "查看询价请求",
				"pt": "Visualizar Solicitação de Cotação"
			},
			"subtitle": {
				"es": "Consultar detalles de la solicitud",
				"en": "Consult details of the request",
				"zh": "查看请求的详细信息",
				"pt": "Consultar detalhes da solicitação"
			},
			"icon": "pageview",
			"code": "ME43",
			"enabled": true
		},
		{
			"title": {
				"es": "Ingresar Cotización de Proveedor",
				"en": "Enter Supplier Quotation",
				"zh": "输入供应商报价",
				"pt": "Inserir Cotação do Fornecedor"
			},
			"subtitle": {
				"es": "Registrar una oferta recibida",
				"en": "Register a received offer",
				"zh": "登记收到的报价",
				"pt": "Registrar uma oferta recebida"
			},
			"icon": "note_add",
			"code": "ME47",
			"enabled": true
		},*/
		{
			"title": {
				"es": "Comparar Cotizaciones",
				"en": "Compare Quotations",
				"zh": "比较报价",
				"pt": "Comparar Cotações"
			},
			"subtitle": {
				"es": "Evaluar múltiples ofertas por producto",
				"en": "Evaluate multiple offers per product",
				"zh": "评估每个产品的多个报价",
				"pt": "Avaliar múltiplas ofertas por produto"
			},
			"icon": "compare_arrows",
			"code": "ME49",
			"enabled": false
		},
		{
			"title": {
				"es": "Listar Solicitudes de Cotización",
				"en": "List Requests for Quotation",
				"zh": "列出询价请求",
				"pt": "Listar Solicitações de Cotação"
			},
			"subtitle": {
				"es": "Consultar todas las solicitudes enviadas a proveedores",
				"en": "View all requests sent to suppliers",
				"zh": "查看发送给供应商的所有询价请求",
				"pt": "Ver todas as solicitações enviadas aos fornecedores"
			},
			"icon": "list_alt",
			"code": "ZLIST",
			"filter": true,
			"enabled": true
		},
		{
			"title": {
				"es": "Listar Solicitudes de Cotización por Proveedor",
				"en": "List Request for Quotations by Vendor",
				"zh": "按供应商列出询价请求",
				"pt": "Listar Solicitações de Cotação por Fornecedor"
			},
			"subtitle": {
				"es": "Consultar solicitudes de cotización agrupadas por proveedor",
				"en": "View Request for Quotations grouped by supplier",
				"zh": "按供应商查看询价请求",
				"pt": "Ver solicitações agrupadas por fornecedor"
			},
			"icon": "list_alt",
			"code": "ME4X",
			"enabled": true
		},
		/*
		{
			"title": {
			"es": "Listar Solicitudes de Cotización por Material",
			"en": "List Request for Quotations by Material",
			"zh": "按物料列出询价请求",
			"pt": "Listar Solicitações de Cotação por Material"
			},
			"subtitle": {
			"es": "Consultar solicitudes de cotización agrupadas por producto",
			"en": "View Request for Quotations grouped by material",
			"zh": "按物料查看询价请求",
			"pt": "Ver solicitações agrupadas por produto"
			},
			"icon": "inventory_2",
			"code": "ME4C",
			"enabled": true
		},
		{
			"title": {
			"es": "Listar Solicitudes por Número",
			"en": "List Request for Quotations by Number",
			"zh": "按编号列出询价请求",
			"pt": "Listar Solicitações por Número"
			},
			"subtitle": {
			"es": "Consultar solicitud a partir de su número específico",
			"en": "View Request for Quotation from specific document number",
			"zh": "从特定编号查看询价请求",
			"pt": "Consultar solicitação pelo número"
			},
			"icon": "tag",
			"code": "ME4M",
			"enabled": true
		},*/
		{
			"title": {
				"es": "Listar Solicitudes por Grupo de Compras",
				"en": "List Request for Quotations by Purchasing Group",
				"zh": "按采购组列出询价请求",
				"pt": "Listar Solicitações por Grupo de Compras"
			},
			"subtitle": {
				"es": "Consultar solicitudes por responsable de compras",
				"en": "View Request for Quotations by responsible purchasing group",
				"zh": "查看各采购组的询价请求",
				"pt": "Ver solicitações por grupo responsável"
			},
			"icon": "group",
			"code": "ME4L",
			"enabled": true
		}
	],
	/*"MM - PUR - Gestión de Órdenes de Compra": [
		{
		"title": {
			"es": "Crear Orden de Compra",
			"en": "Create Purchase Order",
			"zh": "创建采购订单",
			"pt": "Criar Ordem de Compra"
		},
		"subtitle": {
			"es": "Generar orden a partir de cotización aceptada",
			"en": "Generate order from accepted quotation",
			"zh": "从已接受的报价生成订单",
			"pt": "Gerar ordem a partir de cotação aceita"
		},
		"icon": "shopping_cart_checkout",
		"code": "ME21N",
		enabled: false
		},
		{
		"title": {
			"es": "Editar Orden de Compra",
			"en": "Edit Purchase Order",
			"zh": "编辑采购订单",
			"pt": "Editar Ordem de Compra"
		},
		"subtitle": {
			"es": "Modificar condiciones de la orden",
			"en": "Modify purchase order conditions",
			"zh": "修改订单条件",
			"pt": "Modificar condições da ordem"
		},
		"icon": "edit",
		"code": "ME22N",
		"enabled": false
		},
		{
			"title": {
				"es": "Visualizar Orden de Compra",
				"en": "View Purchase Order",
				"zh": "查看采购订单",
				"pt": "Visualizar Ordem de Compra"
			},
			"subtitle": {
				"es": "Consultar detalle de la orden",
				"en": "Consult order details",
				"zh": "查看订单详细信息",
				"pt": "Consultar detalhes da ordem"
			},
			"icon": "receipt_long",
			"code": "ME23N",
			"enabled": false
		},
		{
			"title": {
				"es": "Imprimir u Obtener Orden",
				"en": "Print or Get Purchase Order",
				"zh": "打印或获取采购订单",
				"pt": "Imprimir ou Obter Ordem de Compra"
			},
			"subtitle": {
				"es": "Generar PDF o reenviar orden",
				"en": "Generate PDF or resend order",
				"zh": "生成PDF或重新发送订单",
				"pt": "Gerar PDF ou reenviar ordem"
			},
			"icon": "print",
			"code": "ME9F",
			"enabled": false
		}
	],*/
	"MM - PUR - Gestión Contrato de Venta": [
		{
			"title": {
				"es": "Crear Pre-Orden de Compra",
				"en": "Create Preliminary Purchase Order",
				"zh": "创建初步采购订单",
				"pt": "Criar Ordem de Compra Preliminar"
			},
			"subtitle": {
				"es": "Consolidar documentos antes de la OC definitiva",
				"en": "Consolidate documents before final PO creation",
				"zh": "在创建正式订单前整合文档",
				"pt": "Consolidar documentos antes da ordem definitiva"
			},
			"icon": "drafts",
			"code": "ZPREOC",
			"enabled": true
		}
	],
	"MM - PUR - Gestión de Documentos de Producto": [
		{
			"title": {
				"es": "Visualizar Documentos del Producto",
				"en": "Display Product Documents",
				"zh": "显示产品文档",
				"pt": "Exibir Documentos do Produto"
			},
			"subtitle": {
				"es": "Consultar anexos, cotizaciones y órdenes vinculadas",
				"en": "View attachments, quotations, and linked orders",
				"zh": "查看附件、报价和相关订单",
				"pt": "Ver anexos, cotações e ordens vinculadas"
			},
			"icon": "description",
			"code": "ME2M",
			"enabled": true
		},/*
		{
			"title": {
				"es": "Adjuntar Documentos al Producto",
				"en": "Attach Documents to Product",
				"zh": "将文档附加到产品",
				"pt": "Anexar Documentos ao Produto"
			},
			"subtitle": {
				"es": "Cargar fichas técnicas, QA, certificados",
				"en": "Upload datasheets, QA reports, certificates",
				"zh": "上传数据表、质量报告和证书",
				"pt": "Enviar fichas técnicas, relatórios de QA, certificados"
			},
			"icon": "upload_file",
			"code": "CV01N",
			"enabled": true
		}*/
	],
};


export default function ProveedorInicio() {
	const [lang, setLang] = useState(localStorage.getItem("preferred-lang") || "es");
	const [isDark, setIsDark] = useState(localStorage.getItem("preferred-theme") === "dark");
	const [categoryData, setCategoryData] = useState([]);

	useEffect(() => {
		localStorage.setItem("preferred-lang", lang);
		localStorage.setItem("preferred-theme", isDark ? "dark" : "light");
		document.body.classList.toggle("dark-mode", isDark);

		const t = traducciones[lang];
		const translated = Object.keys(data).map(categoryKey => ({
			key: categoryKey,
			title: t.categorias[categoryKey],
			tiles: data[categoryKey].map(tile => ({
				title: tile.title,
				subtitle: tile.subtitle,
				icon: tile.icon,
				code: tile.code,
				filter: tile.filter,
				enabled: tile.enabled !== false
			}))
		}));

		setCategoryData(translated);
	}, [lang, isDark]);

	const handleDarkSwitch = (e) => {
		setIsDark(e.target.checked);
	};

	return (
		<>
			<div className="navbar-custom">
				<h4>
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
			<div className="category-bar">
				{categoryData.map(cat => (
					<button key={cat.key} className="btn btn-outline-secondary btn-sm" onClick={() => {
						const el = document.getElementById(cat.key);
						const y = el.getBoundingClientRect().top + window.scrollY - 112;
						window.scrollTo({ top: y, behavior: "smooth" });
					}}>{cat.title}
					</button>
				))}
			</div>
			<div id="mainContent">
				{categoryData.map(cat => (
					<div key={cat.key} className="category-section" id={cat.key}>
						<h5>{cat.title}</h5>
						<div className="tile-container">
						{cat.tiles.map((tile, i) => {
							const href = `/proveedor/${tile.filter ? 'filtro-' : ''}${tile.code.toLowerCase()}`;
							console.log("🔍 Debug tile", {
							title: tile.title?.es,
							code: tile.code,
							filter: tile.filter,
							href
							});

							if (tile.enabled) {
							return (
								<Link
								to={href}
								key={i}
								className="tile"
								style={{ textDecoration: "none", color: "inherit" }}
								>
								<div>
									<div className="tile-title">{tile.title?.[lang]}</div>
									<div className="tile-subtitle">{tile.subtitle?.[lang]}</div>
								</div>
								<div className="tile-footer">
									<i className="material-icons" style={{ fontSize: "2rem" }}>{tile.icon}</i>
									<span>{tile.code}</span>
								</div>
								</Link>
							);
							} else {
							return (
								<div key={i} className="tile tile-disabled">
								<div>
									<div className="tile-title">{tile.title?.[lang]}</div>
									<div className="tile-subtitle">{tile.subtitle?.[lang]}</div>
								</div>
								<div className="tile-footer">
									<i className="material-icons" style={{ fontSize: "2rem" }}>{tile.icon}</i>
									<span>{tile.code}</span>
								</div>
								</div>
							);
							}
						})}
						</div>
					</div>
				))}
			</div>
			<div className="spacer"></div>
		</>
	);
}
