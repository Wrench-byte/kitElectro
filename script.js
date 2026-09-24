// Калькулятор стоимости в сомах
function calculateTotal() {
    const carPriceInput = document.getElementById('car-price').value;
    const carPrice = parseFloat(carPriceInput) || 0;
    
    // Costos promedio fijos mapeados a la moneda local (som)
    const shippingCost = 160000; // Logística China-Bishkek
    const logisticsCost = 45000; // Despacho y trámites locales
    
    const total = carPrice + shippingCost + logisticsCost;
    
    // Formatear el número con separadores de miles para que se vea limpio
    document.getElementById('total-price').innerText = `${total.toLocaleString('ru-RU')} сом`;
}

// Simulación de interacción al presionar los botones de la maqueta
function openOrderModal(carModel) {
    alert(`Заявка на автомобиль: ${carModel}\n\n[Демо-эффект]: Aquí puedes mostrarle al cliente cómo este botón abrirá un formulario flotante o redirigirá automáticamente al WhatsApp del negocio con el texto: "Здравствуйте, хочу заказать расчет для ${carModel}"`);
}
