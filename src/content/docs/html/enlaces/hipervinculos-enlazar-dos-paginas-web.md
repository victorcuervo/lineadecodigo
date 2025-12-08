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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJNOIAGS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T082119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLbc%2FWA1NlMBg%2FCUC%2Bx9IwaLIXq7hmZdFLKktYX7tiAAiEAv%2F%2B%2FD5QuI4BsIaL8FjEt1nZnPOWne7MyZPT3OrEl3CcqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGSqRKKTsPwpJAtK2CrcA6EJue%2FxEZX5VfnWcptdeay4%2BSwokacquyjx3qe%2FuliOcpBwMuxKrDw%2B83MALZH0i3OxJ%2BOhZkQ5Q0IhKEkKBEjGIHqxMqmpqcI2%2BQfZ4Xkrr7uqDQ%2Fg77D8qMB1kYCf8%2FHtN94vYykvi70nnmFh5EmcMyYp1z1Ny4EGXaOE6BJmFAuNPpgzTvLKXJgnoppAMKCUK1amK8eOrAU5NDpOQB92RD6Dki5eOkVCoAlQ8%2Fnbtq3xI1f5PCsFc5Fp9Z%2FYtbxUgVWfkk3izF6e25ZDAAfQ%2Fcz0u0kVN6eYQFcbZ6hPGzZU9BjGfGitsmUjbjKWIim4dliPb3fQIvMaJZFqQcmimrvK0ZG9NKR7Gzep%2FSeHZ%2B4jMLJ72t7HS7t79ATsQr9PZbrnQHS8BcFPaXc6tKCnuTUhaLw3HGXIiuDc0dgqmSmtN2O%2FCsyyPDizJwf4Tqxy4%2BwdltBhFMwVfZIlwYZCcJp3rOzX1aDJG%2BTTWMBEogplsp6FM%2FxqdOUuyzXYmyQ4qsYfq6ePO%2Fq0CZAXlnam1PktGnE1HtAPgxHZqMg%2F9g0x5xDhvQoXPfxCZisM9Wp9NjwgqEdszWDuZVYZSeV0KxhtSYOvQWFiDRQmy%2F1XR4r3o7%2FnF8VJPjVWMILu2ckGOqUBZ0J1u86RAkrUN3a1tarwHR263L75wXr6Baq2yWsKp71Vn5sKqXARm2rne3RXTr0iGWGHna9r1FA14UQmBbXhHkrwMRPxtFfRPPIu18zwT79lZnfKnP3RzT22TY9Ic6m7WFLjdUMe1TICMU2aACNj1PYsW6p%2B%2B1AlUq66a%2F1xgx5nGg9TeVjYi8V9YNWSAz0fEI%2FzFFzMod0DZJnvKvnUuhELpQJJ&X-Amz-Signature=aadaba73c4ee48abdce1d9252d1e8d6f5270c1445d61d5a525a9ad1fc3a2cd47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

