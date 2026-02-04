---
title: "Ver el código fuente"
description: "Cómo utilizar Javascript para poder ver el código fuente de una página web introducida en un formulario."
date: 2007-02-02
updatedDate: 2026-01-12
tags: ["window","location","regexp"]
slug: javascript/navegador/ver-el-codigo-fuente
type: doc
topic: javascript
id: 62c119ed-23b2-4ab4-b0f8-96e003a5cbce
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/pagina/ver-codigo-fuente.html
---

El objetivo de este ejercicio es el de mostrar el código fuente de una página. Está claro que siempre lo podremos obtener mediante el menú de nuestro navegador o mediante el botón derecho (si este está disponible). Pero nosotros vamos a hacer que desde nuestra página web podamos mostrar los códigos fuente de otras páginas.


## Anteponer view-source a la URL


Para poder hacer esto simplemente nos servirá con anteponer la palabra **view-source** a la URL. Por ejemplo el código de [Línea de Código](http://lineadecodigo.com/) sería:


```text
view-source:[http://lineadecodigo.com](http://lineadecodigo.com/)
```


## Crear el formulario HTML


Nosotros lo que haremos será obtener la URL mediante un campo de texto de un formulario [HTML](https://www.manualweb.net/html/) y concatenar con la anterior cadena. Así que lo primero será el generar el formulario:


```html
<form>
  <input type="text" id="url" name="url">
  <input type="button" value="Ver Código" onclick="verCodigoFuente(url.value)">
</form>
```


## Función JavaScript verCodigoFuente


Hemos utilizado el evento [JavaScript](https://www.manualweb.net/javascript/) **onClick** de un botón para ejecutar el método que hará que veamos el código fuente de la página. En nuestro caso lo hemos llamado **verCodigoFuente**. Este método recibe el valor del campo URL del formulario.


Ahora veamos la función [JavaScript](https://www.manualweb.net/javascript/) verCodigoFuente(URL). Lo primero que hará esta función es ver si llega algún dato. Esto se realizará mediante un simple if.


```javascript
if (URL == "") {
  alert("Debes de introducir una URL");
}
```


## Validar la URL con expresiones regulares


Deberemos de tener cuidado de que el usuario escriba una URL que sea válida. Para ello, al menos vamos a comprobar que la cadena que nos proporcione el usuario empiece por **http://**. Esto lo haremos mediante expresiones regulares. En este caso la expresión regular que identifica al protocolo http en su forma http:// sería la siguiente:


```javascript
var regexp = /^http:\/\//;
```


La expresión regular se validará mediante el método **.test()**. Veamos como sería:


```javascript
if (!regexp.test(URL)) {
  alert("La URL debe empezar por http://");
}
```


## Mostrar el código fuente


Solo nos quedará invocar a la URL con el "view-source" por delante. Para ello accederemos directamente al objeto window y a su propiedad location.href, la cual representa la barra de navegación.


```javascript
window.location.href = "view-source:" + URL;
```

