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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAPOC3RY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T022429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAD3YhdZsS%2FkrnUVxJ68muDuVo%2BA%2F0E099mns4yHYIrlAiEArRHzPlE3GglyoWPAWUjoV25b7OAK7IBaMwjl1UUkghwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHoOjx7FJF6M4iY9BCrcA3mQFe6BhwqGqzYPTNbu40RjCYc9em%2Br7tj5vr5XEtSP6XSqJs41WywyQXKqe9424kLW0MFki4FlaRcACuS5HZjlhJ%2FTzjAeS1u5V%2FNlTNI7CC10CUs%2B0EToUtI3DMDLG6mB10UKkaUjrgB7RTQ%2FBAKv7S6YduSSjbmpUhYrC2nzYgP%2BiALUYGVWeKqZlZ%2Fm3fbBvfgCaOTafXyChkDBm42iCKcYSKxfFJpGFykAsivlW4HmpTam1HYX0vfTg%2FOP8dGs5FeToCt94K2wX0PS3Uo9Qc2D%2Bd8sf13DIArfR2dTbZzVdiKxZujUFGqYwHVE5%2BgeM2Xre9mmuVEJxNRyOW0%2BZ0X84un%2BMewtNl2vZkO9yhQNMBo6GTcQ33T8K6ggGv4HUl0S89KljUUPpbKEQd32C7A9nVJOdn3NZPoyG2Klm3CWOY4zDoaenEp1YF%2FjYdJVhsczXW8TG3OLzHXkaYRLFVyfe2WxJkLKEG4V84RH4Db3Yy%2Fc4DxUZwAlTtBUgiQeM0VdcUqVMuh1lpnr5XUfjcWEHw6%2BhrdfRFQKD921igmuOd8wTgWw8TB3MxdKljYDxUXv1aO3u8IIy5Ei2fo6SPzx%2B087dTgSZDdARfVLxfSFtLDfgNTdVslHMOrQ2MkGOqUB4bAKMvk2KXsyYyLjQP6TrcFsq9kWA61XgV5m1kZ6iwfSPYsYKQDAEAW9nQP%2BbwFbRZ7kaeJQJpPH0d6AjYP2QIeRZQnOfdHFtfHXDHFJZi49mOYsYrPtXmTSyYCa2id8JqiMOMONK1BbfSzFPeuTjFckrLyYavgUI5MmMu37O1bsOSAj1ECnF1roKysXFiqodS80afbtKFTbESJHg4Le41OsxmXq&X-Amz-Signature=d9e30e1cbb5bd48fd3f2770148aef3e97e59bef26cf918646c6f84a424d5be82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

