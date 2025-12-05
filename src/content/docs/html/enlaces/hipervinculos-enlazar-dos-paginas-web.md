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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFWJPTEC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD36Ly6uqfUppz6CSo4VrHUABEBo1hNT6k1nJXZ06sLiAIgHwmJxkUvXQnW6c5n82u8DAH8qFif0jp1tckcFJgxU9Iq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDH9yvNIDNNBT2Vc5gircA7dulMT1ihE7SRhKTREE0klr0rzCjF%2BVWVpyc6duZLqeNcQ1OxwTcPZQEWBwtbILaFFLgLi%2F61eW8cVCYjC1eBjJ3mQ519iKQoTwg%2Bn7Bw%2FnvLWeMn84Skp0BEcSn1t2bjLTDk2p0ANjtIp2OeAE3fBi%2FtPJMy%2FVb2FNQ4anGTGrbehsuRn7Uiil2P%2Bo63avDFA893IEgjPIWZxMOlLSeenf%2FQStSClUc5tZ2C8CU0ycCu93sGffiDVbIyERm7pHhXMp0BykVc1LI03nTSqKyPy2oE8CiJTFgoVkUWxEu6rq6a9ZIOyES8vseYUm48oKq4h0PPGq%2Fx9W2oIsyBpkXwans0pCmRPLpqC8ozFuv8%2B%2FbrFG8p6Nb5%2B2p0Aca06HKNoaWMjIp6sSDHNoOOhQM%2Ffdj2sGfQvq%2BM2XcSCx4E5A3a4nzfbvRqFeWd3SgqIJAuoXc8tZKZK%2BsLFNY1H0IUFcB2JrWnFbC1CW0GR76W2ZVMsSk%2BYuqUMIKJPBjLCDZRgGcIZCbilRanDZzilPM68WHZnALynX0zJ23nGXiVRDjcWhzBahwyFA%2Fo0BI2yIQhFp9uaWJUezjNOgUgOuyEF9TcWYKxMdhY939g7Ue844PYNB9v%2FT5DwNAFYYMMrGzckGOqUBtGb%2BbnmrxpSgpQnW6H%2FgRgyy24ws7i4f2cQfPBmXyAvVHx9WgV6m%2FTR4FUzd%2BGAmFuLwSs0AcRTIsHNuEGiD%2FlrMWVx6IgLOm6x1RGSY%2Fm2KvXN3p1IrSD8C6wZXFOWXATfMM5imIhpl7OYqjlhCj2E314z5wUj7Lx7U5LBiiLOAsNGVZME3Uh6jYqAnz8ORbzFQ%2Fi1uMB4kzvgoCFlAU9HL8S5w&X-Amz-Signature=672adfeaa644450b8e505672834c4572a7d883edc3a569a473b11367e2c39678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

