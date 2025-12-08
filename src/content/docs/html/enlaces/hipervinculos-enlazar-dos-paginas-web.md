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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPFQTL25%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T034416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0fqIw%2FsqBAfaf%2FXjHXL83%2BvB1vn%2B4%2Br6gcxLuag3v3wIhAPNunfiJT7BrDCay0YuhZmfAfK45PCUpPzARf0uIrRT0KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKRUJL9FIeaZRvicoq3AOyRF00jjexMdSXCG0X4vl4rXu0taPVdcssJlxJL6j2M6vmvTxdjgQbrQx965kLxxPyS5NhD6T7B5jTtMWbeaZb2l1yxLIfedF5bA9aECoRF9SwVipvPgRyRPTzeiDYnNaIchaPeb326YNFvnS3wFhpm3EfypVUgwg3ftxXw7ZwknQn25Li5mKfMhGNSLL1E67bZiaw7ncyyTmCbp1ic86EBIugJboDxsqdVOL2eiEvw2Qno1lwm2bkbrkO7g0Biv2M59fuZoWF2D0slDqav5gDh61Lon%2Fp3KRwb99s3sVDIqTbmUsllV6MB9yAd9Upr%2FWmdC%2BVSdG9VfxACoVWh4ZSBe%2FAxGkq8L6EO0QDusO9bH98K4azbZMDr58h6037HTBZ0heOtXgSDvmBQ2TH33KvZpElroumimcFSvrvYKJl84f6lojWpVfFYlvjtHxbOJ7q8ekuK%2BxHwugVU9B1XN%2Bb%2F6pUcs4jIV%2FGBLSSPUBtmKpjaZT3ArV0XWCATk30stXUI1UD%2B6xZ8orREkaBvQ2mpf3BbZUiMrLXnl%2BpVA0BvNi1aVNWY7ccvZoQCJAS5Nb9tstUzQ%2FsiPtbyCkNhx43ASw3a7EjvjFN2mmQmW0sjqzY1aba3T0AB4JUMzCf79jJBjqkAQtJVfUBsqd7u91mssDrWDABA4hft4gTbLf5nh1MOZs9BoCO%2Fype5G26Lipp54jZOrb5dT6vQgbGOlfzttY2l5a49KSblSqzWtCch%2FC51mfV2TelOqVUP0VlN8h942%2BvbtJQQmj1zEdqMSK3RKRFDMBsRpU4d4q3Yw2l5IQL2RzupRm3KtRAD0x0lurdBDksUNv5r%2BqvM1WEHBGAs8MwuDEARuY4&X-Amz-Signature=e81d4c05945a922e47662e48fee8add8ab3e8307a44649256c2c74400aa4a617&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

