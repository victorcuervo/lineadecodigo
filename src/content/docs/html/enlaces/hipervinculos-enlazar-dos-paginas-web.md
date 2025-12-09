---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN2VVMFQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T182443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAM7CXOEolrg7DiBjKU%2BXby14oM%2FmPacDsrHcFQ%2BUtY4AiEAx3byofDkl9n%2Fq9VxTKKj%2FdDhSSGzK43t9zKsY6V68OMqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGbjRPBfuo8bdQbDircA89P4omAkL7xkX9dfzfj5yzlgFz2T2i9uDAUnaEtQxHnm%2FvnRs%2F4lTH2gVvIz%2BI12qECkqIlan2mdsl1IYPuR8R268KANZjU0BjOaH0NMcwXtdsyqLcsuGDkLdzOYcMUdBsrg1ye1vvvxDIsupPNGGk64BWPKfeFp9ArQLxNVT2sJWcgyHZFek7BXZzQJhpnIai8Cz9SzUZIJ7rKEBtrnw9B0hmtAe2igPSUYpHIv514UhU5Dz14ZwFm1cfqAWi2VL%2B34TH23IxkVgvq9yeldMsHks7rs6YxHefHdA1xlZeZmzCFlDUH8T2ckMS82RVgB4gaW%2FzY0rR9BM4ksAldl%2FXKRLVkwky9y2WBE8l6Co%2BNZvc0ILopc80EZhqoBh8K2JCBKCt4gtf0Qm7OdzGlMnFyp%2FlqdnYGyRNtREJCKYimTChQdizXweXL6fplpBEAppzAVOuRENmiiNIT4slgsaEVwdIVdKwSlvlD1hDDcibUdtM1drXFd%2BsMRhHBi0yZLMIKW3DIOdQD91Wv0ECAm9dmmRlxZWfiemgMpqTnRY4uNd07KmcmVIozkRKWuI7X0VHf%2Fo5PSTXXZpvPCD%2FO3nT2%2F0HIyi57vrjebSekZRGs7H%2FXEUrgFJ441H2YMO684ckGOqUB0uGfIRkWUC5abC1hb9PAhBUc8cHc9C8zfSPRPa5rf7NKRe5TBNn9C%2FxYThG2p66%2Bo4LNikg8bkUB6RSOHjoY6mKG3WJWIlICPo6nAzBrkjPchYxxUJ%2FeP3U8XnvGobUcHFtGFFhsuTIYZmIFxi%2BkXBGnxnQ7b0SU1ZTEmve2PMqjGCg9bYztIwQxwJY2%2BB8NDjjs5kPpflxjoyT%2FEgW1mqG0HEz9&X-Amz-Signature=147a7d63cda09aba424be04ef5d106f2096c55c2b66300c0cfb47d74f128a96f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

