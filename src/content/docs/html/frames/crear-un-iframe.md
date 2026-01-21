---
title: "Crear un iframe"
description: "Aprende a crear un iframe en HTML y optimiza la carga de contenido externo en tu página web para mejorar la experiencia del usuario y la accesibilidad."
date: 2022-05-05
updatedDate: 2026-01-21
tags: ["iframe","frame","width","height"]
slug: html/frames/crear-un-iframe
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_html/blob/master/frames/crear-iframe.html
topic: html

---

Para poder crear un iframe en [HTML](https://www.manualweb.net/html), lo primero que tenemos que saber es **¿qué es un iframe?**


En este caso nos tenemos que remontar un poco en el tiempo y entender que [en anteriores versiones del lenguaje HTML](https://www.manualweb.net/html/historia-html-estandar/) apareció un elemento que era el `frame`, el cual nos permitía crear una página en base a huecos en los cuales podíamos cargar otros contenidos. Es decir, nuestra página tenía muchos frames con contenidos diferentes, de diferentes sitios o del mismo.


Lo que se buscaba era un inicio de poder componer páginas en base a elementos más pequeños. Si bien esta técnica no era muy correcta y sobre todo nada accesible. Además la página tenía que estar compuesta única y exclusivamente de los frames. Es decir, no podíamos tener una página y alguna parte de ella con contenido adicional.


Es por ello que aparece el elemento [`iframe`](http://www.w3api.com/HTML/iframe/) para poder solucionar esa necesidad, es decir, podíamos crear una página normal y en una parte de ella incrustar un contenido de otro sitio mediante un iframe.


Y aunque ha existido mucha conversación sobre si dejar o eliminar el elemento [`iframe`](http://www.w3api.com/HTML/iframe/) la verdad es que este sigue estando dentro del estándar [HTML](https://www.manualweb.net/html). Puede que en algún momento este pase a estar obsoleto y que tecnologías como el Shadow DOM y los WebComponents acaben con su existencia. Pero de momento disponemos de él, así que vamos a ver cómo podemos crear un iframe en [HTML](https://www.manualweb.net/html).


## Sintaxis básica del iframe


Vemos que es tan sencillo como añadir el elemento [`iframe`](http://www.w3api.com/HTML/iframe/) en nuestra página, con su etiqueta de inicio y su etiqueta de cierre:


```html
<iframe></iframe>
```


El contenido que va a cargar el [`iframe`](http://www.w3api.com/HTML/iframe/) lo podemos indicar mediante el atributo [`src`](http://www.w3api.com/HTML/iframe/src/):


```html
<iframe src="[https://lineadecodigo.com"></iframe>](https://lineadecodigo.com/%22%3E%3C/iframe%3E)
```


## Controlar el tamaño del iframe


Además podemos darle un tamaño para controlar lo que ocupa dentro de nuestra página. Para ello tenemos los típicos atributos [`width`](http://www.w3api.com/HTML/iframe/width/) y [`height`](http://www.w3api.com/HTML/iframe/height/):


```html
<iframe src="[https://lineadecodigo.com](https://lineadecodigo.com/)" width="800" height="600"></iframe>
```


## Optimizar la carga del iframe


Otras cosas que podemos hacer es indicar que no afecte la carga del contenido, ya que es externo y no sabemos lo que puede tardar, a la carga del contenido principal. En este caso tenemos el atributo [`loading`](http://www.w3api.com/HTML/iframe/loading/) al cual le daremos un valor de `"lazy"`:


```html
<iframe src="[https://lineadecodigo.com](https://lineadecodigo.com/)" width="800" height="600" loading="lazy"></iframe>
```


Y sus capacidades no solo quedan aquí, así que te animamos a que consultes [todas las capacidades y atributos que tiene elemento iframe en W3Api](http://www.w3api.com/HTML/iframe/).


Espero que hayas aprendido un poco más sobre qué son los iframe y sobre cómo podemos crear un iframe en [HTML](https://www.manualweb.net/html).

