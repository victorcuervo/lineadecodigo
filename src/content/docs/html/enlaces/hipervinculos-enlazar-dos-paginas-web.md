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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWO5SMDP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T221411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSALrJE14MPpqDaorfoKf%2BWsFUkPI8gGUYe%2B7di48qDgIhAJMt8RkxWDuXPWZ%2BpPzbSzCYmK0wbOz%2BCCdUumbN1Xb1Kv8DCGYQABoMNjM3NDIzMTgzODA1IgyfsuCQhSYZoApZnXcq3AP%2Bz2ERoNDIPBHPlBt9iskl573BQ3tuiqq%2Bmz3ulOinBKS0d%2FvrCATgQFBWAckH4RqCenCJ8S8%2BzinNU8E6W9ATWsCt02KvaDfyRStkEOuCkzaJCjcU6uI6Oz3T67B59N%2B0u7O2QKbVt%2B2A2FJAMXntyIKJ8ywYbYDztFKBqBUKI%2BipYY62hlxxsqJteHz502rkI%2FxrtuFhdlzU2YzQD72ucbvhIH5C3y%2BO3mcXMNk9t7Hw9y%2BAjv1%2F8vPlcFJq5AlVK6pA6DzdBAn1HZyJPVvV0%2Fghi5TWlemQbBKcvXCdsOJxWnpmxH9gCQD%2BsIiJP4Vy8etwUPhvBTJNFzF%2FkkiGrees1XVbZUsT8VrlmEdYejtd%2FGlfsIhyLXNDPFUY8paFY6%2FnNnR6S56p67fuinvIFtda2MnH7oh8YCx8buGRZdm5ABTyLBuudwHdeQy1nPfYc6GdXhxk5OU6ORfn7FB79m37f%2FmWlaJx%2FxHpr9LJoc9lOieJWSaLGtlP4PeuzlwQT%2BLJKhc9zU%2B8MSf%2FpzBXQDGvhYiNZi4Wg14sddOxXWFEfjaBi5n9zJHmTLc9Vwq639PnqbGk3oN%2BEJlnSyMiBI2DcYdLzIlQ71toMiGqjxPkPh6vCbn7YFrhWDCdkM3JBjqkAYZ1bJ2MnsNIwy0bOIrtX9buMOlEO4YHlGrIyDMcktux%2BVYyWP6atrXWJM7l1C99WEEJec3J6YmtTtdYnY1EuaGFJd%2Bdxh6DFsNbQbFKK9uZNqjz4eTRJEmY%2FS90MGLw3%2BnPSU3bDdF1joeeq9X3Cl5%2Bfnakb%2FoAaT2X998vQvQ2Xt5AGG%2BlOYYBP9psuGNIxEMc%2BdxQkRC7KZTrynRdtRAqHlUl&X-Amz-Signature=b469f41d48176772133ef465149dba63eca9a240f9eec3ff352fa3e895328fce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

