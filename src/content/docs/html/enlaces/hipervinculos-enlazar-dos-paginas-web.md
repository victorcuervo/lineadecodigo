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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VFO5PDP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T170456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzWMuC3kXfAo6j%2BkYjtRqT5eOkDreMhvET19A%2BqsN6VQIhAM6SFK0wAds99%2BUz83dkLLE91BzaXFxEjTSuS6JmsOFMKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwGVHlYc57HIaFHKsq3AM4mWEGIrMB4O9zC48GxGdn4lSL3PXDxVLksHVO4ztktIMFjz1uD5GgRybVbjZe5WYi0IEQ1AR3Pk24HEcVrniB1MLg0FzZXB1tEFc5FcoWQETv%2FP%2BJcbmGF6aS1g9kMKIU03OI5a0zlCvI4W9Gm8MmvBpLRee1bcrkKl%2BCoJ7mRkI7dadeMjK5gSkcA0j6BIkD664vTdPAWcqcQCRoHiX3%2BBf3bmfidQufL02yDlzZXtL4ZhyleF33hT%2Fm9xqnQZmTOlAlvGRZ3k1vpvYfdHmekRm2YtPrWYCZnUiMFeE8Jn0UNgPvvYqHJ0Udi8SOSKEN1OSVTENUZ3qHB4V0thgw%2Be07oXEwHpZdQPNpBmWkhlykv4iP9fi98zHC6DB8CDPDAA5Z50WM8rUwTizBf7DiqrgkQ1%2BtUTuvWrv%2BjpbjSIX3gAPx1y7%2F12MdiB72%2BQCq5XJMP%2FfsuygC9Is%2BdQb95AKAVhh9uYEOsA38X2KhnzHor7uEjaLOa3IHF%2FC0z24qx0quwgkNBPuECaE3kCuWInj0L7GOHk3o0hcKKWd2pf60zdIHfP4XpogCmv57hkyIcHguG%2Bwzsn8%2FjPG4EGybu9LLtCkABTyjI7c10VnASmW26XK7IbUcrR2u8jDql%2BHJBjqkAUVbPdCsZQXkg5lQNOxhrGbRF3It2GCcKY8Zim3qRt0%2Bmp0x7psHHYeS%2F7AKycPQOgeG3dhUNHLrWbSsVC12S6N2pVpvZArtoRCBuXrn7jZ%2FHdZA3dn%2FLxPra4nvMVaDBMBHqd070EEC1X5QElp0894QXbLniaOG63NyJFZqJwG36YEn%2BLC1%2FPaZrZ2MJx68pqWjm0cZQD8H53Wu5%2FQ%2FgLBdK1sv&X-Amz-Signature=d9bca58fc3174b418b683f5dd5c2eecac467859a851d68b1d4875bcf02de4a3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

