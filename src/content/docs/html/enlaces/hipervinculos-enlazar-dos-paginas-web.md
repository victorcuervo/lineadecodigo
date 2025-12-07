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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643DSEHV2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T082954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSjYPVeS4ZYIF3YXdInv1x38vMD%2FzQ6IaGTMJIoyZtFAiEA92VdH6F4LHYDGbOKOAjHmPnTZsfbb121MudKoudLG4EqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPa3h0EGuMs0OjYTnSrcAwVJN1s3A81%2FWS3tmR9Oo8LIUeBfcL11sUmio84jOlXNXOrx5gtGyS7i3SDQGdcBk7P2fXf4TR%2BiToiP%2BrGVS6bpvNjlbHv6ffcO5Yxx3ycbidtaEBB5bcoc975qAUMDI2ZrKL6lwlAY69dRqDrTvFTYlTgl2RgmIl%2FSlDGu5afldBYhIUuM9kbmSCWnJw6D0EOgJjInoLddozcqcmapYg%2BgD7ie3GWtjbWZwqmBH2xkR1r07jBqz0yipxaTrjPZo0mFk5bb3TUvZ9RwCse8wmGkqImB0F10OvOhWsIQYx0YifORUcaAVZXW7CrtMvIuGqDZQB8rizNoaQjift2ACQEB4CYimoGBAF%2FN%2F7dEpBeBCMUetE88kB1i1NitMmRmtqA2dsB37ycQ6AT4SS12%2F4%2FRHY2HMPos%2BNejuUYIPES3izR54I8y5Izpa3r8EVN9W9mF9%2FX6vC9A6Fw0EK81Mg0TmLh8TS21G7o7WwB02Hi5U4y8kjk4O%2Ba2F6az9e%2Bbi06roDSSDyw7edR2jhkrbUHWID58dC1fkPG%2BVWhpAYDoalKrzkXsAcKNIl9WPRP38wJO%2FTgoBZvIZlmKSEDeQrYGtEJGXzT8kvdkYPYNwym%2FA5uNSIu8B9ON2Uh6MLCi1MkGOqUB%2BAA3EfqTJMBo%2BhZWFNRMfoEt%2Fm8yfvUN3CqcUpwGdcwTYXobpCUpfZhHWQBR1ijNeP0jRmvYcod1CyJl%2BAW486DnjVGh32oyCzpAYIjb7IxjMpFeOEwdmEdcvEzN5n%2BcEJSdzTVkrd5zlh7Wetf9xzDNiY85CnZivLQ2DQVMlX2taEU4wIA%2FjXPlrggDwJT6j53xj%2Fy4%2BEx75Qh%2Feqj%2BM03TmmwG&X-Amz-Signature=a13b79d4e832fd5600018ffac3476f326b4fbb50d439d0601ca587d434cac621&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

