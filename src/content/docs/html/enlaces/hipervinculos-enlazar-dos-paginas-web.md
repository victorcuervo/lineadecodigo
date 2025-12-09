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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CAV7YUZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T171833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpXH43Re5Lw1mPvpXWHv1FUsWM%2FWBgoQPQ6hfEghOa%2BgIgRMR0ujOVufa8oDB6oGJi1pkn2Kgs4DFMLqa7dCEWwx0qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJtN2vlbyRQjQ1tf5CrcA6k7ItXd3BPPCSeye7SYaHVO%2FRJIsJ6dlomK7EimAg7PBziQ15LCYeFovK7E7iTyCRIBnG233ZUYA0cSpyxwQHFe28EUrRd4bjQO5wKQ9RWYpA%2BLV1%2F24YecNRc2akavV7%2FZPaFASO0aDY%2BAUEGVK6xwW0txvCBDaeOlXVaj3V1XC8ui7xQAXwfvMC6pFfYuR0f8m35GDNkURZgAFIxEZ87cV0573EQYBrQQtdvC09iTzgpIaiNYob3tXSI%2BgBfK98cV03%2BQXx9Kb9G%2BzDvHyfctUeby7qFCLGgnvSgmA8GDp1dI6Qn%2FP%2F8E02UsFnM9O2NPjn2znFJ5YpJPgfBjPA2adEtG9p8hyx4e5w6m%2Bu8%2FubaRFZtMeEvRc0hEZZPvTJleWX3Xm5yOQlXrb%2F2%2FCjENtI73A0waIYuSnPgEpD9nzo1wTmBi9fjnmvNeT6JhrMww7VNWMUxBTB3P54MWETAYBK0DB2z%2ByiVB2LHoA3v3YV306Ho9LhGsolF0XixIrUD%2B2GVso9q8UibVEtHAAXkslhdoGSCEdO1RzEYQiHVO%2Fh9b%2FUrPvud%2BxN2RWfBlxzlE1yk%2FqyPpH5VVsDmVBv2LMTx9%2BYoIfWnfXPFPFqWVfPMMHkR%2FDYVrZBr6MOyX4ckGOqUBzkylGV1ZK0u41HUd%2FZH11voXbdRS0ZVgZ2s18R%2F00DCMNDPIqOuYdxHNYLj72MXOdrN2foswPEDTzkV4T0EnNtTWyPhwX36wbgxKnjb9kriXzdKsztN9L9RXa8ExoPZRRJBwtOLwmRQ3goEX63OgTijkDEoNdF2qSHEJi6HRgn7kQr2Z3Jl36h5JX%2Blj1Hd3RKp%2Br7tNK35jDEMvwUiqX5fOap7h&X-Amz-Signature=345f6abe06fd8555474c3ba3f1ab905c5966d048d554848dc798aeaa309b8882&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

