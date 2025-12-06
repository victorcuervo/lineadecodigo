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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLZ226HJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxdps8cEROgyZWWSr%2BXNwXDZ2uCC4J9f4G9EpY%2Bu3lIAiAdOLCGGACVHyxwwYrbwp%2BZQa3j3WiGDlcJUpywEJetnCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMYrsfPNoqUI3mwhUMKtwDpEJ7JkaoB2arjzn8G8a2kAHh090FGAgf1%2F34GET2qK%2F2ndp9VImKz0T5nQDjNCuDq%2FBOuTkb%2BYU5d4HSy3wR5CRWvO0EcaOiBsf14pPober5t6TEF%2FUbOI2fNlF8EwJcy6mHaUoU8n9x22ItaIXlgtxnuwueWE4mb1WBg4xyoldCdJkDMyArh48WdJjebFiGnwBEYn9bhKOmz2UHRCXySqh8w01Fk0Q%2B1UBJHBxCpKqd18GT%2BnnXali4xoTzsZm3l%2F9BMpYC0JQt2OapXoOuyOIhYvcuBRxoaLOH3R%2FTTn5YvkFPPxMWcReCS2FeLGR6EHEo1Qxa4iEwhboHPQX8UculAd4RFpl0FNeUtlknTIlM2085tC1V0elqaMN3dLT3zIlE67JB%2FCX8%2FdIoFz2hxEFfoJJwp2ojue1I34r3fSll5SmFJcHFlpt%2B2b7DqUuId43hyY5GGwyREbJCDwU5%2FSKY1HHHHSwI9ZPMoWZ7EwhLKvjaXN%2Fbpuz9KWqalKF2ahCgA6hBXDqdqrNNuef9PESfsHI3LiHIHBowKDvnGGTEW5r0mCu18ed%2BVQ120mTOrDNNxjf9r1APUV4kq95l%2FvrePJ8nHIreLzHM%2BpMDWIxsBSq1sLgF0RoEV%2Bsw%2FurPyQY6pgEwGBjrPfDOK%2BFAFEYPW0Ph8zz6JgBul9yZi1292yStfD98%2Fcj2ZjRnxq2%2BE0WhnqGk%2BowDFQOLtos%2FvOnx%2FClH0qq%2BrvG6j2SYdHJecy9ymi1T70ZJBXcLWmexFNvvYgiiPBh9BR7fn0DrjDAdzi8dqii36zWmCfU3aUMDpxEiuDmOgo83F6Fnd5zbgc6dWAhi2ueDgT5948MzkLJBEJ1bw%2FsLKCIg&X-Amz-Signature=f60b6c2b0622e8c410bffd5bbfc6e355b4f3a9bb7d5d93d600343902b2dd2f73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

