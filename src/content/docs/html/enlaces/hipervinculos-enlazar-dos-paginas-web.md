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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLMC2PNX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFiwho2MHqL0R0DfoeElZcCazKW9Bxs2mITYbs2fZxzwIgcFcDlLhoz2kL6N5QqsrNUV90iSkDWBWabANNnAeV5mAqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJop30HY%2FSR5ht%2FV4SrcA%2B0WpKw7AtwSf3kj2zkT822CrbBkerLCffv3z9nXYwk6B7qz8ukxZFbOMaAGTqke8o0xmzWDs3RVesaaOomPbSl59HMXHBOcY58Xbd2BOnSewrLmsOy7bpfblnFYeBQOz03Gtj58ybJewDfrDLIbL0InSssg7BIqo7quftbIYdLev3rm5dDxMvP0XGBRet2bmNpOq3J568KcOWdtSHp8Blk8VjuvgyKLdCdCHYWSVCH0zfkrGSC6WGwzoU6%2BUX0Dot4TI8McuMLP3R3NEHXHLcQ7QD3TRa6QThv1wjaAcpRtWjU0ThrIxjR7YUbXYl1engFmJRzdlpvq6bJc34iK3tCPKqXgQ8G06Ysz6HQmMsKRQqU5y2kXlwVSm3kkZx5YmQQ9aJ%2Bx5THicKMeMOV%2FDG%2FHEPX8oPVr%2Bo8sw0rimyGV2S3r5rb%2FoX3FjYsdtmQaZbYY1Rnn3vzSJWQYdg4wyMY5i%2BGwlJeCdA81gqOngPQV0E24dEA2TzeASzp%2Fcdv7rftLIMJni8vCnwlTDVRlGLs3MYrmMI2dOJhUtULG37fCBwv2iIzQanr%2BwjIXNaOCEbSuyayX9b5GTVRRZNsX4x6659Xo5PXP6luXkIcLZ5DSR%2BGVjTb45lkIcRKLMJD%2F4ckGOqUBfGR%2FOuYSpBbolA60fhb4KOTbi2qfHVvL8wR5pchEcZzNOQF2kzmfUIqIpThmK5nAZnGKomVf2B2EfHXuOGQYDIvxMlCjhq%2BmrJiWBC39BVvVG6sGESbVIZwX3eZnjxd5LMNd7iRSyUZZnQmGWf3vMp%2F4f1TX%2BF45hkafzVjRCEVDyIgpnfEkXDJkDIJccsansySfPl%2BNJa3yUD8YQkMAUxD%2FENk5&X-Amz-Signature=4e245fd55e4432fad4fc6e959ce8f46bbad69c92ea51b849e15ac66b3bd82b61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

