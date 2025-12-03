---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LPOFAPZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIG5dVJeqZ%2B2D%2BLRb6NhblAgwsTKDc%2F0A2GQ8hhE922hTAiEA8zuwOZ790g6tn9efbOv9JZu%2BaZf%2BVr7czKSD1borCGsq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDALZ0sglYNOtHvAw4ircAzvIFr5qR0yWA%2F6Xg6M7%2BjBZikmnoHLCGQ0wegbeWECdny87sVYlrq5ISqpqWNt6ce6PMKkRY97YsbVXQMErxVg83VuqXpuMbaRQAFs%2F05EtievXda3Iz5iYWKkQ%2Fd%2FzmIXtbKcgKaH4aKDmi3LC6758jcRUJ3gPVHqEt6KN4d%2B7kBChMpIA94t90PV%2Fe9oBR5JbWAhMVTFuG6Oiq5QyzCDO6TCmyOGAW3Utu29EP8rItHrOlhsakHXFCwl%2BwiWE4Ek5FIGQaE7DLrqtIyOnNEP7QYiC5vlm5RWqR2pFA6wfnniqr1nrmpligs%2BRm0zBcjBotJ4m4ybVjXWRgZVb8Nb%2FF3pK4Dyvl1z3z3%2FroMbPKnLTzTcOtviYdaPDmCy0m95axHtgF3ox2RT8xZkkCJc%2BApLDry8vlb3jA4s0IeTpDgKOkytkNzWzHKTmmlodta5pkFr6jJzyDVSx1vw1d9GyKvL0B4DFYRwQw%2F9Uwh18Kzs0P%2F2nsCcnLjxPOf3cL2tLxmhaUfboKUaCKasOeLw9mzv6Vt2ifH0P72lSBMC1qwLNAliw8Oa0%2Fj7Qht5vIvcqelBTQ2n%2Ft%2Bb50Ah7Uz94It5bDUwsqd2ietUPU5jdLAEOmrTA7LfhRhE2MM33wskGOqUBt1nyYrhOEoav8WmYhkjl%2B3w%2B2gjx5agH5NciMbf5iD4zRcKHiCXic1HJK7un%2BthWkaRxYKt9SttQKNFPW978%2BLDcRo6%2FaQoVq3M8u3W1XLj8Cao5N0RY6UDo4MFOEXMRCit%2BXKSH%2BclU0f%2BsOgc8f0YsZeGsYOkggPVFvKo4JgnrjLY43%2BeeOHgjAydVDEirN460KgNvYCQQYWpIAZYPKMhsFd3G&X-Amz-Signature=f4e41aa80ac24736f02c452ff9d1eb5a42701debb96c9e3e16e29b0255741e78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

