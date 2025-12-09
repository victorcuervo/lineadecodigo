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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUDSVV6J%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T161251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuJPse9aFxMmRCuLU3NoHOq5vX%2F5pAWix23wIkrDvx4AIgByNPdpo6s2Dx6iiP2tYJ8ta8Uxz8KH7HheCtbpZrjwEqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxtPEegwzrOIkSy6ircA0130YGoPuMesVXmeIx0YOxa9b2bO%2FtmgwzYtPfmREEBcreJM%2FkAgbcRG4Pq0lvcrKnPU9ZTlhqfhW9VF2SGlHlgtW8FGSaIjO2T8pZOrzTsdm49ijPo0PsE1bnB7%2FNKKycg5OKk%2FQaPmohol1cohzjDnn%2F2mOAug91QvbVE4WzBw78d3Cpx%2B%2FaUa1A5kB2WPG%2BxDG%2Fu%2F3%2B2g284JDxd%2BXuxQHK7Tri%2BG0z%2FQEpMKNlBjILZHqsPbmVrO0mWhVS%2F%2B3%2FTY4zds7XcmCq1VyJqk5ZY1E4YCAtrf4G3WUKIKvR2YAqLDDKsNqnyKnFsOmWf91jjjAJoOttlHr4R53sh8cfaxnw%2FnhVmj1DdieU8u9j01FmyJ4CEmfZRZNwV%2FJZLlLZnjxRYT1NX3iayZU6pe9nT2pS3g08gVPiMtH01NmSfJlasdqiWj4pz%2FFYUCi8k73AOcyKWbWqAR6xYDWjq3xhwa0m032x%2Fo8o0gsU8B9Ys%2FrybTD7KSBCTCS9r07tN%2FGNQIKGakqSgoWuG%2FrXjAcr63ZiiX7tn%2Bc%2BfnxwzhxAI0vL3cVHPfABw3NMAfTO%2FXdYRjVjslQqENBCdtioR2Fdp87EF%2FfnPaoUPUotD97GIQdH6nHJhWyvInCY0MPnc4MkGOqUBS%2BF94Sxenoxc2XoI136savAGJqdmqCJgDB0mSkdKB5%2FH6iBgQDip8waBeA0JFKn7ZZFBuIEKvvWhNg9goFGibgd18iKyTP%2B85y%2Ft3oTMV%2FtXOC%2B%2Bm29NhhdpvNIxxS%2Fa5ZbueBrSg4lfBeG23NW1VkyRql4EC9Zmqw2tPGpGneOXdB3J9lje4VR4I%2FAYg2eTBIIXwkhIZcvZbiU8RQMDfYjL7xuI&X-Amz-Signature=7b7e7e526499dbaa20aad52c113cc79852919f9f85e543b06bd9f469cf05520b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

