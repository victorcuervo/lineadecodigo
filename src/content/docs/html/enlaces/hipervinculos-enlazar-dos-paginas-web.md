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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DEUJRW7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T210129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNamZwkGB0VeF2mtHjbotGTwbdkgSVnGr1w%2F93ILCSYQIgCEs%2F15m2YW1nfZ41RLdxgdVOEtAcJLnun7Xv5r0FTxkqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmyrpuVGp7OKgj5CCrcA5X%2FMOkZFdVWrNF3u5yzYexf61f9Jhr3ObaZj6Oh1GN4DNQX0j50rPoZ%2Fxn1Wq%2FprtD99oVzAC2kN616cgKMIwoRe71rPR%2BnwRAvqtxXUjWLl9BCmNGPO4rb2aNO8UDIkPK4O55xwmuJNpKJ%2FLGkOo%2BAqlG8BCoMqcx2CfoImsSXalARv%2Fg0JFLUnQSG%2BsnR1bjZfALFT4%2FsaYZ5%2BnVyg1l4InsHrElBN1H%2FPdryfD01m2Gk3AkEgMy%2Fs8VqSwON%2BDuAG4x6KUF%2BwrHb29DYrNIUuRAWOCF7xPSUxQzfaHMNFZergfr6foWWh%2Fws3rbgB7CoOKuRaT9c0W0fuW0ORegaF8SKPEnU9AFCW%2BrAyC9a2bq5Wco4pr0%2FNBg3dg05lbo6s4PPiaQTpThPGIx5kI1woK4yUjHnMIMAfuzjptsvzVvVvtpAXCE0rCbj48qpnKw%2BC9d%2B0f2kyNmXiRgNdpKRbAalri56TpLeAqGSyTvXHwwoNex22n6i0NoPgYgfYk0XF0QmbnL8TVZR4ZFCLMCIVWagVuMO2A1kwssSr0Bl4%2Bc%2FadPIsmuU9LWqoBWPSXTWWknWkIuoQBtu4pLi69NbMEIkDaIj7O1fQQYNMoyj9gg5TRnu%2FD6eyFlOMLTc3MkGOqUBaBEJt6vc%2FDHMgg3oNbOC9mSycTsqoqOTtgDZgv54%2BJnB9jpGje7dK4ray2HX0nteZO7EURaOr2HogOCTL9kytnJ79hNb3VJZHZ0NbN6QqXQ420%2BjLm9qmhOijKxxEfDT6UaR3cIzJ%2FWmI2ZNe%2B%2FhNmVcBEv3RnAAEKe71yZVq8tWPtpLEzvr5Nwl2EYnYXTzlomh31%2BsyBwyX999cypxuXaUvGWg&X-Amz-Signature=9e08bd7aed58a8c28f01db23f729df3e41152c808ab78a5d86d5cf2f3d6941ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

