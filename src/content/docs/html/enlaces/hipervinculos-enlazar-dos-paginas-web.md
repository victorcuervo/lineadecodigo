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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQRQALAE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaxsX7lPjgUSHo%2FgHV88dDGB2W4QIVOI4tMK25CuY7BAiEAxPJleIIgdC8Cf39%2BrCOxP5PrJhVnmcebY%2BChE6PnXfkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDO6oz%2B3OFoKEvdPlLyrcA0d%2Fpl%2FeSOYB4Jq8nQRQIb%2FeDJhK7MbOc%2F65AKUW5%2FxcC0dyhWrNTy3JRFTgcPuMWmiOwej6geOHiRnZOU0qPp%2F0oUClQf2Z64teE95h5Rr0vubJxJ1Fcbsmm%2FaiytVOP7lgjPzkYT6ze2EqLCXFOmie3rPWu6JSCHHARxHdW9jCrltqSrlDww2qPWv2QtmfEZpFKT6Nned4P77S9Hpd2BFdokHmtMkAgu66nIw6mwkv2nvsMUf1TZohtiDnyRc7ezDVXdllmX3K%2FYm4Ret3PQuIQ5dcAokWKaZjixlgxIMUqdnh4BtnIY6nuj2nJ%2BLP0pt9xsOtlefwREDnNFnjqMcH65tbyhu9TL7TcT7DlZx%2FIGLrk%2BFp8613SZ8Zjjt0H7TTHDWFInkmt4npKVPjS2leovaVW0OMn1BSBCvl6PyDg3WMmFkHgjxXslLCIGX2oaHqQIAqfnRrXPAIkdAqQp%2BU84Kbhl53RfUkgi1awMNZsu2KwRwkFyxCmpYTH4MT5lfzUknVL727knlgXKGcszLNJAiIxUW07Z0LKL%2FV020gTZCVd344aEbJD3visWrY7z%2FLu%2B89FOqiTCgblpv0MlyWiLY20hCbK8TwWoq%2F%2BY9ykRI6ewg1SZ7WUS9iMIC9z8kGOqUBQCMJ72w%2Byl8c%2BqNpWwM1wzl%2FASCh3gT3ge8hquHwqmesNFLLpXyGmSRYl%2B1kRewQEi1QfzKZ8SGFsvhWEHG%2Ba3Iq%2F7jPcTBhVUdIawMY30eERJWl1yg273NWs67psrb2G9pa5rwLb5DxfboWk4vYmAg3gt1HS0%2FRSz0IvpsBm6qr7PCnQlOiepGrEF4QNvTPqgsxJpBeH7nR%2FqzAfkt4ItkEYoKm&X-Amz-Signature=e8e40178a4f23f15b05f5dd92a33e565cdd14551017473d44e311e9cc7764669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

