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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V23P755O%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuP%2F18Mq7AaokhnqmKKVkXT%2BmLY%2BFZC7J4ahMdZPDDsQIhAPlNmGMlmL%2BSgYFFx9Wb4ihpYrV5pgpbQx%2FdpEgGZTHQKv8DCHIQABoMNjM3NDIzMTgzODA1IgwYcKs%2FtxOxXHdulCcq3AMySGwGqYLU39Sxg1c4OHCSv3MbfdiE5EyRf2XLBi33capDNPwBM80do%2FoakUCkbjBoY2m%2FkG2lezkmemmgSN%2Bd9Y2eIzWkwD0YKJMXBf1Jd4Rkn5zBr167BDAMn7xoIlQ67JBsGtCYOfW2Xupv%2FY%2BG43La867fkXga4LbdT%2BWtr68axvaquNpIelkeXt38A6r%2BqX7O15q5X38g%2B6uvWCXB%2FctOvX%2BoIMzl3HDgfT%2Bx74pRTLSWECH%2FpyDH%2B%2Bs3drRMCNrrIPlvN%2Bh8WtWhaNYLl96JXw9CF9bRnQAXjNX%2FRJtCiFxYeR%2BqznzPr2tMKpvW1psAy1jfv2eBBl0S0wKBxwDkHc2FdR7BZo4Y7QbUIjiLBkb7R26L9Xj5dbcxDRGPsZDYyhVFP7UAJwq%2Bo5CHnPjHMz2QdjsoBZY3FerqvvY8Cty9cfcVsvQlxh%2BH%2Fv%2FLLc1kSVoz1Y3dB30TOjeOSqa%2BG9Hodh9w9uDFauHhBu7Xg1kLRjxqdCv32RNMF%2BimOD7dU8vpbHGSpk0%2B4WDPdl0ShyBkcKixcT7%2BtMEj22K6ZN1pMJtoZVK9hXCuk4rmtNvrFQ9sn5JFdPO0PEYnROanLT79rdj9g6amrmQ5j5MG6BRuBAIuCQS3czD168%2FJBjqkAY%2FEJv41d%2FsHaDnc7jM9fV1OaoUlXM5gxXKTppNaVEuyWxs63Zg6npN%2B3pgZ%2F%2B4J6WaEYTvGVmOCUzcgunukBCiJ1i8mTDDrJrMEMtGGshSV97Z%2BKilraUNjsst5cCQmAPvik6AcJhKsQggXSM22a6D7SC90hKcn7TDehi1yUGNpOnC3RnPd4OY8b%2F1O8oUkyjyq8ODmTNgKhtylQ0o5Xq5qJXFQ&X-Amz-Signature=4b8badab6037766b9840e21998b427a39e42451da3cc32fc13d91704c3cfa3ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

