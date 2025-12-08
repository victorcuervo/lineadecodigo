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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674U4NQ2Y%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbUvXkjJewZNsSUEp8zpmzVWxShXm9pFJYmj%2B%2FA1Vq4QIhAKvlZe5Gj4RPMt93VRHKrTSxvgDMD854Qq92k7EyztzRKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyda21mXjqCnSqKOikq3AOGON9gHesg3sNeBW3mWKksD005eCkaHPHsFTLGvhj3plXWnGNhhgNEZEj2Jw4uzbS6IMrjzJnAxsnpIu0XEq3jD7kb3n%2FVja0fEm31XtQQqfeSl8maT6vH3R934i424aURRGIuL8U3A%2BhT%2FPGpwqKymRG53AopvtYhQ%2B%2FzUYsWQkYQ33hQ4l7mqJT0CXoJWcbR3JWRSZe9pvEzMA9hpfc8qxq4v3moKXmLmlpFtTeXCcdtGjFByXzYTcQfOMAZQ0AiHqYh9pPomjRCArhPePTl%2B8%2B%2FVrssbcJj8ZreavxNFnAMOyGkOnMZ6HZe0t401R%2B6hed5FdxJZbC2mmloLL%2B8AcYy%2BV2hq2etPAzgqE7iIahKQW7SeSwjIw7Uq4P1Ho4aHEhJXg7DOn%2Bqzx%2FdMSJtv6PXWalgX67Mpj0zWsMtH0GLfVS0SbHojnBQnioWmSNXiwEnNXz5DYF0jTpHoM%2BES7UjwmpfeHSyD8yDFMrpL1IAiU0xigDRaRLcsxT%2BkgG2MdEjP3oDac5xu9jQp%2FeHzfJ5p%2FsP49Oo%2FnBWl35tygxco7SOjFitbuE1%2Ff3X65geVWsgsYv3%2FvpMqzgs97sfhH4qGQUrjFTefGkhoXVg6%2FKxwIimWvzmDbw8PjCjlNnJBjqkAVY6EvAtF5euNrKwd15h5hG0RHrojY6jNNmIaEujIIIVkTgWh9bCF8R0nIwuwaG5Bac7Cv55rn0w5SFm83gIfoTe7HAp%2FdVi42lSYuHe%2BpYA2sTmChcx6uW93f%2F630nqlpNzD8qmH7hLA93tfNXK3EUr8%2BiuIEwxYW2WSJjy4zo5DUBunUI91wFDOT%2BLNINj%2FL3b4%2BO%2F64b%2F6cs7lsgbAEH6i4vo&X-Amz-Signature=f45251958c5ebaaa49fbd252e81577b08cee3b60ad6b3ca60e34687bbb7eb02d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

