---
title: Navegación SPA por Hash
description: "Cómo controlar una navegación SPA por hash suscribiéndonos al evento onhashchange y gestionando su comportamiento asociado."
lastUpdated: 2023-03-19
slug: /html5/navegacion-spa-por-hash/
author: victor_cuervo
---

Cuando realizamos aplicaciones SPA (Single Page Applications) una de las cosas que necesitaremos será poder controlar la navegación entre los diferentes elementos, para ello se utilizan modelos de navegación SPA por hash. Es decir, asociaremos a cada uno de los elementos visuales que vayamos generando dentro de nuestra SPA un elemento hash que lo identifique.


> Un hash no deja de ser un identificador de texto al que se le antepone una almohadilla.


El asignar un hash de navegación a cada una de los elementos de nuestra SPA nos genera beneficios indirectos como son el poder navegar directamente a un punto concreto de nuestra SPA, el poder guardar en un bookmark el puntero de la navegación dentro del browser o el mejorar el SEO de nuestra página de cara a los buscadores web.


Así, si nuestra página tiene 3 elementos visuales que vamos cargando dentro de nuestra aplicación SPA, lo que haremos será crear 3 hash diferentes. Quedando nuestra página con tres URLs.

- pagina.html#p1
- pagina.html#p2
- pagina.html#p3

Pero, ¿qué tenemos que hacer para poder controlar la navegación SPA por hash? Lo primero será el poder modificar la URL cada vez que mostremos un elemento, para poder incluir el hash dentro de dicha URL. Para ello utilizaremos el objeto [`Location`](https://w3api.com/HTMLDOM/Location/) y su propiedad [`.hash`](https://w3api.com/HTMLDOM/Location/hash/).


La propiedad [`.hash`](https://w3api.com/HTMLDOM/Location/hash/) nos permite añadir un nuevo hash a la URL de nuestro documento. Para ello el código [Javascript](https://www.manualweb.net/javascript/) que codificaremos será el siguiente:


```javascript
function nuevoHash(nombre) {
	location.hash = "#"+nombre;
}
```


Así que cuando mostremos elementos diferentes llamaremos a esta función `nuevoHash` pasándole el identificador.


Por ejemplo, si queremos simular elementos visuales y su hash asociado mediante una lista lo codificaremos de la siguiente forma:


```html
<button onclick="nuevoHash('P1');">Página 1</button> 
<button onclick="nuevoHash('P2');">Página 2</button>
<button onclick="nuevoHash('P3');">Página 3</button>
```


Lo siguiente será codificar nuestro documento para que atienda a un cambio de hash. Es decir, si se cambia el hash de la página deberemos de desencadenar los cambios necesarios para visualizar los elementos asociados a ese hash.


Es por ello que deberemos de controlar el evento [`onhashchange`](https://w3api.com/HTML/body/onhashchange/), el cual nos avisa de que se ha producido un cambio en el hash de la URL. Podemos suscribirnos a este evento mediante código [Javascript](https://www.manualweb.net/javascript/) o registrándolo directamente en el elemento [`body`](https://w3api.com/HTML/body/) de nuestro documento. 


En este caso el código sería el siguiente:


```html
<body onhashchange="cambioHash();">
```


Ya solo nos quedará codificar la función `cambioHash()` para poder gestionar este comportamiento. Es importante saber que el atributo [`Location.hash`](https://w3api.com/HTMLDOM/Location/hash/) contendrá el nuevo valor del hash asociado a la página.


```html
<div id="mensaje"></div>

<script>
	function cambioHash(){
    document.getElementById("mensaje").innerHTML = "Navegación al hash '" + location.hash + "'";
	}
</script>
```


Vemos, que para nuestro ejemplo volcamos el valor de nuestro hash a un campo de texto para que se pueda ver en modo prueba.


Es importante saber que este evento también se disparará si el usuario modifica a mano el valor del hash directamente en la URL del navegador.


Con esto ya sabemos como podemos controlar una navegación SPA por hash gestionando el evento [`onhashchange`](https://w3api.com/HTML/body/onhashchange/).

