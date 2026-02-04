---
title: "Modificar los enlaces con JavaScript"
description: "Código fuente que nos enseña cómo podemos modificar los enlaces con Javascript."
date: 2008-02-29
updatedDate: 2026-01-12
tags: ["innerhtml","href","target","enlaces","formulario","input","getelementbyid"]
slug: dom/manipulacion/modificar-los-enlaces-con-javascript
type: doc
topic: dom
id: 5a9925b9-29dc-4c58-8615-f78c04e2dfb0
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/pagina/modificar-enlace.html
---

Los enlaces también están dentro del [modelo DOM de una página](https://www.w3api.com/DOM/). Es por ello que mediante [lenguaje Javascript](https://www.manualweb.net/javascript/) podremos modificar sus atributos: el contenido, el target asignado, así como la URL a la que enlazan.


Mediante este ejemplo vamos a componer un formulario que nos permita crearnos nuestro enlace personalizado. De tal manera que elijamos el texto del enlace, la URL a la cual va a acceder, si se abrirá en una nueva ventana, en un frame o en la misma,... es decir, rellenaremos datos para poder modificar todos los valores de los atributos del enlace.


## Crear el formulario


Lo primero será crear nuestro formulario:


```html
<form action="#">
  <label for="enlace">URL: </label>
  <input id="enlace" type="text"></input>
  
  <label for="texto">Texto: </label>
  <input id="texto" type="text"></input>
  
  <label for="destino">Target: </label>
  <select id="destino">
    <option value="_blank">Nueva Ventana</option>
    <option value="_self">Misma ventana</option>
    <option value="_parent">Ventana Padre</option>
    <option value="_top">Top</option>
  </select>
</form>
```


Como cosa particular vemos que las opciones del destino del enlace se las presentamos mediante un combo. Las opciones son:

- **_blank**, para abrir una nueva ventana.
- **_self**, para abrirlo en la misma ventana.
- **_parent**, abre en la ventana padre.
- **_top**, abre eliminando todos los frames que pueda haber en la ventana.

## Enviar el formulario


Cuando se envíe el formulario obtenemos todos los valores para pasárselos a un método [lenguaje Javascript](https://www.manualweb.net/javascript/) que llamaremos modificar:


```html
<input type="button" value="Modificar Enlace" onClick="modificar(enlace.value,texto.value,destino.value);">
```


Además tendremos un enlace con valores por defecto dentro de nuestra página. Este será el enlace que vayamos modificando.


```html
<a id="mienlace" href="[https://lineadecodigo.com">Línea](https://lineadecodigo.com/%22%3ELínea) de Código</a>
```


## Codificar el método JavaScript


Ahora pasamos a codificar el método [lenguaje Javascript](https://www.manualweb.net/javascript/). Lo primero que tenemos que hacer es acceder al enlace. Para ello nos apoyamos en [el método getElementById](https://www.w3api.com/DOM/.getElementById()), al cual le pasamos el [ID](https://www.w3api.com/HTML/id/) que le hayamos dado al enlace de nuestra página.


Los atributos que podemos modificar del elemento son los siguientes:

- **innerHTML**, nos permite modificar el texto del enlace.
- **href**, modifica la URL de destino del enlace.
- **target**, representa el destino del enlace.

El código nos quedaría de la siguiente forma:


```javascript
function modificar(url, texto, destino) {
  var enlace = document.getElementById('mienlace');
  enlace.innerHTML = texto;
  enlace.href = url;
  [enlace.target](http://enlace.target/) = destino;
}
```

