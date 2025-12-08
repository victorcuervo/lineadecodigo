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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEXU6V5P%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T073225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEpUrY1qb6igAVXdRCACzjYCZbJtXOVy9AHChR4wPw3NAiEAk4SbnYfoUHTuJxiCDDIbKkTbtayAjQ2dD486lqUyjvQqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGbe5Wwhl9Ave%2FjvSrcA532299lcT0gHOlYJqiDhpe0u%2BYAdGR6lgwmJlvXQ89BWGorF3Qwxn%2FAlROWtumKhT23x8OfEfnl646U3yAoSGwdW9mJemZZYnKWTo594DQJO2nDaYsj%2F3KfKuZAKmSGmCTVMimT5a6z9QXkre49JlF7JxuJYvDNzY6Hk5GbC2oaTmJeQDYbHc9rvWGSurHxrePhOym2fTLfWCwbbwQNV379YM3%2FtYeC5I4TISxRemcNTqwEFNLYYxl%2FlK8lzAeNRPGr2KkncDMu00kP5MSU2fFDXW975BQ2oKmtbrOSXuJfZ7qRNx3Q2FNY7xx0e%2FOH9d71SqJJ8MyN%2FLs5ocddk5GChEqk%2Fqc2LjGU6kiG3kmn3u73YCSjgFOb7Kfx5O79rzi4okNIAi5vq52jbjmLT9J581TQ3AmcEzX91FhamNzVPsWVlHoXjIXbkpZitkfWvusPTqemXZx6gsOWOh57O%2Bn2QeIT82%2BZSGF%2Fje3ri%2BfuB9hLoGhCknnQJo%2Bfktsu5QTUdyicKijoQrM7bETPcMCJwjTjYRbfrEMa%2B0kSQUdkfXlRy%2Byht4s5GgdbabsJ%2BQZnEcWihSeRfOjvZcXVVDiUtqyPBnYqsu1lN%2F91cnEiYknacOgNoUTCCWckMLzt2ckGOqUBxaMpNKIAg%2Bh1%2FlBhJonK4uxBwR42NTMMDMmc2%2FMC%2BKrQ5r0pFrZMUAV4O7i%2BQBkhVdpdC0zZQDeyJMThAOnPuMtglsre8RTzL5C1nkoHgQ4FRJzy7ZAwgXcI1HDkCo2zHrxlLIXkAMBb7ssBERacEhEvzzD7bUi4CS%2FHw8TNAGHN7ki%2BEJGy1S4Boi3jyv4EFlx%2FbgoiDS9Nbfuc29%2FyAc6AF%2FgW&X-Amz-Signature=21d80691a6df687c8e1023a1ee60c189fbf2e04c5e2611d6cbd1a0820d33f2eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

