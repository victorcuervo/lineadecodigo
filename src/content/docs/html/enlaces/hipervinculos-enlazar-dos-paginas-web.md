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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ETFXHUJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T043913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnHKl2Q1uexcG5hq2kNtWoqdV1n55lEfrM%2Fywe5AGQqAiEAvSMKbQCW%2Bi6WS6aIr4CnFayoLBCHF4n4RQFC0Psc%2FHAqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPevBjShM%2BPewZy4NCrcA6fCefYydglUgyE3%2FwsT%2FWPTLuTAG5mtzbe6qWKo2Bl%2FVy4wVPgG1GEvgmgAII55cNajF7c1%2BxOXpb3TaVlhFemx1mDcpk2gJ7xNeaeJHc7FV4PJMyrNt1a%2BHaq7ZfO20h4tjPEmk5rmcXTmgN1Kh0haisfeFoBdHxoFnibdbXhqcjcom2KdnM2sqx7Mo62PFjppN%2BThYVW8JMvJmesxIa2v1M0Ax%2BGoNAI02pX%2BS%2Bb3GrJwpqaOMLp1QGLi%2B648lVPTjVGzNdDa3Cx%2FTYg%2BsP%2BoExPef%2Fs8XeIe%2BiC7DKLfpnn5C1XuZm8qh0vUiGDNxfNb93%2BENQ7Y%2BTZzJtLYL5bQWaRF6h%2B5TfiF2%2Bcjk7aYsvlHIE6N1rG29hzyLqTmgsAjhsgWXncYokVwInKGD5QeG%2B7mufLGwgHdQY%2BASnGLdUOY605A3S4UKqjzXRWEatw2%2FRh9AHdKMHHlaTt55Kv9sJTpaqB1JtsRpclorPV%2FOJBpBDW2fsEFMyr1k7TOc26pR%2FnW37hPXWpSJvIy%2Bi4R2wXHmp2bQSXv5avHVnndHUG6IHJDuG50Na%2F9PTfllku8V6lnAppdKSV1HTp0lE92KtRn2qEGKUUvN4ZbVNhuTu%2Bu8DvAxC4LSpmyMMuU2ckGOqUBQ9Azzq3LBf%2B5oAWS1hwVhHW8w5HTJkM5T2mtunf%2FPDa7M2aLFXsaG%2Bhgc%2FIEEjhc7RhfHFYr32Umg3j6SMDUsYIUzt9Ue76OAoHONkVJutOe%2FrMXkwwyqzipqpPRCMJ1ax60tlbidZ6lM38SSkZJlRFcwCu0fTka4XIj0L0xXfEAl5guIBkw5tJpNJId899x57iDZN0zSh%2B84HzvHfYhbGaLErxL&X-Amz-Signature=9b112c170793acedd0d00018318b8facdf91b9637b899194ff4832ba6eeb022d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

