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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUGDFG4X%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T110045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBuif9R2%2BboryKlFixukhEAYA1cqwPP9EvRRqbviRvDwIga7%2FcgVLmJy4NZ3luruvv0PjWzM0OnTDvDJI7chB%2BL8IqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKCsaeT6rTJzYt4PSrcAxcMtYzo%2BToz7mG0Sv25yFkk2NoswJQnPeIR0ltd2WMPANqiLDfS%2BOu3eq6QjCPrB3UNNgLIyoImvIUpqEJIsmwQMZ2zNiW8VIfQfntgEjhZ6U1Hu5bkJrVg9J30hr4GzjXyeOpz64owLyTjerx1wzXtgQQyU1BVDXjp5VTXO5Q9%2Bp0mZ5zGZZziHEe9doJy1QtZWy36B3PypGt0JsacY7yEtuWJWhNRCPfB6jwFSxfUC0VegkGatUJZJUhMhYBQLreQoVIsrLrAJEz4VX%2Btg1mRfG3M761kS2nK2n8jJkFwwuWc4SgXxvZ6jVq2NmI8tbMcNX6soPGlL03BTtFHie85RtfdiPgu%2FIBJsG8h7AZK7vnywdmTOzd%2BWHAbft3sfwenFvASm2oPJ3fhG6rmGQToXPgbZqEhOURIoVTrvvTZezN2kN%2F0r6UI0wDosiMribKwCtT7FtWphMawQPLyoipu4xqF6faBxzZ%2BC3MrYZd%2FtPZWW7JzqZeImjEcDEtmwI56qg%2FQKXYQhuiXTEs9DHBsTtkvomuMhGyjGmCi6imj1wBCrFat5Fce%2FUqm1BYCIy5sASXvnXwg%2BhdpLJU%2BlEg%2F2qcSMhV2wqhrcm176O04Mjwvdf3iB6y2gHlIMKru2ckGOqUBvqS2D6y1CdPaPJceIwqNSl6AyLNs020qrq3gsYXLRX1%2FAVc3vXdID5WJNFL09FhtLb7BiHgRVzFnwsOiqvysW8yoKwWXXyfJ0Ga8KeBOQtBkRvzz4D%2BJm0GmdOtO7I06dymZZ1Ga0bhNazZc2qxg%2BiPczdIlNpIKAOtQLq7lukqyTxW2NVF9jxJ53%2Fg85rd6zP1XYDEa4%2FnFOB4V0HZ5%2BEczSQog&X-Amz-Signature=ed3aa75852e29ed52a29386e97dfc11c8bf4391103318a7f9ffa118ed0527549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

