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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOXQILNG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T162033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDecdU0jhFhpTh%2BTzgDGEZBYC40KsiOWfmInEOpJYtWpgIhANLnsJEtE%2FXRk%2BK9EXcZtETshR2KU8hVOZa%2Bvz1B5f9XKv8DCGAQABoMNjM3NDIzMTgzODA1Igxmpiix1CUp9XLNus4q3AMgFjU3w4H077t8k6rVwcxFqp2TkC8U7pp8IT7yUXyXeFNmrp8APNRfjGvtnKpFdKOQrusWiBw32VRlq91qFtB9Uq2%2BcazkL5bMn3%2BgCatbPW1xMCRE5yg8atymMQeTC6Yfg9HKYi6PY1VUXXmNuhS9uIMlptdKCMxt6K5b4i2gp3avSRwYNXzE8RbIOV%2Fh%2FnpdSgyxCIjl9y4ktfEg02DvHyAqrBYIvqm%2BaxlpODw2uPbhyAcCmDU75lMbCy2WXYj0tVB8DkzehsOwCky%2BY564Qsp2DcgmTGmkgnj59ebi02K8xspQLJlt3kHFpBs7e6F3FDcs8YtvcVuIVwnhUw4MhrvFbp7cmnS7rZkY8WCKupHrdQZi2aLIigHvOcYElFqy50nunQMNkZKZwPtij0ytPhYmhyd6uYQUUmTRlM9wK2P3Tdx4ohj34tQYShOV6B62T98hAdqArHhpD1Zrjk%2BlbCI61duiLZxePRT20YxwZinnqgiRgXgcC75Ws%2F%2B%2FHQKcJQV4B48qx%2BMGrlMfONaoLAy3vW6DPgTaSMODj1%2B8lip6fq5WBd%2F2IMVsuj15Ldfx6Uf21YYIHA6Ldr%2Bp4KB9SP9Yxn40Mz1QDGeGR83qfNj4HypZo%2FqH%2FpWpGDC58MvJBjqkAebTQUoZPyRmIYdVw%2BA4eYjO1m1A1FRSM1h0WdIjR0zirKXMakKiItTPeAqZqOu8Yztv1TxF7KEFkgnVqOL%2Ba9VjesgwDLNDC30KoorH7v%2FjKsIvxFGOFHilpxccsi3kGhO3KAsuwthXJwpPfTitn%2B7L2lv6BiNBmtJ8ewKKDzLXs5gBQ2Dm03K3SPXH6CezhQy4V%2FiL0NOT%2F98Vn6t0%2FpzMuHsf&X-Amz-Signature=3319c60c4d027036feee076b319e1bbb9b05f97f9fc47252419836f8fd5303ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

