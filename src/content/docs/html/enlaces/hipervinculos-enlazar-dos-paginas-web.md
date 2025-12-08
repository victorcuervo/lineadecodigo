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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G5EQMEJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T143435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdxu2UyQNO2A3keGu6ZOWN7VNhNp1%2F8F3Uo8V1gV1LhAiBcRq%2FuMAp2LNxfcCXfU2K3RuYWFbIqvS6PO402DpCJYSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV7pO08P%2BMHWyrF1rKtwD1wWx%2BSZ5HTIF1Hj22NvEoCobGX5ntr3nbC%2FSIObyFolmG%2Fg2x0KbgYGV6T%2Bz%2FTp6n4d0%2BAtfqOHsGRwo4vQBNkHc3ttMEavrrSOkKOu2l7bFb3q2kK7o1QqVk4%2FvQCZsFyzaiXmRxX0EyHZg4U2YGWEDF%2BX8X%2FA77XhvnKxdJ94f8HElNvAO0yu8fBMjUTAPeDsztK%2FAXRiFJZ5I78FIH1mpKwSzCk%2BqNPPFZHbweGeETzVgdqRyO8ECSDOGRHE5HcuBiu7HywkoQ6xkMc%2BxHvHiYhMkSLAoa%2BdKZaY5GqLRt9yLEo0oB1huiJW2hF5%2F%2FDdPvd63INiIKwSiTaE0ABSfFcxQxnLwkiQGU9afwtn4fif75oGy9OVSQZyHDB4yu8Q3iXO1Giy0VmDIwhjsJ36h757D87Wvv5Y4hB4mEby%2B7O3M7Kia75oO8yYlsyRTs0paWD1n5mVyLFzGMxqAlXaX9HUX%2Bo6TRk02MJsNybiByFSibw5Me9qpuFbKNGZM8PYIdbcSp3nj%2FFrLtBdSNmpgfHmWyaetSVEmgRWefb8B9bMvHarvFZaf8iGG825R1jWEFgaKRqcyK1qV917AJHDZvNkgpUzRu0mBRmgLpPMDjmKdR2zuU1IwOlow6sHbyQY6pgHt%2F3nJXGOvm9runhraQDATq2cly9SnbtiOjbFR6AyduakWQyueAi%2B%2B12n61VIy9%2F9ba60UTrbIrBAFXW%2F%2FxRD7ZlSDpbSZF6ltR5%2FbHh2CLnEHwjANM8mJC95Np9a1yGBU1wMc8j6pW%2BOiA6%2BBf1i0KiSl2iMo0kZCwSGzxB8Mfro2rQrnT4d6sPYy%2FF8UgdXjtEpHHDrf0TJkBf3P79NfuwRA4Qjs&X-Amz-Signature=8197a0ea8f7fab53c93b8298c45060f63e348a4c73757063312d21eaf2c9af9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

