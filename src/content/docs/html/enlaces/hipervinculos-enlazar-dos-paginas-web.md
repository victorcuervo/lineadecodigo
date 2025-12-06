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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6EHB75H%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIeRGJsYqO1VCOeewOYsv7RPT7eD0XKdKP0TbfxJkeFAIgLHyoCx4jq%2Fseo%2FsXs8NQxXx%2BqRnCWyPICU2CXwDIXWQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLqNCv4paitFMn5R3ircAz5gnkDA5t5RANuis7uOiZ%2Fjv1ciBIZVR85lw8JbkcF8EOuVj2%2F5NoNSvO1j0mFsQ1MmGem00ObYYubFT0o82dlHYK4eUTVoG%2FtJcZdZYgbEcAfrBnpsTb0mGsedKE%2Bbrqwg6I9DmB47keIrOSNfmcDBgiqZovhDQ2v87UzTzG3X23Ybuf%2FDtH1BWcHS88%2BN4Vt%2FXUHfv%2FjtZEGnYG3wXNrjgDkPvo30HUbfltrtszYgsiN%2BRhse7QGmzgd1qi22GA7EdkTPV%2FbQny9y2SCp6QPIVWRkkpkgwqLy8Bn3S9CAN4oWqWeRBxp2BZhVXzEe5iYJ1cR3huzsEm6rdBr6vor6AuCTxLO%2F0qrS4pnUF6McLYi4dbJLq9%2Bcw%2BpVc4d%2BYX7k4vg2H14PQn6u7wSA0lYhFFRQ6G2njjo%2Fv0rqw4i1s56IG7YFc5GJ482EBr23Xb0V6dKk0%2BqIsDizjuHcdy491JJ0YetV0GYjzfbmdW7uRbKHBaSGx%2Fd2AKU%2BTENoPa1Gmmg8Rt6KrWxypoDbWgadm9ph%2FS25ilkwPUGmHRAGvxMI1%2Fmqx9cBcqSMu%2BD53kZoni1qHwtP5lmRgkGACbJEvGua8RtVBsOKjbZ%2FrBzvb59KlBRZ5Zp2C3y1MPHdzskGOqUByALPxo3WwphgWRu3O6PeYTjHeIydfjGKdMZjzUs3oecCamxCy9PEUxKW%2BGRkmnhHXyOBjtWejCSkDrTOjJl7vtNK7Vdf31tVAljmdmTSQLFHKtpFGZcrMjKS1uZfWiaD8dgvE8YhrcfA7HDcnHvzI0rSAcuojLhwbQ15%2FTL6%2BWH1Z5GCKXyPr%2BkTvXUZXOQHOuO2STBJ61350zDScgRRaKHJp4mN&X-Amz-Signature=c62d7aac3b0c19429ec54e238f66d1ee5e4d8a47267b1428dc4797212941e89d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

