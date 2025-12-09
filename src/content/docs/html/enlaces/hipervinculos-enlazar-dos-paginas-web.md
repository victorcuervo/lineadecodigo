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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633G2NSG7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T171449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBY8Q3Kg2uutl8RyHAqtrcCVjd%2B2Cez0hvTrQziqTsAxAiEAvjDquWe7wE6UTjHPgJx7%2FO9VNDKMJGTCV8akTWO9dTEqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLrsk%2BZwBQaw7bSn9SrcA7Nb3cZdcSmcw4RR4aTUM4oriylJs1TvsiC4cvooLN8tSMtNkniZqZfhoga4inhcT10hCrGgy8OeowYNvtoxOaLslda0tqvdXquib8GdmnY%2F71vKF6BczS8pA%2BeK8Xfmpb%2B575EEgVPo56%2FrxLtMN7qxsHBwWTsA0yql3fpBOgDm0dxMWMbLsefFmhIwlhoM8meYSXa5jHEJfs%2FB4xtDE7bpkOWY7sezfLR2PRGADRCxllYVReFOn8g6XO4hUdehelCslpXlpl24VMVsU1iuucGkiErR4%2FlVmQqTbZStGXnI3S0mwKn8rNX4oBsMkNtfOxMQzvfmPNI2g9DicRVJ77yzjL4tBVNyVxTAWIb4Sun2yuZP2g9m9UGwM215yElNJN%2F8IwVrCZjpIZKkoZSx7B8zq4%2FUgEu%2FvtQFGEclNv7vhDcDr9luXSfdFCbiIfFr27EBoGbnJP8nD%2FMvNlr4YRKAXHRqpJpGqAHFsa4yeAh%2Fm2F4nOsLu80QyPwwEUceaN9MY0uOlj326P4XnMwd5utpBGBXvPCwMgpbXUQtTIcGRsKLq4kAPh3u0WFqS3xLIZf7LnRJjaoxK8CO2lzUrVktFePkMPAhPF78mkfY6tyIDmQ54jnXh8%2F%2FrYyVMJOX4ckGOqUBTUXGQDkC7i88prer18Mx83ZU%2BS%2F4wNUkG9G%2FLvF2cJKm4pkkigZrjqhRQ85pn3Q8lZ%2FOLYmNY%2BxJFxNv1AQHRbxABs1KVKOixT67EqI2qSrZcvIkh60oplhaVqrzRQcmjq3NIGr%2Fvf6bDjqLplEz5fAfHNsJFwFgBe3Mn5n6P9ulPKdSEQXSZLCzlsfIFNnCtJ%2BpqOKX4esjE7IfUb121SpahbLx&X-Amz-Signature=49d78355da1fd0bb0abe613a4f736a82aa7bd37780fcef8fe0dd37adfeaf96b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

