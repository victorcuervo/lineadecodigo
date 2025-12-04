---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TZYO3EH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIBODwQG7f0dSv7bS7YQwReiAs2%2BW5ntrT8MbJspkTJz%2FAiEA6uTaVmo8R6YDf2LQJXdC%2F8ujAsh3Rt0zQQJ7a%2BJQnTQq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDKLp33L6eLjax6wdTSrcA7D8eogOif24je5%2BLlSDPEH3yksTHITDfyrywMQUgMCg8vP8axp3177UiP9ooE%2B6PHEQH3T%2FXbHj6LItdv4T6jPNDctDE%2BVNMYPFJhNiVt5Kl3ynalqLb3Lc1c0bQyAfi1wOCqWDezaWFOtlc2uKJGbwEu07AKyRcpBbHVC%2FZwQ%2FURTFi5FAOCj%2F%2FovsnAbLKb%2FQLwy3AsPncV5OmTnlKIZiw%2B8AS3ZRB0zVlAgLs7xYxG3w%2BTGXi8Z0Zxclbscv0FvktpCADLPC6VLgVItCOEE081SBhXF%2FVxlloZLmkY5CdWw3Rvww68zOlWayfStVbUrWVj8FeCeazkkftQnbOCau5FOaypTyAHrTRb%2B%2BYQOebSN%2BQDbdpX9VhdSls%2FSPwPnV8sZvFaznpNxCIwpChbQyLF9GzRvUzqyaXNjIllF4o3n2NL%2BEw0xHsJ2m2ieKxISMZ2pWFYAOmqywiAFNkw1FEM77tDsczbE3GeLuYoH1nmxrfrAjUSrjpnb7AbWqBE%2FA%2BZwjN2wP3vXo8jkZqgGIRmI5BVsM4PW9k03UO1aPJbhz2pXmXyq46ioqcJmRyInukLAnOV3VTvabh3VISANooXyPM5yyEcIrhJd3fUlbDhL%2BVWDLsS8ZASKvMP6Uw8kGOqUBKz7VvZfg5wi4%2FuPEc0%2FrqNl0H2OX8eRTao1izMmHTW5DOCSlbSf7tXl5qSHBkK9vg11UbHiVQvG%2BsjWn3oeU3ifwT%2FEnhnXxBRMqDOJeLOYvAsa2J8QgpHobmBjK2g6sW0zyXM6OpXZGNaH53x4DmdZAT1FEsBnRhGf7Nqfz%2B8WBEINBcqgGl0y5Sr%2F2IUP59Q0Wt4DxWyzLjAazznaOvS3qVAyQ&X-Amz-Signature=a5d3dce395d7877f4abab25b3782c02cb9a68c20402734c5fbd9f773951f3b0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

