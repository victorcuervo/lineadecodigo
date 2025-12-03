---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635NH2QXY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCd2m25jY9nLqu48cDWkWavb%2F5OIX8VFSDuYZVPWHBgIwIhAKyPnqMTWbyMmOypspXjAUkkwnIVTu4PVjsGT7j%2Fygd2Kv8DCDcQABoMNjM3NDIzMTgzODA1Igykyo3dzcVTpBJGPuMq3AMH0QOvyzwxEWYJfXlBAs389MFxZUoxuapGihcuuKQebGrQOUV7ooJ82nWCf95NjpjidKUKyW9FJNsPIFpOQTssuv%2FVrOtIPPMc4XKARgd%2Fuf1Glt9mmIB5q7bIt7weTsT2Ot%2BbUSBnGyLFIni6rn%2FugIkfa4vNVMh6KnEnw1sMxOQhdw%2BQ6ikJBBzcEXaA6WRtxUu0F2AE7lA8Nhx4420Z04mClUme8NcnzV6gBYxQ6LfXgL47Tc6%2F958SyUf4s39s6Sxai%2BuwqdVtlQlbV81rCV99ZoKRd0eW%2BwAkywU13xBr%2FDKw0C%2B003Nx6a5Lx9l7MC6mvyQ3DVZLKrE1k4I0p0v2ywOA3Zi2%2BkzaiS1jDkEJ2oeDU9ERDsnQCstosf7wRQxHXzRVe0bSeHfMVTg1a8cDTNN3WIIfnTEdykPnHpuZVgmX%2FVFnp%2FM0KyI%2BR6FBbko0qp%2BwDvYCjuPpR6dYiiMRgkJKKBs2VwJnSDZNZFqPc3UJhVSV37cHydrfgomxm8q9TKV3EFyFIYB4KQiKzwxlzzPzt6FuGwUPokVAy5siZkd3zp02paYgYxvyLFGYVammgk%2FjB2g86WfkPmp8SKW7E5v3DEG0u7RgdCqJurSdkyfj9XUMorr0RzDA3cLJBjqkAfvKyoMqEI1A%2F1w1STBD45qRbB1xLpe8sbuqnVnnsZbchuKLZlbXjizOmam8jmLdMpYm6te7E%2BOElPC37LrBZGqpmrzCLTOrA5kqEOdFaz8LcaIwVgQyLlcp5OjepVVR%2FqUufZ7HedyGP2Lkm6qgMKaLiZ%2FjmvnXFubpUAHC4mBXErHiN%2BWcCGL2GMnYsHNwZChN5qb0C%2BqgbYgFHFeOKCBOg%2F85&X-Amz-Signature=be6a2305159864d2b74af0d0b5d8b4b1b2aaec3fb86d215444fca3bff12d7011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

