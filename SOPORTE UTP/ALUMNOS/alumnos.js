const button2 = document.getElementById("boton2");
const button4 = document.getElementById("boton4");
const inicioAlumno = document.querySelector('.inicio_alumno');


// ************************** MODAL: ALUMNOS *************************


const btn_modal_alumno = document.getElementById("btn_modal_alumno");
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    codigo: /^(U)[0-9]{8}$/,
    password: /^.{4,12}$/
}

const campos = {
    codigo: false,
    password: false
}

const validarFormulario = (e) => {
    switch(e.target.name) {
        case "codigo":
            validarCampo(expresiones.codigo, e.target, 'codigo');
        break;

        case "password": 
            validarCampo(expresiones.password, e.target, 'password');
        break;
    }
}


const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario_grupo-incorrecto');

        document.getElementById(`grupo__${campo}`).classList.add('formulario_grupo-correcto');

        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');

        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');

        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');

        campos[campo] = true;

    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario_grupo-incorrecto');

        document.getElementById(`grupo__${campo}`).classList.remove('formulario_grupo-correcto');

        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');

        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');

        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');

        campos[campo] = false;
    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
})


function modalAlumno(e) {

    e.preventDefault();
    const codigo = document.getElementById("codigo").value;
    const password = document.getElementById("password").value;
    const modal_alum = document.getElementById("modal_alumno");
    const mostrarAlum = document.getElementById("alumnos");
    let nombre = "";
    const text3 = document.getElementById("text_alumn1");

    function textoPorCadaAlumnoMujer() {
        return `Bienvenida alumna <span>${nombre}</span>. Por favor, utilice los siguientes botones para conocer las notas de todos sus cursos, as?? como tambi??n su ponderado final.`;
    }

    function textoPorCadaAlumnoHombre() {
        return `Bienvenida alumno <span>${nombre}</span>. Por favor, utilice los siguientes botones para conocer las notas de todos sus cursos, as?? como tambi??n su ponderado final.`;
    }

    function agregarParrafoMujer() {
        const parrafoInicioAlumno = document.createElement('p');
        parrafoInicioAlumno.innerHTML = textoPorCadaAlumnoMujer();

        inicioAlumno.appendChild(parrafoInicioAlumno);
    }

    function agregarParrafoHombre() {
        const parrafoInicioAlumno = document.createElement('p');
        parrafoInicioAlumno.innerHTML = textoPorCadaAlumnoHombre();

        inicioAlumno.appendChild(parrafoInicioAlumno);
    }

    function verNotas(e) {

        e.preventDefault();
    
        if(codigo == "U10101010") {
            text3.innerHTML = `
                F??sica: 18  <br>
                Qu??mica: 17 <br>
                Programaci??n: 18 <br>
                Redes: 15 <br>
            `;
        } else if(codigo == "U11072001") {
            text3.innerHTML = `
                F??sica: 20  <br>
                Qu??mica: 15 <br>
                Programaci??n: 17 <br>
                Redes: 19 <br>
            `;
        } else if(codigo == "U20202020") {
            text3.innerHTML = `
                F??sica: 14  <br>
                Qu??mica: 17 <br>
                Base de datos: 15 <br>
                Redes: 17 <br>
            `;
        } else if(codigo == "U30303030") {
            text3.innerHTML = `
                F??sica: 18  <br>
                Qu??mica: 16 <br>
                Base de datos: 15 <br>
                Redes: 19 <br>
            `;
        }
    
    }

    function verPonderado(e) {

        e.preventDefault();
        let text5 = document.getElementById("text_alumn3");
    
        function ponderado(a, b, c, d) {
            final = parseFloat((a + b + c + d) / 4);
            return final;
        }
    
        function verInfo(){
            text5.innerHTML = `
                Su ponderado final es de: ${final}
            `;
        }
    
        if(codigo == "U10101010") {
            ponderado(18, 17, 18, 15);
            verInfo();

        } else if(codigo == "U11072001") {
            ponderado(20, 15, 17, 19);
            verInfo();

        } else if(codigo == "U20202020") {
            ponderado(14, 17, 15, 17);
            verInfo();

        } else if(codigo == "U30303030") {
            ponderado(18, 16, 15, 19);
            verInfo();
        }
    
    }

    function removerModal() {
        modal_alum.classList.add('modal_alumno_out');
        mostrarAlum.classList.remove('quitar');
        mostrarAlum.classList.add('alumnos')
    }

    function botones() {
        button2.addEventListener('click', verNotas);
        button4.addEventListener('click', verPonderado);
    }

    if(codigo == ("U11072001") && password == "123456") {

        removerModal();
        nombre = "Shirley Paredes";

        agregarParrafoMujer();
        botones();

    } else if(codigo == ("U10101010") && password == "10101010") {

        removerModal();
        nombre = "Aar??n Mart??nez";

        agregarParrafoHombre();
        botones();

    } else if(codigo == ("U20202020") && password == "20202020") {

        removerModal();
        nombre = "Rachel James";

        agregarParrafoHombre();
        botones();

    } else if(codigo == ("U30303030") && password == "30303030") {

        removerModal();
        nombre = "Emma James";

        agregarParrafoHombre();
        botones();

    } else {
        alert("DATOS INCORRECTOS.");
    }
}

btn_modal_alumno.addEventListener('click', modalAlumno);