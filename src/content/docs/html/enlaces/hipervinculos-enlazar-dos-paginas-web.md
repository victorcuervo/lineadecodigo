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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AONM6JR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T155046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBGRraEtcZ27AiHWvMu2mtf5DUmem3SJ4yp7d1yY91cAiEAt%2BiZDtQoorfy40VTaVDMbjzNnwwGIIP5MLq6QuOn%2BboqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzB7qfg%2FScHrCH9wSrcA9XuHJ4SJA2gmG2eKO%2BxgPLA%2BVrD9Sa4vqgfnR8YW1WluAAWHkDTy2DwwvG5GrpZvw%2FuZBtr5Vi8NjJ0lkUwhDLdLt1sFouY8NTkFXdJ3GHHVBwvqoRn1k%2Bsb2jmeJDrVVZ2Xf8NKAwPr8K%2FWewcEokGpJOgy%2FAIciWCpCTkrdQbs%2FhD02fHQcJIDn%2FeTmGQi%2BKgy50T9VFR7B5W2rAutK7ek0rlSvkU1vmq1UoRFdep4sqCwmXzBVrMbLNYjz%2Fs8IuR3yq0JQGFFVDlX%2FCgwAiny%2FlJ2AyJFwCJ1e%2FiwuHzO%2BLgCTcfkUPsSKE6nP4Ke2gk%2Fb0iq3X7upDmnFC%2FtpwtJ81Ctkzvey8vuYsHaT1ejIuQYumqkLEYrP9rQeO1O5SCaqx39P%2F42wbax8%2Bxie%2BOzq5Xp%2B1aM7McEXZILzPdNNPlmocOugW629hBcDBSRbCrqCuLXgf4oLaG%2BnITr6Ivad%2BB5IVthdO30G8XIqNKL6IAaDkXW1iczMiAij4g64o9pwSjfd5lbb4YgehVDvs9UudUD0YaFuLMjEOPPiJFSM1NHsaix3edUILZZsIxtk51ySsdRE0rl108kgJtCc1Zk2XCK8MWR5gfQ2ttIQehuiwEGoW6eZSDEhBrMN7c4MkGOqUB%2BmgKlqeM2hF9ME3%2FY1r0CW%2BV3lnC2H8r1nhvMnknspQSDZTvZc5ayYs8iLDxJCK8bgPM7e2Oh8emMjRSPXZAuqN9rXMq%2BKNMCDRnVthDupo%2Bg6Sz3tWp4jtQnyea%2F73QbsBnMTICP6gZ69eCjD00hX0yoqBKlJKOxVGVENR6Cs16Xz7CeG9QxPuvW0B9cKBMj72Zk6%2Fr22HV%2FsP3XMpbsfZDC6PP&X-Amz-Signature=6e6763d3560f8bceaa442551bf0708ca8417ed1d761508cedba1af75f11a5408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

