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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW3FYCTF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T101208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEN4o5IXBIVPGizncPsAg2Bz%2BFNBmTUQAGyHQbLj06PGAiEArHUd42a9Bw55pSCHsrll%2BGTVMMfcCaZTpcIJ8j2i95QqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLS30%2FtcDTz1AVFEfyrcA4XyOgMgh7iTT5RwT8VhDJz0hTUjh6f8NhIbHjx3H9MhWCEZXHsIfhUrz71hfndUql%2F6LvQoNypRA6UD6tjOHRRMVvjM7%2BVzrEay1Fu8JLX9k2ck6LLIRMUuP9CMPlNgu2xxHRQ4Ddo88nmfdyOMGiFtt%2Fr8AbAA4KaZJnVRGlHi%2FdD6ia9pxRoIYDRFmbVWCrMsafLGgI8FU6slZypq7yx%2F9CTZ%2BSyfD0Rvdg2ltgW%2BlPAnCG05kpxl6MF%2F3o1vHjfDf%2FAezGWZWKifIV5TGAJkZOJGkk%2BOLtd%2BX1xhE7L%2Bb9rRiUZIgJHLu5vtI5oENwMRVaejXdsYKNRV29vsv7tpxdSSnf05HHfGbZfpbD1BpVdAeM2CuTMp6u3KU7%2BkOYIpYIls%2FHbtJxZ%2Baoc3W4QnCxnqjz4IqaLJOMuYMKRrDlKhz9AEqn6SzCo5UsfEH3ObkCLwNIhW1g2M%2F3QBsutk0xxXTMehpHkfIqO6XgsC4fwmpJcbvGrY5IznT6kpo8Dg0zzfYghjNF6AVpZhLPtv%2FC8Fbhp2QX17JSOuUh%2BZjWUV76wMVaEQ42gG0BZHga%2BSD4vVnMsFZVCyQ9XSb9xirYZUo7OASDVGmquVwTGwQpUqSyItWRHcPql%2FMNDD38kGOqUBC3uMBAab%2F9kwNHQ02PVtDw16Wlo4SG9MaXVAOWDev2fUR5V06zM1eDhmPL2y3lh5v%2Fft7bo8EuNPueletwCjpby1AnFkG4ZvOxnpcstbp9sdd6V6iTRjNq5d8VY5%2FC%2BlYltaKqi8ogVqkRATmJpGulfI%2Bn3ivKq4zYLrv3KCYe2Gike%2FGBjuIqUVHkzkmHDWMcHYkG0k8ixTpjNtx%2BhTYVetYqw5&X-Amz-Signature=5a726ef0de855fc5f2143639eb01de13c9445d1c8cd870b42c5ece477d63cfe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

