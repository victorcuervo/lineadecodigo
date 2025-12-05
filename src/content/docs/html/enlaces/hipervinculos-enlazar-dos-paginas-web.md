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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G32HS3J%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZPNCLT%2FdMO8jtrTBBB2qYTOJEXrnJ9Zc%2BMJvSJl6%2BoAiEAkm1kq7FdABLuQsNBhGP1XrRcpe%2BsHbRB3hfZ%2FPb%2FDbEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDB5ibjjn59XUuvNpEyrcA98CB9q%2FaXROoBco0Ujwew93cE9wblWS7CWSQJGvERaAmUguDF%2FYUre%2BZF0VlDfyIwdvFcsIxRj2PK8KOYPq5Wmd8kzET6XiwPeWcZlZagWcKDS59jj5wnjSRkVLMoQ032C%2B9k7sBd09KRla9RvomsfeHSIZpRgMMF1UoSsgvscmhiN%2FarTf929vER22U1MqLCy7%2FUksZDwo4U%2B7neKc%2F%2BvQVlC7adYOiVAJLu67Yeoj2d0R3OIJkj6sY%2BIz1Ib%2ByKlNTZv4vgCDjGEikbHK6nayVW8ETRCCDu8Aum%2BH6IADH1lFCgj3t7R4X5Zy%2Bgh5khIl40A50LlbvuISksg01zDsi4Z2tWUiEnQyF%2BzRpdgGKFbZ7Reo2FYhdUB2g5d0MLFYi9%2FpIbE%2BSCLRiW7x7oC87LWBrppehf1zD1Gf49xBI34FT%2FgdH4GSGmYLcw%2FzTErp7MaCWvicd3JcabaK2KXytpisnKiQEekyZxQRzWpXWeUJ3UmqMusT4ugSCDq61YieogvJTn9H0OR9mTNmORU69tqi3vtvOCMFlWVnJYIXYV1OfA6Zf4UAldl6J9qfSSvZdSn%2FuqtN9Mj4yudLSSx396vqeck0l8MSTEK%2BM1b8q6ePOJMjiZp70SsGMJj1y8kGOqUBUEBNoW6XPFKztOxRMp2sFBUY4hvwocRZWplqc8MbXYEdMNIi1daCNnDkY2KGFYkNHXgEeqHJXlPO5Swi62mTp4Zlu9LdeAYmsE2qLSjjsq24kcbrPjOpja6YIE4sbtPy3hGz3KvO8PULKOHmO24VdRt%2FzYShT0s2RgRrmLg6d7LypJHPoqhl2KbFbr0A5pIRhhRWSpBWxQrpBsakoFZRWCfE%2Foz9&X-Amz-Signature=20cd58848507a075ce4dcccff9a9bc7eb5da8596b343133354e49872cea955b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

