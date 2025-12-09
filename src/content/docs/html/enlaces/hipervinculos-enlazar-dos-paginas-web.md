---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REFEKVVN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T232055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3zsfqV4y0plvoBLFWNecYc2gQznOhA7KtLqWcIEkMVAiEA4MI3vRQutR%2BZhUEERlwTI1iqysQpSRUoeNyLwuspclYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkcvbdEXMxIeFOWLyrcA1%2FYr%2B%2BqUUkzAi2CGXDTxPZ7yCbaX66lnqRXUaDjHWNxDAaqtAZY2muDKH94m%2BlNsg%2BHTJgJs9UUEdO6i02gk3BZfcKYphL92RYtm2hdVhbNb%2F%2BRPCpL1eloM6MszjipAtNCy1uPaom5TJx716B9TvnJOpdUmX8bmfYw7F0Rtde0LIQVQxg%2F9m7rfrFwhzVkmkmd%2BJjDcDYHwk1Z%2B9qo2I3tPzba%2BL6%2FzwnuMFCNi1rDzpAq91j11U9rHneBa9HIy%2FfdLQwfiOLNSw%2F3xgC4Dsvn%2BUNHuvI5%2B2QWrXW90uBsFsYsvgpOujgigZ83fN6HlepAcmWWFRMFIwI8GaQVz7YGFoxI2zu%2FfW0atz%2BrwKk9l%2Bpap5PDtshcG5LpktjxMOpX9qZqR524IPM1tH6ywc%2BCx3zl7ewPRBXuPZDKtN%2BDaC%2FyHWFJnV3piDNEDp5g9c8HNaPafy0k3xeHikm58UP7aZHwVVNwj%2FZreoRp6oSh9%2BbvoO%2BwVvuNWos6QbTCi4yaa1cROt5msg%2F5R4INKHetuvMCZbpWTn8%2Bf5vVLzV5Ttb5HUXODmj5GR31gvnAmOEvaEI4z11bnJR4xJonxpCbPIX%2BUDjWI%2BzZ5sxlfbMwpTkYtzrOQABZbKHjMLnD4skGOqUBX%2BtfH%2BvKctCsFO9hcqOTqwNrYGiPEcgxuUK%2FMRF%2Bog3BmIvfdw94c8n%2BIvvCQ45zPrJDOV%2F%2FmteT84tKKGLsvv42aDDp54cVOs7M9o20t1U1K4UzF0NvelMvunVGxJw7Ipuf0axwANjUgg6G%2F2tSvDtG2SHOQRx%2FeNpjhn6R8FbRTzakE6gCM8Jn%2FGwnvyIfNQTl2fMKDeAFlJpExQDYPouDuX2%2F&X-Amz-Signature=d44dba111944a3881a6dc03e11e500ef23b5523aaaaeac74a9fdd63a7c0d5ee7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

