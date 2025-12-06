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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGVFHHQY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBslMGa4xagqy%2B6xshDAdYjel48iHoChPw9TJD%2BILJOwIhAMT1nL0NFMja%2BDaeh4%2FRzltxNbGJX%2F6%2FKGNp7e5xuCrDKv8DCHUQABoMNjM3NDIzMTgzODA1Igy3AXgHKaSbiyBOrNAq3APS7IGdgPsbAXapUxD2PHOz2pxKqr8pep791B8i5QvY%2Fnh75HoEDWh0Y9%2B%2FSqLWyiKzLpo%2FcwbHaBQkICsZATurCVMCkFSyrHqPYG0Tkk7w5yAQXzAPoLotOVHps0MbVe09%2FIDeP%2BBnjNXtIl3nCjGv3kdPRiG70juxzR4yyun%2B2ZVd5quZMOL7XEL%2B0Z%2FagGREhBs%2B%2FCTh1S%2Bs1U1YexFCJrgc7PfAIrgQk1L2w88R6Cmvyr9ZgsmLJdoWwHa6lJ4MF9qRQP8i5YJJdP3F0tGFOKh4leSQQYbBPEBdFO4B8hbpFysIA5WnhTF3xiEGx%2F%2FEMJb5lUxBiqu%2FqAFflMGKsZOo4kQpYKOo8RblbX8h9vwQWndfb6pJm87AXOwxgZAndjXjhlU0cbPFI4OMOatVpmcN%2Fmn6hyMsTC9lra9vqqMNkJwanaAUF9f%2FFzdZTk0Vu6TMWi5cUEelusiF7Rb8ea5kCm0ZZWonrDLiaH3wKpusEa4P%2B8TyBt4yVVT5UifWtS2oMvmUjvoqFRjPBVx0bxcYn3JmmsaUz%2FteHRlexeuaxglzusrA1ghmFfFzE4uy8JrDRlNnr4J6MaHN0EP8CDPvS0nJj9tUzEMjSJeD3WYpeLYewmMkAWaYCjD1ptDJBjqkAZ3zb8w3fZWWIBBjT4LaVNc46MJzqBIBqgpJ6qRahon3Dbn2h3GG0Ofpb%2FQBKzgnvzS%2B8teO3VF5yRm0icGY5JQxz%2Bm%2FUL%2Ff3HKXFAB3UUyI7IzQXOdZ3vnrtN9UWqz5JnSrulttefjJccPs6k8q52EM%2BgXP8X%2BgLkGnVviC8pNw%2FsUEhF2A2dqoo7A7DYgfpunHWZX9Gg051AGPe6Ddlouhyr7A&X-Amz-Signature=9c846b8381108c1b0af7c8c4888d4ff10ea198341d54b17213dbfd19386ee655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

