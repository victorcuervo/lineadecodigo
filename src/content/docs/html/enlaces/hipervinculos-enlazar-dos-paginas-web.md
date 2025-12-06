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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7Q476W%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T170831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BCUCFR1N9KKtU4XRwMRBA5WKHlGIqyQH%2B%2F%2BYHoVieTAiEAmR2sTsad%2FtVjxFamwStNpeNobRPHCy9I%2BpRSDskrm3sq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDB263vYCcg1Rgoqt2SrcA0XMhl89BBVhhKfQCEJnRtSt2tTO%2BeUKo2BGIoONSHOiGORfN8KmS0IbO%2BiHnZFmjtxhYruTXET%2FNV%2Bs2nCQvixf8Edmr8sOhfh1lwG0Vn5mzMcH0XIyjLOmghHsno2PkO2A1vaiJKaVyon1S3SOUTgxEKiuk047s7nBI4GnRpsULDFE95s25perrpRrDQBY31ZEpFpBlxjve5KsIBosPFC9z9ydYj7ubSGfFDgBXmhu8RhDH3GZU739W57tug7KMOyRco%2FHcKjQ2SDPzgu0nVvc%2Ba3OZuq1mNGcPr4%2F%2BD%2BlTXqJ1Rd%2BOGAHQ3r56J5W%2B2lha4AMIW360IcWiyhekd5HJatJGqc9HQPmFFB9JvlQVVK%2BU%2BTHyVq%2FitQT%2F3%2Fp7WimpPdM5Ux7v8N%2FvrHV%2FgvgGmngUXBtULjAq4Xf6HbGpclI4qppz4B0hWfCuEP2VdZg0OiBsGoL1AC3viGgV9WDsonjhYoF6IA7%2BZNdYPKAL8mVioyqlmRCPb9y7UujpY5exLgJ%2Bbsc%2FgKAPQjRR%2B%2FzGrte5UjJyUL4Tg3IFR9EQr3CunMEkFchsXgiNUo%2BB2bF7SPeHS4Zz8HRWNSO5pfCcOluv%2B7lfYebrea%2Ful6SJ3PMHHCVkaOdngfGMJym0MkGOqUBCacjGMSxX5A0TIfS7HYfiD4ycTfBdPWBckYh8XLGH17v82jhcEkZ4WZBxSbMzV3Dq679Z9RLh0ctxrmWusBtxDOW48QPWjS%2Fh0KDJLr0KYfiUXxSNB5P92xYn%2BT%2FDY%2FNl0cIyzuHnqxf%2B%2F38n4WJmG9%2F%2BLT8nsn69xrkXSjaR1ll7uBTH%2BJW0PmGZB2HPQEZuXpY1c8OTfBNJAhsuUc%2B9WbPh6SZ&X-Amz-Signature=395754edc9ca9db814bd6bca0c647717ed4899a7b37c219a5b4bb5336a878b13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

