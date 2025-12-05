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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RQDSGKA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T233244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHNrTM%2F1WtIkFDj%2FoMOpN7j%2BvERhuDRyrinZlXkjFmKgIhAINMq0mPtM5tXGNm4yaUyqB2qp54excR8BoqAz1waKxIKv8DCGgQABoMNjM3NDIzMTgzODA1IgwOeBzW6si5rNtaAtcq3AMKCLrYW1DTKhjmPxFHany6eqIKHoCIV0EudmKQb%2FUcTmu8ldcp%2B9m7YRCAT9eHsXSEYpCXAZAd5Ipvse%2BrQUQSJngcj65opHuBhLX71PxMkTRV3yjobpZfX5xLBKRqqm6xnrmhuk36wJzQN1pQScLrZkYm5tGtHWqAL4WcbiRgwKUHKSERFAaTRTZXu0ohESNeYIGrrKSlqoTxtU8ZF0zum5VwP4u1JTZD6S3QDoAz1%2FDDQq46hvWhaf5d%2FmgyRnltWvQGOzhe7YZTVTD2RlU6KQJpIsIWZPq0TWHdxoaYRdNgz7omGiVc9UmfFOySc8umSlpz89vnDd6GPaft914I8JeRZmskaW7dVGbQoHIqFViTFCCGXbDtU78%2BdBNG6HJS967JhvFC8gq5I8BILa45I%2FKdjLCnNP4BBsJnkWPwarKJxXiRt6HIx6eQ3QQBiXeKU4e3Y9Z0Ps4hEVXTO%2Fgy%2BdWTeGWjg0lvMzuysEl%2Fqkr%2FQmyYktYYwCkcrwbzDL4jKiBeNFnYXNPdEDqbzRglg59DZL%2B74W504TN9DK%2FFUWHNgE4qAGvNkYJq3LeY0A38qKDEri%2BLYzkstixbCHeRubwJC9r1rJJI4o85ok12A7ss2qBdtRTWJwzLKTCexs3JBjqkAfiNc64ZEwA2%2FVBpxOs61SVPDcZyhs5kVkTc0VI7oIeV2QujyKaKCgN07tyAVllv32B1WzxuQq1Kyhorh9Ig41potQQI%2B05eE4laB4UOToScU3epdrvHWaGH7876mnep7O6LSk%2BNrqoq5o3pDXdrbvY4fxVBdBAUlfxPXC8bvCTWe%2FI%2FvlWP0nqBQdBPFnZhijvzDcOL9JCPgvuz78nxz9saAAHa&X-Amz-Signature=1a04e51c360f71ea29007cdb45f1c0211e2b7b6e50bfa6bb6d8f94f7abfc37fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

