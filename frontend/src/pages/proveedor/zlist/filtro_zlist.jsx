import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';
import "../inicio_proveedor.css";
const traducciones = {
    es: {
        usuario: "Usuario",
        modo_oscuro: "Modo oscuro",
        ejecutar: "Ejecutar",
        filtros: {
            fecha: "Intervalo de Fechas:",
            id_solicitud: "Solicitud:",
            id_solped: "Solped:",
            producto: "Producto:",
            estado: "Estado:",
            filial: "Filial:",
            puerto: "Puerto:",
            responsable: "Responsable:",
            envase: "Envase:",
            familia: "Familia:",
            etd: "Intervalo de ETD:",
            origen: "Origen:",
            grupo_compras: "Grupo de Compras:",
            tipo_compra: "Tipo de Compra:"
        },
        guardar: "Guardar",
        cancelar: "Cancelar",
        añadir: "+ Añadir"
    },
    en: {
        usuario: "User",
        modo_oscuro: "Dark Mode",
        ejecutar: "Execute",
        filtros: {
            fecha: "Date Range:",
            id_solicitud: "Request:",
            id_solped: "Purchase Request (Solped):",
            producto: "Product:",
            estado: "Status:",
            filial: "Subsidiary:",
            puerto: "Port:",
            responsable: "Responsible:",
            envase: "Packaging:",
            familia: "Family:",
            etd: "ETD Range:",
            origen: "Origin:",
            grupo_compras: "Purchasing Group:",
            tipo_compra: "Type of Purchase:"
        },
        guardar: "Save",
        cancelar: "Cancel",
        añadir: "+ Add"
    },
    zh: {
        usuario: "用户",
        modo_oscuro: "深色模式",
        ejecutar: "执行",
        filtros: {
            fecha: "日期范围：",
            id_solicitud: "请求：",
            id_solped: "采购申请（Solped）：",
            producto: "产品：",
            estado: "状态：",
            filial: "子公司：",
            puerto: "港口：",
            responsable: "负责人：",
            envase: "包装：",
            familia: "系列：",
            etd: "ETD 范围：",
            origen: "来源：",
            grupo_compras: "采购组：",
            tipo_compra: "采购类型："
        },
        guardar: "保存",
        cancelar: "取消",
        añadir: "+ 添加"
    },
    pt: {
        usuario: "Usuário",
        modo_oscuro: "Modo escuro",
        ejecutar: "Executar",
        filtros: {
            fecha: "Intervalo de Datas:",
            id_solicitud: "Solicitação:",
            id_solped: "Solicitação de Compra (Solped):",
            producto: "Produto:",
            estado: "Status:",
            filial: "Filial:",
            puerto: "Porto:",
            responsable: "Responsável:",
            envase: "Embalagem:",
            familia: "Família:",
            etd: "Intervalo de ETD:",
            origen: "Origem:",
            grupo_compras: "Grupo de Compras:",
            tipo_compra: "Tipo de Compra:"

        },
        guardar: "Salvar",
        cancelar: "Cancelar",
        añadir: "+ Adicionar"
    }
};


const filtros = {
    fecha: {
        inputs: [{ type: "date" }, { type: "date" }]
    },
    etd: {
        inputs: [{ type: "date" }, { type: "date" }]
    },
    id_solicitud: {
        inputs: [{ type: "text" }]
    },
    id_solped: {
        inputs: [{ type: "text" }]
    },
    producto: {
        inputs: [{ type: "text" }]
    },
    estado: {
        inputs: [{ type: "text" }]
    },
    filial: {
        inputs: [{ type: "text" }]
    },
    puerto: {
        inputs: [{ type: "text" }]
    },
    responsable: {
        inputs: [{ type: "text" }]
    },
    envase: {
        inputs: [{ type: "text" }]
    },
    familia: {
        inputs: [{ type: "text" }]
    },
    origen: {
        inputs: [{ type: "text" }]
    },
    grupo_compras: {
        inputs: [{ type: "text" }]
    },
    tipo_compra: {
        inputs: [{ type: "text" }]
    }
};


