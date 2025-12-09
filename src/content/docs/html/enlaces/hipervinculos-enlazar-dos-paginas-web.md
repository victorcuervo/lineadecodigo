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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SYYUMAQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T202055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDgQKz5Mq3PQAZ7nYBKsF81ohtVoLS%2BmUvJWtmOvYjdAiEA%2FTdxWMGvQtb7RyCMpsLHExM4aCpAp2E6IXbaCw3HzUIqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIngvpP4W%2BfvccMYTSrcA3IUUVKjnwKpIkzNg9VBYHVSzOVd2upiR2%2BmkfqL%2BVIrTDWoJTF%2B%2FJoDRswuYVxzsj5ZSnQie5Q33sWW5n%2F0ji8CI0mMFUigRmsiaMrpjse067mtw36Vss7G0IQXfuUBPngYCzpfK%2FagAcVbZrDY%2B%2FRgu9WAIH0UCobQ5n6QlnQxNaFk8JPkvasQEWiDAeohsDpYI2S7yL2GbX77pVfXPl4gwv2fNm9jO%2B5Y4nJlXNszHOHo4jBCg4Bq1o4q3BXtLahiED1JTq5lTgqQrANUew8%2Bp8urICBEINJlZa3n3VvgxdHN91%2BKiIczNAv7bqi7w9%2FfUts5YWgWf%2FIHLgbLKGs4q%2B9ogy0wa6h0NprW1ShGB%2FPadb%2BQ3IAOYO3Y5AWu%2BaSFRTGeyFhU4R%2Bk4RS6%2B0AOEzyWq5N8heSQTI17SxIH912wrSQeDgwqsKrFhgeMvg2Y8rmmSLC%2BuNFxO6v2NyJcEnSpCUdV9rx%2FnbPnPiL0CpxQdG8VtVdZQIIAf79PpeFFu36H%2BQqk82kf1jVWhPEL5wX1rf4PU01XcQcTNTaXQyoVqVWFKtHuo%2FnJaWdoTwF9XqaN%2Bz5hVggGCm%2BDs1cERimV4CGs3uCXIG4kUaJrPjM1RR77aa%2FnDaWyMMb%2B4ckGOqUB20q4ImcXprmHIM96PyoOMlQacBrrhUXQMht67vZpqtuLQgrQ4E5%2BPbugBcH5nhkV8GHEsdYlhTbgWO1hnO3GeD8Lw2Mp%2FDRe7OjjGJT7R36q7hkLfncUHxZXQ9XBMLb0W2hTcBi6gVOH4hhNu3yCu3hPiQoR%2FRpBSkwfuvXAk%2B0yoAXW%2F2q4D6Wd90R5NdNTBlvEPQEF5bVs1IIm5%2BaN3a0qw%2Fbq&X-Amz-Signature=0ef6afcd136f689d1b86e8ee8e4e589fc3b6c3fd6b4c43d93c47451cf3bf6a8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

