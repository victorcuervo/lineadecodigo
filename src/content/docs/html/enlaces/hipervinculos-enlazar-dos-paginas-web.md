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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDME2367%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIqAfJBQW56Lj%2FwrLPbhPs1wPxi1qGRxKTcv4lVS0efQIgfM3Y65Rij7ZIfdhYF8tZ7U%2F2tDRdGGDQjwX96yWE8YAqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnAOZqtaLAN2pEfnyrcAwhvK7IO4p3Xs4j%2F3YPDJmpXLFN5HLV2pV48BaIThFI2GPyDa1QPgN6DZltApSYlndId9gIh8YBTY%2B604tEI7FYqQkQZYl%2FCxTHHd0ObKV8iigmoMA1X3KO90qp9RNlKDFmdqiOHFa1bCKxlDY8sN94NTMRRbi9q3P9xXVR2eWreBgj%2F9BLn2k1%2FedCtkt5rG1PrdcbQwljRLwKbnp9jS5FNzppbdfxMsKu0cQKuA8s1n2Rb1u6acIwTQ%2BkcRB46XpZO81MAxDdh48K1xnPE7ZH%2BdPe6a3v1o81Z3mLfUfoMvwZH9nPGCwygUMkgYCC%2FpMICfJxe48haca%2FTnHzZP%2BjCiJQd30TqsGWw2dV5lfO6r2wKwiRo1LOYlzPix3DqXWZJGZ8NLjoYRxa7s5uqpaxPZlJuxxMokagMkSc1zuqp6%2BTKzsvAEWvnLKjE3JGlrGCNcOMqHObOc9J%2BnKigsilwpQc%2FY9i5MYQmyq%2BRdgjN2U6Pgn%2Bf5NtjwIqpg614yGJS%2BZizJ56Wt%2F4t%2BMgaF86gtrFmTCPrZWADuEH%2F74Jm8NZjba2tCCW5S0sz58R9Pw%2BMI0tdtWlVSyXZJ957ALCW9sfKbmTMEBUjkGAmbdU90yeKwIXkRYyIq0hLMKPv2MkGOqUB0sg21%2FBdxk%2FPWSIK2cAFBDNJljwBz7RBOHiyXNVau5u2RZY2fB%2F%2BUUHReBvi0xaWczYp6Pea5YqkPs5iRyv4dXR4dkim0e9a7yudYmghZBFa%2BwqRMufM5Beq3fKHIFw5K%2BjkKt1gMp2dngrT563wxl1jKqEbiDGqNkJnIs9KIakjQzAkSEfe4Z4YWIZB7u%2FmXUy2I3EiJf21p%2FF7gbD9a%2B3RxQ5W&X-Amz-Signature=cdc0ff413e40a3bad8c51c107720faa68abc2512ed8274e909d590545b357232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

