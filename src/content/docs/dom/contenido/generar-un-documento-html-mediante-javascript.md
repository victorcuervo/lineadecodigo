---
title: "Generar un documento HTML mediante JavaScript"
description: "Pasos que tenemos que dar para poder generar un documento HTML mediante JavaScript."
date: 2007-06-28
updatedDate: 2026-01-12
tags: ["document","write","open"]
slug: dom/contenido/generar-un-documento-html-mediante-javascript
author: victor_cuervo
type: doc
id: 92b73820-7ca9-4bb5-aa65-c83b76b8429a
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/dom/crear-documento-html-dinamicamente.html
---

Aunque parezca raro, desde código [JavaScript](https://www.manualweb.net/javascript/) podemos generar dinámicamente una página [HTML](https://www.manualweb.net/html/). Esto nos dará un gran potencial a la hora de devolver respuestas al usuario. Típicamente le devolveremos un alert o crearemos un nuevo elemento dentro de la página con el resultado de la respuesta. Pero, por qué no, la respuesta puede ser una nueva página [HTML](https://www.manualweb.net/html/), creada dinámicamente.


## Crear el formulario


Para poder hacer esto lo primero que vamos a hacer es crear un formulario donde vamos a recoger información del usuario. Será esta información la que utilicemos para crear el documento. Vamos a pedirle un nombre y una edad:


```html
<form name="formulario">
  Nombre: <input type="text" id="nombre" name="nombre"/>
  Edad: <input type="text" id="edad" name="edad"/>
  <input type="button" value="Enviar" onclick="crearDocumento(document.formulario.nombre.value,document.formulario.edad.value);">
</form>
```


Como podemos ver en el código [JavaScript](https://www.manualweb.net/javascript/), estamos llamando a la **función crearDocumento** con los valores del formulario. El contenido de dicha función será el objetivo de este documento.


## Abrir el documento


Para crear un documento lo primero que tenemos que hacer es abrirlo. Para ello invocaremos al método open del objeto document. Dicho método recibe como parámetros dos datos. El primero es el mime-type del documento y el segundo sirve para indicar si queremos heredar la historia del documento desde el que se está generando. Así, abriremos el documento de la siguiente forma:


```javascript
[document.open](http://document.open/)("text/html","replace");
```


Al abrir un documento [HTML](https://www.manualweb.net/html/), el mime-type que utilizamos es "text/html".


## Crear el contenido


Lo siguiente será crear el contenido del nuevo documento. Al ser un documento [HTML](https://www.manualweb.net/html/), la estructura será la de cualquier documento [HTML](https://www.manualweb.net/html/). Al menos:


```html
<html>
<body>

Contenido

</body>
</html>
```


Así, en [JavaScript](https://www.manualweb.net/javascript/) lo definiremos de la siguiente forma. Sobre una simple variable:


```javascript
var texto = "<html><body><h1>Hola " + nombre + "</h1>";
texto = texto + "Tu edad es de " + edad + " años.";
texto = texto + "</body></html>";
```


## Escribir sobre el documento


Con el documento abierto y el texto a volcar definido, lo siguiente será el escribir sobre el documento. Esto lo hacemos mediante el [método .write(texto)](https://www.w3api.com/DOM/.write()). Sobre el [objeto document](https://www.w3api.com/DOM/).


```javascript
document.write(texto);
```


## Cerrar el documento


Solo nos quedará la ultima cosa, pero no por ello menos importante, que será la de cerrar el documento.


```javascript
document.close();
```

