function enviarWhatsApp() {
    // 1. Configura el número de teléfono del cliente (con código de país, sin el +)
    const telefonoNegocio = "+58"; // Ejemplo: 58 (Venezuela) + número

    // 2. Obtenemos los valores de los inputs
    const nombre = document.getElementById('nombre').value;
    const direccion = document.getElementById('direccion').value;
    const productos = document.getElementById('productos').value;
    const telefonoCliente = document.getElementById('telefono').value;

    // 3. Validamos que no estén vacíos
    if(nombre === "" || direccion === "" || productos === "") {
        alert("Por favor, rellena los campos principales del pedido.");
        return;
    }

    // 4. Creamos el mensaje con formato
    const mensaje = `*Nuevo Pedido - La Hamburgueria de Víctor*%0A` +
                    `----------------------------------%0A` +
                    `*Nombre:* ${nombre}%0A` +
                    `*Dirección:* ${direccion}%0A` +
                    `*Pedido:* ${productos}%0A` +
                    `*Teléfono:* ${telefonoCliente}%0A` +
                    `----------------------------------%0A` +
                    `_Enviado desde la página web_`;

    // 5. Creamos el enlace final y abrimos la ventana
    const url = `https://wa.me/${telefonoNegocio}?text=${mensaje}`;
    window.open(url, '_blank');
}