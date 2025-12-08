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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XGSJP74%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T104145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxI6UBvLxQLGuFGagTJ%2BnF0ijyyCMMZHYRRTVb42a32AiEAgeExSHLafBlS4xIbSBu2ZKl7acfDZiQvL4Jq2b71ztYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYXtJPpnV34cO5k%2BircA0pMZzIyBvS04FYQ0CouzRIpGoj5NCEKU8qV4X5vpCZ1q3zq12ogsqZZHZ7m427yGXJdCC%2BTJop6GeKwYzwbOpMhQZNiwiibK3gXpOaHAFotm%2BEsWczogqbdtBrptEsLFJSGG3yieCXUEMJyCJ7soNmKwjyvJ2rV1KeoooKmNGKyOlxq%2BjE3ukJCaYMqPokTE99hMPTspQwo0DoZqrnzwPzfLL%2BLULECiKD8R1wEtdKYBhBwROUET5oxbqHnThqkhSOrJJ5h0AwXi0ZV%2FRB9B%2BRNOHAEJvKTQmuPQ1rAeXwIqb4AhiofP1GNc7UtMZKvdoVaDqY%2BmB6SA0fzIwPzEAmvlpj%2BycHWSwrbrTtFjLXNK3iDEmqVZVtGiSch4oIGwNvPfQ%2FNDSqcjz%2FQr8%2FyMXdaI4cKZKjUQLajQLCINCfQvrw0kiGQzBidgDn2Mr8nXMsy%2BVqjEsYEGIeidV937dgLo7dJv%2BRz9Zq%2FA1ismFTD64i3Vn%2FkCojHtsryQ%2BVQp%2Fb%2F7WsLeqv7r%2BLiuEcQfvo2rC3UFdx3Jp1qxoKfC5zJ9%2FVP13OYGJOcY14ZENToEDFA2Tub%2FYPrAm2S86%2FJo%2FAqHkIXb7h%2FopMr2WnLCC0ydSvvVfTinlzxosRYMKft2ckGOqUBins7T2vea%2Fl0yyBIauL2Z1Umnyg0Ft6msPwtSDBca9jWI%2BN9UiefbTj%2B%2F7RtmyJGbJsJek%2FJ%2BHau%2Byb9PVkB6Tl145pcGIKva1QJTY41P6mB7C0okxqpXI4Qe447tytWbKtKCHsAV2Al%2Bf8KgjVyWC5szYcDaXfjWJv2fI%2FanuM40RBcIckExBHtACmjF1AecpkNo%2BNOvXlSKXKdAROGtPn2I3kG&X-Amz-Signature=35d4766de812ff28f1211057846cd5e7e4b59992747b03681828b0495762a99b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

