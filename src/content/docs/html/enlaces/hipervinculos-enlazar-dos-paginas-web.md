---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RD34MUX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDn1f7M2zxBx8O2GJkgvMkubBcl81HS7wltp%2B4MP%2B5kXwIhAL%2BqiINhOXMpMxG%2BOctMvcmmKZbynKiefSGJTA7WLTS8Kv8DCEUQABoMNjM3NDIzMTgzODA1Igz3vrAbFVFNvF%2FJcsoq3AOeJpDIdlIsDQ7DYH7qdNvU04U9OeS2yvMa23w2Pp3%2F3gNLTSJz5oD%2BkJV8XtTkIAjniPXN8xi973m2btdMEZoZ0dwq6r7zwmPT2LmPPmOWfI0K4M61rmTVB10FLgd2wkbmIoamnGpP0KmTb1ylqMOHJCzduFuLOeqygMUjHU4zQzUqDMPFA0Lqq0oHWWadVLTaR3DT72T6M00e%2BmssPHthTLQLk7NPbhbKZNWxS8hpT73QWnE7GgUmZEi6R%2BEAlS%2BGmnQxt83KKH9kzbo0BKfkSMw7VDub1zqu8subTQwheTc1xCaSC1PYKS7bz36NRFzWZnk9WDUMnw6doXccawAXwxeFBfPSOtpRw03%2BZAV6Ls%2BBM%2BiiHVzrAKC25Hk7pKIIwlRfAfvshwG8QK4Z4TRKP%2BaOYEwdhx9%2B4aDcAqx%2F2p7%2BnzmyPeIIq3SPRG%2BALICzEyHB27JWkB0rMy17ZeB3n7Y5t3rGJVmU%2FxWLrHyx1IDUiB7%2BPDAa4cYgDJrg7pMIiqqXrCf7jSrerHQB%2BxW31YyopblJd9I2%2BClp0wKjCGWfhZehwcQvxFDCeg9g3tFaW%2FhASJdzhwvc%2BY0uuygJQzZnsBYpO2qbh8AAko4FTPZUIWRDWSLChLnkRTCM58XJBjqkAdDZc2%2BsBg7Y316IArtPZjvruGhq0%2BYBSowGnC3d7lMovS4IJMqZvhpJzY8LZTMdL64yAxbn66z3u17oN3%2Bv%2BGdSL8Bq8iBRIgbRKdgiBQtavjuHf2HJ%2B5VVxEUMOD2dmcdfAchE99vWQ%2BNmY%2BJypqnJLTHMFxuEuZ%2FTPBSyet%2Fu1LZYuIPBLq%2BW3YhVA1hYRCHq5mPV2DhOUD83Y3%2FVQ%2FbjgNa3&X-Amz-Signature=78d77554beff96e9b0e62ec6a2af4694b96f09065188470caeaee3948a0b31bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

