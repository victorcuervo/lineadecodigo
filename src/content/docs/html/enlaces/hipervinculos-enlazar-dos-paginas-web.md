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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMDULNH4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T233112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnNq%2FpcAqOCzlsjorYfM7hcKnpntER5qb8NNH4ZUVO0gIhAPLqgHPCPZp6Tr%2Fk%2Br9d1z8css6BwfdgNffCndidluUHKv8DCGgQABoMNjM3NDIzMTgzODA1IgwIIp%2BQb%2BrquQhsSe0q3APTkW6YhUonsRA5Lo8PCPb85D%2BAW2DNz3aO2ubtObXxYsbeus0QDKyi%2F7yoHMijMtR%2ByPrdF0xUzLXCwCsGQ3Oe2DcOR%2BCrQVJ7HriQaZ5gAkoTLmJkHkTdYKcqvN6q%2FqZNjJZMMBBibAHX28gkpfBJJTu7lK6UIvS58eBLaOprvyI8QP%2BRTKj7DEZW3YMDJvzdppmjdq58VWoEmPxNyOV5p%2FT4iljusbrewi%2FpE6VhcIn6vZiF4bZo6gQEx8Ci%2F3X%2FPg4kP9Dbc79r8hFsQMDdgX2bTFHZOidWzhcn0bw969Os7v5dozE1bTOAtLwjNUWkmyquWQBv%2Bq572pJyuFEyLEQLmIS3rlepoKfqmUk6RmcEd1CTmfvUCB8zS1XA6OzFEFu%2Fv%2BjYIQZJynbBt2ZEG2%2Bjt2u3lpQP9nWVCJnI9vLTZ0E9P6x07DVeNIVrTjTrpnodsQRmzMHV6AQU5%2F%2Bqu%2BKSDx8F4gv55uaiHJZOBZH7TAffstYh8MXulU3kAbJOyrPcxsWS3PBvr5PDaCumAriltI5MU9m9lxDWxrrlE1ftQtv5bUN2xREp6MYJPqPVPAfZ1fbWx%2FIWBRlYoWlX0D1Xb8svttYIRkZ4ztJRmqq0qlPA%2F52VXuETYTC9xs3JBjqkAQbAABs9RUfQIV3sSrmIpg6uP7i9kgklflt5W8kQZTZRDX%2FQRbbaMmKpNkZFPVvqtRhkPZJWXaMVh5H0xxfDIAhifsKuRGtjpnqkwaXP0wpnregZVed9iJtAyZT1V8tt%2B1aHOFQvihVoc1Ku2i1%2BpjUDhJxaJZNKnSjw0POSBVcDuQVCxXNBEumxFf53qu16uv60PrgQZd7Vbc3jk3gdGkL2HLDE&X-Amz-Signature=908020835a2bcc000d7af3ad47b43433a5014d8e6a891f6bfb308de5ef47aadd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

