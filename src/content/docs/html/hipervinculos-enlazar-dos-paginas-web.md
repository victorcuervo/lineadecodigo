---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOG6EFPM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDIJjgXsrLJ1%2FqqzJlSUMbkPz5veL1mhBKYp4%2F2wao9sgIgGWao1478u93rk1WzPBB%2BlEao55frZYsT9dG937MritAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDNgvsw8%2BstRh7S0LDircA1DKz4YC5F8wMDQAsrT4HDe67wlo8hqv58naUs1OdSBly9o0ziOrA%2Bl2GlcRylhNYPcxtsPgLDfcATsFF2IbxOMm2rP%2FQFS%2BXB9RS9KVNxgJITAMYvQ4yIqN1Vf7Y4NjS0fhM8dHZhWorqdsI%2FQqp4Oy1j0MSra7c5GFDN2lqzswH3ah4faX865gpJHo9cDQxT6v4NQ7xSPnAqfU29ZTK5tl%2B5FOM1ocGaj31QbhMFvIXkBmOtlmjPusoSV9Ft%2FVfpJfAZ2a7S%2Bq%2BniAmYDnhZN27itbKwwBLH7Eq7QY3UUzEnTT%2B%2FxuOPArZ6fhDWzYC1sl9DrpoJ60PDtRcrhWQfzeLzh2aNay5rRmnaoRuLpX04xSmQKyivb3guCigIM89Qr6h8g9N84FJS2mugapjhYMwm3UiLr%2Be6dhayQxnRugZIDWIV74MA%2FqC34VVowMjXRCnU1D09pvuL9kiBjFH3qRZosWHT%2BYGmfvjRM9sjP7rB%2Fm97zCiNg7%2FPuEjbsVviV9Gzb3WOpmBT0XpeLVYp8ocWawTRtzAZDWVBS0ZjKuSmL3kmF0HbW%2BZVIrogb22hX7LWfIcriO7lVFh8EP6coL29SJGzTUpEloUX1lKQdtBf6253iFyeucelMFMKe9wskGOqUBu9h2C%2BTXQjRfMB1iNJybL45xxa23GVmaOIs88570CQLPDAqzRapQiTXCZ2zqRsAQV1ZkjpUGKPmeexILdpymHH3e4vgtFnkSnSZzMazw9GUMhD0fArSYLalOvWswInORhjL6Y%2BWksYxwyS7eEPqfZqXM%2B786nPsFQ8cxzm%2BgwIlxNVR52mzbOWdwXpmVNlr1ulCz3318umgQ2cqtdhoN%2B2XP91er&X-Amz-Signature=5d3694dc6b1cd23a846b40251c4306c8e45fc6a02089932a4cd51c06f22aed0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

