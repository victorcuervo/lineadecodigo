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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRJWSRRF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T211943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaXOnYeOkV0yEGKDRmREApRy%2BK2KzbKgMoKvc9VKnPDAIgKswjpsbzTiBKy1D56nw4UPCW%2FfYtRXJH91GC4sMSNIcqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2BpYs%2F%2BcLHCU4W1FSrcA8SChQQQF1ryKbglOkmXVlLTuGMkD0dAAmFoQFvBNd9o7IqcG7KobfN2i8stxrrxa5E8chcTTAZzwGNMiuHJT%2BEfJYTuvK64DbKF3jJnSdRCSyJpHacET86rVT0aWG6wsilMo0kjxFSd6naeZvWbPTPtKRhUTRwp34qbfxZ7Wz96%2FDVqexRlru37VBHIHLdbhSyQkfOXFeMAJeG0XbJRIh0sDqkspREqG0v9074kttrUNpmLqFNASJf1SD9gywVQGkSDTYJwtTkMYMoT4gPoSQ4ersGDHuR81tdt6hNSoa3%2FYuj5Ss9Oc%2Bmh4Qgam1WDTic4QvZiy57UXQxDmChL1PRRiKg%2BevOseBI1RuuxbJCMpqaZAC5PtAz5QSK7%2B4pIc5hDbztZNkejiWxaaFXW%2F2oWMrHpTAyeFZc6ZdzOd7QUiUL%2BRMe7VwbEd2QCUwYH2k7sUkV3hUZg4g959a0NiwUrIN3jwvZFN2xi6ZHy4laEQF1tB1DjsYOuQEOPY16YPL1M%2FKNi1L%2BZ4MdT5MQ%2F34ccmMJQ6L1tziKRMZccTlcZuK4jL7151vw1ONcwO9UBRIZSAibkvRRSd3zasNDdYE%2BvnzEc9e1nMW14I6R2gnLAsa1xTT9RWNr4hyjoMOz%2F3MkGOqUBzK4WJ9%2BeqNO6VdDSFd5uOUnbyeNW7NejkIQ0IoPvF4PQFrfCe5jlue3gZVEB4MELqxxLYZAi1gmgxIwDrraqRt44tlDOT%2Bjvkx1i2y3OOYy%2FwO726X9WICtWoumoFuRAjhygv%2F54O3o1q7VUAzkuIH6Uo64SysgiXPCU4TGKDd0ZFc0FeYogRrYKeeBjQdbVvdB5hGkNXxA9mLdYObKLEv4mGZRH&X-Amz-Signature=672231d82dd867dca639c0b7e036d4b200878066c9cd75eb8059649ddec800f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

