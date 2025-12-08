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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466773HHI6Y%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnHZhD4ekl6dtT%2BbU32VLpeFbkbSg6%2F7LGKEUzIclSmAiBESTThzqogQaLpxBi1EuOWWfVXutegUSkq6EHPKNN7sCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FWXJAMZwODuVhwCwKtwD3Hwt2YcAaEeP4NmK58xL1aamx%2BX9bJ4dIKnybdFYq18KfoI5avk8C36YnTub7T4NMCiSCcssi1dtVKnyObATU88fu8dkXKnEQ8SG1luByly63NLwFgjSDbOvqRF%2FVsm9wIkzqD4RE1C4BqBVX1MoCPOU%2FKqJ1MCmu3kpwWC9Nea64fVUstRfxkOfgCDLo4F6R9x1K5YTJ%2Belpd2supGo8trXf%2B5FoUC61GDjkNGRq%2FrzQjcvRz6wSdscD8CYpNrsDc1p%2BruVNVsOj89pfJr9AM0IzNSD4mU9DGBu9NG%2Bm7dcwJNL0Z8HlnRRe2MQroCnnL3SCDXO88dFzMMKcdLbbzQYuvsueUwWHRPoz3ikTB9GhKyN32GF1rTh6Ak5EZc7q63HXwbzoCZ%2FFAG%2BcD5ffFzrJWgiyrlGMHubR02vfJww%2FikzT%2BnSNqJJlV3ZP7Nt1PqdZpsRsPoHNkPRjxnUGUyhgvK%2BpEDfXaMRBi7CNckZlQkEdc1MNzB6GmhMBzm4ArgFfNeH6B47%2FiDxKZA5T92Cz9x2Mia2ieYYlHFpeFqsEgdbQYR2GfX65o4KJZAKCPWaHA2gFPBU4X%2BUkFz%2BM1r12EgF5T1hlL9OD7IwD4dTLgipzxi4bPZ%2FSM8w%2BpPZyQY6pgEqfYX0BmCXDZOS4oibL8iW%2FMi4t%2BJ%2FqGYX%2BGH4r0Pb8FUbZQ6RwmBE1WaPkwJTdciP5XX0obOajLdOBCbsQ7mffGdj7SPrbQp71uHeboornAXM9jKL2HYB3pkz7%2FnyHooik6wxTvpwch8xBQkfllv8hPWjfz20obBs99ayVI3ofXXD9y%2BlWYQnWQkNcZQoTnn4Sp4HuwXH7b9M4HKuDWCFrn992IKB&X-Amz-Signature=79ed3dad231f64a4a48f9d75ab99b6977d87414d53309067838ad3c943e0902d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

