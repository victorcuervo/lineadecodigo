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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA3RYIP4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T062122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnoJvhxWaA%2FzITCT7uOguz7iLnQ3Nxp5nHebFeqwnjTAiAlqOPjhteiixXYk9Cct4dbU4kL5FGhoDAfD4AZanO8KSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG5OCPqdFZbG8t3OsKtwDbztoy%2BM4l9%2FE4hylvEVemGNP%2FiOTJGAq0914E1%2F5fDpv0XQdgMK2g9JHoLPGM71EgDTTtK4myIgKREkUqD2R795m9a0DPdr5H7szBvM%2FmEDves4r3aniIJzGQt9eY32tIDHiPzr72k5o9b8CL%2FfvabYOub5j%2FIeBC3eDM30MwXzWxcQWMX96ow6HIBhMQKlicBCbzAlJlB9yUVcWTroBGJ3KJCXM39QgDTnh1REhmjNZWz%2BhIEkdtneDFimI2hXOsoMdyVAzyUBbQ3Eogb5blIAwDdqXXUSXePNciD9vn1g0jVvDz9WbTTYYM6bX4zv%2BzvI9yg5b9uK5YBI68EDeJrGMEtPnVVH4F7OPLAdj%2FMlVNpKAKHWV28HFX3nu%2FTEOyWaqTy7ErP%2FQ%2FOB0i4eQLfTOXjrRmdgc4BG7bcokf6oC66v8bnl6LFQZVW0zsTOIW%2FXW45FsWGMmey6b8GRMDBvIwy08CYpb%2BEkrBmbITPqcBo9%2Fw2r6s8FBK7FSKiGL%2FQXmCQiOw3qn%2FDkMKWctgZFYvxfUw6VnNivHcjAaUm2vBy4mWMBlfjoMu6b%2B4OxkB75gTW%2BQDGPM9Ip2hNaT0390URlvvyLDmhNHXm40%2BuQikVECIGNwkbczbrQw%2FOTeyQY6pgGrQhgxra98%2BsKI61irftOCuBFBlSkUPwhng%2B36xYxiOQUpKZWc%2Fydoyd71R5Gqs1KlCeRIOtUHHl8CROeqU5KY%2BuEvMidVpm3vQn%2BlGCJKE0JfMlAWGnjzRQv0PlcHXrKbufmPQIRZiVQnE%2F4kTjcXX6zRwryS2sosr20WT1FNdLiD6HgD%2BO0elLSf1OgkEeqIX3EBVDxMntuv6KzxFonQAInW%2B%2Bwh&X-Amz-Signature=cc1b11d11ae4e1ea176e011f2c06dd226fa7759b52b9d4da310b33b164364887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

