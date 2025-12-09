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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677AINEU4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T204225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7jJyNmZ17%2BRuJsSxxVPG4FUdceBI1xJLJSsnNbPmHsAiEAmCo%2BqSL3OYQm7WCzYJTnoIXngROL%2FoYh1AIoyOjhxzgqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCU9kZofRZaM2xRFPircA1YnbllKgmvY60cN16vv3hexRQOn0zeAd7I8GHsGRAPkWLSAb6dG%2BATEgDiOZYWdQsWy4HDGHYyGOP9DhxFJhC290Jq2H6u1gjKcmp45%2FrMzaYuvBRBxW8X9wD259Yo6Hco3oDpmb3Y%2BAh5mtZH4SOsMgwR315qr7rcEAsetOAzjgUaFbq6TFrIdQxhpj5E74JjrLuvLVeAqMT6fgDt8E9DiY2dYyDyF19SO1T9VNARDFNCt9bDgyzOgXlRffxdvXokw%2BNNHEl8Lwn3NTGRjFfM4TxNL8edkRyzHCONyqtnrdwtgY70m4IrbpqnIaJICdLd%2F9%2FbNMZhadU2fRcfLSsb7acBf5gWzsw7w5RWdOBq6SMv%2FmKoXtniQgGfgBhaaB%2Bi5zIYxtTQHqmXcHmP7i5%2Fd1Tivr894e%2BiSs0mt23xLfZRcO0fhoLXAodwIGMb85DxjVtoTWuHu9wzAQHSXTRWpYmgyiH%2FgxQqPVrXFnUgkoMKTA51CHyZUMgLKDA7culLQUVm7JqOF87jlVTJ6L9KTdJttl17V1HtEOPU9jaguHb%2B3xDTyWCrkZWRYMTqFmxmphXPPvUFupzzy1WlozkujBYgoZ9SfZu1hr7Sc9LWbHmGI26xpOB34doyVMKH%2B4ckGOqUBOgf9nx%2FxlAZzq3gSEOYN%2BDG3V0CCMr%2FE0VOvdY3j5BZo%2BvNTwDA5gFdWklFzmJwMLSL5JXWG8vd0fYuEZWd49N54F7P2xxEXm8FrEtL2eFsZiBNadQC2Z0AJcB0jYaf60LihoJvMzWh5VVtTY%2BkBixBIRdn33MPx1bFhjbHxJ3E3xXetQmqjE3yhNh0Ioz%2FTXoEdq5rQlsmCgty0844LZUuKiknN&X-Amz-Signature=504d5f5c02251fd2f7f072ceeee58f48b3d3491c25082f23aae96f4da55c3ff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

