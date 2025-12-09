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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UKNNV7H%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T213753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpfQ7LHgkNN6IPpAAtM5JBuhw2r83JvwJZ%2FpORE4Y8tAiEAk8uQS9k2bVYqYqrkNF0SfIe5R4wtkALx5tVuyzL7Wg4qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVPXx9s%2BxNe1NRR8CrcAwA%2FCtulBH1hdX%2BcKgod9BVN5A6EA%2Fuo%2BT9W7xse9hqrgCVhaulfB93JLuaMtGmG51ACyEZoGg%2F0lKYYjPDFfLiIApnxp%2B%2BagKdAj3q4Jvu8tQukc3bD1hslVQZP%2FeuLtRPC6hSE1aAlu8M9yPFEumF4%2B3ZsRB1bo91SNC7jk5maPXhBno2neaVnK3GGWaHn0yS1bp79rN8QzPrXhme2nUUCUiwRUuDoz1N9rwVVqzw%2BvEwymIN1UsV3jAL7QqQ%2F3G6MFJ%2FynuG0LL1SAfIP38uuN%2FCs692rMr9GM%2BPqqJZ4LAD%2ByBceCi8zi1XkMs%2BHSPuJ3zJyHDQeJvJL0KzJgSwmLggdw9%2FTjT6nH59hh1Gk5MhUt72Q86IkzTFZL%2Bsix0DX4101diuKHvrk5vh0TQnmLcKpPZXXeUUjUIvCumx6dtuqnf5%2Bqlcv6bMIcbXS2pdwM3aRfzGoRZWopZtYkH9DWe%2FCGCeNokQz0z7T%2FbwdtYctYN1%2FUULnYnprQFCDvhheis0DkmZn7jmK5dC5uxEwcPDk%2F7KY%2BQJsTBvEBhThq4uLMyGZtO%2FJck2TqlCOCYSZnevL09dJvu5rol0Qep2x1Bwi0UPs%2FJEfQZ0ndJF%2BjZ4QjYBU2t0Yv558MPGf4skGOqUBFMLtndJ5Nn%2FWs4%2FvzvFbBg2rGYyaqYIdCJSPfIwKBydISUHPzTKdGEuJCn8RDzYAqKfm%2FRIK4vIImR%2BEAtAYBPfGLA0XmS5mFyCXf%2BppQ8tGP1ar959Ph82SyL4prUPlgzBQbuKrvb2%2FK8%2FbpLIxtc%2FFOO%2Fd%2F81tYM3u%2FPzd%2BdtxFpWXO59pCCj3ERpMDuKrShZMCOYZ3Q461xtQ1nD4i5aEUZPX&X-Amz-Signature=18c0a4c5aa6f4e4a8576f2af30ad975c2a6a465f54ef575a2a2ab1f36a78309e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