export default function ProveedorInicio() {
    const navigate = useNavigate();
    const [lang, setLang] = useState(localStorage.getItem("preferred-lang") || "es");
    const [isDark, setIsDark] = useState(localStorage.getItem("preferred-theme") === "dark");
    const [loading, setLoading] = useState(false);
    const [valores, setValores] = useState(() => {
        const inicial = {};
        for (const key in filtros) {
            inicial[key] = filtros[key].inputs.map(() => "");
        }
        return inicial;
    });
    const [modalAbierto, setModalAbierto] = useState(null); // clave del filtro abierto
    const [valoresTemp, setValoresTemp] = useState([]); // valores mientras se edita
    const [hoverInput, setHoverInput] = useState(null);

    useEffect(() => {
        localStorage.setItem("preferred-lang", lang);
        localStorage.setItem("preferred-theme", isDark ? "dark" : "light");
        document.body.classList.toggle("dark-mode", isDark);

    }, [lang, isDark]);

    const handleDarkSwitch = (e) => {
        setIsDark(e.target.checked);
    };

    return (
        <>
            <button
                className="floating-btn d-flex justify-content-center align-items-center"
                disabled={loading} // opcional: evita doble clic
                onClick={async () => {
                    const query = procesarFiltros(valores);
                    console.log("Query para filtros:", query);

                    try {
                        setLoading(true); // mostrar loader

                        const response = await fetch("http://pandora.anasac.cl:5090/api_get_request", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(query),
                        });

                        if (!response.ok) throw new Error("Error al consultar filtros");

                        const data = await response.json();
                        console.log("Respuesta del backend:", data);

                        navigate("/proveedor/zlist", { state: { resultado: data } });
                    } catch (error) {
                        console.error("Error:", error);
                        alert("Hubo un problema al enviar los filtros.");
                    } finally {
                        setLoading(false);
                    }
                }}
            >
                {loading ? (
                    <div className="spinner-border text-light" role="status" />
                ) : (
                    <span>{traducciones[lang].ejecutar}</span>
                )}
            </button>
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

            <div className="grid-container" style={{ width: "60%" }}>
                {Object.entries(filtros).map(([key, filtro]) => {
                    const mostrarBoton = filtro.inputs.some(input => input.type !== "date");
                    const cantidadInputs = filtro.inputs.length;

                    return (
                        <div className="filter-row" key={key}>
                            <div className="filter-text">{traducciones[lang].filtros[key]}</div>

                            {filtro.inputs.map((input, i) => {
                                const value = valores[key][i];
                                const inputId = `${key}-${i}`;

                                const handleChange = (e) => {
                                    const nuevo = { ...valores };
                                    nuevo[key][i] = e.target.value;
                                    setValores(nuevo);
                                };

                                const inputElement = input.type === "select" ? (
                                    <select
                                        key={i}
                                        className="form-select filter-input"
                                        value={value}
                                        onChange={handleChange}
                                    >
                                        {input.options.map((opt, j) => (
                                            <option key={j} value={opt}>{opt}</option>
                                        ))}
                                    </select>
                                ) : (
                                    <div
                                        key={i}
                                        style={{ position: 'relative', display: 'inline-block' }}
                                        onMouseEnter={() => setHoverInput(inputId)}
                                        onMouseLeave={() => setHoverInput(null)}
                                    >
                                        <input
                                            type={input.type}
                                            className="form-control filter-input"
                                            placeholder={input.placeholder || ''}
                                            value={value}
                                            onChange={handleChange}
                                            style={{ paddingRight: '0px' }} // espacio para el botón
                                        />
                                        {hoverInput === inputId && input.type !== "date" && (
                                            <button
                                                type="button"
                                                className="btn-autofill"
                                            >
                                                <span className="material-icons" style={{ fontSize: '0.8rem' }}>
                                                    search
                                                </span>
                                            </button>
                                        )}
                                    </div>
                                );

                                // Agrega "a:" si hay 2 inputs y es el segundo
                                if (filtro.inputs.length === 2 && i === 1) {
                                    return (
                                        <React.Fragment key={i}>
                                            <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                                                <div className="filter-label-to">a:</div>
                                                {inputElement}
                                            </div>
                                        </React.Fragment>
                                    );
                                }

                                return inputElement;
                            })}



                            {mostrarBoton && (
                                <button
                                    className="btn btn-secondary filter-btn"
                                    onClick={() => {
                                        console.log(key)
                                        setModalAbierto(key);
                                        console.log(modalAbierto)
                                        setValoresTemp([...valores[key]]);
                                    }}
                                >
                                    <span className="material-icons" style={{ fontSize: '0.8rem' }}>
                                        filter_alt
                                    </span>
                                </button>
                            )}
                            {cantidadInputs === 1 && (
                                <div className="filter-input input-fantasma" />
                            )}
                        </div>
                    );
                })}
            </div>

            {modalAbierto && (
                <div className="modal-backdrop" onClick={() => setModalAbierto(null)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <div className="modal-title">{traducciones[lang].filtros[modalAbierto]}</div>
                            <button className="modal-close" onClick={() => setModalAbierto(null)}>×</button>
                            
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}



function procesarFiltros(filtrosSeleccionados) {
    const filtrosProcesados = {};

    for (const key in filtrosSeleccionados) {
        const valoresFiltrados = filtrosSeleccionados[key].filter(
            (valor) => valor && valor !== "---"
        );

        if (valoresFiltrados.length > 0) {
            filtrosProcesados[key] = valoresFiltrados;
        }
    }

    return filtrosProcesados;
}
