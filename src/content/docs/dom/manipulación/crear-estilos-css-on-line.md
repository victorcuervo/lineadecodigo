---
title: "Crear estilos CSS on-line"
description: "Aprende a crear estilos CSS on-line con Javascript y mejora la apariencia de tus páginas web de forma dinámica y efectiva. ¡Descubre cómo hacerlo!"
date: 2008-01-21
updatedDate: 2026-01-18
tags: ["document","style","head","css","estilos","createelement","appendchild","createtextnode","csstext"]
slug: dom/manipulacion/crear-estilos-css-on-line
author: victor_cuervo
type: doc
id: 2c8a9dfb-adca-8149-a20d-cccc498dbcaa
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_javascript/dom/crear-estilos-css-online.html
---

En un procedimiento de diseño estándar lo más normal es que al mismo tiempo que definimos cómo será nuestra página vamos creando nuestras [hojas de estilo CSS](http://www.manualweb.net/css/). De tal manera, cada vez que se realice una petición sobre la página, se descargue la hoja de estilos asociada.


Si bien, manipulando el **DOM** de la página podemos conseguir unos efectos interesantes, ya que podemos **crear estilos CSS on-line**.


## Crear el elemento style


La idea es crear un elemento `style` y dotarle de contenido. Es decir, de los estilos que queremos crear online. Para crear el elemento `style` utilizamos el método `document.createElement`. Además indicaremos que el tipo de elemento es un `"text/css"`:


```javascript
var style = document.createElement("style");
style.type = "text/css";
```


## Añadir contenido CSS


Una vez creado el elemento, deberemos de añadirle el estilo CSS que queremos crear on-line. En este punto tenemos dos formas de hacerlo, dependiendo de los navegadores (como no).


### Internet Explorer


En el caso del **Internet Explorer** al crear un elemento `style`, se dispone del objeto `styleSheet` y de su propiedad `cssText` donde podemos asignar el código CSS.


```javascript
style.styleSheet.cssText = "body { background-color: red; }";
```


> Vemos que el código CSS añadido es muy sencillo, ya que simplemente pone el fondo de la página a rojo. Podemos poner el código CSS que queramos.


### Navegadores estándar


En el caso estándar lo que hacemos es crear un nodo hijo sobre el elemento. Es decir, manipulamos el DOM.


```javascript
style.appendChild(document.createTextNode("body { background-color: red; }"));
```


## Código compatible


El código con la decisión será algo así:


```javascript
if (style.styleSheet) {
  style.styleSheet.cssText = "body { background-color: red; }";
} else {
  style.appendChild(document.createTextNode("body { background-color: red; }"));
}
```


## Insertar el style en el DOM


Ahora solo nos quedará el añadir el elemento `style` al DOM de nuestra página. Y nos preguntaremos, ¿en qué parte del DOM? y la respuesta es ¿dónde ponemos los estilos CSS normalmente? En la cabecera.


Pues añadimos el elemento `style` sobre el elemento `HEAD` del DOM.


```javascript
document.getElementsByTagName("head")[0].appendChild(style);
```


## Código completo


Ahora solo nos quedará lanzar este código en algún punto de la página.


```javascript
var style = document.createElement("style");
style.type = "text/css";

if (style.styleSheet) {
  style.styleSheet.cssText = "body { background-color: red; }";
} else {
  style.appendChild(document.createTextNode("body { background-color: red; }"));
}

document.getElementsByTagName("head")[0].appendChild(style);
```

