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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFGQ6DI2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T212442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyYw3dREyH2bagsK%2F6fzbMmaltX7dpcSkHxzT7Gkf7YAiEAzEPANvmjWMzsDUFtadA4PARJpjpYOiV2DbOBIwQcZBcqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoiGQd2n972nJ9QEircA1OiHEFf6BwizO5jMD1xcFszfTFnN2kmj2eyaTYPqKzKu17PkFhhO7iBmyPOyoscCBFHJNfpsJclklTo4tSv%2BzeRY4s8j4Mfm0CjAa1qUEu%2BidkgCTWvR1Hl66IGkHtV%2BDI2SVap5n%2BkyhUIPP5bkoVux4sbjvVUAHNFZ3CoS0dSzK1n4VKzNrNm0qJ8Q1g6b7mO0iXfm0K2AuIA6mQNAowsL6c99VdIBmihu5Md9Q6UoqAjn%2BUBh9DBvhvm0ytrLJQmSWsAy5tcfWFYxcGSRmOHgBsF9%2FlC2o7z%2BKLhoviXyTjQsYIDe3RgZplSwu%2BCWRSG8jz%2B7kqalQZqfPZ87IBFUrcO%2FfMgKrp6aQEKX5lAB1SI1e9wP%2FvwYCv0xX4QzsybK0iHGvEjgH6qk2qN6q%2BL1aoWgKSfFZMDCbNNu1H6BO8Ka75Ta0VlZQVfMA%2BMufVXtaEpo7TQNvCSXqpBD9PKVw6gOK82j77vqKm%2F7Dv0z3sxqnn1TL%2BfUgfDAxLdYQylqRIQrxgQmm%2B754Pk5hkaFCurGQkjYlkL5aG2J%2BBINA9%2F3Ax%2BW514z%2FkFjApBSzxarJihY4tFohQeBg767bYIkUNclrjn9LT0w8Vg3kMCpfTHDSDzYjicn43hMK%2FH18kGOqUBj%2B35NhXR9m6ljIToRn4RxHWJvth8CGeh%2Ff5f1qevnAbQ293LUyAiCHP6hX6IjyUYLh%2F8Eloh8yhapJlwPextWIEBhEpDTWPASa%2FJ4tnHA1Gg%2FHyZKKQdBIL%2BFRlDcu1RdqIgb9q36AKuRvsG6YsH3j1AFba9b2PV8bORnXpxMkbH5Y0wMyBMt93eZUxkBDPr6xaKqXNHj6Ikt%2FaJ8Syef%2BB%2BTTP3&X-Amz-Signature=2d8104639f94260646f2a2c380a372fe982bf59e0753058590494b9313bfbf2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

