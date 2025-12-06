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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642LMKYWW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHZ8U2ejsYoNdWgYNHiTYbUe68zj%2BPCDC4MpdazyrfTQIgZxLwiAndJ3pDe%2FbeP69QVHmf%2FrgtqiFR%2B0iGIINOaKQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIPtRcQkiMfTY%2B7SOCrcA%2Fr0VKMJDGzZL%2BdMrzj3aNY0isGDEzwushdSOWxLfsoL8rzalUB6QyOxWWvwVHlYTQPfpvRoLWyERSIHlMv47UuH0m1X%2B%2FKiVK2mIqTaIRgh%2Bvar8ELhrj65V3mJpNVzwRR8kO0N1I7ztqCoDOnL77HPwgbazaSnzq3zCGv6UnedKIMRTXOy%2BrMbeZm6f8zbTnDFSRF0s7rHyzgfQSLvoLS%2FQvceWeVc%2B5MCTtcvUiBILGb6nUddFZr9BFIPEqfgIXv2YixkiRoOF2jynZsPSBPs3C1sOEuAP0De3MDOm1fQOYp7ngZLVb8F6GaEbzNp8eru5u81baXiy6cbVEuxprs%2FUHkyzmSKWyNYGIsk3Wc0H9fC7ULxrFocvafDKjK81NM5HWfMroNPslvCCZ7rhTNzb%2F95dLVU3LKpHHw%2BoKkexztREP%2BLsWtmMcs9UT7Kwn8NIZcr59egqY1%2BR0%2BQzYTwPE30BN7Lvx8S%2FNhDBynVQ61mfi1mKPFNFyRIMCSTR%2F8i2C%2B9L0dsR1IPAM5xa2JuaJgYpZVCVjYUIbfiyWg0NhodV0Cxz9XmO2kZD4NYeBRFvXJKt3zRhLFxmwwKyKey1sy3mkzOZ2mHxWNGASo3Uh35r0Scld7%2Be9QTMLy8z8kGOqUBmYB5XQOA3S6VpkEYCW4Nt0uVuvSOj5%2FLjkdbBgJEEZtrZzJFEZiXvZHb035OwUeG0LnoCz8FjHEDVPiIzq2Mfxyyksvcx0bkke85hm1dKMLmRv2Mb2GpVid8mziPMJNJtOT12J2e0ZJFMXapV%2FcEeEiVPu0rUlxuuaQ0FB1ieqB90qMTzGyUgZkf3Ea9B4NkwQrjR1%2FICsImvzAy2v7g6SmMua7w&X-Amz-Signature=46884876fa2996d2556302cfbd9cd7c46c555707b897e0f31a3a388011a83a6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

