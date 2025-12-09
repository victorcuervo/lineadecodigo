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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7RRRTKP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T162056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnr6WCTP0kqnxRZQ3htYu0BPPIV2wggTVXAD%2BbcFTAUAiEA1WxDYxVsweOvqCVtA5dFIZJUWfQVDH8rf7z5THARKc0qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxlOVBidbWsJnK5NCrcA9r6tHeaKZGLSvG6BXZnMrD0px%2B4lBOtBI4RtmhELC0CExSCiXp1%2Bk0X%2BM5M%2FH6pud3EwFmYaAJOfOvrN6cL%2FU0qCQwoqU9%2BSFRe%2Fp2l1%2FKgeQZP6pHYbyie%2BEQVHpHMtQQpjwy1I24o%2BbsEN%2FkUAlU7rBWMuGlU9cC6dFtIdeGY7FRVZs8RdbWm5Z%2B5VLaihybNd%2BkLSg9GTkDCuBpIWQ8UC1YbTJY6%2FDqaB%2FhYTtZaL8mh4j8S2z%2F2f%2Fy6V7AUfyNzenovBiFdYbwrjlVhaqDCyS1enIrrYcMy%2FeWgCQ4KW12yQ1f4KHiSm3jQkxU4wLaQj0tqKFT9kb5bNyE58RN8PC1Gzzji1GOhWHgfza0v%2BflibOaE2RRDXzqX%2FVDryj%2FXayGJH9fTJtu5Akl2ZMAuHf36FclXrF1%2FVTc7dSqedTlMen101MGSJlcFB8xXUshtuFysvp1xlZHs2KNkyWqHmyLkPYVcpYSteR%2FPqg7Uprq5LKvSZfaowDC85cN24uhFt1E15CLsubv6PdNk3CbkD55GY2G9DzKZdoI9%2FxU4SubtfretiDqj3pQAgegWcVFKBCUMxsoZ6dj1mfIJBIGMx0YJaJl3KykrF7lti4NcKhVzIQzQcstoS1NtMPiX4ckGOqUBCsADABXXsd0V3KKijbSg9%2FV7P1a7RrfQWgXqLMGGUkIkdNGSx6s5aEuLH%2BN3%2F2p%2BCdfLNUU0sCTIepyLQ17fzRBhUvBwQbY8H98A4NXD4XaqZmdyaD2vpWBYjlWPunIyNyL7aTk8j9as%2FUQDoL%2BZ0IJUSB%2BF1jLGXqamCUhEkE%2BunCFNmgAXMwFE6QLVr%2FzniXRWCMUpZ0a3oNZl10X%2F8%2F%2BfHwSH&X-Amz-Signature=d99cd017d84879109be3552c67cf927777ce788bf4135ba312acb7185d1b887f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

