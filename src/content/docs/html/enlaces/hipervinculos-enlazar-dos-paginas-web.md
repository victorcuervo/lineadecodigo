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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RQR2KLQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T012748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZ6W1P%2BoEFHnoqaedA6ipPeEjtQKO43MlgAs8HhL%2FTMAiEA%2FL36qqnojKbU5SPIfgF4sQg9G5f4ut%2BvhVcii3pwJvMqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBu7widhttnpSUaJbSrcA0%2FIrg4n5H6TGLCKajCAf6MRYy75aJc%2BM%2FWHjrbZtayDcx5W3gFrxU9GTiyE2RVSV26NEwnvnBAZc1Qdm7eZf%2FlF1mHf%2Fg2BH2JxORVZp%2BpJTDW1Z5C9rQAcmHULt5EsqLkyGxl2a566hNQnglBkGeAvEuwuA4BcgebJYKsyJOHZvjDngPzuVHopNqdpBwI27qQ%2B1mV4FRPYM3ZbikWwMIEwQvWJIh%2FCQJADQ3c02KGYXbK5nE70yLHzXKgr88DzjQZ8p8GU5xElZP4j2FcdBIUNnyFUbEfGValsK5xyWwDIM71LeQctj2%2B%2F8aCqBVjsbmjwbfhMaBCihnTF5B8oU6qUmcRRAmhwygtqx3jd9DkYsN4umnoLlq5PQhweTLKXWRkjMfrlP4XcCaL7jFbqWtMcTSZhDLS7j4iRNBr40BHGeL0j0FZ9u0OAKIVfel44RDgGz6Z3yFrOU2x0sMMBKYIBRVO4dwxMV3b3Cv0tHkWmZvtT%2FBkNoLrXCoY3UHDh312FiGdC6%2FW27dfiRMMOsvnF3EYlCNDAEuK2kd2%2BjC0RGCCnR%2FZJngZo6UAizvGYe2krq58GU1883ujwXCBqBro1xyU5aGEq3%2FKACiW7fHffKIyi0qPTFmv2jhF%2FMMrp3ckGOqUB3L90D5LQNugYHWftvJCUeAGrVwNq1r1NVQ0TXU%2FInsDBv8CI4wJAFCWm72NEumQ6rtXoQC8ehrkCu8UxUHYFMyWCV0YENTmNfQ8HYHOJUimMzS1CFrE6Vcnbqw4pMTQg50GltXqUpLMbuubP1S2sMmrTLrlYv3TUs8NH3s0LWlBhtV%2BFfOC1SJsD5tkligz2ANIGt6SXeLNIBc1ttZTOwsVCrT4I&X-Amz-Signature=47541d4f446077fdeb6d941664dd2904e5f38451c31e825a37a2f09a0ee8ee45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

