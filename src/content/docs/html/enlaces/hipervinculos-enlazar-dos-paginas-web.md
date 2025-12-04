---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWJK4H4I%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIFKQO5uS090hKl1NiVHMzUQOofKpEWr0qsNXV3S6ZNWnAiBJJ5J6gcWVEPO8%2F4xAarzG4zlFNBzNkE669BOlB3xSCCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMdGBunh%2F88DbEDbSuKtwDeX8PH%2FUybEo6KIuH2kp54GJwDToFXjYzmZcq8iG6ykFwMttDnH%2BajyohilkSGwRRuGemYWLzxGrWofWM5cc6P1%2BJmWOdUqhIdmbnmZ%2Fvg29eOFoXdrJML%2BI3h97MUo6QmSpFofmnkoo9kdWKoLzC6xufNYCG0NCkI8RDMc%2Bjne0xK5WSWWtfgEn1czXPrF4Q7FNYq33tLOmvq5pYOvmVJF3jJX%2BChKPmgIJGL2MStdYPBc%2FRPPYzxigpELssEKbpj5xBaNHU6aj5W4I4yiQfqSjfsPl1q3YpksV%2BgmYDPGt8dwbEXTEz%2FDhvYDjKXwDTCtJuEUiWtF8u2Ti0Qc4BIDVkd%2BSER6JWmY6ilIrglv7W7hvjSJbHRRUuYFBjmYgDmo4zCMDpq2sZiBEe3%2B%2FeN%2FZCDbdPRM1InvoXDdTrH%2BaIgdw%2B22tZf6iRZOqXNV6e3EE8kZvVODdhbHXpW3%2FtvVpCx7zXTZ%2BSVMDUaHwQMOcKC%2Fe9M58aOKAZaO1NDvSPJVwXiIrp%2FdqN3ieeNQSRjly0yuNfqq3Sa4oWP9ll9AULNw4B6zwaYk22G6WXk6uknZRaNR9JZd4Flo%2Be1D2AA3qVUZ611xWa3vMH2VakT9xEyOSCq1RKgubAFL4wyIbFyQY6pgEGCv9OfGI%2B0napwxNqOX%2FCV5hicOLpdjI%2BCoVXrTP5WGTMeKjTgrdvClDknqm2e8K1ohCqV5%2Fdagr5dZ4q%2B59cbL3bsCTSN%2B8weKd9UOJGPaFwbUo3DQbGnrClKk8d486e0tyHFBi5w160S3asNq1hrc3oVRcsWgdckNgBdi5yDRxo0XRMX3gwTN6hXONhmu5Sj1p8z49c8D%2B7YvnVTFTRBH5YWm6G&X-Amz-Signature=55957f24a02c6da35a2df7c630661b33d538d18d53826516f38bbfca6008e6ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

