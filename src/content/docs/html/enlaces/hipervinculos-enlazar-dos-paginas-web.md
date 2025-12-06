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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY7GR5BL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T134150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHal0c8WbChbs6mEL7E1msE3ri7ZomeSgAL%2BcUBiicicAiEA5agXL6QHHv3yzKiqmq3yMRMUQrx38mvfOKWDOKMwK9Iq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCZvUG%2BfWLv7sM620ircAxZfXAsgQ6hNynb1c8TYzF%2B10RQvjMprk3yKayrcip64QCaCU1Rc9wiVB%2BL4RXGEb0LueakwcvYFBgpd7bG85PBBW6ZBcw1fYcvdFfDkZ9y%2B4dy136gwPuIgDW0KJV0KUtFDZdIZ8quoyQ9bCWKh8PhbPqahNT%2BYJfypoD9bG%2B1xTJnOVw2MD0I8hV1nSNyW49QEQPTzNtrAVs3Ye6DpH1sBvy9TZl%2BLuDKtKiJtLFhrx8SwJ%2FgWz2qFwh7Yg4BxHYwMro8hVrX8ULplFsvugUvLIrSnp73nON1rlk%2F5%2BNbmA58iz6YdBQHbYH2vfISL7DK72LQpZc0xy7VljovWinz1NB9iebx0fT3uVWzRWOyCUjvOyHGqHmeTKE1ItWZ0SHtRVy94G1938%2BgzZIJCBVcZ0Y6ywkhIbIEGphR8STZG6%2BwX%2Bx06cUKa20v%2F%2FMDF8%2FN8O%2FrBAcKEIXYSFUNME43Hd5jxtv8%2F8YarEw1gnOHo1%2FgATkmpLu853bNf%2FpSrCZmVp6IY0l0RHgue%2BuKgbKjY%2BkQzHHMOxX2NvWeKi%2BVsjS0SIXTfEBYJnFF6Liu63M%2B49FGr2WXbyrzQ%2FhXdx7irmnVdOJczz01S4QQaiiXf10VFYu6KIZX5iYWjMLKm0MkGOqUBB%2Fm6ll8qngtWGRR0DY%2FnPII28SDDhLaePuWbRZbvaNQCpIvTx80g8Bs71%2FtWPDZRDR0e19boj4%2BpVWu0X4f5JabZkesDQaxuL0OGJ%2BgKDEHdJoOG8BBn4wDUS9dTc3a8vMEmeU3XkDAfIv%2FBkJzDra2h%2F5PbbqRdpltiZ0kWosetzD3TMJNA8cmDL00T4FvIPbWWwDJ5sI62uUsQbr43w8OsK8XS&X-Amz-Signature=db3486e307f8cf73a88b6bf912014b76dfa20f688cd6912029a9dccb3af91263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

