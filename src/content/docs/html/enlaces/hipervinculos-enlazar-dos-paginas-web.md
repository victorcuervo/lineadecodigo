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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PEZ4OIL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T131218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCItmcXxO9SfhHtIWbpQIvbZ2%2Fs9%2FwnxORmAg81E5MPtwIhAP43d6mMap9qym8m9n%2B6UzyMeHdlF9YIqBD36HmOXDTDKv8DCHUQABoMNjM3NDIzMTgzODA1Igwd3gB7eqFLkMCSAM0q3AOK6pq%2BH%2FNIOeeXC0FulL9SWSyYKBdo7V8%2BmJ%2FVM5ZRXrJ4L41WMQ2nOJKymJ2AVHqPG2Eiz5wkg3CLdL%2BqA9XczCrB25q3%2BG7MLCCIctnnIpMRbXzs0nOCxbd2DzY7sa%2BLB3kJULQKfm0sEE%2FFiIt00hzF0BoBJfJ3mSYt57O0t0J69G5deymmzILZC6tE4jSuzh0xuxsL%2B1BS1RcMoh8RqaroExlwzsQguipOZxhfPS6JKh%2BNUrqPHrenHccJLVePZf2CoSVR716AXspBpLuYHEHpDjS%2FkWX%2Bt8x165YBEuQ4wXIYI6wutkhXIJrUK3uwlouGNpn%2FLomozFvhqYlFtts0t2TRiZLzLfWc0%2FrCY91rsi4llq26C0TAOvqScnk5Nw8SJjN4Qfa7BxMletgrtfl%2FcowxlsfF17Nik70wAYEZTtImOlqj9hlUWWjrnsLbZVVAvsjLjUTOYSOfyw9wNJw9zzgb1WWhjEnqVsxUDRg9rhQmrvXxCmZJ%2B7rmQOoesqkdNjjddE%2BpmEZbOpuEZUA%2BysT8%2BBreYbGrC01WmZ2SL3LbnNKLRdCp%2B85J495DtYwE2cHDtCyAPH4bMsFgaBJSfANwAxGofSy3M5u%2BKK3HY7C2fWZCM%2B3F5jD3ptDJBjqkAW1RFGkMybh1%2B6eycdfqSAsqa33bk04Kxd8Civzv8nA3AMRY4HIOhqu3hrPOpuKSWXyjSWMJPIMpSHmFrJRaUfPeN1RN4R6OheuvEtpT%2FvjE4njlWyGAVHULb55W7su%2F2uEg2fKLHQ3%2BB3avnJqRQRPlMG%2By97t1qlduN2Sai8dwSQLAVEAxWaDbKVDx1e1iUGFpYrMq0qnCnt0lLAOsxJ5WgxDZ&X-Amz-Signature=99074dd9c57d7c48a1ffee433755081a1d4d552318fbe49cd8f9b9a58e883260&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

