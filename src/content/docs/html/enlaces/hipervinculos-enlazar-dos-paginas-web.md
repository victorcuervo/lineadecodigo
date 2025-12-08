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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UANKXFA3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T142302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZlIX2lKGpXYyE1316ZO0CsAxO5DKARtiqBEPrC4g88AiBgWyXv3CnoFh2jDVfaMQKEmFEcehVWvs1oLC6OqbtuLCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPFO3X8bcgTcNBCM7KtwDI6OeeGYiNYa%2FAbD%2BWlXUzBTXiwSNbE%2BhnaX%2FmzuRG4djmykAGSvhxctfoZhoM%2FifmVlssYXjMm7Hzc%2FE9lPc8oP1AvSjoBzlqiCol8c%2FXY%2FuHRJ3xnNRDUjkeJkVsLr54usygv8heLgrSiSdLg42R9SByMBEwTnDDXSq9XZYPPMzBSqsN6Cvaz06TQh6KQpJCYCLnbbPoHhlOxe9BK9ZVZSy%2BFC8Z29owIgebWY95gIaBJq61%2F7Eqm8DgQZERNV2iCHPNbNCM9dcZO7JZog4Ac2DosgduC7AJsUubbmBFsjCka3QPf6f1lXVkpDVWkJH9PEhr6Ve65IkbU0LrdL6UiLsc%2FeiboV2kjBM%2FO%2BuLtPt4thvDLsvKN%2BB1rFghElp%2FrYjXbfyFqq0NWY39a4NV31E0RgcKlsrIM4uD9nc0vgYO02zYBW9I1pW5hA6EgYOqk%2BmGN9cEObP%2F15j8Pi22Tt1qJ6dC1WbOUD19jdrBIsqb1hFX9xJDu%2B3WCkR00kAn1bAw37D7UH42nMTGnVT7C4uPZGiGaqwBXnZr%2FNvaf1ls%2BEMYuaq19RQJNdtvL0W9a66CKXj7I7WLxhDXztrrQxl9iiZWPv6u8XP8Mk5KXe80wi4JDQpSj76MNUwrpDbyQY6pgHQSTlpIgjLzcbDfdotchxpFXX%2B3YDpP597pEkBCdf3g1Qa06qCKiJDPxmEiE%2BpWpEzZmUIXNibX%2FBmtmUH0PP4pRwJMUEaMkNwy3femcXLmnqWoE%2F4Lvrt%2BXA1I496MyFdrdkSqYzeofxInvR9QNnUOyriqDC3PF95ZA4mb3mQzN91fPrs8uDWmisYwIc9D6an2R%2BFr%2FIfawHyMH8SB9QF%2FnicMfH3&X-Amz-Signature=1a47dbd301eeb501ab4f353820d13cf1503cfc228142ba4a86a5c5b3cce34acd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

