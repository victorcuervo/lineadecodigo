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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DMDJE4T%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T181847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7UUeTcfoSQWdoWbiGqxoLFojijxqFWFDFOm9RLQXh%2BgIhAIbmH11hHi6%2BBzV2GmfL9sMfzbPDzuCZrH%2FzScDfEOPtKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEkGQkvyG3A7mLkk0q3AOxs92c7lxn9SUur5R9z8Wju7CWnLxN3d6bZFOS2rixrKRhsWBRv0grFF4yccT0ZszGvCoRL78FKDyzSs5ClsLiANh%2Fg608HVgYIl80WHgmIVjyHU8GDAbd4mTZ%2Bw2ate77YTCgxKyaJ4kcfWJts16gFaiPoKhEicA1TE84epBMhIVMi1GISzBHMXYUvSL1MgzOnAOW4BopfSs2OR6CZFAj94%2Fp7oHVP6mS7NR%2BVCoEsvl2X%2F6bo9wOd8VHJ7g%2BbvFOdtQh07loXv0k4%2Fq57FnS%2B6FkKu%2FxRg%2B2kVLt0BaSk2Gp5TAuyBmO3JRK8NyF7hkq5RzMi8%2B2q5z0ImDJL2BtLkpLiniavjkIbG0nsxggTAzVgtpScdMqGcqokPiF8Oc5xvRNvsB5tgG7S5WpazBj6XJlyDS4jG8A4%2F%2B3kjG3aa6f1rxEZerQlpFoHJXNytfz%2FC%2BN3ItrNqVBq391CBvWimHTFZOBwpAGdDoMh8vX71R3E0ysodAL4aFWJGt%2Fvv7q%2BhmJqF8DqLmaLLkcx1%2FGRNe9S8D%2Fj6EEVwpwgnJEzIQtJdnuSbxmD0%2BW2r7wcI2TzTkuekQdqaPg46y9dxW7C41dFvxgrb5Ck%2B7S9XYWN%2B%2BuDWPwBonNI0NUaDCIveHJBjqkAbaDezic0R5HFWoEzZln6OUbF8pycR%2B82z0dek5%2FldbCM2jmiU8gcroSoMXa8qRmRkL5GxnAXzNXlOxeSW6EvYMqJok5srG2QxPgiePD%2FXsgFUHedSN3tjHEkghwb5m0ZEkfj45lXoRvgp47RondRqnKy2OSc4QyqLoTodtguflFyVQrD9k6EwS3LcRf7DZv3XuoNbiqDwESBA8cfAV5lT773y8k&X-Amz-Signature=d64da0cabfbab6dc6d86ec9dbb348e6aca8d2e9071e4ef8dff50148e19eb5406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

