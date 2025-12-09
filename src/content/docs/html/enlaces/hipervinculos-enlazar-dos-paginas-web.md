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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGAONO7E%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T165018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLi%2FLWb8Xd%2FM0jWkC1TRS1Mb%2FmDYjPEEf%2B1wJM47WToAiABA%2B9tq19GwnYnzRBQxH53EaqR3Ajwvpi5VpLRH7ltmCqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVS3AQ4w4tkzdWvZ6KtwDtPAw6wZKsG2TTfOHs8MgqlCwzw28IQWNFEDTRgByaxobhTSU4sJdJcI1p1gW6tdsP9HUOsWC%2FJUYiI6ZmyzrF0XHAoTA7jS2KUq3L2T5S3hXmQ565eMq5KpK7bgPRSnpOuFpIdeDbvtpCuR6NdPZqdIXtS5uIxq58%2Bh7%2B9fWmad%2BBQowPtk1mJI9PZXwisJZMLZhqSidIQc2Xojv%2FNjeEINICOjFYDSEsTArgcd4hf6Tkt2LQrbzjbai%2FdIzgcWiPjDIS3UCzAg%2FINXJ02h8qHoq1SAH9MAfuVPHaJlYHM9xOmZQQiJBSKkgF6J6DyJ19cMij7vSReow4piIziGymb0ckKTgJ%2FJ9aEd0E5TH5S0RIJBqlKPCAAs43oROICNIeXRGQcfcjV%2FmQSYDF8HM4MRQYOpCHfZDI3K%2FLJliPYk4hBQ7K7%2BoFAAmxabdjQv2X6YH56y8b%2B7KKxRBdw1Qc8i%2BsJWymu2gMAsW5DCAfIhGJcunBcxgnmo0pbpbOWoQTOWl0g6GDVFP6Wa7aenJE6W3ut7Y8dp%2BVy9l%2FDrcw3CKte%2FP8gx3gDWxB%2Fx7cgkTxQBgle%2Bwk03Z%2BERF4gawxTV6uk9jHyQEMRMlJqkb2Qvl%2BqLgROlsooQUKvMw65fhyQY6pgEr14E0xJjuaPE9bU0cj8hvFJo3sjN1iLkimjGFiyf%2FvJQU8x4g0thVxSFKwJ3CRgIVwpjsG%2BxcJbBkeKJUAVmJyz%2FisCinqzuGKFjfFGMAU15f0XkESMklMUGQuFnlIsbyDSu1Ph1J4yG8Jy3OtNoxxr%2Fra1RGEdfJCMvP7yoLfqYo04wxKcANiLbdNTAeFg%2B3xIlk7KBEb%2FnKVyHQkLcSg6Ps6Zk1&X-Amz-Signature=904c025a469656771264468403a7e2a00ce0f0900f9584a193d54e82f4ad6d43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

