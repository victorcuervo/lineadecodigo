---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZFN4WIY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAieqpge1mrlzvHxSeoiyT%2BtTw%2BNOG7Gc1OjW4gRWIoNAiEA0YFki7PkJQXbdW71ShzH%2Bc3oynOgbewkBMli4571%2BnQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGqDiEPcpRKXJKAXdyrcA3WsvfJCAV%2BJUxBxeahIbRkKTLRsdClK5lDxmYOYcVXe0kiulKG8IOXr9eBg%2F691y9DWe5fSfxXPci%2FyKYMVJ49l8HrkjvYF16F2viq820I8q8q7iHExb3Brp7M4XkDndsqSIJjABCcmFnZ4eb3or0gslaiuBAFIieSsckfIAwa%2F%2F6eKo%2FtGQoO9QMuZ62b075VNmeep8CGXArv6sobgHaoklu7P7wjPEfKhvn2HzEDvBwUV8N8Gc5vH2l6%2F57HnfsJ5IQEVGpfUuhMNFkLIN5jZw%2FU02lIQEnE7PXDxYfdFtbDxi69L2E65iWMJYQcjsmEztfVaEOnLGZrAHSxcV9ubFDRV2Mki%2FkQb5Ki5KqGBh1wW3YSWxYD8zvceeyRbr1nsN13GYMYQu9McIp3qv%2Fpys0JAI%2F%2BqHD%2B4SG09W3gkqs2bHHm%2BTwtTsAkJ7OsbGm6cja8YlqnZijflqk1aFN7P%2FhUb00Mq8psQwSBMnMofHjXwo6RCdDQo%2FXK1moLNjlKoK5PMcDV9KKB%2BwxRt9aV6wY1A9%2BQ1aDx9rkhP1zaET7lmxNKXo0xHMog7p5ARUE8ONZYs4uwqavx9zUSLd1laSxXblUSfv6%2FamTqp3j3NoJA%2BFoIw4irV8UV8MI%2FcwskGOqUBFYsu%2BzZ%2BvgbcJn008L6t%2FyFGb0XlBnyr39WyxG4zqGHGagJ4XCFyzlt7MecHQQwgjRjDzOrzfCXgYX8azC2X3WDesD%2BhUaotQZkYnOEo8Um4BU4R8ojZ3h25j8DYyHwU%2Br7Bk8RtgfWlTTmvHf%2FaehNkyqBFM0UEmGdMcgC4LVjmoZ4Os2C%2FjsRBDUQlOhi0xDavmfOP%2B3KATSriJ4ZKOd%2BE7Cik&X-Amz-Signature=4ac94a566cfd7d2e456e0cebc90b905d1f8934d0d4578abeeaabee15002524b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

