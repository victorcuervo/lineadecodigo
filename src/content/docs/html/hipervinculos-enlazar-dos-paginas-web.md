---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
author: victor_cuervo
---

Uno de los principios sobre los que se sustenta la WWW es el enlazado de documentos. Así que vamos a aprender a enlazar dos páginas web. Esto se basa en el concepto de Hipertexto, que viene a decir algo así como presentar documentos que puedan bifurcarse o ejecutarse cuando sea solicitado. Esta definición se data en 1963 por **el sociólogo Theodore Holm Nelson**, mucho antes de que naciese la WWW.


Una de las formas del hipertexto son los _hipervínculos_ o _hiperenlaces_ o enlaces (forma vulgar más conocida de las tres).


Así que si queremos hacer páginas web utilizando [HTML](https://www.manualweb.net/html), lo primero que tenemos que aprender, o una de las primeras cosas, es [cómo hacer enlaces](https://lineadecodigo.com/tag/html-enlaces/).


Para ello nos tenemos que apoyar en [el elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que viene del ingles _"anchor"_ (ancla) y que es uno de los elementos base del lenguaje [HTML](http://www.manualweb.net/html).


### Atributos del elemento a para enlazar dos páginas web


Los atributos [del elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que tenemos que conocer para generar los enlaces son los siguientes:

- [`href`](https://w3api.com/HTML/a/href/), donde habrá que especificar la página (o recurso) de destino. Este podrá ser con la dirección absoluta o relativa al enlace que queremos poner.
- [`target`](https://w3api.com/HTML/a/target/), donde indicaremos el frame destino de la página. Si queremos que el enlace se abra sobre la misma página, lo dejamos vacío.
- [`title`](https://w3api.com/HTML/title/), título del enlace. Será útil para que se interprete por los clientes qué significa el enlace que se muestra. Suele ser útil en temas de SEO.
- [`type`](https://w3api.com/HTML/a/type/), que especifica el tipo MIME del recurso enlazado, es decir, si es una página, si es una image, un archivo de vídeo,…, ayudando al [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) a determinar cómo manejar el contenido al que se está enlazando. Este atributo es especialmente útil cuando se enlaza a recursos que no son páginas web estándar.

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVJ64MWP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIAbTn%2Bs5P20NCw6zfLT4pAhJaIwVTFfII7LvC%2BOUxpUiAiAw6myOWf%2BaMoh0xRysTNMr%2BNGYDgIUooKHz9ip6yJ3iyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMMyxHwHQG9laFpNt7KtwDCPTr%2BHYVpTTaDHi62pWZwVLIv4LQuZR7oaB3lA0YBYAdzLAu2F9tIQcg9dTE1T4WC9t%2BP29I5wQpRhFk%2B%2F%2BdHorENGqJS8fWyNZzOntYQiTzdTjBG1Z%2BxArthsu5yhlrTse4O%2BTawOVSgLhjSwYdYi3MSTKNtqBl5uxFAV5lUK6bYh2gNfmzZd31JTL57osNyzPOY8HgES2tCYlM%2Fhi7M9NvRUMQDTwBypaiF1wtMwXoJTi7YbyMcH3wAOcVtlBa%2BEIvv8Rd2VaZ3AMDl0dMrb87aR1bFhMwbkr5Ps7H6AetkZygaruPchac2ffLfGHm0zVjmrz4auTJz6yu8T%2BFhmwE3mhGIMMbsUYsMQHCOPfJAvjkwVq3KdQ7ouPNbggXnR1sDp8%2FlJz8ZmExRGpvcHlCI3O83etW3ifCqt1v6RF%2F1XIy%2FL7soon30DFXcvD5Y1V%2Bi1HZIJDFFWiepLKsUojkf7AoVO7ZxYxUqVnzkj%2FUToB%2Fe8qdtS4L2pnYDvbNIyQYXIhW2zpMlr0CChLSNcbpaxQ5a3V8lmDWZ5NPPI%2BoC%2BO8xt8SDaAQkIl9D1JrbzRe3vCt5s5FBJwq4V96zmjqmpjmsWdxJ6Gli132Uy797rwUlwYI4skC63kwrr3CyQY6pgFnZx1BkFNKPF2Zs1N3lAzxjyFB2QJQqHMxyrlwqgmztO8QZJ2ki9njqE%2BspmO8OS96pv91bZ5WYpTek6ApztxD%2BiZNSkqcYSNIbY5EeaeKAeyjMqkaV1X65yKJH4afO4Rc%2BXoRENdlXaG%2ByUdCCZSIBBemBc8ZCxk9xMWOU6Nc7VTbaTGA1RaIKFzk5tXqfK2hlo1Ay0Gx0Kh%2Bs09DxvtOW%2BH2ZurW&X-Amz-Signature=a7328ca4dbbd558b1fdb546852955c812f81311e0fe278820042c52a4819a2ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

