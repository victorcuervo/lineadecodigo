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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4N7VK35%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T211757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2Fkc%2BCsneO6YtpsL3J22UvPvQRZ5enPOdZ93FJXI%2BY3AiEAuK4E2oM0jdjVH5noF36wuLHJJWDno%2BvL15E3uzkWjBkqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCKBsHrwvLHcc7f1xircA2DcNXh5ubciw6MgVVeEbLNHj1Q2pREGgiNqBaARDFY%2F9DcoMfYDHjHSFV6Ybb5EtH0NFnsycGG8KlrFrTHm%2F%2BXhifOrqMOgcNDjB6bqI4IOBgCsWD2%2Bb3kdSE30J%2B3jtrQIYa60wL1Dp9i9RQYL8kiQ88atDo1lpEijgdtTNxMbLq74Vg7NCngos3hKayGimmnktMXzhcm%2FzqDSmXx6xIpht9ud7UxTk7xC5hXgcFdb%2BDFovC2Bf7D7Juro8QQUidwPNc66mArqpHHKkaTHCnkzgZ5z5COeRDpiX%2BwWCVMKwBmzqNvaEcWv4vjBCAs9%2BdChbjuFOaxZPhCGyFBy%2FY%2BTsag8ozRI6lO48JaiSnaGFGt%2Bfdt5lOS34c2tmCp36vwQEDMbu%2F8FyFRkeIrylVOx0bbyeymk9kUnJ%2BsEWVZ2zWgKW6WIzBvgllTyYSPwN9kE9u%2Bp5%2BPSdlHCzMZdlzoMTxnrVYGfUgLs8v9AFzk8hM1IQI84viXsisEKZgycEJylahgKG8RXbzl6xxZ9ZyI0QTilgRVmgR3I7AC6Mn5XVSrAUw7VGwBuiRFbmxV6O%2BUti4jBF29W24jkK4WVe2llDYmDrNnvgQhZ5Y7rIP%2BGy7Bs3Ojo7JdoKmMGMNSf4skGOqUBYFh2n32RxVTPdNKXmQgGri68%2BQ101P1uBYURodgBq9coiISRv9nCpV%2Fj4h9wAO1FO9JA2EoM4foARB9AeBDgHUhCv0oEZ0SP%2FHGq96bylur2RvrFNpDLkelhOIW6mz5EVETTnKu9CQJSGFQULPj%2BNpsZrIYPmWSntuQxECwU8lWvc8DyX642Rjkew%2FUcN3usNiCmqsWitaIosYk%2F5YrqPnvHkpmL&X-Amz-Signature=45751c7cbd4790d2392d1be2741686c5a9ca22639d7f35ebdd09fdf7528d2819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

