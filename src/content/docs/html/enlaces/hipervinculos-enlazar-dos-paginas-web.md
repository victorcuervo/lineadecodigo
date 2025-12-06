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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4NTPGGB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAy9ikUGtbDWNijnGhCWU8BJUfmS2aO%2FYcvLMpYPtcOAAiBqFrvGoIXLjWo5Jy%2B3XLBUg6ul93JPrVEF%2FdyLe9DOQCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMlq0DRuVFXMblI6BrKtwD%2FGxbx2EdklpB4pji5Lr8qnmabtoL0UScpnLo39zrQ%2Fgqk3udSdqHrcgbL9%2FVQd9AD0S%2B6HBDYGFFeOkjuTVRIsiqHDTxgS1ji2X5%2BqvJrc5GnPu7nnwF%2FMZnK3xHhlP3ZUq22D3EFrPMB14t0QTFzbt5mHvnESwPRuMkF0%2BVjcFAO2scU%2BknN7%2BA%2B1i0Ccarq6A1lgvzyH0F9gTSchdpsAGM23taDDqxx96hIAXzmUJ0vF%2BkqgN%2Fv1anSypRRV%2FFRUGTt5%2F%2FTj3ZUFIlXf39HxHCv%2B%2Bi8S%2Fj7blUegm4PymdvuzxWG2m4PAf%2BkbJzZSvUG7j45Pmr%2Fla0ZA8JLTZfFJCTCdo3kU%2B1cKEMZF6gBDpwDe0Ry3iy8M02GkKxm2eQmOx2M9d4BTQ1kqmWa9m1nq83vyfeWzS7RHjjw%2BrT7%2FfWtZfKTLA2UI8DYPs60Ps1ImLJxQlzP92uxM5IYJwlwhhXIeurVtJSJUm1rpC4vUj0PK%2FEqBTiJdtd2RZSpBNCcqjljMDVxQji1ntb8Mvki%2F7B%2BMg65iOzTsHuwQ8SJEumbXc3zdD96Fkpk7HQMdXNITAngnra7ZG9%2BjFwhj%2FF42V83dKQ6dWjpZS%2Bs3ozL8ImD9%2FmEBDp9GfWu8wyN7OyQY6pgHZEbGCKVUMWfq5WRXVgAt39097Wk7bhUIuJDpbf5k62kJPEwVHzVgMVq%2FEU6TcA5dr5Fly%2BIThzXHdCTvbOqNnUHKmpVjYoQbOOp20Dp3bHb36gfqkS3IH9urN%2FlJlb2pdiDmmN0dM77BvwCrP6s8wCWsNuuoVpe3b5UlOLnAM6K4aKcNhwxto8nggIGlHtiZgojyLzFY%2FQALmFY2SmjHutfp%2B8A2d&X-Amz-Signature=f7ab2410515ca90dbc3dba8c2866b6727dfd651731a82c9667fdfb90ba026f1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

