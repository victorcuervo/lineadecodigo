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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VICRPG4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCZliT6kG1leddDUKpvwVnD9okpVx1Itz9RY79ti35TMAIgd2CX6QEO3wEZNwF2wlZKWnCSyp3JnHGy0F2okFHqtxcq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHq7XD3xQSGXRJTJ2ircA2OliCAhoyJe2q0SUfZ11%2FPt6TKisRfghZfwenf%2BTH%2F80YsQp7EpI7gRL9%2FXClUR7XVNe2Ehpvfm7WGLDksEYSLWA04UQSG3T5OzOO7ApM5rJPvkNHtgNv7bMEc507vfgfqE0%2BL%2BilKsYTOIY%2F9TVnQu2Rt4P%2Fl5vH%2FvaYDC5TBYeT9C0tlg%2FmiYcgHILP0XeFkBkqqEls1gBiz2pP7v%2F%2Bu63ZL3NGz%2BCoK5rPAkXDHfl3c2yUYk1%2B9XDiLSxInyhLM399AMgiwrfIHD2uY8QTj7tyv0g2HPqWNNpZXHFRe5DCMymUwCbi2i3leBmNzOE%2BvCBanll1owqe8aY91Y%2FUxck%2BX1p%2FhiU6vw5D3qWg4tZqM1WxDly%2FyVT00lcM6%2BYyXkhkREWLonjUya50gc5DlChnOkgBgz1eSAYWO2yCgKZSwBVnLOxakkRe3kl4U9um%2FkZ%2BGV55CyUrQqnGWi7v7FCnpquLknuRU4vjNEO9rIu9ZdHmOvq4pNJMrHRoCL83G6EIc0v8ZK4q7AQJ%2BeQFvhdjSZqbDt1F8kmDDeG%2B1Csl9IfMzXkokvt9l5AxIkDOadr3qXssjy9Ih7gCFgYSJv1wv9p%2BKgQKolE1F%2FI3awmdFFatcCZV9tYBUyMNHoxMkGOqUBSnipE2UU7PHjnrWENa0rM9WOxKi7FFgPof91NawoHgCfmw8ix1I58rMOQ6UO0IhgepMSOxNBCtDF4MRKnag%2B4wmj%2FJehvAvTInW7d%2Fl9jPMxBAcuLInryBfhpstZm6nRd8pfvpZ16eQVFkAy%2Bvnvwn6GY3zmlmQ8EnQd3riJftTogX%2B9Jcd%2BYfSw1cpAhPyMJIyG0E9tjHtWfJKQr7eYyAPFigdA&X-Amz-Signature=ff8b51bef3e0291b6c4c2c417b1fb02a875c8d2dbd1785982b3429271b9215f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

