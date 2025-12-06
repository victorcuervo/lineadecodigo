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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI7MHSX4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T134955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbumrPY9EpsHuoZ4P5ZFcll1hebFI4bFf%2BAYFKg1F3uAiAxUrS8Cs9h13Fp5R3UGJ%2Ffsb2nA8AGyMZ6%2FtYFMRqYwSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMvgXmK98zLy0YTjitKtwDIy2ZQYzp9lzTKqI0X3bWTA44dmRbPtOpc3gqqEkZluv1Uds%2BYQd4v2P3Jjw78ApbXCwKaJGmipYzvI2vREgkCpAwdqWmcPlPna5Hg8h1IFmm3I7Cm%2BG8gSi4ynD%2F19gnK28sR1dWDMvSk7p60rqQDbI0I1k%2FsvoDooMIRv8vc7O9tuDg90PfUfkopDW6WDW%2FTdmXCERiyxIEz5vjw3KGcuZ0h5Ra3Obb6kDmFfJkh%2BOCEmBQ9JlUBVWlIkGsqZatUn1J5xBjrWtKrq5iR9tKp4T%2B3zbxYgigLdDwXNzgvZVP16bqrGhLICFNER6CkskT0BCmvnr%2FIYjSmEBih%2FCXCFNkoRTsWQlHfXVVp2ya4ZystVBgCOn%2FSV6pgnpkHtqB60P%2FQd%2BMA6Xf7xG3wHiQAvIaXaA1EZbrF4FTuD6NWvCh5gi9I2Fj31GWuQ1bk5TYckB%2BrcLhNAl56OsShS4rWIWZBHNYfDvmIzaiZrHl1UQ9HSG6tT0mBtA2%2B2wdzs7gEYi%2BIi2TN8J6UzHLPiVd%2FwbO%2BKN9E61BhW0ig3tZ808OYG2w6hWqCOk3L4surZNUQ1cjuUV9Ffde%2FS6i4sA%2Bq%2BH55yYyVrPRYl%2FApDYVJlkYFLvCAaHScPrQz8Yw5KbQyQY6pgEwTuivP40GhuXauuLlqhfcLQkiV%2FTR3IbYaGkVxCZ%2ButLq8NCHP31569HIUr9tRaiJNSB5Lzno3AlnYawL4593nmaEF8c6r1bxksKrgvAWjIWwwYEeUsCMU%2FJhj81VRZrDiUbVrm0O3CYhA5mm2T8LupbrO%2FYS1ikm2mm%2FZVpZzJ2PzhS3OLLEULVxRjDwUo3hqiWzLNCmI7nkm%2BrjfpY2CMlSuMoS&X-Amz-Signature=806e74fc267e8a7f66e0642dc65e72d3d7a749c220c645034aa6906d19f4993a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

