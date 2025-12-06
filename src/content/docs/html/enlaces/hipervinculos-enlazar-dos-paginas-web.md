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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYWLHU5U%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T145733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzUvwNR1qH3Nz2aSm4%2Fr9lAD%2F%2FVGrloookaODoLKxIyAiEA%2Bn6QnxSMhnLhRb3yASuUPH%2BmQdyzb58aQdYRAa3iFRgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMWKjiEU1idxtsqjJircA2HzVhcfAmn3DBQeSGpNuYbmqdZiR2reViZ7RJHf%2FwAhyMSmzZlM9J%2Fq3atwfrF8t8PDMhmJ%2FgbomZ%2BomOT1k%2FYiggXWZNm9S%2BHNufr6ocwQDQiLnTcE06KHR4HQObORV8DyUMgsHg0dbdcrSfFu6ujJt5K%2F4yp7cAeN0AUSYutCzNIXLGgjE9w8tL%2FM6skUnc8Er7p1knkQ%2Bd8iDVsCqhUqFGSRT4i32XgmB91VSltb%2B%2FoaYLDjYziK9Q7z3zm7XmpkBfgX3ndWl2ZQEzme%2Fuyqne8MpyGIuM5NgiUaFIlPsT97YBT2KavIDWseeGg5jdE67S9nT8Agdb0u1dF8W3thK9XsERusSuh%2Bt7AtEDIGk0fcS3HSv6He%2FBIhCwbMzY%2F01%2FlfkVmLxCe0nQO37VsKZfbZwGAyx9d1WL5mGusU7VdoTanEeDshAEmTpQZ0SmYuY%2B7FQnCpwg0u8G7igfL4QwYIoyTnzovkFu7%2BQOdr8xwXLPspZVyIL0VvZcdiMGioyvCbTw2I%2Bf9LnsClNo4c7OsBlRmaOxo33yYEsd84w%2F993XZ1V6R48KGjDT3d%2FHTUel5SFNLIrfFNkW5Z69m4DL2Gi1uKJgWGPRR%2F1bmsmL131H5v3%2F2qHMtIMKam0MkGOqUB4H4jzinJFZmpWHsNIZmnlpC5f7pG6VSBOxnOay%2BYd%2BzdSLwlAPi2%2BVIRG9SvDxy4rLXy3V14MrM5BztqlxhqHoVLgjVmQLK2YUUTq2W8NV%2BKNJZXdfQT1TGrArNLfxdlUFLps4qPWsV%2BJn9PGRfzUwQjM5hMQoFQ0A%2FsSbvCIqfw%2FvGqBtapNY6HX5ybQnHBYb%2BW8RXL2aI%2BeUEqcxm%2FRBEZd%2Bn0&X-Amz-Signature=83603546c187e6de1b8f707a73a0026d67e2981720bf5050bda674dfef42bdec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

