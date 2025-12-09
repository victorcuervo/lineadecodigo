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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZGRDKCO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T160747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7NyWUCh8dHfFrFdYPgLBxHNzPIezp7YR4XlOkX%2F3g%2FAiEAsl98oeS%2BUP9phxdoRm%2FsrvJTn8kAKqQMyaeyDZ%2BuZxgqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLTBeV3Usorq465cyrcA0i8mBUyQq5uxRm6EytD2EiX%2BcNDsMEWn4SydFAsE1Z8QXzCR05a0txVgMHlt0Ert79LuF7ganFcXAAcHeNdZVNodLirv2s5WwEfmmnQ6DXthFDMlRRYdZa0TBQ0b92xa9x4gXIVKnfGCkSkW3XAfk6yV6KcLEr5iNRaY1LPNO5nJ89bgYP3VGfjnVmOHRd8q5aA6rG7sPuVgia%2BSnQdROlpuT8lFIU1kcVJua5EIVtsLGHo6dhXuqOSnYPb4oQG%2B6iR7IUDxdCJR7xldNxMFT6qOnUz3kkx1bI3A0AO60I2shyeA57qTUEiMUcRZipjHI5e5q8mI6gYVT%2B%2Fc3mJfmBwaG06Dq%2FYEtstprlugWD5ai2xqA9f7HiV3NEe2r19RAI0dV8jXKlUF%2Fc3r8bQThn%2Bh69PZ6Y01a5r09eHzNsB7jS5v2OjZiwxOsVwcQST%2BKYqMWGgOezFonLLMpwPWWws5U88cuLYVfS5VqkocRVHHIQquKWIWqGY1LnChF5XL03wZH3i0uzbtDg4rgZKEVvr%2Buk5uSrtGI0Hw%2FSB%2BrmFepNLHs%2Bb2D7d5PlkHU%2FTJjIDJlbz4Mzk5X2Ktg9kk2RFMdLJ0Wx%2Bmo3O8i2kn4ISzFZuIOyCa6LOw8piMM7c4MkGOqUBXfPZQGXUUe1ZIggpErhwLxWaLrGyOOZQRUi%2B4I044LNTbEUw0gSAZo4UjBnR4bYQCRBuqt8RXeHAdZwaZRMIKziDEmWV5uossGQVhdbYOzAMifjrNo%2BqqlXVWMasMkRQZfnUEQuvpXnWhWUqhDJGcwY63NRyI5hR8FHOxzyY7%2FUol2cBiK9pPJIpXz81dPqKJjtcLiXJ0RFkXhPx2eU0B7Nw%2FlT4&X-Amz-Signature=0e24a5692c47c0cae11fc9c5e77f5026f1b736d58ac00bf9aa09d76e3313be73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

