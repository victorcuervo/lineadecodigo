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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDCC76KS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApjiwYHiZpOj3qo%2F4Bpfw5NK67VLIWpUi6NKhvhoopJAiEAij5h2a8t0nLvh%2FGcQxO1rSs7SyTvjq1z4Kcf4JAxtvUqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnyGZKELVDwLcqgFCrcAxVrldXqCgidzIe11Knl2VaKCVE7doz8VPkenlpka4WQR3fl%2Bl6R8VheGcYbYN%2BzJWRu0KWxAPBzyYlNRrP5sM1iATEIjcoInUuAjnw10eVBvX7%2BKJCWoEGhyNZt0zGnq8HBiXUbZRbfKOP7LUSehxdkgkV%2F5sQ4lFs3cpFN5vvFsppo7hndLXLA32nzdkKY%2FWtLAJxoL7Xcshu7HAvwL98b%2FaDl1QqYdtXG%2B4SO7xQ%2B9zkcPvqwZQzAGHQlW%2BsykOvFbF2KDLPh3Bc%2FRjFbGtu5FtCBB1LFAe3FHAQoygcfaTpVu02lF%2FZACxO5%2F2ohVQ6mVj6Q89WK8a3MUV5NkYPTJqqG9XQzyg%2FBxbP9eAlk8rIdVONvmeYbxXmeFLbJJgN2pWrCav3556SLcHDJwGYrq3pjZKJp2ESVJzoo6hD6HmtL4YyWDZWFdkPIT6qi5gF8bhdbPw1vvps%2FDclg5v45vBzMyo0OLlktQ69ZdHLExiHMrIbegGpeLdb33a3AKRkEnow0e%2Fcp%2FrsyPhHScxrSh5RZGmOxUqm8k6hr0EBedFwRt5U6Ll09FuFXOoTU5ZIJjJBXCiOVQ9W9cIGvWuG%2BLvJqcynHvgXj%2BPv57rJ3B0cl5ecd%2FqKuQeRRMOW81skGOqUBoecC%2B9aMJYG0SGKj05in3J3hQMs0p1WhQ0NHmQDKqC1BeJbS6H%2B1J28fA0QyY7iTh0Dn%2FleyKsAxcLDDs2Qae%2BCGCOJpShHDaKsiMtxEvtEI2JQXi0VxlykWSnkAh9QhqjAKSTEmRWtibm81kYkb3gF2w7sH2wUzp1PzBoEpfnopNZHMhFCo62dR1nLs035UUNn%2BwSfYCn%2FVAXbsS%2B0o3nRKxJuy&X-Amz-Signature=82062219e3a6ccdfb20ce881c9c2229b15ad93a0c6a3be067f41ef2cf86cb710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

