---
title: "Quitar el foco de un elemento"
description: "Código Javascript que nos explica de una forma sencilla cómo podemos quitar el foco de un elemento."
date: 2008-01-19
updatedDate: 2026-01-11
tags: ["getelementbyid","onclick","blur"]
slug: dom/gestion-interaccion/quitar-el-foco-de-un-elemento
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/dom/quitar-el-foco-de-un-elemento.html
topic: dom

---

## El evento onBlur


Si revisamos los eventos [Javascript](https://www.manualweb.net/javascript/) que se pueden producir en un navegador comprobamos que existe el evento `onBlur`. El evento `onBlur` se produce cuando se pierde el foco sobre algún elemento. Es decir, si por ejemplo estamos en un campo de un formulario y nos movemos a otro campo, en ese momento, el campo del formulario lanza el evento `onBlur`.


## Capturar el evento y ejecutar código


Una vez que se produce el evento `onBlur`, podemos capturarle y ejecutar el código que necesitemos. En este caso lo que vamos a hacer, vía [Javascript](https://www.manualweb.net/javascript/), es quitar el foco de un elemento.


En este caso lo que vamos a hacer es ejecutar el método `.blur()` sobre el elemento en el que tengamos el foco.


```javascript
elemento.blur();
```


## Acceder al elemento con getElementById


Para acceder al elemento sobre el que queremos quitar el foco podemos utilizar el [método .getElementById()](https://www.w3api.com/DOM/.getElementById()).


```javascript
document.getElementById('idelemento').blur();
```


## Crear la función QuitarFoco


Solo nos quedará el lanzar este código desde algún sitio. Para ello lo ponemos dentro de un **método que se llame QuitarFoco**.


```javascript
function QuitarFoco() {
  document.getElementById('idelemento').blur();
}
```


## Llamar la función desde un botón


Y los lanzaremos desde un botón, en su evento `onClick`:


```html
<button onclick="QuitarFoco()">Quitar Foco</button>
```


Una de las cosas que nos tenemos que asegurarnos es que el campo sobre el que queramos quitar el foco, tiene el cursor sobre el. :-)

