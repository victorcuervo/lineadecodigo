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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLCGMKX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T195124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqpAQsRoamcR3eyN9Y7kjdpT1W2ZjYLaaYja9oB%2BmD2AiEA2KtLjIlGR7BPneYrVySOyfg6E3XdmnOFW7ikmVDvvcgqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFIGE23cssXtG%2Bif0yrcA9KPAHsnRyHzhQ8CgfcMu6MToCnC3jQT5cAVD96rVt3RF8DTMmLbK%2FOb7ZlLMDdoAy%2FyrDrQKwx8j7ktRLU4gPm00SP2alCWZ3HiEe2JM%2BP4A21pWTujCcmuMuS%2FbtVuWtx7mbC9Uk0QXrctmuTeFTTESJdLUUwbgfc2Kqtpm3RyGOGKIzwhLrUQLtzLbOscr1u1bhZti4ei8xCP8xgc5pxnZrMgDIQWU3JgsjZ81A0CRkRd7kvdYdqeUNNOcs8EqrHO9cY7yKXfHyj6uQh5T8J6rJjE8plzy5WWQpeMAfGhjeqFSQzGUIxxyx50svfJ3gWvvzAQ5Q%2BIl%2BMENgs8mHg%2BuTOK3xemwdItFJoFBqLxoknSphOKoSgwyCYPkWbuO55APKCP9Y8MjDy1WUL%2F2RFA26bjC8y%2FScF0Gg1P8UYIx2gwqzTfCaRPu0x1VhZlgSyr%2FxCvlM7WCOb0owO%2Fd3tOxDwMxeBLc0Xai2DPfcVPfluPzmzL4CqpSYxW6nUjGjUSnsGm%2FGRtphmdS%2FjZJI40oLNdD7Ac7FQyzEhevovsVBYKX3tXFyMoF6fkKBO7MK2FA%2FQYEDld2ATvoLu%2BaV1NPB%2BZp%2BK7WIgrYJghDn1yZd6Z5Mc4XHDdfWd8MJGp18kGOqUB0cx6%2FKguJM5X9siBUZSnL%2FIuuXVooE2YYciv71Zd5d1TN52fZ7F%2FFDahwkXwdq16fG1C7UCBHO1lspHEmjSAyj2CAaqPA0EYbBS6NZA1zLX5QK%2F8UIBEN6IlQgy90%2FgzU40WIoQ5wQhy3ySuJ1dViVv6Ku77fIWrYJlOiqjDJ5Lsaa48wznSJytyqm5ipzrD0OBsem6yVumzMMI32d4gqV1yFhz7&X-Amz-Signature=27c3ce1c8e195ae797b6759ae75c082d751ef31a72133e83c958e84460dd9a21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

