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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAGWOFIR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChKSvkcqGU8G%2BAf1p%2FnsAQYbhjvV7CctlXWXIFQJA23AiEAjDoqPkF2J37gJasOON7Oq1%2FIzsBWuaaYw2qcIndB4wsq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFRWPBAYN0xr2N5tPCrcAyhxD3vR3kOYZvnzqbR%2Fw3Gbltk%2FU4jKKzLh8s%2FaHBHqFG9%2FPp5CaP95agNogDDrQfJ3CYuPLvW3PFvjZX4rzb28alWBCgBVxmICzCdMLqX2oo0pFXZjamCvDYAevN4uGOPWfn4%2Fexz5CjkgUCszNastjT36GafGKeuuopQ4RK4JZv58ubwMiqIGUNiAJX7pPErsAYcGE4NXcxir1deLIYKmACLh0ADF7%2BbCnvRqH%2Fhu8qArQ5hSjINqe2D99%2FZWPfoitrwMRVRCWCT%2FXm2rRLpcb8YO3C1FqIWqs71wdilbh5zk9AyPtG6JyzTHbe6dYPVgt0k7Y2aW1oIZnbDwentcAluOsc6G5DJPasOy%2FPxO%2BJrjPKubmWQWTklNfUbzbOxzBI%2FLaJ238sqYnSgKabbRkS1qZwrRjV6PP%2BGTiGZt%2FSNJbyqb%2FgwBIXdOwoqxRU3dzu116iAZjC3iM80Sj%2FagYiFGeDX%2FJ5tlBh8bP9rCfzLFx7QGgvM%2BhC7Od9XSBLyRicf3a2FcXd48zVScsFETLtqmU%2FAvF6%2Bd26rI0r7wtkjhm63mlXVww4JiALVO%2Fa%2BPJE9fBUD%2B08lNG%2FvuDZBOKShgiAQ84PKhH7nyqHMOIGFNprOoOjRcCzzeMI7YyskGOqUBpYE33dEgjj2WweqlE0lk2WO5u3v7kszOVoUFx2bYnIFsKv2QI6tk3YxAA%2FSfTSwOUg8M9nAClYr9RcS1SdpaEDofCuW0UD5NgdhK84MRqWZzbIz7x%2BerwqdcLxweSuJP2qMI8NEIqAGrE2oHrrDgdUgD6LrB250JVbjO8M2vtZeS7F2pGFmFk1OWmW1%2BOstfDs5dm02PWuYKTSShomhWacxrW0Iw&X-Amz-Signature=d86d0ff31bec21cf20cd05a3e9322a7c8efb6fc226936ee3835306806500515c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

