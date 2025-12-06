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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVWLY33L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHS0T0fpeBxjy%2BPywpkq4lcM3%2Bvxqgnjg3EY%2Bkh5Mn%2B4AiEA832If0l2eIPzOtxrzuuL6o9VX%2BWsGjvoa%2FCXe42OFCUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLwilOp269MV9%2FJG%2BCrcAzCmbAbC5%2B%2FeVzyEDiEHDDMRQ%2BKmIvKrwHKvVlP5cbJDDTo0n00P5EQTUgmIqDm9sMNs4Pa%2F8eygjg8SrnrFB5DRouCH5Y%2FJC8vuI8u%2F8arekjiGG1BVJEYrC%2BENpQCj975gaVIjtKBfZD%2FFzJAPDlBqZsb%2BXunSUXNCtvssZKPOCuD0DcHIOJxmOHuDdluaFoEyrsm%2FT3Cr9NdYx0ubLVIo1cv3lEgdjJiy0u4nkpiugvUWi2rQYjrOSv8%2FHZQ1ZA5X54jkizz7ADptmbdBK3b5KiLmhXPECyuZ%2B%2BKiHBxFeD9K77V%2BDSpOaALe5z4ZFbMiSCpUGvXuiBUe0rHPp3FAoA3rCm3ERuMtIiJmvapkp6gD24fIqoiEebCfuYpe%2BkQ9dxrmbrPJHUiYRM2FHrPVOTO3ixsdHzk9iozk3AlnaQ5zeqlW76H41NWQVIs9m4MVXjO%2Fp3MQyPlZd8Y%2FawGcNnZ%2BH8yXrD2wUUOBYKNCZ0DQYJ3GrtRnugxBZT6fODAokCdFL0V%2FZoVq%2FhAoo6M3xjEcerUX6UC4xL6dwHMqDENKU9N0FNZMU5aMyRMtnJDPvNk8QZHfj%2BAwHoFc0EihEfQR7gTqtjSMCFL0SB4aS%2FsBhGQ3zEfZg9XfMJqK0MkGOqUBNl5brGpHqz1%2BrRy%2BYkVKgis%2FkLIHBz3YXK68aTQwj7f%2B3ZWs7RF6%2FCArR%2FDsqer0ZaqBgQ4xpym1siefeUEHD3i3ueZRDU3Ktsax42jSywdFAwsslUQ2h1DABS1Eff%2FfPvQWfovkN7cHbrMQNS99HX21fAlim838gnt6qxyZk4KUg7JWdo2%2BCLrLBE0xJV%2BZOvnx3YbxkOb0fTuTrt2W9IVjJJ9v&X-Amz-Signature=87a99c511d320ccba331c9ddcd5c465c9a8108cf3cc0343aa195736329ef1dc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

