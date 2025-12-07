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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNCX4PAX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T104830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEU13xEdETmibyC0rDMjcGj12bY9S%2B83w%2B3mFHskjEBXAiBH%2FHC7f4%2BF5iF5uBYH6sKTgGE9KSQYbkOD%2BDWMjxQsoyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM29ohsvhYgmOKgy9gKtwDZEpNRAT5Ab3vUE6PlkjHmZDAKSga7xiW33yWWxjUTfRofh1pPnwGNL0iOT7W5PhQ0qRsQkyAN6Ve2FCF8N0SGWAORDOtqNkQLD7pEJuns2lVYjlHeRnaMFiKQ6WIfiMa59vPZjfjKud0LA%2F69COhNkMH5WJbJpZy7OLQphb19q1d8VUj1Iw9suaOgmGzE8B8cIwYLwDGXFCjtFZNQemznkAQPH4jEtcaefIlagTlsEGovzdnYd2B3PXlvB%2F80x81qJZLW7kuF3efD5DAEvjlDcR8uhQvMMIsynMPCzuhKZrRXcY5Pw6i3zYThoLW7vpQ04KwicC5%2Fy%2BUs8xAETHwF2SiLfr3drQcAIwDnICkyyePRfwPlK3pkQdVicpErFuHKDZ6RdqzL48IMAlUqVZCQJZeljiZbWZxNdtdY%2FEW2iTxFtrini0YfPYUlEWzL0nKrR0Ox%2FRvr2DwBMlYVDH93cZs6ULcvIxjVN8bC%2Fkrn%2By759bUCgZlJ0KkTxUarrP3QzLFmt64qnvYKH2rXTfpvXdm%2BCVhVhH%2BkHy%2Birtngh5huJ123Nui%2BltDKn8BXnhuaDN8Ji%2FoqZGF07iT7BiNIU5JGXMmbfBQk1t7Y4EKHqxKcN7m5BkrOQu%2BGacwvZnVyQY6pgG3Kak%2BNo58ILM532gA%2F5IPwz2evCi5HjE8rwWdrL%2BNXVEQQTjZE4GfuI3gQqvgF%2F4DErAAt6Jt1e5%2FxQd3%2FAowmO6%2F60xFyeC%2B39giT0L7qeNxSa513ZUjVoA2d11utcYneY%2Bor9d6VGbSkaa3I9EbyvxIIZwDnyHKw6XLkWtCB7KSed5lEl6d3D03o10PvZL47yBapBBDM5yvZSUClxywjpYH8TwZ&X-Amz-Signature=ecc6bb50234a7be93abfa35919b308d1fdef3303e6a91672ddcce6c489b491c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

