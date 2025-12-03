---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKV434OC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIAn1EjFcO5JwnTtz9Z95I2sPsCwlpDmP2ecMi5GGv5otAiEAmdIstxHVZEFiXdQR0i%2Fn6xJ7QIARVuTgbI5iocqk%2FsYq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDDsWV5BaVgZHwux%2FGCrcA6N72IcUjv5Fv2eckzR0MxNX79CbG40Kwr5nK43jVC0YTBtqQz8GkUU9E5oF%2FO6u4NYG40c0HlqjzaH9RJU4%2BNlo61bJLKEC6bYKehJ%2BMNgiTN3nz20tSrrxPdJkistMgySBFauzC6G8A8IGiYT1Vj6xdHpjstOtdvrhboHnxuIJRvpdNRdT0wlp%2FIQj%2B10x2LeLFkXsrJF2bQTcd5WIohJervKmMVHRZwYGMk%2FPHQ8pNq0IG8NGDMkdA%2B4yT0SyJpLfh7pVnbIvE%2FKpZdctZhklrqN%2F7cVU%2B3MdCpNhc7k%2FfRSrJI2sdbYlR4mUnMGSMueHoFcNcBwFebpxrZkhVhScjuLyQXJCDMBeqBWBHuTyWk29DAm2eZySgjh72c8lFTvWnZp2vRLEaKZOQ3Rt0VUub3XAseleGOeHoymx9zmOM2ZR%2B2zw7srTmirqR6Wx%2F9LQYAu%2BdnygICoGHW4WaD7HEOgtCzE6TCt11qMTYmfcpZSqPgEaxnxZQhjXn4m52Ln8Fm3JmxVSbzaKU9%2BRIsxWvPCUi2Os%2F4kRNMvk56lRA6ZQAiGfao9ej7nOW8aWSS88hcCvgt7%2FvifLbfK4SXoFdySdjqkL9JZ8h3I7tnqApfsoSrSRzx%2BO%2FyosMM%2B9wskGOqUBGHTq2Cxfl0oCADUOj%2F0VFyrD0y1Udq8ivj9uzoCaJ3zkbEFcOnVP3f9cnMlkPGmKA5fIkRb%2FbbkFpYKYri%2FSxmXY778lqnXLr5qVom1ltwrQp872%2FD9krRM6nggzT41rdRTlFt4a3c6HDhAAU3Rx3lJEZUv7vGOQw%2BfuIbL%2FOD7QkX6p%2F4sMCmVTHAvn9%2BEOZorL%2FROmbLdcjDKcee30U9IDk35u&X-Amz-Signature=ac95532f3445773e57a0bd7f936ddd172e272dfa7df0c7d5be845e29688931d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

