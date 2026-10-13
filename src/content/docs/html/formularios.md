---
title: "Formularios"
description: "Crea formularios HTML con campos y etiquetas accesibles. Comprende action, GET y POST, la serialización de datos y la validación con un ejemplo práctico."
date: 2026-01-18
updatedDate: 2026-10-13
tags: ["form","input","label","validation"]
slug: html/formularios
type: category
topic: html
id: 2eca9dfb-adca-800f-964b-dbe8e97b1a75
author: victor_cuervo
---

## ¿Qué son los Formularios HTML?


Los **formularios HTML** son estructuras de una página web que permiten recoger datos mediante controles interactivos y enviarlos a un destino. Se definen con el elemento `<form>` y contienen campos como `<input>`, `<textarea>` o `<select>`, además de botones para iniciar el envío.


En [HTML](https://lineadecodigo.com/html/), cada control tiene una función: introducir texto, elegir una opción, marcar una casilla o seleccionar un archivo. Sus atributos configuran el comportamiento y las restricciones del campo. Por ejemplo, `type="email"` identifica una entrada de correo y `required` exige que se complete.


Al enviar el formulario, el navegador construye los datos a partir de los controles que participan en el envío. Normalmente los representa como pares nombre–valor: `nombre=Ana`. La **serialización** es el proceso de convertir esos datos en un formato que pueda transmitirse mediante una petición HTTP, el protocolo de comunicación entre el navegador y el servidor.


[HTML](https://lineaedecodigo.com/html/) proporciona la interfaz y el mecanismo de envío, pero no guarda por sí solo la información ni ejecuta una búsqueda. Para procesar los datos, el destino debe disponer de lógica de servidor.


## Características de Formularios HTML

- **Destino con** **`action`****.** Este atributo indica la URL que recibe los datos, por ejemplo, `/buscar` o `/contacto`. Si se omite, el envío se dirige a la URL del documento actual. La URL puede ser relativa o absoluta; debe apuntar a un recurso que sepa procesar la petición.
- **Método con** **`method`****.** `get`, el valor predeterminado, añade los datos a la URL como parámetros de consulta. Es apropiado para búsquedas y filtros que se pueden compartir mediante un enlace. `post` transmite los datos en el cuerpo de la petición y suele utilizarse para crear registros o enviar mensajes. POST no cifra la información: para protegerla durante la transmisión se necesita HTTPS. No envíes contraseñas ni datos sensibles mediante GET.
- **Identificación con** **`name`** **e** **`id`****.** `name` establece la clave con la que se envía el valor del campo. `id` identifica el elemento dentro del documento y permite asociarlo a una etiqueta. No son intercambiables: un campo con `id`, pero sin `name`, normalmente no aporta un par nombre–valor al envío.
- **Controles adecuados al dato.** `<input>` ofrece tipos como `text`, `search`, `email`, `number`, `date`, `checkbox`, `radio` y `file`. `<textarea>` admite texto multilínea; `<select>` contiene opciones `<option>`, cuyo atributo `value` define el dato enviado. Los botones de opción de un mismo grupo comparten `name` y tienen valores diferentes.
- **Etiquetado y agrupación.** Un `<label>` con `for` igual al `id` del control proporciona su nombre accesible y permite activarlo al pulsar la etiqueta. `placeholder` solo ofrece una pista dentro del campo; no sustituye a la etiqueta. `<fieldset>` y `<legend>` agrupan controles relacionados y describen el conjunto.
- **Validación nativa.** Atributos como `required`, `minlength`, `maxlength`, `min`, `max` y `step` establecen restricciones según el tipo de campo. El navegador normalmente bloquea el envío si no se cumplen. La validación del cliente mejora la experiencia, pero se puede eludir: el servidor debe validar también todos los datos recibidos.
- **Reglas de participación en el envío.** Los controles `disabled` se omiten; los campos compatibles con `readonly` siguen enviándose. Las casillas y los botones de opción solo se incluyen cuando están marcados. Una casilla sin `value` explícito envía `on` al marcarse; conviene definir un valor significativo. Si hay varios controles participantes con el mismo `name`, pueden enviarse varias entradas con esa clave.
- **Codificación con** **`enctype`****.** En los envíos POST, el formato predeterminado es `application/x-www-form-urlencoded`. Para subir archivos se utiliza `method="post"` junto con `enctype="multipart/form-data"` y un campo `type="file"`. El atributo `accept` orienta la selección de archivos, pero no sustituye a la comprobación de su tipo y contenido en el servidor.
- **Botones y estructura.** Define `type="submit"` para enviar y `type="button"` para un botón que no deba enviar el formulario. Un `<button>` sin tipo dentro de un formulario normalmente actúa como botón de envío. No anides elementos `<form>`; cada formulario debe tener una estructura independiente.

## ¿Por qué aprender sobre Formularios HTML?


Conocer estos elementos permite construir buscadores, formularios de contacto, registros, filtros y pantallas de edición sin tener que recrear los controles que ya ofrece el navegador. Los tipos de entrada apropiados también pueden facilitar el uso en móviles, por ejemplo, mostrando un teclado adecuado para introducir un correo.


Entender `name`, `method` y `action` ayuda a resolver fallos concretos: campos que no llegan al servidor, peticiones que se envían a una URL incorrecta o filtros que no quedan reflejados en la dirección. También permite acordar con quien desarrolla el servidor qué claves y valores debe recibir.


Las etiquetas y la agrupación semántica hacen que la interfaz sea más comprensible para usuarios de lectores de pantalla. La validación nativa permite detectar errores antes del envío, sin confundir esa ayuda con las comprobaciones de seguridad que corresponden al servidor.


Los formularios conectan así la estructura del documento con las peticiones HTTP. Dominar su comportamiento nativo permite distinguir entre lo que ya resuelve HTML y lo que requiere procesamiento adicional.


## Ejemplo de Formularios HTML


Este buscador recoge una consulta, una categoría y una preferencia. Guarda el código como `buscador.html` y ábrelo en el navegador. No necesita estilos, scripts ni librerías para mostrar los controles y comprobar la validación.


```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Buscador de recursos</title>
</head>
<body>
  <h1>Buscar recursos</h1>

  <form method="get">
    <p>
      <label for="consulta">Términos de búsqueda</label>
      <input
        type="search"
        id="consulta"
        name="consulta"
        minlength="2"
        maxlength="100"
        required
      >
    </p>

    <p>
      <label for="categoria">Categoría</label>
      <select id="categoria" name="categoria">
        <option value="todos">Todos los recursos</option>
        <option value="guias">Guías</option>
        <option value="ejemplos">Ejemplos</option>
      </select>
    </p>

    <fieldset>
      <legend>Disponibilidad</legend>
      <p>
        <input
          type="checkbox"
          id="disponible"
          name="disponible"
          value="1"
        >
        <label for="disponible">Solo recursos disponibles</label>
      </p>
    </fieldset>

    <p><button type="submit">Buscar</button></p>
  </form>
</body>
</html>
```


Al pulsar Buscar, el navegador comprueba las restricciones y, si los datos son válidos, envía el formulario mediante GET. Como no se ha definido `action`, utiliza la dirección del propio documento. El archivo estático no filtra recursos: permite observar la interfaz y los parámetros de envío; una búsqueda real necesita un servidor que los procese.

- `label`, `for` e `id` vinculan cada descripción con su control. Las claves de envío las definen los atributos `name`.
- `required` impide enviar una consulta vacía. `minlength` establece una longitud mínima de dos caracteres para la entrada del usuario; `maxlength` limita su longitud a cien.
- El selector envía el `value` de la opción elegida, no necesariamente el texto visible. Al elegir Guías se envía `categoria=guias`.
- La casilla marcada aporta `disponible=1`. Si se deja sin marcar, esa clave no se envía; el servidor debe interpretar su ausencia según las reglas de la aplicación.

Si escribes «formularios HTML», eliges Guías y marcas la casilla, la dirección incluirá una consulta equivalente a `?consulta=formularios+HTML&categoria=guias&disponible=1`. En esta codificación, el espacio se representa mediante `+` y `&` separa los pares nombre–valor. El navegador codifica también los caracteres que lo necesitan.


Para convertirlo en un buscador del sitio, configura `action="/buscar"` cuando exista una ruta de servidor que acepte GET y procese esas tres claves. Cambiar solo el atributo no implementa la búsqueda.

