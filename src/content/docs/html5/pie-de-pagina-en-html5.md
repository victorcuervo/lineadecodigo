---
title: Pie de página en HTML5
description: "El elemento footer nos permite crear un pie de página en HTML5 e incluir contenido como el copyright de la página o enlaces a otras páginas."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Siguiendo con el [uso de elementos semánticos de HTML5](http://lineadecodigo.com/tag/html5-semantica/) vamos a ver cómo podemos crear un pie de página en [HTML5](http://www.manualweb.net/html5/) mediante el elemento [`footer`](http://w3api.com/HTML/footer/). El elemento semántico [`footer`](http://w3api.com/HTML/footer/) nos permite agrupar los elementos que representen el pie de la página.


Dentro del contenido del pie de página tenemos el copyright de las páginas, enlaces a páginas administrativas o tipo "acerca de" del sitio, los últimos artículos publicados,... todo depende de lo grande o pequeño que sea nuestro pie de página.


### Conocer el elemento footer para poder crear un pie de página en HTML5


Para incluir el pie de página con el elemento [`footer`](http://w3api.com/HTML/footer/) simplemente añadiremos el elemento antes del cierre del cuerpo de la página `body`.


```html
<footer>
...
</footer>
```


El elemento [`footer`](http://w3api.com/HTML/footer/) al ser un elemento semántico, no tiene ninguna representación visual a la hora de renderizar el documento. A no ser que [mediante CSS le demos algún tipo de visualización](https://www.manualweb.net/css/), o bien insertemos dentro de él diferente contenido que tenga su propia visualización.


En nuestro caso vamos a crear un pie de página en [HTML5](http://www.manualweb.net/html5/) que contenga el copyright de la página y un conjunto de enlaces dentro de una lista.


```html
<footer>
  <p>&copy; 2018 Línea de Código</p>
  <ul>
    <li><a href="/acerca-de">Acerca de</a></li>
    <li><a href="/conectar">Conectar</a></li>
    <li><a href="/rrss">Redes Sociales</a></li>
  </ul>
</footer>
```


Hay que notar que hemos utilizado [la entidad](http://www.manualweb.net/html/entidades-html/) `&copy;` para poder crear el símbolo del copyright y por otro lado [hemos utilizado una lista desordenada](https://www.manualweb.net/html/listas-html/) mediante el elemento [`ul`](http://w3api.com/HTML/ul/).


De esta forma tan sencilla y mediante el elemento [`footer`](http://w3api.com/HTML/footer/) hemos creado nuestro pie de página en [HTML5](http://www.manualweb.net/html5/).

