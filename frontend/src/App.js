import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useState } from 'react';
import { ProductService } from './services/api.js';
export function App() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // Form State
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [category, setCategory] = useState('Computadores');
    const loadProducts = async () => {
        try {
            setLoading(true);
            const data = await ProductService.getAll();
            setProducts(data);
            setError(null);
        }
        catch (err) {
            setError('No se pudo conectar con el Backend. Verifique que product-api esté corriendo.');
        }
        finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        loadProducts();
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || price === '' || stock === '')
            return;
        try {
            await ProductService.create({
                name,
                description,
                price: Number(price),
                stock: Number(stock),
                category
            });
            setName('');
            setDescription('');
            setPrice('');
            setStock('');
            loadProducts();
        }
        catch (err) {
            alert('Error creando producto: ' + err.message);
        }
    };
    const handleDelete = async (id) => {
        if (!id)
            return;
        if (confirm('¿Desea eliminar este producto?')) {
            try {
                await ProductService.delete(id);
                loadProducts();
            }
            catch (err) {
                alert('Error al eliminar: ' + err.message);
            }
        }
    };
    return (_jsxs("div", { className: "container", children: [_jsxs("header", { className: "header", children: [_jsxs("div", { children: [_jsx("h1", { style: { margin: 0, color: '#0B3C5D' }, children: "Cat\u00E1logo de Inventario" }), _jsx("p", { style: { margin: 0, color: '#718096' }, children: "Ingenier\u00EDa de Software V \u00B7 Universidad ICESI" })] }), _jsx("span", { className: "badge-devops", children: "CI/CD Enabled" })] }), error && (_jsxs("div", { style: { background: '#FED7D7', color: '#9B2C2C', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }, children: ["\u26A0\uFE0F ", error] })), _jsxs("div", { className: "grid-layout", children: [_jsxs("div", { className: "card", children: [_jsx("h2", { style: { marginTop: 0, fontSize: '1.25rem', color: '#2D3748' }, children: "Nuevo Producto" }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsxs("div", { className: "form-group", children: [_jsx("label", { children: "Nombre:" }), _jsx("input", { className: "form-input", value: name, onChange: e => setName(e.target.value), required: true, placeholder: "Ej. Teclado Mec\u00E1nico" })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { children: "Categor\u00EDa:" }), _jsxs("select", { className: "form-input", value: category, onChange: e => setCategory(e.target.value), children: [_jsx("option", { value: "Computadores", children: "Computadores" }), _jsx("option", { value: "Monitores", children: "Monitores" }), _jsx("option", { value: "Audio", children: "Audio" }), _jsx("option", { value: "Accesorios", children: "Accesorios" })] })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { children: "Precio (COP):" }), _jsx("input", { type: "number", className: "form-input", value: price, onChange: e => setPrice(Number(e.target.value)), required: true, placeholder: "Ej. 150000", min: "1" })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { children: "Stock:" }), _jsx("input", { type: "number", className: "form-input", value: stock, onChange: e => setStock(Number(e.target.value)), required: true, placeholder: "Ej. 10", min: "0" })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { children: "Descripci\u00F3n:" }), _jsx("textarea", { className: "form-input", rows: 2, value: description, onChange: e => setDescription(e.target.value), placeholder: "Detalles del producto" })] }), _jsx("button", { type: "submit", className: "btn", children: "+ Registrar Producto" })] })] }), _jsxs("div", { className: "card", children: [_jsxs("h2", { style: { marginTop: 0, fontSize: '1.25rem', color: '#2D3748' }, children: ["Productos Registrados (", products.length, ")"] }), loading ? (_jsx("p", { children: "Cargando cat\u00E1logo..." })) : products.length === 0 ? (_jsx("p", { style: { color: '#718096' }, children: "No hay productos registrados en el inventario." })) : (_jsxs("table", { className: "table-custom", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "ID" }), _jsx("th", { children: "Nombre" }), _jsx("th", { children: "Categor\u00EDa" }), _jsx("th", { children: "Precio" }), _jsx("th", { children: "Stock" }), _jsx("th", { children: "Acci\u00F3n" })] }) }), _jsx("tbody", { children: products.map(p => (_jsxs("tr", { children: [_jsxs("td", { children: ["#", p.id] }), _jsxs("td", { children: [_jsx("strong", { children: p.name }), _jsx("br", {}), _jsx("small", { style: { color: '#718096' }, children: p.description })] }), _jsx("td", { children: p.category }), _jsxs("td", { children: ["$", Number(p.price).toLocaleString('es-CO')] }), _jsxs("td", { children: [p.stock, " unid."] }), _jsx("td", { children: _jsx("button", { onClick: () => handleDelete(p.id), className: "btn-delete", children: "Eliminar" }) })] }, p.id))) })] }))] })] })] }));
}
//# sourceMappingURL=App.js.map