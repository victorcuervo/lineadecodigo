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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZVIF7GX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T014308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkKPES2Ym1JWGJkz%2FmEFZiWCqukqV3lXXe%2F6er499%2FQwIgfFGVPxxMjFesEJb4r2%2F9H21D3tHV2SL6fT7jFYxWttkqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCW0%2BVFTjiz94lawGyrcA8qe6voK9EWmSm8s0WCq4i61O5tZ1elsFljgRwlwBdAqD6z6Q5%2FxSWVyfz45mH5G0KHT79YkiviCN6yoWSpmRjX3IVvPunw4D8xrmVuZ6GTSHH6URurtkpSl%2FFcraOvtlcVRRFdN0ocy7mPttzPmt9ydxx%2FphxMh%2F3%2Fi0sINfNMLZNMV0jazqb1q3nsxp3mjFaDSMDl0m3T%2FrPLBAZUk8B0DMV9ULIsviMEPjkjIXqapX2e%2F08XRz9Xc3lSzm9LBGU8xWPH%2BlV10EoVRFJe5PngP2AxR7nUOSCZfWcYa2B%2B357me9RSV5bSmGRtwWApJCc4kodqRFtVtMS7p78tvVbwGs6nj43nRurGGiF%2FfYUICX9oSBu%2FixxbsLK%2BAfBd0tB2L%2BtBBkO42f2FLZenWDKWllQf91lbQqJNFwCnQP4llWChMnn%2BknDALGZm86nEgNvju4kPfimj4uB9Rq5YOsTS6hqVH1ypEgB4kMg%2FcEYWfBBdSY2vos76w0W0i9RgQwB7g5UgjEW7DZ4IAh2sQJ5aAfkArFbzkSHpvx%2FvDqb12dbJ2DgrvnXEUQT84Xob%2FcdA0r57EeSYkOMSvwGKAVxMyRfYbDNAPhQTvo9BLRauyPOhAgcUfTNME1gakMMnp3ckGOqUBHIF%2Be2TXma%2Ba57QEdkUbNI7czuf49P1LgFlC0p2jj8U6nR6U7Pc3Rw4759ys28uO8jt5pNyx9IkK7PYtXjrtRd%2BF9jkkI5CItRoU9RT3NZQYmiMP5CZg7UvrFRXRANDWiK39cJGSMFs40bzxx60Z%2Bij3qcndmk59bzHVStU4L08I1Cby4mBBCvu4IM%2FAsacduteUia5%2FrDrmxFBxTRJeI%2Ft7CqjO&X-Amz-Signature=14b6f246dae496ff40caf5f634fa0442cc5e9ea77fc81ae3d87405a83dfc507a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

