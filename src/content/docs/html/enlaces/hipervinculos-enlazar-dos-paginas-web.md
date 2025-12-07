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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCV2QETS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T115006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGH%2FRXUUXNflcFfGYD5lGtdvvekA5kehz91Nu79ITlAQIhAL4g7XsSe2Y2NxiSS74rCPiwJ%2BE8ZOHFcU%2BWxBuhUDPDKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUWNsMEvjZudawpbwq3AM3Apm1VapUukyyNJ4RbY0CdTHhKgBC4iYIgsF7XcziJ%2FIuVY1H56vOUGXrT%2FEu3v9gPip7L06xoa4heLJTAm76y%2FIgymwdya3PFyLKbk9aS11CVMucMTH%2BccasxwaVDOAsJphOHFJjvur5JFuUhZ07YhB3sGp%2FriWxQ90CkhJ9Bm2cHSkjlCeHOLeWemt16yC22sdPmmIsTW8Y5VXNGx%2BnINfj0mZuyDvyFrmfKSP%2BmxxbPdDNqpvTv7iFe5vD8OFHMYTU02AHkUceJUGzaZVVvRyo6aRKsJPUNTaGTjKrIzCJqk2R5MlAOKcg4t%2F%2F69GyY3wa5QEEgRFHtCbxuhW3IxIRc2L2sl0sZf3%2BNAnGyoWCGIH8ioWCRFM5FF7dzUwOZb8GZlsuMpLYfe%2B2Eq9ZTeh2Tt6K0txbm3gk%2B4BuvgiO8HYU9xSGnQKM131XPk9nBCoCFOYQWHjPziPGK9MVxfFJ%2BTGlSjUoWlbKzQBXYGq2s909iEvBeWZUWqu97ohFCDpXuI%2FmQzw5FNKAr8cYcYpo837b%2B40FvlEeuzCssxw6yjWsSpl%2BmNTQ1fxBwR5t6um8Qne%2FWkfo89eZirYSr6AxyiY7sqHYHSy4sj5IyKQaForsrkS8TJg5XjCkmdXJBjqkAabxP%2B8B1zDTrRrLu3qp%2BasmaygFw3gjIoPPuKDUq5lGKzkMiCPA06Ia7hjMeBJvdfS3r1iuZv9OxOIInqBq0s%2F0MvBG%2BV112bYq1F8o3iEw5jIupUyDoL5Y%2Bf97Yyp%2Fw0q1L5OFgj42vqpayaNxlJ47LaMS%2F4cXkpgfhfmFKnrFBBX1QbNxQEBrJu015WPBCw0ZRzhZm4L86hAJ9zfxJ2lhY%2FHv&X-Amz-Signature=f8c49639846f8b9aaeaa548ac6915e989514068ea6551dd902f3493ac80a30b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

