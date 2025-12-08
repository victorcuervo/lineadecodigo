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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z64YEI2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T032227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwDIUWSUErvpNbNH%2FYR9U1vSP9qeLKurSpX%2Bk9GrUzaQIgY0ZCGroADGR9t9regtwJPkeEna0ET8oHwu6lzO76o%2F0qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhg28%2Blloc5bqMxkircAzkBQ0Qqp5%2BV5m7T80tU8UzKwVBq4wbJ%2B%2B239wrJSURfRIXrBUJwUYtgqeST5K00AJwz8rDf3nGzCC73SWBDD4rGQDaSEGeiSCe4RQqZNoRqz2wS5nonkG%2B1acE1SkzKRnKfg%2Ba525WUZLPCcj%2BKgJdF4vW1vGtcNBISCNWa2DWnL%2BrZ4YxkiueEN7ejkKH5USctfGWxjJzYYBp4Iz8OtiSCUEY5xrBZdJMXzfz5RgI7gMOykm2m%2FiGjBfntKa85AhPJARpTDTKGNPgvMtUhz%2BqS2XuQsKpqTXRaUMh%2BZGMeb3QUPIySwPCRQZRMPF6kaMJD7JerN%2Fb2IClQPG%2FSvtUo3CEbDgTiovYv5e7ghP4UMy8wasbnr2pRmfZHuTnXcxL6KtNNT%2FnODkCfKE727JfsaZHJvtkTjOCyPv2FwY22o7Gnac1n1jLyRvO5vWokNoiZMg2oY9AGoHKgqX0U7ZD%2Bz2fCpzR%2Fyxvw4wPyGU52UGZu4q%2Fg%2BwNIr1o41FEYRrnO0ZwaTDrHpe2d8GUcwUgvg%2BoEMvpbyVvzokJwsi9fD%2BpxiGBkrsE30oDbFYyLDZ8Vb4wE2J322mFjTjiSMltJCCk8tiOAcRQ%2Fkx6fE9zKuahJm8oEbNI6ETENMKbu2MkGOqUB7bmlXPgp%2FsN5hx1AJfRMZThQ9qfM2sK2E%2F0NWWXHVoBQuF8oXhq95QVYbibJw2H5PN8WlJrshq%2FmFxN6MfdgPtLnDOv4DC3URPcfw62OUz7UgVo2Qtwz93swH4LisWQdMzVIwoYBnnVUeGM6dyPeOAWvsNox%2Bgll%2FRa5ml%2Fe0Zp0X4b%2FYqRKJy5WfpXbeoG%2BCS9blJ2ppBz0o0cWTCVVNx3cc3LE&X-Amz-Signature=f5f09e97c0c790fded79499699298d1df03f6fd81063ae2b199c1cbfd7bb18e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

