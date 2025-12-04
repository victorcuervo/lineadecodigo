---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOCYIIHL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T145655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCGJc43AGY9YuZRF1PuJzHprNy90v2PVZC0eN4keeug1gIhANWU9HfFQNMGuxRLbKvpITC7dgGnHuc%2Fd3diV5meTbSzKv8DCEgQABoMNjM3NDIzMTgzODA1IgwA6yj0rZXyf3pa1fwq3APzX1Q3C1kCmXExBG6eK5ynez%2Fb70%2Fraz9f6YP0GBZkx6NcW4gAz5eC%2BZMI%2B8hOhdxevaZhWxd9fm7SQwgLhS2SVVQaxhiKamw5osK3C5MOVko9m1hHG%2B40GGZIDCifFmHsE%2FamBVI%2FbREaSpMlFAkcC6AqpNEa5ruMB%2FyxEOgGTS8BsLOd48zeKu3al%2B%2BQ%2FoMOtECslsKo0az%2B1reHopFHuhLrCcAaoZHAhxZxhqde8OJLUT6pxWyuUzza9yCVL3n0GLGA848Kxp9GsYObacKbHdJtGKSOq1LF0o3gN0pEVmx2L9Rq0GY95aqROEzO7PC%2BzE9K9G9tKCb6iaX5hCMlrnn6FLFm4xVe21jpuuTRWfZG%2BAHfTmP4j62z0CAVX9WShflQY%2BzfsexiOx5OOIxm%2FJBWzjkHYVoV8egISMMzjeQ7CooxHn0TVAv%2B15tVSN2Nw%2B1bUxg5JDngLYvBxW1MGcE8cexJJp01MYHfHxZevpsRbwwY90tGYm9%2FYfkDrNIXC8fvVSTnkQmztFpYCpV7faQW7CbeYuhoDoV63HzCnEyVg0pzhp8NauwiB7AON64kVXV5DQ0mm8NogsPfqx1o%2FVqopMIAei6mkG1nAvD41qRy8gZ0Dz1%2FNUk2TTC6v8bJBjqkAeXcuM2V95LnonFfjZBq42Dc7uCKBn5ba%2F5OEbcRNbxEWbmz4%2F7FqcOw4XqYRvAbrzFV8wSVo3kL3SkAVARPgyzUQYi9l0zf%2Fhlbha5xFv%2Bz%2BmKixmGMHHkLvzrm022rzWXlt0%2BiYzpxqdH%2FBL3bN3%2BoWQ0w7kEqTJDsuDb9%2BdxJy1ORvvrTDADJ8BgQ6buSTNjPZq1jWYpMelpQsWdei9rcxKaM&X-Amz-Signature=4390abe61b0b36e2d04959de3902b87228e416c36bdaad5683ac1f38bbafdc16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

