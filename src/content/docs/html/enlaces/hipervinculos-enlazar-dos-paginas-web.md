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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAG2WWPO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmCfWC7%2BFl9m%2B5N%2BtYR3%2Ftw2R7RvOmtmTTYFUdvdNcJAiABkIfiwQRt2W26AQh6CPmo3RaQF8ueTyJ2tEM5hfGFQyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM0u%2FvPZIsgoyMbqjYKtwDzy6pNCJHeDVn65PirDjEaEnH6oV9N9uE8Q%2FyB2kzgOm0VcEjIsX2vnFp2MivroMyugN8HGKbx8tkX7nSgLLLSiz%2FFE2gRVkZ0PUNzCDdVyqjie2DHaOpGp96nGmQFZAeqWDVUX%2BccusMdDc%2B1R9Cyi2KRkZtwzVaE8l8oN8QkI3nZM54qP4ee5BRVZhtDvorA60V7iPA2MGKOaJ2Sg0HnI6VbOaNM3r8J%2FnMVehkKnP4%2B%2FiVomjRGkFJ4j08YKR%2BRXgUN%2FdJ12hTUIxtVM6UWRctLd0RZHzIylT5e98KqWXyVMywan5x4eAuVt7HR%2BUSOOL%2Bo6K1wS4iBrjfKPEdTeaqVcLB0nE263xViKNEZyHPGtdee%2BCthG%2F9PtVxBJfQ02AjXSp%2BxhyDwD1Z0G8NVlzsfZ4eZH7Na1vmVqkJBA%2BJYW7Sd%2FkXj%2BFAMgdfEeT2TisYg%2BkGg3i9wo9eKR7kgyegcdBQ7%2F37iqyUigua68BuUe3HBc%2BkY4AAEvVJA9AIe6aU3PIgvXm7zbNSAAzO8gR6bgn7EY8lYdZzF0vOeoXSkzZc38E5Nmfbj6PHCIGTxKJfS39bzRwdOxll9dRyvkyu87HL%2F%2Fy9Xiw9z6yEOda5PA%2BIqG6w71guM9MwzabQyQY6pgFA3f8tNUGac6yuJQnP56yz0IDyhi90AD2hkkIdisBToosBMkcugOiKFyy0jYNrTyWSfirYsHZyiOBoirIeSygd%2FiDsuejcwherLwpjT5c1590ZnkYhPcSXR9FMkuf7YmBl9FntJSKQ8cXYINOwsND46W99kpqwNK6gOtc0ohp9XwNO8yY8aScb%2F4%2FPlLJ3FpO03w%2BbdcFLioSOFvDsp17uQeXhjpd9&X-Amz-Signature=cf28e023189f2fd91cf0f658d617a115a7ef50d7de3d639f600c5a564ec590c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

