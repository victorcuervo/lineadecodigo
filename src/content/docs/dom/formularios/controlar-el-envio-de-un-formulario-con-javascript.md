---
title: "Controlar el envío de un formulario con JavaScript"
description: "Uso de código fuente para poder controlar el envío de un formulario con JavaScript y solo enviarlo cuando realmente queramos."
date: 2009-04-24
updatedDate: 2026-01-12
tags: ["form","onsubmit"]
slug: dom/formularios/controlar-el-envio-de-un-formulario-con-javascript
author: victor_cuervo
type: doc
id: 1b2341d1-0eed-421c-b673-4265a5a9796d
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/formularios/controlar-envio-formulario.html
---

Cuando creamos un formulario en [HTML](https://www.manualweb.net/html/) es posible que haya ciertas ocasiones en las cuales no nos interese que este no se envíe hasta que los datos cumplan unos requisitos o condiciones mínimas. Para ello podemos controlar el envío de un formulario con [JavaScript](https://www.manualweb.net/javascript/).


## Crear el formulario


Lo primero que haremos será crear el formulario:


```html
<form action="enviar.php" method="post" onsubmit="return enviar();">
  <input type="text" name="comando" id="comando" />
  <input type="submit" value="Enviar" />
</form>
```


## Interceptar el evento onsubmit


Vemos que este formulario se enviará a `enviar.php` cuando pulsemos sobre el botón. Para interceptar el envío del formulario tenemos que controlar el evento `onsubmit` del formulario. Al evento `onsubmit` le asignaremos una función [JavaScript](https://www.manualweb.net/javascript/) que será la encargada de controlar el envío.


En nuestro código estamos asignándole la función `enviar()`. Es muy importante poner el `return` delante del nombre de la función, ya que dependiendo del valor que retorne la función se enviará o no el formulario.

- Si la función retorna **true**, se envía el formulario
- En caso de que se retorne **false**, el formulario no será enviado

## Implementar la función de validación


Lo que queramos controlar dentro del formulario queda a nuestra elección. En nuestro caso estamos controlando que el valor introducido en el campo `comando` sea igual a "enviar". De esta forma la función `enviar()` quedará de la siguiente forma:


```javascript
function enviar() {
  var comando = document.getElementById('comando').value;
  
  if (comando === 'enviar') {
    return true; // Permite el envío del formulario
  } else {
    alert('Debes escribir "enviar" en el campo');
    return false; // Bloquea el envío del formulario
  }
}
```

