---
title: "Eliminar elementos de una página con JavaScript"
description: "Artículo que explica el uso de métodos del DOM para poder eliminar elementos de una página con JavaScript."
date: 2007-09-26
updatedDate: 2026-01-11
tags: ["getelementbyid","parentnode","removechild"]
slug: dom/documento/eliminar-elementos-de-una-pagina-con-javascript
author: victor_cuervo
type: doc
topic: dom
id: 19ad0b9c-c331-40ef-9aad-429a672a94ec
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/dom/eliminar-elementos-de-una-pagina.html
---

Una de las cosas que podemos hacer vía [JavaScript](https://www.manualweb.net/javascript/) es modificar el DOM de elementos de una página [HTML](https://www.manualweb.net/html/). Bien insertando, actualizándolos o eliminándolos.


En este caso lo que vamos a realizar es **eliminar un elemento de la página** vía ID. En concreto eliminaremos imágenes.


## Insertar las imágenes


Es por ello que lo primero que vamos a realizar es insertar un conjunto de imágenes en la página. Importante que asociemos un `id` a cada una de las imágenes.


```html
<img id="oracle" src="oracle.jpg" alt="Logo Oracle"/>
<img id="java" src="java.jpg" alt="Logo Java"/>
<img id="sun" src="sun.jpg" alt="Logo Sun"/>
```


## Crear el formulario


Lo siguiente será insertar un formulario. En él, pediremos al usuario el ID que quiere eliminar. Para facilitar hemos dado un `id` que corresponda con el nombre de la imagen que corresponde, facilitando la vida al usuario.


Al pulsar el botón, mediante el evento `onClick`, llamaremos a la función JavaScript `eliminarElemento(id)` y le pasaremos el texto que haya introducido el usuario.


```html
<form action="">
  <label for="elemento">Nombre del logo:</label>
  <input id="elemento" type="text"></input>
  <input onclick="eliminarElemento(document.getElementById('elemento').value);" 
         type="button" 
         value="Eliminar Elemento">
  </input>
</form>
```


## Función para eliminar elementos


Lo realmente importante es lo que va dentro de la función. Los pasos JavaScript para eliminar el ID serán los siguientes:

- Obtener el elemento al que representa el ID mediante el método `.getElementById()`
- Validar si el elemento existe, ya que si no existe habrá que avisar al usuario
- Obtener el nodo padre del elemento utilizando el atributo `.parentNode`
- Desde el padre del elemento, invocar el método `removeChild(elemento)` que eliminará el elemento

El código JavaScript será el siguiente:


```javascript
function eliminarElemento(id) {
  var elemento = document.getElementById(id);
  
  if (elemento) {
    var padre = elemento.parentNode;
    padre.removeChild(elemento);
  } else {
    alert("El elemento " + id + " no existe");
  }
}
```

