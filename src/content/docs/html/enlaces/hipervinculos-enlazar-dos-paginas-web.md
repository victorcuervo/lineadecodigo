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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M5HTT5Q%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHmBjy%2F%2FwWLj7GXoAJMtUb1yytfBQMgYrBCDYTm9M0YAiEAhbvmymXF57OtveA42DWmVIRDRGYjypXbUhMSUATsHTUqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2FPLlTm%2BZKeKXnmAircA0ZNtkkUo7ib%2BuK9uqDL6taXD%2F5W28G2RGCH2DWrjYeH558SNlug%2FaZD9bIIOT4vBntdojZkhcq0WfoOMcs337%2BT9B7DENQli1B79rfSFumxkbAcgl0TZLX2n6N9ue%2FgfdiK2XCuSHK0%2B4adNSytidgJqUnh2gn7tN0FH0%2Fyy4DmcMMlf8czt3%2F1KrL5LHiQ9XPyohiq1am%2B2ehd0y8StHHJLmJnz4CB%2Bfi%2BgD30Z0WUy%2FIxxhz9sND886Y4Yi38rD%2BYizblRFCdTSXxytNCgUiqBetLLZR2cBbN6Q%2F9W4Ia8VtPK4y5KSG4PJ3Qdi20afBAIbY6ZUhbEyWEo8gGBUX3jK5Y2B9om1JL3tc%2Bc8iugwrlKKMXrah1uY4EJNidTGN%2FeXKu0ylThsHtTjJQ%2FKHwiGamjoGd8HbKRMi1QHcy14Jx%2FMARhAiEfboUZPFSpFeIFg9MGyxwdtXvg3smoZFRJgX7JYtZurS5kWyeWaOKa8nAxRxs33%2BBHXescey6ZWa6DcBo5gafY6gJYTcL9QPdsNSgyOk32rRColmmZYwaMxXEKsF%2FAkRukU4FF5elfEAnpf4VvQaR1TeGKWUNGimKGahRaOAeLJOPYWI3ph6dXqa35zD0Hpofx08QMLHA1skGOqUB35bqNXMm62hMdedRhWeYjV%2F8%2F%2Bg6NrfSuCfYD0OIVChz4uepQL1iIp%2BSoJ98kwfbBP1R1qyVXbyXn%2BfUb6JbIcHayNT8xLwiBzPv8ubmkHE69bot7zR4v8jRzj%2FYzWbHa8urCSJSMzGG2p6DnlBE2FWMHUYxp95U6WFjatkJNDwcgsNERKS9kWksUa6hKOB4P6cIxe8MzUQfvwC27kg7PXWm5mWl&X-Amz-Signature=98b7dc5b5477638077eb8b19a8355cbcf94a04942cda5726ac27c6bd2e45b5be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

