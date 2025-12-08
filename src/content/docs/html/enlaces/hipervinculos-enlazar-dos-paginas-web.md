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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX2P6APV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T145331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkNOg8Pg26oSgmhmT5cPuYazLkMHfvkl4AxdtKWRDy2AiAFvKiEFgYvF196cq99s4z%2Bc3EiE4z2CcWuDRQSg9pV1yqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3TlITgrIJP%2BwRODoKtwDQZJBmQczuQCctxP8ThTIuPzc5uKw4dr1L3J6BCE5itEg%2BWQtJbqJuGYYkzqu1oVBCUdc2SUWMBuujHNHEZj9PAzaFHnPb1zYlnqpmfaBe73n8e1eT3u26lWi7wgy0xWjy1kgEquSeR4xEm4BHtbKniNcwkmqxU6NWtnHnrqtXmQ0ugdt%2FTfUlQxjIufl%2BHqYfpZwXNDVkj6JQuDl9bh0zV3%2FaUQsvMShi8ELps0fFRlKyQ5DxFufRoBrGhaHf2iGFAZLHOKBamfrjtFJA%2BHuizBXmYggnjjm81i9t%2FvlbiEfpsiDWG3rg5CfxghPrx1mh93sR3SiSk4U%2FP2deeBBwvk0HJeDOVzlRQRuaUIjDVWNyZujQ9qDwgi5XdiZfc8bJUj3dZAeufDob0qz3dnYYyNtaS0zS1LXdHDXgCXkbUT7uj6jx6HL0OnLuIUYcD1tJjSGnbMCG5mMPyYv2osOVWKbwjCW5olDDDinLJ7DTYeZ4f2ocQUcAzXuh%2B6piUveQvLpS2fe9nX4DnI5HX7To7x%2FHjjSiJLPcTHOIwrGKnHW0UKr7674N4BTasu0BgRbWLlRJXr6bB6%2BAezndWmttZGHhdYGzZIoumvddKmM0C5hpYZrUaZobxibfXow2MHbyQY6pgFskE7erlxE7De5%2FMN99HeyoyViQ4PZmcMmgksOVZiWTxR5B5i8vugzxoEYkGcqB7dwlzr9pQysLOYpDpurrxl2KT75r%2BipxUyIdlM24Ls1NqUNCPHDyH4rU1XjRtzYS%2FPNuIC5hz8oNvnadGzmt%2FbazH5emRrJFPdxkban7Qw4N2zgpgOwuaEXh%2B3Z1FEXTnE8LaD%2FzMmMWB3kDPuxyRyPx0uJSz%2FX&X-Amz-Signature=45c9843c0f92dad8a91e70a78f3fe47542e1a72b9a8346c97fe8dbc6da7bd063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

