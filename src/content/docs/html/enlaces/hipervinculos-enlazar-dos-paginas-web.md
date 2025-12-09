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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6Y4FIMM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T055338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF2YNtvLC99fn%2B3hpcuvXEPm1%2BqnWTVQpSNNusyH6TawIgasDE5e7N60MYzAm5Q8bOGhxlgK4Z%2F%2ByqYveo9DH4bv4qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuQNvyxNtYL6f56zyrcA%2BGwDukQQftslxSv9MbSSxh7mtZI7gAcfb%2FDQwS6YoasCO07xQgv0ba74CFBz6gprIDdbHK9VQhP%2BMmcy3NTygQUNIpfdyK9sTeKDonZxZjUlOUtRQRRQeTghP50U1MAAogfvs3vckIsPoVgrwRCIEeWGFHN2Evjcd9zytbhgBFkvep%2Bw49J%2Bt%2F4h%2FdTSfPLgrBFy7fHw%2BocmuUbGXONvlQMCi3Yt83zhIerKSGNycP3ZOFsp%2BW6tpAokBSSVBc1BbD1S3o3CAsLxbz4YSxvisISpb8nzZvmwI4WVTyeoFFADi9HyFuwzq6dJv78Jyzerjak%2BxdGxYETB00Q1IyY%2BNpM1dAgUrRqASFHRpGrLCob54viIV9wfd8FEQmNeEGEiOGQgC0wNpX37IW47U7IHaqCe2OFC8GNw7DIgj3PorhWB1cZjCk9Vt%2BpSdMfXEC83crpbA3AazUFI0HB8ZoaYuE8yCCmczOEeMr%2FDK4%2Br7zunJkjNmm3E39aS08zs03ZTpeSDeoqcljTGan39anrJK1AFm%2FNRjDmfsOo8BLC3pBW5pds19BP%2B0OgkcupTo1DHFOnX%2F%2Fyta8ChvE3V4Bpv4oxeCQxLLccZ8OxtGOhpd0T6w%2BNGVeeEdMehJV5MO3l3skGOqUBlG2l2AxGR5VAFfY5rWky%2ByKpKZvjJWXz%2Fz7HPe%2FiPgHP55TUadZBtY7QIArsfNtRflaxm45tbiAAwhjDaDR9CDQH%2B163tzY6fLyTLqKFBMFvpNxwvCciyfCNVKGStOb5KF8FQ7CjqyaBSqgq45W4verWMlTs3o0%2Byud5MwKuQ8gg569gsWrlRv2TUqnn0pGp%2FCUdSuJPSos%2BwkY4pZNM7phJb6r%2F&X-Amz-Signature=ffee56498eebdb05500f1319940e0c4975e4735e625e642f745cb7594a8ae627&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

