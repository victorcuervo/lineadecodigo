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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q3MVW4X%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T022829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdldCct6YUQglvtnVfRmFxtQb7ADRD8q5LoKcnfGYtHAiAiUtHCKa6WLxp1Hd3%2FyXSMcwpssGT9Bb4UsUmZXwnS0SqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHuJ%2FHzQboKXsTN%2BNKtwD1jeDUxLqkmds259TfypIh5AaUInJKeKnXbizmsNkF0bHcvqnwoJhUX17oQm5Ie6wrsDd1INUwubdUcoXjrnQNnLXBpFEDYl%2F4PZz5ZAiOn104ocRNlbb41hhzW8Lh6FEfsBVAf6dxQUn17a%2F70ZO5b7809roW8K51Y%2BVDojmprPj0DbfIqWQaYib5gWN2V6ugt0xBBHl4zggx0yytWw9S34dvvzcqMp9SlVdbRdfD902REqguMcFNRAQB4pnBtMuPIlkngYjpzyT6xEXH3dPnAcFVNlfnwE858spdd69CBNXl2EntnjUioJfMrvXBYtaJf1DVbhYoS5CaiGSuBF2TTeIwAJNhgxXQf%2BMhfsJGvkVqNaosKqLxPuUJ1omli1TtfCOqqU8RRoUVHsn4O1woOFxhmEarurFoRFyBNUZWRrqSe0FcnQIyJE1CLGNpAUdpH7BIG%2BEI41ylolXDpJLHmwrnrkQJQMtaEuN5rWd8lID4acBC3Nr6EYjcOI8YXpxwfMooTBqp25ELx0tGUYzZkd1aFc8koFtgycRvxy4ZJtWWu2f%2FK6Xf6XKLMY9hU6v0JZT7bfi26J2fCO7JrvRe1lEqXqXEsdM4uE7FfSOslp7QiCFUiMkbsphIDow3%2F3SyQY6pgG3tvaN5DC2KIaHg6DrcWxJjn2R%2B2wt5iwFJ9zjjgmh4wE5qvxZHtc97fzyxVGaZjqundK5U0%2BwI0nTcQpSxALZ9ztXfwy%2FPuDLYMDtd2X%2BAGDqkzu3cf1FGFYi1GbDPQ8Ckv31JjCxnBHjU9NoIPmxDCKlzf%2Fd1vlPKTh%2B2FZuO%2FNGfsYDGTXlWPsAXEkO9dp3hSDGoLVKZ73P%2FzPD9JPI2KZd%2BMj9&X-Amz-Signature=5bc80274b269058c2e2ccaec0517b82c3f86bf99c4fbbd07c5d0efbbb07e03a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

