import { useEffect, useState } from "react";
import "./inicio_proveedor.css";
const traducciones = {
  es: {
    inicio: "Página de inicio",
    usuario: "Usuario",
    modo_oscuro: "Modo oscuro",
    categorias: {
      "FI - Cierre CO": "FI - Cierre CO",
      "FI - Cierre Mensual": "FI - Cierre Mensual",
      "FI - Conciliación Bancaria": "FI - Conciliación Bancaria",
      "FI - Datos Maestros": "FI - Datos Maestros"
    }
  },
  en: {
    inicio: "Home Page",
    usuario: "User",
    modo_oscuro: "Dark Mode",
    categorias: {
      "FI - Cierre CO": "FI - CO Closing",
      "FI - Cierre Mensual": "FI - Monthly Closing",
      "FI - Conciliación Bancaria": "FI - Bank Reconciliation",
      "FI - Datos Maestros": "FI - Master Data"
    }
  },
  zh: {
    inicio: "首页",
    usuario: "用户",
    modo_oscuro: "深色模式",
    categorias: {
      "FI - Cierre CO": "FI - CO结账",
      "FI - Cierre Mensual": "FI - 月结",
      "FI - Conciliación Bancaria": "FI - 银行对账",
      "FI - Datos Maestros": "FI - 主数据"
    }
  },
  pt: {
    inicio: "Página inicial",
    usuario: "Usuário",
    modo_oscuro: "Modo escuro",
    categorias: {
      "FI - Cierre CO": "FI - Fechamento CO",
      "FI - Cierre Mensual": "FI - Fechamento Mensal",
      "FI - Conciliación Bancaria": "FI - Conciliação Bancária",
      "FI - Datos Maestros": "FI - Dados Mestres"
    }
  }
};

	
const data = {
		"FI - Cierre CO": [
			{
				title: {
					es: "Introducción de valores estadísticos",
					en: "Enter statistical values",
					zh: "输入统计值",
					pt: "Introdução de valores estatísticos"
				},
				subtitle: {
					es: "Centros de coste - Real",
					en: "Cost centers - Actual",
					zh: "成本中心 - 实际",
					pt: "Centros de custo - Real"
				},
				icon: "insights",
				code: "KSV1"
			},
			{
				title: {
					es: "Gestionar tipos de actividad",
					en: "Manage activity types",
					zh: "管理活动类型",
					pt: "Gerenciar tipos de atividade"
				},
				subtitle: {
					es: "Tipos de actividad",
					en: "Activity types",
					zh: "活动类型",
					pt: "Tipos de atividade"
				},
				icon: "category",
				code: "KSB1"
			},
			{
				title: {
					es: "Gestión de órdenes internas",
					en: "Internal order management",
					zh: "内部订单管理",
					pt: "Gestão de ordens internas"
				},
				subtitle: {
					es: "Cost center tracking",
					en: "Cost center tracking",
					zh: "成本中心跟踪",
					pt: "Rastreamento de centro de custo"
				},
				icon: "assignment",
				code: "KO03"
			},
			{
				title: {
					es: "Tratar ciclos de asignación de gastos",
					en: "Process cost allocation cycles",
					zh: "处理费用分配周期",
					pt: "Tratar ciclos de alocação de custos"
				},
				subtitle: {
					es: "Asignación entre centros",
					en: "Inter-center allocation",
					zh: "中心间分配",
					pt: "Alocação entre centros"
				},
				icon: "sync_alt",
				code: "KSU1"
			},
			{
				title: {
					es: "Ejecutar subreparto plan",
					en: "Execute planned secondary cost allocation",
					zh: "执行计划二级成本分配",
					pt: "Executar rateio planejado"
				},
				subtitle: {
					es: "Plan operativo",
					en: "Operational plan",
					zh: "运营计划",
					pt: "Plano operacional"
				},
				icon: "engineering",
				code: "KSUB"
			}
		],
		"FI - Cierre Mensual": [
			{
				title: {
					es: "Visualizar posiciones de objeto",
					en: "View object positions",
					zh: "查看对象头寸",
					pt: "Visualizar posições de objeto"
				},
				subtitle: {
					es: "Periodificación",
					en: "Accruals",
					zh: "摊销/应计",
					pt: "Acréscimos"
				},
				icon: "event",
				code: "F.07"
			},
			{
				title: {
					es: "Arrastre de saldos cuenta corriente",
					en: "Carry forward balances",
					zh: "结转账户余额",
					pt: "Transferência de saldos da conta corrente"
				},
				subtitle: {
					es: "Cierre mensual",
					en: "Monthly closing",
					zh: "月结",
					pt: "Fechamento mensal"
				},
				icon: "account_balance",
				code: "F.52"
			},
			{
				title: {
					es: "Revalorización de precio",
					en: "Price revaluation",
					zh: "价格重估",
					pt: "Reavaliação de preço"
				},
				subtitle: {
					es: "Centros de coste",
					en: "Cost centers",
					zh: "成本中心",
					pt: "Centros de custo"
				},
				icon: "trending_up",
				code: "KSBP"
			},
			{
				title: {
					es: "Reparto real",
					en: "Actual distribution",
					zh: "实际分配",
					pt: "Distribuição real"
				},
				subtitle: {
					es: "Distribución automática",
					en: "Automatic distribution",
					zh: "自动分配",
					pt: "Distribuição automática"
				},
				icon: "autorenew",
				code: "KSU5"
			},
			{
				title: {
					es: "Subreparto real",
					en: "Actual secondary distribution",
					zh: "实际二级分配",
					pt: "Rateio secundário real"
				},
				subtitle: {
					es: "Reasignación de costos",
					en: "Cost reassignment",
					zh: "成本重新分配",
					pt: "Reatribuição de custos"
				},
				icon: "upload",
				code: "KSUB"
			}
		],
		"FI - Conciliación Bancaria": [
			{
				title: {
					es: "Registrar conciliaciones",
					en: "Register reconciliations",
					zh: "登记对账",
					pt: "Registrar conciliações"
				},
				subtitle: {
					es: "Flujo bancario diario",
					en: "Daily bank flow",
					zh: "每日银行流程",
					pt: "Fluxo bancário diário"
				},
				icon: "account_balance_wallet",
				code: "FF67"
			},
			{
				title: {
					es: "Revisar partidas abiertas",
					en: "Review open items",
					zh: "审查未清项目",
					pt: "Revisar itens em aberto"
				},
				subtitle: {
					es: "Cuentas por pagar",
					en: "Accounts payable",
					zh: "应付账款",
					pt: "Contas a pagar"
				},
				icon: "receipt",
				code: "FBL1N"
			},
			{
				title: {
					es: "Revisar partidas clientes",
					en: "Review customer items",
					zh: "审查客户项目",
					pt: "Revisar itens de cliente"
				},
				subtitle: {
					es: "Cuentas por cobrar",
					en: "Accounts receivable",
					zh: "应收账款",
					pt: "Contas a receber"
				},
				icon: "receipt_long",
				code: "FBL5N"
			}
		],
		"FI - Datos Maestros": [
			{
				title: {
					es: "Crear centro de coste",
					en: "Create cost center",
					zh: "创建成本中心",
					pt: "Criar centro de custo"
				},
				subtitle: {
					es: "Estructura organizacional",
					en: "Organizational structure",
					zh: "组织结构",
					pt: "Estrutura organizacional"
				},
				icon: "business",
				code: "KS01"
			},
			{
				title: {
					es: "Modificar clase de costo",
					en: "Modify cost element",
					zh: "修改成本要素",
					pt: "Modificar classe de custo"
				},
				subtitle: {
					es: "Parámetros FI",
					en: "FI parameters",
					zh: "财务参数",
					pt: "Parâmetros FI"
				},
				icon: "work",
				code: "KA02"
			}
		]
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
        title: tile.title[lang],
        subtitle: tile.subtitle[lang],
        icon: tile.icon,
        code: tile.code
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
          }}>
            {cat.title}
          </button>
        ))}
      </div>

      <div id="mainContent">
        {categoryData.map(cat => (
          <div key={cat.key} className="category-section" id={cat.key}>
            <h5>{cat.title}</h5>
            <div className="tile-container">
              {cat.tiles.map((tile, i) => (
                <div key={i} className="tile">
                  <div>
                    <div className="tile-title">{tile.title}</div>
                    <div className="tile-subtitle">{tile.subtitle}</div>
                  </div>
                  <div className="tile-footer">
                    <i className="material-icons" style={{ fontSize: "2rem" }}>{tile.icon}</i>
                    <span>{tile.code}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="spacer"></div>
    </>
  );
}
