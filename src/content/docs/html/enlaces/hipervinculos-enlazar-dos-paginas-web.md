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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKA36PPW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T170908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA61qcmsVaJzia5T6qltIkgJhnVR1c2lxvqyEXZIlNOgIgS6arRboKWoNeWp4tgqPYjwxFKmvBZbrKQxiwMBQT7yMqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkQODaQg53ItiQmdCrcA%2BvgqZ41Y0u50e%2FYlvlzRC31uJhfTjhcmPbGaID73OD1SVA1S3FjzknnRTdTCgrhghpLy7azuI0UGLjTkCC78ccZ0fYXMvPcyVbbbULRlweqjvaVVR77yF%2BHRRZdd2rma4ED8Dcba3pKpFQqh7%2BCmrgkrBDStK6KrfZ%2F6fIoA%2FziyIPKmfgG4gE9E9N0%2BUOwZ6kKfxRz%2FM0j1oqnOpFwvK6dqVJoqfQtjjXg63uicdAjAYFfanRqszuduXW%2FEfvS4jDg6IeEiaRYOgLezAo0fxAqp%2Fh64%2BWx%2BTIYulBR5KU1sqL0%2F2OVNOemgdLG8D9vS28zGO2bpwZAY1MODVLXdBVRBR%2BOR%2BxgQQFDeyZvsl6VziNfhAzqUhHHkpbPOIFmXZMo9zTL4K%2BdV%2BYd1Q%2FxlHImJkdyJH8l%2FsgKzmdIchSGEPIZotT%2B903ukSEBte90LO0VnNnxsnbp8aTpQB1edWt%2Fa39qEcTjLooP7Sg2ylg6%2FalJo4ONjW88buXy%2FNJ8I5yvMaKISodMopNL8UOTgZwztOE1tOSnyTkRX6XWShFBZ25jbPPBOD6GBenc4hTyJ4e%2Bt00SmGqQpK8aU6qLsVpRrKMzDHlGZA7aTRW%2BAIdmxE%2Fkff31vT1Ro2BwMM%2BG3MkGOqUB76jc6W6vRHye5isLE7%2FXlY9kf8hmDkRV7oyCLnfHbFE0UEbfDKJcs4e5ZVm92c7JzSTNHPItNmJIwl0%2FAxHImBA8j9f6l0%2F2rd6Ie9Ep40TpcRhelVfTGFXG4nrxFAThhKqmVx5xsn682SW4C%2Fkvabt7dHIea1TY31LPmlYmIPHb1lMajtpCADG%2FgtY5UcQm8XPyvk0iR7qAghCfwFlhozScShjs&X-Amz-Signature=39422a85e3fba92b1ea2906218eb2071a5abfc1d8060b7ec64ef3933c3daf6ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

