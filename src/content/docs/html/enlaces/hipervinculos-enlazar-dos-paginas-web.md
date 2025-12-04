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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NFNWJ5P%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIHq%2B2DS6UJ6sO9x2hqUvr9AU6QcNPyUYDu2IKGp1QX0IAiB%2Bu60tHU86W3r%2FFZM1uB00VTt0RTL%2FDSwxbGkQlHibhir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMnkh4bs%2BW7oB184z8KtwDd9lloXHKBTF0bQM3PxKZbtGGhgI1eylfifacWSSTRk7xKERoY%2BEaiPcIH1GLTJGhLGSsPrYHtSpNFHA%2B6OiqHMoT1%2FY1HfPnV%2Bm3XXj3k6mCqpl%2FdhyPxoXZh9lf5mHzCHsujgZYLwr35r%2BICAtzCKdacDBKwyDXPBUJN%2F7VUpw1nbCEwQKdd8Rse7SqdWx8yVFkUnRYswv7pkrprCY1WjZQzl4PzVtR4gbih%2FjscqSgeAzEWvhrjtIT85WMvEw80PBbJp79Fvyx1iR9eX0jHzpL%2FE8esELtokaAybC6CocZDczDkRts1RrSY8BPiSzR6E%2BTPeafjKqTSAZZMbISn68ceg%2BwLXNmaQQIKfjYlH6eMAijtCLgnIkyx4BZSZne1CiVb63MLFJ9WssgtP34OGcI2PoqxTPWm1fir%2B2fRM0%2BI%2BOXGfgj700uGdsUHSK5T8oaZQ9Gw5mltpQhHDTgbOyDaHY2zukOZ5UflA5TwghMoGVcdM4w2bZt6JQYMhW4kDTs9RDu%2B5A86auIBwVD8ySLdb9%2BE44xqKhurzvoEht%2BwuIN0PEDRbCMmTbBodwEzmN4vMvjdHNLWPVN9M4SsHtMFCWfshtWS9Zx%2BdEMF8%2Bo4MGS4wIGaBLJpWMwoKHGyQY6pgFX0f5ZrJsTsGcNRRo4pgbnyaJkhoAsSwoS6IrtnDhSoi0YGfEOoNX3uNaYO3StHwtuOZV8y3TzD9U5Rbjdja9YKr27tuFQUq2CQbZGr8CdJCcFXjpZZ6dZfi%2BgJZAh%2BU%2BP1enw1E7Wv4xva5sP1CyZJAIQZFJC3yjKU6Tzsiwuw1LjK0y%2Bf5UErpFlWBIkxXPb5IDrzH5y0IHV%2BdN92NNqjyCvU5aE&X-Amz-Signature=8c1e1f4dea3422855315f469d6aa98286cbce2b88f2b1cf25ea75e8dd184d08c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

