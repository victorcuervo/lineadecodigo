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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UISTMP6V%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCppY3pROKMO8DzSZJFPrGCK%2FKeszS6OeqvJqROMT2P8QIgO%2FFDQMTvog28ihMdVPbTOSPxKrvrYkevNc6XE7XwLqAq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPIhmXpWAj9cbKvmVyrcA6Usw9RXFOuOqGU35fedxsjpa4NHfZd6f8P143dZBTxbin2dtpxP5e%2B5pW2LFmglzzEkrQ4LtG1vfFC3bqkkxidjDFpH4d9Nk24iabkwvuz4M72uYtMzmZ4cIfR6E3XbLB%2F3qH7vThgDWnzwOB3S%2BN3zMvn9ugqShwhW8oND%2B86q17fikYLNl9MbUUCb%2BSR7JOXnDWDNbEZYAtWI4s7KCpjglBITk9e6O836p4DOrRAzcygjLUbwRfZDRWpeCOUleDGaJCK%2Bvqy1YlwFhFekT661Q3e8EHLk2BF1wSHC2207FUPPTHpbSN60f5%2FZbSHx%2B5%2FPPN3v1yCBsg9SVQGRR7UBH%2BwuOeQk85e8Z8nDITwP18ug2ADGCFMELRk66aC2IZ4Uk%2BsDBV8EMxErPTLngxSbp%2Fp%2BNkoCEFtHxyOMdJa4e0tgsuoG1lZ5LwEJ%2FSeSDukhHUyV8OVRSp7vgfSDgAhGK7hyxyjPgQpNuhJleJhpOJjtgRiLhVPrBB9N3Mq3ExywA2D0Af0Cl359wBRYgJZ8CTSxMZyNIu8phLjdUmDE7CXLN2ft1eMSJyuF95RUACPa2oWxD4JYDBvG9USBWZfOZoUrYjsQtbx%2Bdvt4QjEilZ3tni%2BVp2vB19szMP7qz8kGOqUBNPzJaK%2Fe2qMcLWKkj%2B3clZYTOn%2BzN%2BfEj4TDzKfWLhheeO3fyJLUD%2BAdbzu5R8ge724QDUskgYCb8WsSNYUV%2FeXLEUToFkV7%2BKA0AvmOhajqhrHvWnEHGtYLbU%2BMK%2FALeMrgCFG1BjGpjv5Cs08c3ffUlI%2Bd1QiotcAWxl71phG6UhGPRXRR6K2QFjJz6twCKdGVtvPdOgqm2ghUoKhyu%2FPS5z3y&X-Amz-Signature=cf4ce917fc0dcedc6996477cdf0d83669f644fb9d733ab4ed7fee31e96fa08a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

