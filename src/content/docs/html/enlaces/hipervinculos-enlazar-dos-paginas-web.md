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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVZYGZI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T233337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2dYkf3L03Hikk439jw2taWcK28tMwejOHf6jmlztOBAiEAoMTndfZx1YtV8lv%2FfZQj49PdZqycPhz2%2FwQVqckCZpEqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEyZUXejjhggNtyhSrcAwRcBW3CWc%2BlomQ%2FRYVAB2vVop1u9nZKpAfOBs8SCuNzV5x0pKAcrFMxGo8CzQvD9Fl32joAeT40fUnbRpM0rptkod9owyhA7pgrOtlrrlXQzSahy%2BznmaTmzcaUGt0EY27qbZf8NVY3aYFm3NhAbNAxc%2BhAz7YtuQHtUbPVHKuZkuNlSWhK8tgUMxrDDA0PILyTRBWDlRlPu5P7p0Pw%2BBHNqzxNa7t5PKV6B1QTqeTAinfL3%2BTDdZGS1l37%2F6BQ7hgDtBkfgrzpmz0gio9q4KjVLaEsJvwJuDX9lWTCg7ziicKQe7JN3Cp62gbWFFMg6eWX48dIlrykUR7i77Nrpweua5pulMZ9iMWm0MOaX78B2cXrJ%2FQvzetmFMMJnw%2BNP0RUof86YFoOyIH38B8PRJTmqh5Eyw9PsxDypWXncXdoiR%2FRaxbgxOSD%2BVmbfeZg%2BMdDWOdcUjA9KExJftvIYK23NQutZzkHN%2FEjyN1DBQQZnAk9O3R7Tsjjlxf6E9VJdq8sglQLsVzAf60u81y0%2F4FOhsZ8RQ8AUiUVrU30%2F3yn%2B9eWi%2B9FjLX3uh0Vn6yzpR9zg8dkANoUrqKNBVnvB7EJLax7vMLDozOThBJnj6No03NTD93IO3vvZtmAMIXE4skGOqUBZlIsu4idBosf2Eycp%2BbOARbfkkyAZES%2F5v8JRR6lC8Ad8yZmAcB5hVyw2Xk4O8yCEmD8TcKRXozsCSsKcsrQ1j8RPu83zdTED2y0YHCW6MIX%2BalbFIoIbP1wUi1JVbI738dZ%2FO9BTI36xgdlXmKGiyVMNrxqQQfYo8rdOf57lULr7AVm10KY1bfk5gPMKLwRSucVULBO0fOb87%2BAEO%2F5t%2FbGv50R&X-Amz-Signature=6b043b4e7964ac6db43d90ceb4c16ef79e293e9b08cc7b51d5fc31c1af9dbe33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

