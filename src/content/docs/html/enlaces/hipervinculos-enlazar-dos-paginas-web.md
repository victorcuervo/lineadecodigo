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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JWIZSMX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T181737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlWUoFHeM1ejhnDuii2xkjEpPYYpHtHSfAGLSSd4kIrAiBTP3POTm8TUpGB20d45U08FuzpWHBxaadVmZSGx9f%2BlCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME%2BIWwZX4snWgX5nhKtwDBhGKcHCXtO%2B3h5j%2B97uxVpaiGiYcD88ILjNvN9Iy0Fg7W6gowQ7KAeNH2suSEo9NMiMxsjDXuRCL947N%2FspDTRYc1RISoltO5jYTEsJuJF06cx4KSjNWOhmAhHeyKez%2Fb2uaarXOLwVEkR5sRfJghBwovDmxqf423VUFLOljSoBvyg5h7D9EUoTXzGVxFCenrJMvuQLCsJksfh5v1OgAmmjlhoEpUmFm%2FKWs%2FAaVKGCJot0Wwb7i4%2FcOipEbMTShHcsghIwxKcPhzJvPPCXJyBzRtDOCS6cn%2Fv5k3RXCBE2n0oAkcTEwciky%2Fej043POxruhPUt5qlBtRNseOxGUbjTlaWi%2FuGhLTb7QH%2BvEUaqSVAhSUrecoKrTsXHvSNhrtmSLDIuBFIH7u6F5PXugaTw3L2YduhoNt5bZhi8Rmsh1CBrkQjV1A%2FSq2p3eIgNmU4G3nIJ6luTtQy7QQke74yACiKZkXq%2Bd7HuFg%2FHbmmau5k85bDqGX6Wdp%2BOkOCTTAnFwlaE7gX3mlH6V5cRyyXYgITLMAyAGSCX1AOMdVHfg6kf7V4kMPDJv2wjgnr2%2B9KXcu8YEvyl4wdmJunKJ6sQEyrSiTJBvHdsDdS5j%2Br3OrXZgvbtnBCJbpkMw%2FrvhyQY6pgFRu1B0oROphbCYpsTpR981Ys2zJHWVAsXcNXp7BvNmPekHDw8fMzePVFsdXJqqOsPpMR%2B9RjqeETwnwS4sHLS50Sm%2FOm1xXxCgV6l6gDhuBDfmN7D4XP5b4Klt0Bov935rC7rcjHPG1vyeEam%2BdhRv0u7CuSbxoFLjqdwnp8TeAJCWw0G1Vy1z%2BT1jNRcvOZazBamwQ25JxBodJcBgic%2FCMyb1dhjw&X-Amz-Signature=737c0b9ef7683478605d97b3c260adb6a542be7b48ac35de75896bde93405898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

