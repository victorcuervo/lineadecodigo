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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR5XUHHD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T110029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAJ9zT%2BdTwc40RHdHgAdDOP%2BpsJGN57YnJNInMf02svAIhAIk7PY8PhzHJSVUJqyeE7lgTy6xdHm0uFGIxOUPWl7FZKv8DCHQQABoMNjM3NDIzMTgzODA1Igw%2FSUA8xswlpfPAEccq3AMAp9zvJXumu7DB2Wao8ELBbtLxaqpz7ibMoIdpDCO1tdlVPGaxjI3KDoi4QsgDM5oAaATGnotL4%2BBUD46Fx3SFR%2FMLVXAgXQovSmaeABzXPLaDPlnPkm1piRgyOxJWdcUAVriyHeeVpmTL7Um9%2BZE0J6aFLKr22w4g0d1NH%2Bwrfnf3Pl71fS0Sl87UnIxAkdwozHppIm4fekp8wizFXdPSEayD%2Bj3O7MPqcO%2FX1HhVa0NcA4oqlyzkxbAT1mKAuXByDJdashShnpU0fLJ%2B%2B7RmvVvEqLSewa%2FGjme9YW4SVlKDmkJQ6QWT1lzT2rSrrhjU5TptQMPrlHLvIfaM7AXioc7%2FdYdW5JPF1fsdyKXqID4DilJhmwM9FPWSq%2F0pXNvyBVhiFp4Ie1hKDoZav1WoJRssJkVnfbcVQJjCnxRoKG5PNVmzuk0biT8t1niR%2BN9TKRQlEbVIQijyvb87bpFVL79IzIPPYVbLtjeXn5XQ0uONs4%2FjhigzPBS8sd82lyVuaN4%2BNYBv%2FZeKB9%2FcODJYgCJdaIJj2dQ5xzBOjwYYHepUPax1L7ZgPBmtejsZOSoj%2FBQ9QV%2BqT9p4kdhsPsBab9Yw07uIVu3caFDSxAPSQMgUKjjkphLpNp2A0jCEidDJBjqkATChukWJp6Nww97eAbreEdjFPczydm73PPkuw5jNgewnclebWk%2BUm1f4or%2Bh290bqYVoXmwe8vb6C60jx9XrkWsZvTnzmll9lJMrU%2FVHIGB1DBd20LMZbFEPx7Dg%2F8v%2BvC3ljiX%2FYWgCgXRAFuqPn2k4W5qVvPgpCKpKg%2FvS%2BgLIuCt3bukmtK%2Fzzdtn0sMONGp1mTOgwSJzgKTR7ixevuucYLeP&X-Amz-Signature=d2775f7a35f4d225b6dd28bfa802263c45458f5ab777568228e2a9b8f106b345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

