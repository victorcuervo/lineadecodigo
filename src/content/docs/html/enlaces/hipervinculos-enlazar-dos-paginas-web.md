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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFGRLME5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T160337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeU2wOfwQS3e3dtubBatXA4IrnRuhUb5Sz7jJzLT4w2QIgP7ftzGbVhCzpvOpwt2ej69VPgW0WtzUOqpkho3bOu08qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDIRSs58mw5ua6yhSrcA58DPIGu13wPDYPMdMwc7bADQO1hdnlkuZbVZUhlHHz4dWUabPfo9%2F3pGW48qlRWikjsVWrdeQifOtXimd6kELqrgiVrWW6wmqw8bVZhng2GOY%2FA1lg7onuaL9EMjSPu%2FhbsO8DrcHoXAvnqVkmMx7nSYo0d4fsx9GkCsfXmbxi5bhjmma9uG987YpZZ0OaRvoDnK4XhreVwPZRoV%2FX667ABi56alBPO3rv9%2Fbqrnb55fHJLQKJkPxS9T5j5yJwrzsniwux9VJxwdgz21FZZ4GR%2BR87G7E%2FBNZcVIi%2BJA0aovnZEDDKhVoFAvcmod03wI%2Bp9%2BmVY7qgjZ%2BXVklw4SbbyWbYuA%2B9U74yeaJjQ9Os3dqMZTfYU%2B6iEn8sT9kis2Xuftzmy2G%2FdNTiZLePcKvBq%2F9%2BbPGOfO4eP0ObY6gBMzdeGLoicImuTRbVku6h0pr7I8Jkd6MHrQN8b3bbejNGdO9zhaGKkk4%2FsCReAHzhqrWv0k8p8lzGm0fBqoVCF%2FeXUw66mTspnzqWbegz1uKw8TE2Y4fsX6g%2BQeKbeRfNvE%2B4cBGaxk1dmEkjtwzqlS1DwFZJ2VPc8DhyUTj1wsJ0Zywj04KCiC7xuWCxi2xSsTQMa%2F9IMK3RIw44xMPvk28kGOqUBPlWhxajpQw43wWL2uvOdxPXwI%2F3a%2Fdf9KCmbIvoYZnmKV4TtYd3m4HYbMei0thl1KEA4zyYUD3BcgXHnFN9xj7tyayvjr5ERot%2BHWI0C%2FBKU%2F8tYoBNIiiMNhYyUhYefXI2Y%2FC57HVX5N4AZfcb3%2BV8L65%2BBfaB1Ab2J%2FKFGqyCoVsdiHShBlplYA8zWvUUip6YQQgQruH%2BV8mh5L2k6HAqkyMKX&X-Amz-Signature=7c679619c523375031fe1a6f927958c00cf65042c62c4165600f2d5c8df5bd1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

