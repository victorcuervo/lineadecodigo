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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNIO4VX3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5TtwmedOB2xTxDWeqGqvhNkPg7oa6GaBy3rxifCyHaAiEA3vIebfyFVA1%2FGFouhubgyjTO63uleyUZT49EkhP4vzcq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHdBwvaD8Iau8YFlJircA1zlKWBGFsTe9nn83yMmM7%2FVPhTrjzk6tGI9iIhGcvahVtDeekjPfmOFMjbfkkNOWTLUaZcc3HUPiAvPwbuUzqOc3EWkZZ9%2Fe8onhtdQ7%2B5SlXCV7MiR8dq8PyRJzaB8IyH2ooqT1ni4bVdoSDLY6tKvGVOjp7nbc9ZPp9UamcgeEXjKqXqNDzYE8OvMWerdkYiu19%2FqTaCU2Tqv6Oc%2FlpyWDSa83nnT%2FhPXH96fXupM1ImhermTIG8%2BhKULb6wWM%2B41R2FNrPOXlDY8OAhHcWH8dim0pLhmEbPCmEw8t99HEhGC7dKVntNMsNdg2Qdk50dcWt7p%2FXR%2B4%2FSLwpup%2BTQk3CQi6gQThaDhu1Rul6Hmqgcz3CvaNOALT3epywsvy%2B6fmRRK5bbT3OmXuFn5I5n9DiFVaRdPskiHUxCklgB6yXW8VbKvv1Mi9aExWB4BL3MBTS9jRxYfjjTk6rMyO8g32JfualZc5knuWJhwvFVdovN%2FQnh%2FdFr9AFK1%2Fhf1BSuN2YYk8BWQ8fcuOZ5JEMyHiJzz2fbs5IogK1%2FKoHN3t%2FRHxjOBFj6I6oWSu%2BffbfJ3c5Ej54vtkMy40vz0tDxBhInPAYW8vn%2FvLC8pWVUgwZmDzHDE08LcDEXBMPDG0ckGOqUBuq6GB7%2F7C6W9AqLCTjpqfuW6HfBnHaLkImC1SNcp54qgAPkgR7041T1f%2B8ykGyeoiczdbrxpEUKLs8BvJ4hFZfFcbNRo9IiiQX4H9dPOS17d27E8oI9bTFd30NEM%2F%2BDfr8GSuy8ijcAiGTQhsSxz%2BDMOV2BxvkhA5T8vgj3c4yRz0urtn4LYF0lwGDQ1eETrk%2B%2FWQta%2FIxwckxBtBu4FA77V7Vvc&X-Amz-Signature=2e097e506f1e54d55bfd1575d8f9575077970105ab51924f8dae6f3b9e90744f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

