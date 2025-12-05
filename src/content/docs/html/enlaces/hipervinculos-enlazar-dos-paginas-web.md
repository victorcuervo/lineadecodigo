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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE2KNN6F%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqgfYByhePiPhL9fZFPDrgmwrF3z30%2B%2BfjoLgkse7IRAiEAiVwPTgtIpCUk27svOfTd3bOZjMVVY0pdKb%2F7o0w4LZoq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKlWP6Yqxvlk%2FgbIBCrcA63qtIjFDAlEwLk1zBPJwF%2Fl2poK90Yio03Ikz37nfD40NN9mUZpcS3nqPczpJJWrKlOl%2BtsnIM2DYmHzOZ5TSXHLO6i6K09XWYI7hxlwqDU4uoWTZBWPYCF%2BHt2sY3usBc8Z4iFBfFvy1Kww7CxixoU8CyTFkuU94WmYcmVuIO0HUm8VzJH1amCTSEKIcSIbBRz%2F3W0SDoWGfBPQcFYPzOD%2Fc1ZST%2BivN3DEO2TIQNrbs4dH9nrMnjuKOnlrX4GzMxswzoUJKMpurpstqFwwZblRlMctYHpTw6UbLhaHO3xvtW259OTs3HFX9F5KMsnycqLhDEloTXKvzkQGBV2I7gqRfSiSyGtxCZ6swL50kmlc8d1FZUcX8Uu%2B%2BMi3GuF6Q80M9O1%2BY%2B6lrm9F1F7kefD1lyfxyNGDLZaC7wYq%2FRsE%2FFy2sU6hWGpR53bAQfjZQJylDvrBbP08pq%2FUj9EPM5jBKOOOTbHI1zf1kuXgGJcoh8NErbgwO9x8Nloij%2FKkbgVPcb7ar4L1Rs6E79ec%2FmL%2BMC%2FLmdX88u3p5T38%2BMdT4n%2BWClBJFuQhlBR3RUBCrLj1uuH%2FQKu8pH5PdDIL4oTyBLrBJ9fEOHolRl6m2Fwdr0b8mqvkjAqijQoMLuvyckGOqUBWsApCLtXT%2BtAkH4uvbZaUEMZ3iaMVTzfKDAO%2B%2BqOZgd0pbuDifXll5hGZxoe8XmSBREHLibnFELEmwAN2br8LrdGpB%2B0jLcS9v9%2Fe9E2JEyuNuQQ092NSkliHmbAJqok8YB4usz5S0pzHRHPOal1BJjoTejkWq1HTJB%2FJmtQWtp6KEgwstYIB2HOYxEnKGI2bF1hV6ZScZrwmjPCbLOvDUzroeVw&X-Amz-Signature=57a69df49be9d12775b5905355c3d2daf687b0122846c3274c790a540d399f66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

