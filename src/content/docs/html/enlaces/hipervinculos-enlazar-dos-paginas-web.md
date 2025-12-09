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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG3DVCOW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T225118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHgo8OPZn%2BGIq4%2FZYVjVE9PDhoiS1sx8590JlIyPNH7AiEAm94KpIxLic%2B7dYy7AwG6IAxnKMSs3Vi53lGnERy6q4EqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJxn7xASUg7gjGRn7yrcA0JUr8od2NYSgssgkNQcM3wtXXv6dRje2iYc%2FqG4mpB9TvViia%2B2wv%2FNdL8K7Qdx5BW8gUmd%2Ft67jWuN1TNrbKUpf8Ernn4oW2gorwaDTXoj3%2FN3EHi4rm1ivaKagXaTckTkDgHz3e0kFCGK%2BpOt4u0036SNHtl2eYJnAbWTI27%2BRzMe9okWHghe6YcJNV4t33pFPOjhPI5XjHTo4xzwZGqtG91kiEmbDlxjCjqGGrdvCaDxfFpnEjgsKcDmhADlJjMxKaCM4X4nWNoyFpKGl7QJMl4purg2ISItYc89mCmJXe99lFNTUMUHk%2FqbDL9Q3M0DkskNhekPupCOX%2Bb%2BYNRuHddj9ftViwfVlqwilUasDga7GLqxlyKVOeWto0SSylzbX9DfPJBmghC9mlr7BdWgIxXyqRGkDgHbr5RaU8AceDz%2BDPSGWSDFlnBk2zKedylOt8CdVyG4hnhrirlbdP3Xv4vv4%2BZQ1ivkGJ8dSLwEP3P%2FitpL6H6Q181G9nes61mxn0uavGfTCFDi3YOZQ1dHP9Txuttduvj4Ca0Nt%2FqMf4XQVdsmQF%2Bf%2Fs%2FXXaOfNnAP0aBu%2FvPdQRfS0dygSJr4%2FkuO7lnVYXojvRsYEenphs4s%2Fh5RkcBHl%2F5pMJTE4skGOqUBKob7%2FdVHSU6bELtC1Hw9s%2BXAbqp7TVrVr%2BYhV46eDlHc4MVUYy%2FXieDM7iGmx48FuA41qR4Gk7MShcp0d3BP5AwXyhESFuUCuWnDbmMHTlc8EhPOkW4yicK8iq7YMKiYR9WsHDoIk8uARbtan1vXSQ63Ar1FrHixeO9yUibGBlP%2B05YuWeDyUNExohgVf5iy4O%2BskqfygJRkK9BHce3cCooNGidS&X-Amz-Signature=6807df50b7777380217d21acd5638a16ae9b739743c38d880fd4d103654b8b90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

