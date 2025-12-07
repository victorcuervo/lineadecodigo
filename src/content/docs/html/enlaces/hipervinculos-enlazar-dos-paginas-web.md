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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SOD6744%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T100901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9X3dHm7NBDmg4RkBIZ9gKCpDgCdXwzVdpnm15z1eYjQIgRsFwLnA10pxfgMapivJVUxYM5BPSNDSIJ9Yk%2FEnd6e4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcLS4ciMkLN%2BMzRJyrcAx%2B1XV59KTet70Wb%2F%2BtoGFqOUsaVA2938HYJDQXf9lDNFET51%2F0ftAskXfZARqtuAb%2Bj%2B1wOfwAWXEpifxyaKKrMzzjIr0%2FWuWpzFNeYPTcdZ%2Bu5ZsR5mNeJAqqNujikTZfUNUdw%2BnUbZl0FIW1y58YiCt4KAF67RdsNntrECxXU1LdfhQy2ls%2FdUGUf0QuAok2oiIDgEVdSnNgS9jXap6v632y7JY%2BVxNYUZGKZE7GjHJdbT1JGfey428FeLKFJdr%2B7LhHkGG1xOcrbXpqy1H9xm%2FAmoonFR9ib7OgdA5M2ARG2SB2vKqG1rcGFVWyNe5NDfRp%2FoOK67uw%2FALLqZKtYBlbSVgRNT2ugZrprWt5AHya2YlSSOuXbA8HkHBa086vAAbdpa8CO3GM9b72J%2FeTZ66g4ZzYRXty6VKPVREzPwywAMXikNjN3I34CUKtrbSH5D8Tn%2Bvz26RB5KBg3YTeuS8xKikOEXAHIjpS4ipmKHGFH5w7%2BRZUvE0kJ2Fdp2YFeSmXnNuMgtiIlJIJ82YUmo1oLIiBRumDuyDoqim4EmiRqi494Iw8KUK8gddxcz3emKh%2Bq10tPn9pPHLVaBJ3OVrLE4s6MrKGjLaiJ0oZJbjrnCcvA4faUPeuJMKOZ1ckGOqUBrk6JXNMK0z6q%2FQNvtYgjo9FX0xw%2BovNWj5lUwKZjSNYOFHSY59YCDMUGUXSSXYfU3R3n%2BeIyEjOTVA5eiLhtZmVXCfEc6AVUdjT211hET3CBLpzh2C6E3FmhlBPOclFrmdl7iMHkMFIOeWFIAzLZ9qxNgOuxVhVo1IP6VInlHsjOOAN9CQ13FCrXujG45LQTMdWzsGax6biJ%2BOq1KzJD9lwUArWM&X-Amz-Signature=cc5f2c0719031d72949a1f73d364cc6d7882de0a072d1f460e196405f8536891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

