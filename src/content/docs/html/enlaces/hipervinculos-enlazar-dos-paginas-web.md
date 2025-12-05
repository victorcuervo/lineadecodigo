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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOGMTFJX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvR36X%2FsqzaArVhP6raLMdifkwNwTugjK8uzq5C74OAAiALDg1SKDYUutQ3%2F0W6Wvxt2PrWl3RYEdAo2w691KjWCCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMtOmdRsxlxLc0DPq1KtwD7RUaFNrskZIrQEzGc0RklduFuBEYFfSVg3w%2B5n4NTpqzuoRwpGVV2P3TQB5t8u48FItFu1grdCdJrS%2BZbXZVZtSMdhQ%2B%2BtBvg89FuEwBs%2F%2F2163YIUcJ2e6dV6TeOWMjfyhFcU1XRx1Gql9e3a41YsjEgwsdEmV5aT2JzT7SRlrn5qbLmeq02EkoehC0daA6AXB2zqosktZVAwbzYMh0u85a5Srt5iM7r8QALPu0O4TSlXQptYzR6WmCKMdmwFX9DV88N%2BCwwPVzL6wagcZ%2BUIODOiqWl56%2FEAkM7%2BzXfz8RtTrMBjU9GekOCAKzu3VqFCRdNJC%2Bc87NUQCGSSmr5bCU34WdKHamQWmYSAuUuP5mO7inr1%2FLQuTQwH6%2Bl5y6Q2a9tXSW2D5Fmtm1F4ted2gFM5tNQCsVKcDpCYNwgzkFwXKm7qnUtUiLstRgMHBg7D2sMFlYNvQdWZfaCtRma9RMK%2FJRShVvPdBFp4ugQqKirFtNxh2ATq6iE16UiX3acNwdXDzQw%2BpvZCI7osrNMr8bSXWk3e0Kp9T%2BKK5Zy%2FUpZ2WmuOdYe%2FejSATbg%2BiZoFH3ANp9SFMYtdDCe8O0nsnOdGK2Y3SlJAuKi%2BUgy%2Fj4YkP%2BznLlQmWFVqsw9%2BnLyQY6pgEAA%2FaeFXhiv3asIiGUKbK%2BGGhVKJyPJZGviomZj9JszsmVNUjMDI4STxu2lYBIlap69lKL9ZlmXKnzEfyYrhk82I26zHcMS2gFTLsKSPaatFZNnLk9TX%2BTyQAneny1DD0ESTmq2JF7amFW5Ow43CLRgoEz5EGsfz8wCaYGHomELM14vunaR%2BKx1nYaMsfgWOxtbB9cUiYyC8boNr3ImY%2FTi5kTcRq%2B&X-Amz-Signature=f6020d0e754b4e23e3ed5d752e0f51087bc2d4c88d048702567ea0ad355d4930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

