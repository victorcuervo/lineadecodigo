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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6HQBX75%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3O8saNviB2jfrihD3W3qYHR4DGQnHm0ooashJz1AwwgIgdR%2FMDWvcJ4EMwQ7xmrIklQZlOBYJuWfimTabLmMzVaAqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHP2SPEzzmQZW%2F8cQircA5IF%2BpXYI1zDcnNFIncxi1xFWoUQfKAANdukg4iIcKeGznG0eJ28mlZ43zoZGx7iAjvV5yzbB9rXmW3Z25BVJLckiUxAPz1FU4PqNlmJodONjuqjwZ%2BNELiL%2BGdf%2BP7ATIwnHQyG3PtoJumZORWbjQTbbTSj2Dy9smJ4kPV1iyYPYMLZUF3XWAimOSbbDavROo%2FnfRhx2tV29YAX0%2BcafqH5mzE0iOKgdyoAfo%2FxMOWg3xswAFB8pbJWA783SSt1eWPARXqqWcO5Fozu5BJJfRuj5WwU2zLtXmBraPkWH2B7mWmocqgRC3Y3CES4Lsd5euYnPpG8mKHeeLrBmGbvEHCw6mjvxTKbmPK6nX%2F6bvAsXf2e3RD2rIJZjZZKvMQ1M%2Bhv5XqPjZQ9l3BOAKz6YuKcFRlR%2B4%2BR0MRe1SkVTADOnGCDsea3TGRLsZ8YlBEJj1FMCEHABD8bZVATWTJMF%2Boxv%2FL9fFby1ww1oASGogCdgV5NKYHvG4JPHWx0pQNqFqmG%2BZFTdAluI2%2BQKi3F6MAABTctXCyEcuVCuE8luwWsDOlw32Yrvu6G%2F54LjniNvuttfKAuq42bzvwsdehztSwQZm7N06xyGmgNN%2FXIvJ86QJHXXbqW%2Fxm9KKTSMIup18kGOqUBD4UhImmAJFJ5WcF1Raj75ZA48zRnSHWGzNjYumg%2BQM%2BAKsqFy3wmGzS79MsaSqv1FrnRwgmj1NEr%2FNZmNcY5H9Edjt97w4n7ua3Ng%2BURH8KP%2FIyTCQn8ilQ7eTvuusVjY7PP9JoZLfAzF56%2Fw35tFiJBiHtLNerXDGNfA%2F2%2Fcxja8djx3eXw84VR0X%2Fh2PEDRd3y1NKbwmPPY2QlWJHMJzXYBAmm&X-Amz-Signature=10979335c5f85d8950bb9994bbf8ce614aff21ac0dbb44f0d586ed35ab338702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

