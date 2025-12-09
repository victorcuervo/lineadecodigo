---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FELZ44J%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T165714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAEjrodtZN6eg6A6p1PGYGwXXIiYC%2BdDSzB1%2BjvVsrw3AiEAo4hNbVlVmFHZmQtNsdFAtpNLN4wG%2FsLdQ5tV1dSzeZoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGSnG5MDL9gxoKe0CrcA97Wm89acGXlz0A9AIKkIzZMyo6R1Oi3kQ%2BwJRHvrsSqEs9d93Nd1fSeksuqgadI%2BM%2BnMpeJ%2FMtX7uPNrlcws54kDOADQZK2ze0M4xk19RFvrsYet1D4LPSVRCwKOJRUWok9Vjuv6IF12d5tg%2BtQa0wzeleEBf2gb1V6G%2FDatkgL3AcZvR66G%2BPj7XKDsINy3ft4l87dCVwVpIrPWCWJpmzqCtIyN2C3Dcbm5ySHiqF1ePF9iNuHbUYpFfgndOrFCix9lT%2BfUrhDURwKXi3uoh83ZvLw26qXclZbBT1M88DsvHQjgf399q%2BFSaqDulkJutEVsEA16ty4DPooFvEh2tWSKCW6QHh6S%2BguQ1zFYlEJCuKvGgMMTCn9AsDfx4rRsPDbjYfJp9bohgRgkq00yCdJwkfMwdJmxidEl7aYsu7XKHuKS23y72g7t4a2O4aZwu6jebidwc1YxQYMu0d6EsjCmPTmCsw30%2BwfY5Sx8fY9PkVNKTRSUnndXXSljf0W%2FctyqmO8gZWZ8kWk7AuykUOgADgfOqpNDdqdDOuGeY%2B2whVZ8HsJjxESnIDH5aJfIrUR6aQoSnicHW%2BvepU%2BNhC2kuUBXMpeH0roFkdcV5v64I5j5Fp%2FiSVNVtsMMJ%2BY4ckGOqUB2GgftreboK6qZamPSYFLngdTN2Sy%2FNRj83xf685usAbJippYESG%2FJ3mneFLagyhh7IIzSjWb8CHa1RDQbhU1Vzu7TCvXlyuMkLYr%2BKDd8HyggahfeQ1y1Kf9Hmy8CVMawY5Ob0waLqqbuPdj%2FYgt6bE%2FSBnpGflZkjv4F%2FhBxbzc97u9QXtDfHgE7Zx352Vl9UjKxe60bz9zA6JQcxPjqqFMetPK&X-Amz-Signature=282964bef478fbb646dc27a43b025839a81bc146239fc22804fc16d72d23eb6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

