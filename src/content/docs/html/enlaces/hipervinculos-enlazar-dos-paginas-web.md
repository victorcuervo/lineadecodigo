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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LW6FYZ5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T180716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBO5e4Bt7aVTokz5%2F%2B4YAtW6%2Bi57hevTHBDWe4%2BQetnVAiB7vJfVIv%2FytxXAQJgGPbHqddtk3AqQ6POxo0WeFKVtoiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTohOd3LXycgKSlqZKtwDqBVlQHY4wNrgNEyZIC6k%2Bc2SEYwN0%2BqIdqoEj19BGBZw5%2Fr%2BSEcKUNyflQDGbb4YYk4amgjys8Y4%2FvSenw5VZAd7MkzLgnc7WynUC4xsO49pMWS1XFGuHNEucXOEasa9wwDc78rj8qC4456FkhaLeTDO0BwPn9EnA84h2zglURkOLtKX32ee2hNlTi6gHuru%2B3kZYRKF3yAhkMMIRKCGFsQDf5W4Uk%2FU71oPhZnZeG4gZmI7F2pjSpHksZHj3C07XGKOC1tX2dx92AONPgt8eevOODpboDhtHlQysfytVN7nuVtSHRtyIT%2F5R5KWgGMHg6Vb%2BgvieR1Yo7ZLRPdAzzgHuzQPYtbr7idfYe2gyzXUsBv1UOw8NO9d6GO4HfZ0Y85BTj1FT7GK0UwRSCCfG7rMb5u4R%2BNnBL4p1lH5ZMEGGlz9%2FmnYoyxBzzG%2BS9RQ92k9ub4u0PIlU4IgrYZyps55e6YPAppyTDV5bbYTeN1oTqlTjlm6QRZqn2mXox3c2BjyYZBts0NC0ogi9eDEpK0Ot%2FIIEl3V6e1TaUsOeK76QCgmNiVt8KU6QLRv%2BAb0zyd7Z8qsuXyWaJzC6lXoHdKh2Hmg1Uq8DGkSU6e5vheF%2BdmTKL0NKLAdDrIw%2BIbcyQY6pgEF%2B%2BJRYei0WXJicxI8qYJ9c8gBsBTyR8Lu%2BW26t4Tsc3sGx5f8T0hSBP5cTL45owP%2FJUWk5BHnR5Vz%2BOj4S3B7sQMtb1RA2AbsNcoloPo2sB2leUqaQwDY1K0dFt%2BlpIdDnmCPkExFIZzY0IL%2FgMOH5pBVQRM8SHY8EcOchVACVe%2BO3bmbMeOxVf7ZJAry0VP48NxtkO4yVDEhKVckrqx5qwxDdDAs&X-Amz-Signature=f0a22bce78414ebf1e29d32ae6a9c27f5282aaf66fb003355b2d9f266906e292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

