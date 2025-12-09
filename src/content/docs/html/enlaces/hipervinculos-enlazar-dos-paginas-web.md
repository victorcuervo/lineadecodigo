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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ76DWV7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T231029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA4ZTzpiLzB8KT79sLOWcjon%2F3SRtQgIr%2F4LKKu9sT2gIhAOp8q1EYRjlP9uovCvYknjMWzaTn3X6h4pdXaBi2%2FtOzKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4NFg9MNUN4G%2FXX5Aq3APgTqQDgzECSCpZxhxyexwiGX5YGRVkkzs1iQY%2BlWouNvICm8f%2BULv%2BEqR%2BP09w9MdHAEQjM2J4f2gkzHjt8sFwXESnqYoTPxFEaYaSqqRMqQvPuzXY%2BZ5js7PGF6VJVyeSm4Df7xm3P06qtlEJu%2BK%2FXNZ4vnZUKXkrY%2FCktHWJS8LsFlDYbsito5EyfDn20Ula62oUvGzQaI4p9UZlEAQkZWI2Qx1m3NA3KpL1ynh10jA2YLvlLLCHZm2VfPA5PCMXSUlNg1fE%2F1fYWTMS8gH8%2FCJGIPwT1vKTBQtOm1sAzLSfx5qAzK651FrnNKFyiUQIlNp4jqCoKUB2Tb4w8STxwhPlYzowdh3%2FNMAsukWEpjj%2FCgeZFIjPhuPcvueI16KopqvUx9yU%2FgI2KMcdMSk2Wzy4aeegtNG8iLd4944%2FkTn0e1rBlVhbo4ZF9FZUEnRCHL47gawU1xh4gVnxLhqs4Bbt2iPqJpNvgSifV7SZ4wFso%2FRtTIEW%2BY%2ByJGB%2FtZER1TMOukQhgQrdI6J1lwkiz4%2Ftb8yNEo%2BFrEC%2Fb80Gk%2FELr70SaO7%2FXUgoZdMoL4cU5wCBVawOlb1Hj1BnLHkMapsb5DUUuZoa%2FtsCygDmKcZECob0BLBIAaFqfjCexOLJBjqkAaNxHGryLCSnApGD83Io8r4z%2FIfIrfBcpeasJq265ub2EVyczKWqAy43S6789BaxPP79tMN9%2BaNM0Xlf4frf5yqRYqTgsA05n31iykEceN%2F12hrLCacvcms5RPGTJvTHy7bsIHAY%2B22xF3GpIJMDcVyEvIlUUN7IroAa%2BDz7G9Uh7y9gEAR2a1djwkCCR5AJyEHSvKCQ1ZspBUDiUpB3FBChfPhj&X-Amz-Signature=a75002a46fa3809051480a9fd006125e08a9a6424607fd467de0f81afd3c3e96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

