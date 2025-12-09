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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AZJOFKP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T001521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmhCLuopI4k%2Fn7mlJIIiNli6gMtR1E8krAg39vd0rjvAIhALIscvH8r1KtL4OZ9%2FFCRpYM9%2FHPKcUzCOORyJn4XoaQKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQK99S5pn30p8FILgq3AMEhQSRJM53Zdc1faXPK4rQWuPIEjLc2IdfaUCVGOuKSYc%2FRFjVsKZscI85gabnCUhORIc1V4ZChaiwpHh4bHUNGUVUeRYQ6hXd0m%2BnOW6GywKyZ9zZ350KOqL9zvSBMUEfx6GtHsnZIh5EtqsQ8LNm8%2FDlfh79kQYISqcbCpvFzaobZUlQNFHnIOlUN5jYRVrBHHZmu%2FJLaZYeRCx8hSEs6sComDSHALxYmaYFAWXstdJk%2FJe%2BLVMsfX4NVoHreFeeU81aozExXRwfUNDp5GeSygZCMnpNPFkB%2B7x%2BegjuQ7eMiLXIipMgu8zDTbJSetbM6g7aMU4gy5TThawNSbyCdIfNes8BESiwtBo3aAO8UfeXfYgHnRw0vgmFQorrSOJsvDjuIpsXGtp6p5%2BR5dt1h3u%2Ba8cqolgXjOh9XPZQRl5cKOfUB3S3xPDIFuMnwbrT6Gxn6Cpao%2Bqi7Bu%2Fg4KDAL1D0j7louh0flQ2vVfNse4DfwFOIX7x1bxAMD%2BMcTBbKJ45N861Ecb8v16BWLmxCw9jqktwxKw%2BayqgPdbRBrCLubIhag%2FDggY2uPmWZM2pf7QwPSpkbZG9jIfZ2bNoSbZQvh06uofe%2BLYknAz1rT31%2BeBOfgNGCbKfrTCgw93JBjqkARfAtvD7niEDGQBoFmpqBUp2vj6H3ivU291cQkj7ZiINNyrBphM32RrG8c4Iz0fEsTVNA%2Btq52uJViVXE4iyK6Ap1ESfqF%2Fzjh4B9pBY3R5X4eeY9BNSk08aZypd4Tm%2FUVHt8fwqM1jH8bDl4zPQEtLHZFmoAIRvR76EBBkPJSiHk2d6uSwt%2FMvEeOKyfYXuM9vEKsOIV4%2BpWCuZ%2BlOlo6vh8LwS&X-Amz-Signature=37721e5160e7e4cf4e65d6278b7a0af055e15c4011ac63614da2d9bebe05c32b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

