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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7QRVZ3T%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T174342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsDKMLU6Ult%2FZ1xvrC7h16X28P%2F%2BStI6AqItz1rg4NTgIgGhz%2F8DAhRn%2FfSJQZDcog9PSdhd4L7Mjoysf6j%2F%2FzkpAqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLspx1BZ9Lo9tTBfSCrcA93YMnfIDjjBkyY2IOT6leGzwAGRjIpRbn7I9r%2BSEjXjC9Z7%2FWdUrAjpWuTE8KMaNXx5Sot0j8tvgBdQ4aj7sqJOV7MOSjdvOlFdWToI6NXgcmVHrwBNdbUVGsXNS0Rj3ALktxLDkhkib%2FvMQqktk5%2FHnm62RM8XNDmM8o%2F2f7SDeyIne86OD9CnEujDg4OVGsltiQ1eU7%2F4WFS4Yg5n8PgA31QTdDvDWkjjRlpQ0EArN3TD1mENnyHPP0nIT0ESCVBFPFwDyFzkPmqp1s9r5LO960%2Bozt5f0UhXLvSboKwG4izzQRT5gf10uFS3egIYzOi0HXO4NOfe%2BnJm4FdNX33MulQpHNCLVa6Pp0sO0cQWoKmH0oNpHu1DHGxwHuc8dpz3XeVeisIow5uOT7wCTf1xSClGln75jwCK9GL7nSvOV%2BaH8S5ZKWdN8hgBc4823pggpHeM4pqwakddkUy3TDjgaP2Fn5xIPnVNufa4I2IKn4hDj2d17tzMGudcfmeaREBKswM1zcs7xLVQfZBPmVVh9993xsSzY1FwGtmICINilQnUmCt4w%2BIYP9WS1cT%2BGM%2F4Xi5K%2B1TJIMlq8VSIlSeTVjciqNSFy4c1LUMeEetoArdJCpo7eb5S2VPvMMWH3MkGOqUB0FSP0KZjgf1rKN4Qs49jPu97u%2FbWZqjzg%2FXkPMsHxdVjZNscjIIF6a6%2BawSnybqWgeormRYISNZo215FrhUOsccoeT038hgNaZ786HZIqTowDFbX3jXviZ%2BPhUVTkxGYzaZM%2FlNK5zYYp0P9UGv35JlrLZnQN8l6bWgWyiSrIk2yiiA%2FNJedD692zutKIFgtyfwc7OVGmu%2F%2BNxhCvESy7oVYD6%2FO&X-Amz-Signature=b90ae0537cc72010a4f1975eb7c2a06a7f489bb67d8d4925bd9d7d990bee1966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

