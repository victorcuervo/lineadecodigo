---
title: "Formularios"
description: "Comprende los formularios DOM: acceso a campos, eventos, validación y FormData, con buenas prácticas de seguridad y un ejemplo práctico ejecutable."
date: 2026-09-24
updatedDate: 2026-09-24
tags: ["validation","formularios","form","input","preventdefault"]
slug: dom/formularios
type: category
topic: dom
id: 3e5a9dfb-adca-80e9-bd67-fbadecf4f8ce
author: victor_cuervo
---

## ¿Qué son los formularios DOM?


Los **formularios DOM** son la representación mediante objetos de los formularios y sus controles dentro del [Document Object Model](https://lineadecodigo.com/dom/). El navegador convierte cada elemento `form`, `input`, `select`, `textarea` o `button` del documento [HTML](https://lineadecodigo.com/html/) en un nodo que puede consultarse y modificarse mediante [JavaScript](https://lineadecodigo.com/javascript/).


Un formulario agrupa controles que recopilan datos. Cada control dispone de propiedades como `name`, `value`, `checked`, `disabled` o `selected`, según su tipo. El [DOM](https://lineadecodigo.com/dom/) permite acceder a esos valores, reaccionar a cambios, aplicar validación y decidir cómo se procesan los datos cuando se intenta enviar el formulario.


La colección `form.elements` reúne los controles asociados al formulario, incluso cuando alguno usa el atributo `form` y se encuentra fuera del elemento `form`. Los controles con `name` pueden localizarse mediante `elements.namedItem()` y sus valores pueden convertirse en un conjunto de pares nombre-valor con `FormData`.


## Características de los formularios DOM

- **Los campos se identifican por su propósito.** El atributo `name` determina la clave utilizada al enviar el dato. El atributo `id` permite asociar una etiqueta mediante `label[for]` y también facilita la selección desde el [DOM](https://lineadecodigo.com/dom/).
- **El valor depende del tipo de control.** `value` devuelve el texto de un `input`, `textarea` o `select`; `checked` indica el estado de casillas y botones de opción; y `selectedOptions` contiene las opciones elegidas en un `select` múltiple.
- **`form.elements`** **ofrece acceso estructurado.** Permite recorrer los controles o recuperarlos por nombre. Si varios controles comparten un nombre —como un grupo de radios— la colección puede devolver un `RadioNodeList`.
- **Los eventos reflejan momentos diferentes.** `input` se dispara con cada cambio del valor realizado por la persona; `change` suele hacerlo cuando el cambio se confirma; `submit` representa el intento válido de envío; y `reset` se produce al restaurar los valores iniciales.
- **La validación de restricciones está integrada.** Atributos como `required`, `min`, `max`, `minlength`, `maxlength` y `pattern` alimentan la Constraint Validation API. `checkValidity()` comprueba el estado, `reportValidity()` muestra los mensajes del navegador y `setCustomValidity()` define o elimina un error personalizado.
- **`preventDefault()`** **permite controlar el envío.** Al ejecutarlo en el evento `submit`, se evita la navegación o recarga convencional y se pueden procesar los datos mediante código. No sustituye la validación: el formulario debe comprobarse antes de almacenar o enviar información.
- **`FormData`** **recopila controles aptos para el envío.** Incluye controles con `name` que no estén deshabilitados. Las casillas sin marcar y los botones de opción no seleccionados no aparecen; los campos `readonly` sí pueden incluirse.
- **La validación del navegador no protege el servidor.** Una petición puede construirse sin utilizar el formulario. Por ello, cualquier sistema que reciba datos debe volver a validar tipos, rangos, permisos y reglas de negocio.
- **La accesibilidad forma parte del comportamiento.** Cada campo necesita una etiqueta comprensible. Los mensajes de error deben identificar el problema y no depender solo del color; cuando se actualizan dinámicamente, una región con `aria-live` puede anunciarlos a tecnologías de asistencia.

## ¿Por qué aprender formularios DOM?


El manejo de formularios permite crear búsquedas, inicios de sesión, registros, filtros, configuraciones y procesos de compra que responden antes de enviar información. Se puede mostrar un contador, habilitar controles según una selección, detectar valores incoherentes o preparar una petición asíncrona sin recargar el documento completo.


Conocer las propiedades específicas de cada campo evita lecturas incorrectas. Una casilla no se interpreta comprobando solo `value`, sino también `checked`; un grupo de radios requiere localizar la opción seleccionada; y un control deshabilitado no se incorpora a `FormData`. Estas diferencias afectan directamente a los datos enviados.


La gestión correcta del evento `submit` centraliza el flujo tanto si la persona pulsa el botón como si presiona Intro en un campo. Escuchar únicamente el evento `click` del botón puede omitir otras formas válidas de envío y dificulta aprovechar la validación nativa.


Comprender la **Constraint Validation API** también permite combinar reglas declarativas con comprobaciones propias. El navegador puede validar el formato de un correo, mientras que el código comprueba si dos direcciones coinciden. La validación en cliente mejora la respuesta de la interfaz; la validación en servidor mantiene la integridad y seguridad de los datos.


## Ejemplo de formularios DOM


Este formulario valida que dos direcciones de correo coincidan. Si todos los campos son válidos, crea un objeto `FormData` y muestra una confirmación sin recargar la página.


```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Formulario DOM</title>
</head>
<body>
  <form id="formulario-registro">
    <p>
      <label for="nombre">Nombre</label>
      <input id="nombre" name="nombre" autocomplete="name" required>
    </p>

    <p>
      <label for="correo">Correo electrónico</label>
      <input id="correo" name="correo" type="email" autocomplete="email" required>
    </p>

    <p>
      <label for="confirmacion-correo">Repite el correo</label>
      <input id="confirmacion-correo" type="email" required>
    </p>

    <p>
      <label>
        <input name="condiciones" type="checkbox" value="aceptadas" required>
        Acepto las condiciones
      </label>
    </p>

    <button type="submit">Registrar</button>
  </form>

  <p id="resultado" aria-live="polite"></p>

  <script>
    const formulario = document.querySelector("#formulario-registro");
    const correo = formulario.elements.namedItem("correo");
    const confirmacion = document.querySelector("#confirmacion-correo");
    const resultado = document.querySelector("#resultado");

    function validarCorreos() {
      const coinciden = correo.value === confirmacion.value;
      confirmacion.setCustomValidity(
        coinciden ? "" : "Las direcciones de correo no coinciden."
      );
    }

    correo.addEventListener("input", validarCorreos);
    confirmacion.addEventListener("input", validarCorreos);

    formulario.addEventListener("submit", (evento) => {
      evento.preventDefault();

      const datos = new FormData(formulario);
      const nombre = datos.get("nombre");
      const correoRegistrado = datos.get("correo");

      resultado.textContent =
        `Registro preparado para ${nombre} (${correoRegistrado}).`;

      formulario.reset();
      validarCorreos();
    });
  </script>
</body>
</html>
```


El método `formulario.elements.namedItem("correo")` obtiene el campo por su atributo `name`. Los listeners de `input` ejecutan la validación cada vez que cambia cualquiera de las dos direcciones. `setCustomValidity()` recibe una cadena vacía cuando coinciden; cualquier texto no vacío mantiene el campo en estado inválido y evita el envío normal.


El manejador de `submit` solo se ejecuta después de superar la validación interactiva del navegador. `preventDefault()` cancela la navegación, y `FormData` recoge los controles con nombre. El campo de confirmación se usa únicamente para validar y no tiene `name`, por lo que no forma parte de los datos preparados.


La confirmación se asigna con `textContent` y se anuncia mediante `aria-live`. En una aplicación real, esos datos se enviarían a un servidor, donde deberían validarse de nuevo antes de almacenarlos o utilizarlos.

