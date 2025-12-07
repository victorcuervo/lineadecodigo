---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
slug: /html/hipervinculos-enlazar-dos-paginas-web/
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNQOSYBC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T110445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFnV9zyPDQ2gLuxOf843G7h6ruEaviNnxPX%2BdhYUN8PXAiBkwRDde92te26mDP%2FIUaOhzmzrBf3NQz0KV03iary6NCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMvLvPnSmRYekfxUPKtwDrixgnvdcRiPLaqnKOul%2FShqCo0H86LnT4cOvP4ZsJZB0j9uo9xmRZxwCNkDg%2Bw6gqLnoEEMxFlxdQrel3DVRjC1w%2BgawXxBxUjOOdXRnenjDcf3VKNAUFgQ%2BfHEzC1eCByJU7s%2FjUcxOiOs0pICvHxqU3lg975XEx1jBJVlMKorLSaZZUMA71xlgGGbvwBLw%2BUKibPtcJYOFbdOC%2ButvAzQioKXUvcuW66vMptcktsQPRk7QhmlXNUABQRLBWeqUa6QZEHg8Pbt7B0P4z0vg8C9w3%2F3vrqbrfaopDn3lkvJAhA6jY2OClCGzQBpw6FaCrO7vAMZjqJ%2FHbXtlU5d9B5n6B2zKcfjUdo%2B1ccSGl5wXYEH8dOezYQro6VKScSE4ZI80OZoXSqZkT5d8JpDx9FCZUFNHgVJFZCvI5b15cBY7cv3W%2Bc5MorHNjhjbpRxsti4kUH6AsEUob3CNHHMiHCM3cqxZIcP2Vzk0v7jHQTMKRupryJdGXhO8rK7I0%2FMkWUeAzMZUseIqyZhorUIal%2BUexQKvkWiVkPJKaPpH%2B6cui3cocwuHIVoGViPD8VlWTrWL5hB29Ff5zh8wlRIwxpUz740MF0QPPPY2Kx%2BPtxfMNEHezd%2B7kUFxUg0wxJrVyQY6pgFKFEIpsN%2FnS228J35PaIXj8rSR7BlesMULPdlbJ6AMtJiBI4I0bNDVGIIzCmDbiDiwoQz8W6HtngCpIt7lGjqpOz1GjhZzfxXESiuoZgixYxv%2FW7iUZk9gx0NOmNlrCG3lEoClc2QXQBGqrmtdqdf2%2Bfen9U3ybfVOsbxtuPoEVXNWxSHgQZpaue%2Bs9SxXFrl7924n4IerAGejurwqdPYxN6UuNiR1&X-Amz-Signature=0f688bf394f46c10b5a6049a02e32bad04f521f12aa69de56e5e0bbde362edd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

