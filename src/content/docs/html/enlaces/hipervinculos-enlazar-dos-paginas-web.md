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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XOZILNQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T182741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq6EatUvcjDliIni6bEG8C4SZFkG9u8uTMZERuIAgvpwIhAJGP184oODjqHqA6aMiy8swJcPTnLnk5ZpopG1kF7Fw6Kv8DCGEQABoMNjM3NDIzMTgzODA1IgxXbfy2T1iMgGIXr7Yq3AMrYhetASY%2Fews9R7WGKkzLvN6zjrrjlKUwUHz2HsKjihTki7p15L5M9I25U6GXS%2Fdoeeuv6eElACVZdIrRsY0vBXSaD6C9wTHDbHBGh30Sb8uxmKu%2FSKALuDFP3HgyR2aUKNsuzTtANY%2FJ6KHR%2BClIVID%2BFj3fbNc5mL5X4UTp9LzoT1AjBvc1OifN7HIdhtxqnqy4SO4FNnIzGCdQD5DtCASG4t%2FlOlsFAZjw7be0rK%2BHLrp3gb3BR5aM3d63D4sVzECOvUsZbkkWyXFazgTCIqi7H0NyscqEr3IGFzYR0r9%2FZWPEmGOLpSNL5Amnf%2B8v1nGClv7lzPjyYgh4qRKel0IeVaKmQfMkzNzKjlhf9iiC0p3sVPnGvhSvDB20Sshlbte1%2Fgh0aKsyBHNBcQ6Fz%2BjLiTm69lwR7NvIkBcmemqDxekFfEy6r%2BkdkrxM2k6%2FELOW%2FrdMRcohZ0fO4dkLOP0w5aqlLT2kBUbNEavfgoOg23dgnaS495Gl8746sdA7MU%2BjWmQk1uk2%2F68F2QFs5AGHDzHhSGvaT57Z6cCAh0faSo2hN50jO%2B96Z3u%2Bg6hss9083QfxKv9VoXJTvsA4FdMRXsKmDoU2wrPhQ3eA6cwXDYqtso1VuHFYujCt9svJBjqkAbFO62t8V0P9apPouwp%2BkDVc%2FnE2c4NqEOlrakHq8Ct38Pi8BU%2F1pzPBaDOqxHbPyxdz0XtcsgktyJsu1pjQn%2F1b5RxnYumcV9KZVLtppuIn2yLcla7EaRMFwRnkmfCOCpTRtTtpr9aWYdLYzsqJCCIMM4b%2FM3ymzc3o45fHyktSDp%2Bjcp7FFIouTpDrallwYOhZFmUke%2FPmDwYZoJBk0%2B%2F86KXY&X-Amz-Signature=b6f38e57cb0c1806195eef383e3b0d53ae52ebf7ed2a5182f1aaf742183f6780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

