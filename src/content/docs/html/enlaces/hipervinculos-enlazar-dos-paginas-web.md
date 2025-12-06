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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTYO27K4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T204329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3aFbvAapSD0YXPLp0bqdEDQUyEgV9uogqwxvjiVxoKQIgfoBU3MWup0yB3h%2BDVzOIIYSOrcTtalxluov50q190sUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDETDVTCbvzt8JV1KYSrcAw3zHNHeWf76FV4Ge7Hrz8QsnsRyiN4hc7e%2F%2BDEe9Ne2ASzSxLY9BzSo90V3a7Y2TJnruNLRJ9pYVQbws8qcrEHesqmjaogmE6Oc7aVy9yqubt9zOduH%2FYn3EBQLBJf5tqukYvXdMgbp0%2BGEzwT1AvCDBzaPnI9C1o1sloxXbrpGp1LW5lkoIa9R%2FfBh1v05uPjWaaAKSTZQyOibUY1aRgSSd%2FehJNIejNvSne1EmmWav8vI86jsdsmTGXBeThSNklqNXWvVMCKQml6qb0iv9cEvNYyJT13QNeVSpMpKgiJl7TJhqvVjZY6AywNKcETq3vjmBPGMasLzrkfPzyal8ofurBuhnu8creBgt9eAfkqNSFEzwm85HAUjvBq%2B7ttS3sh%2FDhd7qj8HhlDGVhRjDZ%2FkpcmqxRpZXZKFFj1H%2Btk6keleYPuEJ1Qr4t21LplT4TGC8ODgs5tmVcHamJCfNXlKvmF13p%2FKTEq%2BCu1Lz1VSUlDDax2Bwuo7j3pmw%2Br7Rq1%2BZyCzFA2PUk1KNx1ovQ9WT1%2Fn4oQZB0JN4V0RnFWq7Scn9a0PayuPh%2F8q%2BoQAM5Z4zUHaJpmBSEf6xoN3xmIfVd1NOoE4x8vBkSI2%2F2cC3gzBew%2BVLzuOIfTPMJvK0ckGOqUBf%2FerKzirEUXwQKllUY1z0YudP4vpixnQp6yk29Iq7rAMJUi5biUIjMR8JRpwXpdUKqe0Bvu6rhY5ILym5lxQzVcDmflztK%2BeJAUeoMFmPcX7YVHq%2BwFcUetZgjH7F2afahj43XyMPTtsCkzdQbCNETjqrhIVdzCCgI%2FIZzGyT8xluCg7uhJchKloL1p1IEjAOpdZirjv2fcnTSkKpzHX63z9yDBB&X-Amz-Signature=4a54f05c8cafc805773d5108901bb2bcdcf9bfc0f67d99b2b45358dd5a11a1ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

