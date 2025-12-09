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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KME5QW6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T051140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCSi7uM4TU49hg%2FhsTN%2BzUnBS8z1HByrGpaQgNWmCcvAiEA2u2IaIUlt17dGMHh0kB2lfFJqkHwLo0mXLT1P9iBB3kqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExjbP90%2F7o3DkPD8SrcA2BQ04%2BJLkoaEPpb%2FOqDB5TW%2F9JRu2obhIuzuhDtku0tOUtQyNUdZFNYwO50woq5F6KTx5lSvyaovMsyRPTpR9K5EOBXH4%2B%2BEbzo0VW%2B%2B6G2sZ377uUZ4T2rHaqV1ZIzYMjAElhJnlkNrDQwUWWCepP9ZFv4LmiOqgR3Z0kASawJn4%2BkaBz%2BrGsMahhvKHuibP6ag5bAp88h09N5NUtaTVFTx%2Ff%2FJ8GN1W%2FTS1nUfeiTlkM8n5NyhBUoPJallwbRTdfqubgm1Df%2B6u%2FMsMF7jTKXLJSvSbK%2B1MnnIIAOFeXf5zjKZJJX3i4JByAx1n1af8LPHD1mNXQP2ml%2Fo3BgTz0AusluJu%2FeYenQjse75CRNv7qZGxhpgeeOZUlTssKAkHh3A%2BItNFufN7ZTO2ammdmymHr1ooSizHJhct7ySBbfEgcvAtE56Yoli7VqGshPR6VFZFrVRaOagbLIft8PlZB6bNgSZiIG%2FwAiKz9BRZVc9f%2F3hl%2B46%2B2DW3MMJXV2gsqDElQbGlu%2Bj4Hk5FzRwrEpYE66iDa66H8Ff3jlW00Ln2%2B0FN%2F3qaXq%2F3T9z2Egbe9fiUAvHAyiK3wz61l6gNDouesdU4zeP2Y3hPQiTgUIcyIu4IgYIKOeIZQ5MLzJ3skGOqUBTDI1oGwzGDS2h1K9BIQX5xO8%2F5C1vc7iQFQ%2FeyWmM4ILLDrtNwKIeZw8ktLCRFLgPkWvb9SpIk9%2F6uxawHFftCRzz%2FoPKZUbznKRfCLjo4axlyiPyHG09XgFVIJl6Tk9Tdb2OE7bO5kxZerZ31dqBIp8waBZAG5p3%2FbWClSHuHbcgdnYSTrNuYfqlcFnSNfY7Mkt7alNjsW%2BWmpdv5h0Sv7TG5Sb&X-Amz-Signature=8eeed93fbe8d786ad64e918c84bbb694d8cc309b806c6220d41d14c95b4e89fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

