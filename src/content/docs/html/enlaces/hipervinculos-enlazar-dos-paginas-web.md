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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKZQUEFX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T091505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqwaNP7S5kL%2B6Jvj5cs6KtwL1UzPrHaeUPl22YHviPnAiAqJXJB%2BQpgiJSReguhWCqVBs7s93mdAZaIMQrBXrWsbCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKf416kvfRQeqglNJKtwDWPkZUKDTQW8yVxJ1irghKe5Feo506ImrfBL0b9koErsR90OyMflCptyTrFroqcAyTsmrBnkq1A4YlZk%2BAeByyLA6NzEFpsHFjxaBknxEgKcS9yWIC0b8gTLlz42fJ6m1KvoWACbz3JAFCa1zAMTy%2BiEudOnQS8iA%2FF6%2B5NRQ6oi4%2BEJBA7zsEvdx9bCShY9fuRgZCtaEhjF2scQqHA18hMIPs00bKiFldzHe63Y5eSLnmFqhQ3eZq1CEvoRdHUA7muXsOlmCAJ2%2FWbrJqz%2BGQ6PNQ4FxlAPqgUnTmQmO1Oz0T4jAmepFVXJ8B6fr9jqHmFGddweQsWzyvmqq0gVg%2FsgyZN0t6zyygcBGhe2hLRS7dGtEehaEDntfE%2FMYn%2Be9tZ2TLA5xc6WUK5F2OVV5QHAWeVFkF3XVr4sdYBnzZLX0KQqnTjgq2bRKstTJKpprloJNZnHoxtgjl%2BWiNFkodH1%2F2p21vnyuEOGHZ8mIy%2Br5mv82giFie6%2BVN4pzRhcZ4WdPOnmAzFuegKA49yahuuhyKnqN6NiDC46VvV%2Bnv4jw%2BdPwle60%2BYwga84uwmfEl4WZV8MGysjQj6byf2kcrCs8RbhlKMChqus%2FnU6imk%2Bw94MS4P5oMG9uPw0wlZrUyQY6pgFAy9aOQL4vTTmEfnC1gFVjpZSGyZzs9uTKSPMoCrBdAt%2FfVb6aeDk7czOE3cYIIpc3NXMSD3r4kzpHbh%2BAjkmpCCsE3LOy7XHmdihpRIMFOUxMSA34iQ5U5bfNEaLrMdTJ7WuPB%2B%2BvyqmpYbK9yqKCTu2SJ93%2B4fpDNXNKrCx8qEXfmjGmOWplDD2N9vKiwClPChVn1kh88m45HXZfV2kAFwX%2Fhhse&X-Amz-Signature=1deff75d5d8da55627f4f628f6545dacec69e387c84e375760790469f1760ce7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

