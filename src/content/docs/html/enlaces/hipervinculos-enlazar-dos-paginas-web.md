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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2THB5HH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T174453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAS4BDVIrbdoDEsKhMnDLy5mPrfuO9%2FmFSmDyzVkycyQIgaaf1UUoFzpm0am5vdOMhW%2B02xRELHplP7H%2FCFuNi0dEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDNzy%2BVz5lqFnZ0dpLSrcA%2Fif%2Bl%2Bcb6TqOjd%2BcRSWJ%2F2aE5gS4QeAcXkxMljA8RycssATv4dU4PesB0BEIrBxCqzOSH515DzBbcprHmpFaiFy9Ih1qwH7bLPrqXqbY5Ji%2FzG2SvnoDSTEQFfbHilYITDQ8QtHLpSL1N%2FFUYFks4GyfO6rVIPmpv1XWtEmXr8x9fWMBMmu8NmoYIGudZ0y9BiqKRstjFeitt8bmFIO%2F8HoIkeG52oAbp%2FwIc2hE9H6QRkBMRpmEtVq5YDplzY8nwm0f7WxhsjHWixUczmt%2FMWlnVCCGys0QwrAqDnOc0wQQ%2Facl11ZMefxC46v1U48zhMBIynDJk0V8eef%2F6UWMxvqe0Rsqm%2FNSG9TeIBesl%2B0sMDmE%2FggbCG%2BiYHDBRabiE5V9Q13lH5N%2FvNQY47Dt8jfaVdxYBGoM7zlA15gzZQTzlqgdSXFSJPxvy%2BsW%2BeW8ve1mEFvGCMVmT7asa8fXfxBiNQQh%2FySXX41CNb8vwt9cR3%2FZvEOwTCpQsfb5UbzeqtiunsOxIe999ZJ3RM9ZE9P9aeKMuYxD5X8cy3RdnNbLN9jzY1KAWX58VoBhVOzrU1t3KsfhHC6R7TaHXtH7HdogDuV35Au6DvLI5%2B95fMk2iiTdu9fAgTc2oNdMIbyy8kGOqUB%2F5IMiF6VGbsyU6FTfekMhmxbMj2%2BFahzehIMEzFDwOUeEswpignDmNqeyAkaMCAHE0l4J0Brzm58R4yvqM%2FgymKMOkKdiS8FUJXpBM1bkjo%2FnBI5y3fNCM7gS7QcV0QXB3bOK3v1Lr8oHe0aj8SpdOCCWUWtHnt9s2KEA9eB%2BPumXXnssIh%2BPS25XDPhu6M4yUABPg4sOV4Bpk0kINjFILFbQ7rW&X-Amz-Signature=c3c64527afbbaa84c3adb346740d57b21401a4760cabb749f74fc68e30dd9c19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

