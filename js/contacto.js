document.getElementById('miFormulario').addEventListener('submit', function(evento){
    evento.preventDefault();
    
    document.querySelectorAll('.error-mensaje').forEach(el => el.remove);
    const contenedorResumen = document.getElementById('contenedor-resumen');
        if(contenedorResumen){
        contenedorResumen.innerHTML= "";
        }

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const consulta = document.getElementById('consulta').value.trim();
    
    //RegEx
    const regexTexto = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,30}$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const regexTelefono = /^[0-9]{6,20}$/;
    const regexConsulta = /^[\s\S]{10,500}$/;

    let formularioValido = true;

    function mostrarError(idElemento, mensaje){
        const campoDiv = document.getElementById(idElemento).closest('.campo');
        const spanError = document.createElement('span');
        spanError.className = 'error-mensaje';
        spanError.textContent = mensaje;
        campoDiv.appendChild(spanError);
        formularioValido = false;
    }

    //validaciones
    if (!regexTexto.test(nombre)) {
            mostrarError('nombre', 'El nombre es obligatorio y debe tener entre 2 y 30 caracteres.');
    }

    if (!regexEmail.test(email)) {
        mostrarError('email','El correo electrónico no es válido.');
    }

    if (!regexTelefono.test(telefono)) {
        mostrarError('telefono','El teléfono debe contener solo números (8 a 15 dígitos).');
    }

    if (!regexConsulta.test(consulta)){
        mostrarError('consulta', 'La consulta debe tener un mínimo de 10 caráteres y un máximo de 500');
    }
    
    if (formularioValido) {
            const divResumen = document.createElement('div');
            divResumen.className= 'resumen-exito';

            divResumen.innerHTML = `
                <h3>Datos enviados: </h3>   
            <ul>
                <li><strong>Nombre:</strong> ${nombre}</li> 
                <li><strong>Email:</strong> ${email}</li>    
                <li><strong>Teléfono:</strong> ${telefono}</li>
                <li><strong>consulta:</strong> ${consulta}</li>
            <ul/> 
            `;
            contenedorResumen.appendChild(divResumen);
            document.getElementById('miFormulario').reset();
        }
    });