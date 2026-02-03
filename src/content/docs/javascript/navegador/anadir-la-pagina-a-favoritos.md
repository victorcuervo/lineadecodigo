---
title: "Añadir la página a favoritos"
description: "Cómo poder añadir la página a favoritos utilizando el lenguaje de programación Javascript."
date: 2007-12-02
updatedDate: 2026-01-13
tags: ["window","javascript","alert","addfavorite"]
slug: javascript/navegador/anadir-la-pagina-a-favoritos
author: victor_cuervo
type: doc
topic: javascript
id: 4a96c768-0701-4537-8409-bae63c37f662
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/pagina/anadir-pagina-a-favoritos.html
---

Posibilitar el añadir la página a favoritos es otro claro ejemplo de código [JavaScript](https://www.manualweb.net/javascript/) que solo funciona en **Internet Explorer**. No vamos a poner en tela de juicio la funcionalidad en cuestión, si bien es cierto que todo código que manipule la estructura del navegador (o agente web) queda fuera, de momento, de los modelos de objetos y por lo tanto de su manipulación mediante [JavaScript](https://www.manualweb.net/javascript/).


La decisión de utilizar esta funcionalidad deberá de ponderarse dependiendo del público objetivo de nuestra página y del navegador que estos usen.


## El objeto window.external


El código [JavaScript](https://www.manualweb.net/javascript/) es muy sencillo, simplemente tendremos que utilizar la función `addFavorite` presente en el objeto `window.external`.


```javascript
window.external.addFavorite(url, titulo);
```


## Parámetros de addFavorite


Esta función recibe dos parámetros:

- El primero es la **URL** que queremos almacenar en los favoritos
- El segundo es el **título** relacionado con dicha URL

Quedándonos la estructura de la siguiente forma:


```javascript
window.external.addFavorite('[http://www.lineadecodigo.com](http://www.lineadecodigo.com/)', 'Línea de Código');
```


## Implementación en un enlace


Ahora solo tenemos que desencadenar la ejecución de este código. Por ejemplo, tras pulsar en un enlace. La [línea de código](http://lineadecodigo.com/) será la siguiente:


```javascript
<a href="javascript:window.external.addFavorite('[http://www.lineadecodigo.com','Línea](http://www.lineadecodigo.com/%27,%27Línea) de Código')">Añadir a Favoritos</a>
```


## Versión con validación


Tenemos la versión con aviso, la cual avisa a los usuarios que no tienen Internet Explorer:


```javascript
<script type="text/javascript">
function agregarFavorito() {
  if (window.external && window.external.addFavorite) {
    window.external.addFavorite('[http://www.lineadecodigo.com](http://www.lineadecodigo.com/)', 'Línea de Código');
  } else {
    alert('Tu navegador no soporta esta funcionalidad. Usa Ctrl+D para agregar a favoritos.');
  }
}
</script>

<a href="javascript:agregarFavorito()">Añadir a Favoritos</a>
```

