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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCFJP27F%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T040639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpezM1odc2wyeY1qZCqKI%2BkOwV0O1Kpz4pjK2NozIveAiEAljXWEtZAn33jOZGlPolmjRACci1CsdypleF6%2BcLnC88qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIh5VviUQeDdawb7dCrcA0saTlp%2BBz0%2BW4ENBPreS3eB0in64VecYhFWielfSK01V8bC4h7zjmqH97xKlbU3Nwqen1Y6Is7%2FCgeI8KOW%2Bg%2BUVo0%2F8duPjz4iru0LgdcivqN6ptlp4chyBJk%2Fi3EK2AjuD7PjQ30SHBNi61ALc0b%2Fy6NOHjnlxIcRq5RbYpGkHfZEBOTBCOw7aXuA%2FTGE3I7%2F8nYy7dCB5Sx9NXcuhAhIZi7dx08qjpoEnkSA2FNJsmMqkU0CVbUfB0Y2UE56YmElnys4ERlgFd%2BKatuWjuknTOdfasxoeEuCj4sQQT3oEawkAa%2FplJYm4Us5QYoZj5CTem4C%2FCytqk%2F2KbShBG6oZ4cMMSzmw3Q7PJsatbRHHLZoTCc08AgKr3Pbgoh5xcrqlKPETBx8m%2FpC3QN99NaoWHqmMMVVKK8J2pNMPLlNO63czRPa5zEZvxBXNw9%2F79kf3HsfcT%2BxauHNMyDOJ2jWWpri%2FcbpQDl2bTVCFg9NLbcTs1IdzCHxQJETn5QjdcN1f7DCTNd73qbM5GFaf70fBZshP8F7ersiMvvFLYWcM5hxbv0t4HLnP3tIQ6ujvVXsY4l9%2FhCLkkqORk%2Bt5Tl3JGRrNm4Wf5m%2Bzh4rl5L9HaXApC9%2FoVBiWHDxMKmU2ckGOqUBmc3Yr3IeiGABxpcRSS%2BluWHTSUo6qsE3PkRNxfi0rkr%2FJ8FqL2S5zZf6d0NoQY8OZha0ZjDWR0A9yOuZacSc0s3mAFm1lH98DyMk%2FVyN%2FIDuAb9PX8QeyABJj2c9lc%2B6CEAiQGfR2jSBlpBVN4oPHPULfnwbMLXYPCXkAl4avyvTB00Mp%2Bw%2BQEOBT2MwhEU%2By8wa1Zbg5gDpC9%2F1Dlx6%2Bm7r%2B%2FjT&X-Amz-Signature=5b061bd156ce87ecdc59992fa0e647ad4734269b6bf7eb9716b4614e2fa8ad99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

