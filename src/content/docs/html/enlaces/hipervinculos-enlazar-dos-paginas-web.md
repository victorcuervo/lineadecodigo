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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZO3WDYD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T020426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE6YzN0RkkEkA8ZgC%2FrHxAVL4DMwXCgI%2FFCzKxCg4BegIhAJyi6X1QZ3jD37%2B1dvuS%2BjQMPSVf3Jut8SjyOwXyN91hKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzrJ5kHwdpd2E%2B64oq3ANA%2BK6azNqrE4t4sFhE3IxOuqaCCqHKlzUoYb6yLE5y%2BnHx7UprHadwUjM18mu0Nkz4u9hFNbxqxRaAx%2FCuyp7DctqTlvW3FHYL8Hx%2BvZBLKul1YnlVn4T4krXy0uZEizYYku0QSPvwy1XwhOuIn8T1AgRR95eCV3YZDWFWTwg7wp8gYMoMHUbJ28gIIHWQrgEsJeNr1Y00Zct2hIgI%2F9nNm%2Fro4frjsP3wKwEO7dzlitZ7bcMcEbIyGhJfCZtT2xkoQgQ6F%2FrC3rWCJ4Zlm3tBU0LVPEpgi4zWt9kp2F67u5YzXYSx%2BJH0VGeICr4rNOnJg19hVV6VMoaKuIFNKRVLZyjleFbNpr9Br3aqMtOcP4VrB32nJpBvMZMWm1AYEpAi9%2B0qGpVvLgF55bp922yt%2FWsV8BaXnXHyUu83otzAn0ByaJdTYUw2M4DxAYLx%2BW0zFNjd672TxDr%2FmNuwf6ouGT6OKniPraPbows85z5zxUgQoJyj2h3tpz7ljv%2Fz8PNdPz8etaMDB9krDKoAVZe%2F1zZUR9rXvlJbopTna8%2FjcK7laqpI8q81MAa8bRdcxWOOIar70A3%2BhTWwOhATK%2FQGJ5k5acMLYxBfKaidZA4oaR8f1DPQbdxxco5KWzDs0NjJBjqkAV5qOzRl4jKyLTJPrDDqcJw7pazQiCJzFPHOYhYsRtCJOKRUtbmKpzKnftPMXbfLR9rmF2SMjHy%2BcmGWcP3RgLwaLKLlSgcqx20s%2FdFUPvUb2U9hdZj9fcLSKyPQhSDQt3gzFViiiJ0SVni%2BgyV1TyrwBVBmQBWET942TUnewzMakooQhAGAsQzsLrhtRaoCzMA32EdNuEaspMkxafq%2BFRRmpmES&X-Amz-Signature=107f34ff441402c43632e9b62fb195e4965d95a1eeb78957181552ba02731b3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

