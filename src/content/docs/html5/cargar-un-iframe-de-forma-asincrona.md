---
title: Cargar un iframe de forma asíncrona
description: "Cómo usar el atributo loading y su valor lazy para cargar un iframe de forma asíncrona y optimizar el renderizado de nuestras páginas."
lastUpdated: 2023-03-19
slug: /html5/cargar-un-iframe-de-forma-asincrona/
author: victor_cuervo
---

Una buena pregunta para hacernos es por qué deberíamos de cargar un iframe de forma asíncrona dentro de nuestras páginas. El beneficio principal es que utilizar una carga diferida de los iframe nos permite evitar la descarga de un contenido a no ser que sea estrictamente necesario.


Los iframe los utilizamos para cargar contenido de otras páginas, dónde los casos más generales son cargar un vídeo, información de redes sociales,… es decir, contenido incrustado. Si nuestro usuario no llega a esa zona de visualización del iframe podremos diferir e incluso evitar su carga. De esta forma podemos llegar a evitar la descarga de mucha información y contenido en el navegador de nuestros usuarios. Algo a tener muy en cuenta con las aplicaciones móviles.


Hasta que llegó el estándar [HTML5](https://www.manualweb.net/html5/) teníamos que hacer uso del lenguaje [Javascript](https://www.manualweb.net/javascript/) para poder  conseguir este efecto. Si bien desde [HTML5](https://www.manualweb.net/html5/) disponemos de un atributo que nos ayuda a realizar esta carga en diferido, este es el atributo [`loading`](https://www.w3api.com/HTML/iframe/loading/), cuya sintaxis es la siguiente:


```html
<iframe src="iframe.html" loading="valor"></iframe>
```


Los valores que puede tener el atributo [`loading`](https://www.w3api.com/HTML/iframe/loading/) son:

- **eager,** este valor indica que el [`iframe`](https://www.w3api.com/HTML/iframe/) se debe de cargar inmediatamente, independientemente de que el iframe este en el foco del navegador o no.
- **lazy,** mediante este otro valor se podrá diferir la carga del iframe hasta que este esté a a una distancia cercana de entrar en el foco del navegador.

Es por ello que si queremos cargar un iframe de forma asíncrona dentro de nuestras páginas deberemos de utilizar el atributo [`loading`](https://www.w3api.com/HTML/iframe/loading/) y su valor **“lazy”.** De esta forma el código quedaría de la siguiente forma:


```html
<iframe loading="lazy" src="https://lineadecodigo.com"></iframe>
```


En este caso hemos cargado de forma asíncrona la [página de Línea de Código](https://lineadecodigo.com/). Ahora ya solo te queda dar el paso para optimizar tus páginas web mediante el uso d este atributo [`loading`](https://www.w3api.com/HTML/iframe/loading/).

