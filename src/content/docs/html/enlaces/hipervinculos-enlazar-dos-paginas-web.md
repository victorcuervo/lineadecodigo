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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UM767WD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T064809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7BmCMBR9WCTjp93FFg4fUdL%2BBmRef5k6%2FcCcYRzpsDAiEAkY9EOUanoMTnTNtC%2F82agyBWTyRLyNkavip%2Fs3psIJAq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJ86TAPaf%2Fv1typMhCrcA%2FXwBxDblL6hBzzpTN5vN3s%2FEsK%2FbtFoctdPHw2VdlNkr06vuUjI6OreeQ%2FH%2FuG0dLiTuOEZEaC40ZtVQ8a80zxcR6G5r63pgzqsQbtfwS2%2FAOq8geB255F0Au5joN4yKtXCK0lLOPd%2Bx7s7Yo7SEgJKyGH2EYMjzt5OWToSB4IRCwrWsnATi9%2BqXte%2Fxet8ehasKNQ2TuqtIjmBiVlmT6FN3zXtZc5AOqJtvufSsqW96fIWqYugtm1Am904mdN2r%2BSrxowqO36%2B%2FyHHFFdY5fELrK6D6Z8FkCQkOnXIS0rxWoWYOpd5oYNdb7UQjgxoHw0B2vWXFzXR9lL2smlf7Uq0RIlW1k8t6JNk1srWbHVLhzTQlMDWp8bjxIEY4OzNoipTEP9nZR%2FE4Ttqy6wi0ox3jK7esjMG2sMY2ciTRgBOuScESR9%2FTUx3kgaQkor%2FBGpcG3dMiJf2QJYeU2i2ikr%2BVtYRNthzlA4sQT30ttiZxzwVqGFBHcocs8abj0PGTpt5jO%2F9tSpF0LDGl398RBU3bZC8b68Tw%2Beh1E42aCSE1Z1m82Mt1WeJdwxcjJi9dBTZO5naZUoRFWGrkSJqyslqmb6uUcaTD7F9U84roVyO0mHUUeEP%2FzYbSAngMJ6xyckGOqUBf9IWN7UXQFxRj67Dqj9%2Bgs9x5uaB30sJyN2l52Lf9%2Bz1i8FnPSlAScQbwkahRUQZPeZWg5s9Ex5ySN54aouKkGY5wigg6TYdbUPOcS5c5EF3EoG%2FSw2PLQwXSgX3bWzAbf5jIDhclNIcGZm%2FKtFucaDKtaSOw2xP7ZfXI4%2Bnyqpwqw4VZYVp%2BLytyokMNNWXRQhxxQmbHp6ZhCysD0HcQcwrrWmE&X-Amz-Signature=ed38037e6373e20f3b7e9d8751d19270b09b01a5af1300fb730881986e1e6a02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

