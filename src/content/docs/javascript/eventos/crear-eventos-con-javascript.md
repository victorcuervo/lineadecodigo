---
title: "Crear eventos con JavaScript"
description: "Uso de un listener para poder crear eventos con JavaScript."
date: 2007-09-29
updatedDate: 2026-01-12
tags: ["onclick","getelementbyid","getelementsbytagname","addeventlistener","attachevent","innerhtml"]
slug: javascript/eventos/crear-eventos-con-javascript
author: victor_cuervo
type: doc
id: 1eb8ccc0-0de2-44c5-8a6b-e50c5d442639
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/eventos/add-eventos-javascript.html
---

## Gestión de Eventos en HTML


Cuando estamos diseñando nuestra página [HTML](https://www.manualweb.net/html/) podemos apoyarnos en el modelo de eventos para poder gestionar la interacción con el usuario. Controlar cuando pulse sobre un sitio, cuando pase por un elemento, al entrar/salir sobre zonas,... Así tendremos líneas de código como la siguiente:


```html
<a href="#" onclick="mifuncion()">Pulsa aquí</a>
```


En ella estamos diciendo que cuando haya un click, evento `onClick`, se ejecute el método "mifuncion". De esta forma podemos codificar muchos más eventos `onblur`, `onchange`, `onfocus`, `onkeydown`,... 


## Crear Eventos con JavaScript


Pero mediante [JavaScript](https://www.manualweb.net/javascript/), podemos modificar "en caliente" la gestión de eventos de los elementos de la página y así crear un evento y asociarselo a un elemento de la página.


En nuestro caso vamos a tener una lista de textos. Lo que vamos a hacer es asociarles un evento `onClick`. De tal manera, que cuando se produzca dicho evento, mostraran el contenido del texto.


## Crear la Lista de Elementos


Lo primero es crear la lista de elementos:


```html
<ul id="frases">
      <li>Avila</li>
      <li>Salamanca</li>
      <li>Zamora</li>
      <li>León</li>
      <li>Soria</li>
      <li>Valladolid</li>
      <li>Burgos</li>
      <li>Segovia</li>                  
      <li>Palencia</li>      
</ul>
```


## Añadir Eventos Dinámicamente


Ahora, ejecutaremos el código [JavaScript](https://www.manualweb.net/javascript/) para añadir un evento a cada uno de los elementos. En dicho código diferenciaremos dos partes.


La primera lo que hace es recuperar una referencia a la lista y recorrer todos los elementos que la contienen. Por cada elemento llamaremos al método `crearEvento`, el cual veremos en detalle más adelante.


Para poder acceder a la lista nos apoyaremos en los métodos `getElementById`, que nos posiciona en un elemento y en `getElementsByTagName`, que nos devuelve una lista de elementos dada una etiqueta. En nuestro caso [la etiqueta li](https://www.w3api.com/HTML/li/).


El código [JavaScript](https://www.manualweb.net/javascript/) será el siguiente:


```javascript
var lista = document.getElementById("frases");
var elementos = lista.getElementsByTagName("li");

for (var x=0; x < elementos.length; x++){
    crearEvento(elementos[x], "click", function(){
        alert(this.innerHTML);
    });
}
```


## La Función crearEvento


Como vemos por cada elemento llamamos a la función `crearEvento`, pasándole el elemento, el evento a crear y la función a asociarle.


Para crear un evento sobre un elemento tenemos el método `addEventListener`. Esta es la función utilizada por el DOM. Pero para el caso del Internet Explorer deberemos de utilizar el método `attachEvent`.


Ambos métodos los ejecutaremos sobre el elemento. Hay que indicar que para `addEventListener` el nombre del evento será sin anteponerle el "on", mientras que para `attachEvent` si que le antepondremos el "on".


De esta forma, la función [JavaScript](https://www.manualweb.net/javascript/) para crear un evento sobre un método quedará de la siguiente forma:


```javascript
function crearEvento(elemento, evento, funcion) {
    if (elemento.addEventListener) {
        elemento.addEventListener(evento, funcion, false);
    } else if (elemento.attachEvent) {
        elemento.attachEvent("on" + evento, funcion);
    }
}
```

