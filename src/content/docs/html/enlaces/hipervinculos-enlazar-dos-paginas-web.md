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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUI4YZC4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKqeHlHW3i9Pj33SynAnspF6Pv6fxM2H3FGvAJyPBPDgIhAIshvFFSMWH4ppBjDP8o7idBV%2FVgwsDLp%2BRGwpCTJFHKKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD1%2BusD7LCecMXWZkq3AMNiYqBrou5qcPgPaMh46xMiFzyIstRKUYm7nxWTKj3vQmob5b2eN9mEfADRNisfg3i3ywFmTD5JGVlkaxg0Sc6mQHiav2blGz%2FkAaIg4QNoO5JPz%2FAeCM3jbiBGgDyFMpdftuZQJVvb%2FLpn5myZDBIHJN2ZDKMeud6C1Fm%2FfyXzvqbuOaaYzjJIIBgzEjBuy4Tne4EdkcqyrXcHWIbodP3R8fWR4oo%2FLLyrI2SNgDm%2Bmc4NJKmfql40Db42xsAq1DoiOOzp2LXJAPRQnn1Ie7dv2IJ7K%2BhBhvDnFqS89waxWRFvONehEUstNoyPNNOxS0OpjDc4r45G%2FITJ5LaqFnXMKy1mM0nR278Qcc13gPChzbIt0FCp9ytucgzDyGGTm%2BbOrxbrDzSaBoqzCKxar6pdDqG4iTQ0HdiMOdsAzANabw3nh2hJBbN5vZUxd5nzjjuFHCmhl%2B57dIVK%2FLeMiZrn5pXH1oTRnXYqz%2Fz0RoOLWIGmaNo7RA20MQF9go%2BFPL7TSJbOlL2CvX8EcdBf4PDlRfGlAFMvgjh7rFFsnhKiwvxBaCSUeKBDE0dvfIxSD7XEZXdXtglaaodGKSVla37qtTS1yoGIU44XYtuSIEuoLx9MrLTYSwBGlXqejCTqNfJBjqkAQVIC%2FTiGoveP1ZKy3Vazbny6bCi5XW2SV041UGbu8RwU0QQ0jeAMngPS1w1Fb%2FSVDS9endBWJQ4vkowB72X7GD4MNKicfcz8FZXy4fRj6IKexrOwWI%2BPoXZxsvuz9osWgkcEBS%2BUa%2BkXU05m82ntSNBgztNh0QFQjRqmBk6DsJDgsQSNPQ86TS2DRC2bPnH4njJ9GXkqIBXWWNak0J3SNtOln89&X-Amz-Signature=f50df3206cddff75dc225f994f4ada05356363b9eb33a85fea1fb9f6a3ffa533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

