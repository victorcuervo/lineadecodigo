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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEQDSRBC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T205028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1IMnEuScVsqPDAgh79x2IwUp1%2BjA53a2CblIlHb4ICAiB2hZIFqmME2azTRSikDqFd8SBzoxhBKGPydtchFbYVfir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMRXXWIa70pkjqQ1%2FkKtwD0kJHEaZwHzFKyoTGLaa52FMQjKDhPWd7Or94s7an0pyJd91Qp8JOKyz2oxRVOm7KuJWvARVMzp62Grh4ZO8B%2BuZ8GBLsp%2BZxLvZgsK4xSB6a%2B2cXXkx5U4Wgdz9tih91pZ0fIqNwQu1WbQgKRfJRhNxR3i9YjkKBidxVItr12wysB89WhQb6hYExYaHaoaUwEE3YlIcpZlXRioOY%2F9Fd1lBvJjMmGGSw4c3JJxzrV3r2OIjB57degQ6xBYeHspOnH3CdMGJqvof5ZXswy4%2BFHcsxBPwV6FRmMudMvhz8XDmWoEBsFS2jgoat5hoL51sX%2FoiVxDkbDOeu3z%2Bi%2Fj5vHfPJJQmDxsNgBR4%2Bxh6ukceiYPy9M85M5DbhB0oMwpK%2B87ljQAfDNgH0zoqt0kAW1uvz1Cq1kfK7BnIZNltC8iyzcbInxdSSmgTPZHw0013yhWdyJ8i1x4ii0aI2DEaKg5TDY7aofaTaILDk%2FcfI%2FPdm0tXITb4XceSWvkk2qtSYkKChxgzqFRn0apom%2B2tzBVUXM6rRkCO6j%2Bx5a7S2XjP1nfV4CzuYpZrYGPV0fRX6Fm0phm1Y09lPVjAywGifEWoR%2BL2VQA9TAqsPLgf5ZOTc7%2Bd09F5N7QsoyHww2sbRyQY6pgHQ5IdKgJhpvQeT7N5aN1zFPDVo2aHQOEQzXohJ2ZrWp9DjHpDHEjOVmNJlJzNGGGyKfsaY8Gc7ZpWa7t2jJrKVbiAgWIaOtprND1oxpBh18rFB%2FhrklJgeBzDqiUTY1pWHtzVeUKr26J1Cr%2FHvqarWC1Oh3LJ56N5oFwsBBiD%2FgVfgMq6c2xl6U9DqTf6tk92XPu6QOKGGYth2K9ukrJ4mCQkLCPTW&X-Amz-Signature=45e6edc455890f5c8cfe0edd85c1792e9e3fca9a4baa90d3ebd7cb64d2e30507&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

