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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOCKMFHX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6iQm5CHg%2F0DDeP94x5oVNcGFyU86Q%2ByOHwT9nE5uCeAiBev8ynF01Jyvp7%2FVbpNRElUfCKIUToQdzNLjhgaqei8SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgTdKeiHPy%2B5B38HKKtwDzdW74q2kxthEoyq54Kpg2hAGP%2FvPi47eghTmU%2B6VCuVHTYAzBAORieaJLwLO3HWjZmXawM8lujDuOASxfZE94bAOil7k6T0E1KAqukkGnzCHaNPR4dZQ%2FRdLk2BAvFW6Z5XOEkvaJAPl8ffhrCzMXH6%2BVD2ELODY1UQQUzFhSsPy3xKIVa%2B4JWeqea%2B7%2Fq9SYlnh1gl5xyJ08p5VCJi6J5PvRWln5vU%2BEmg6r0NVQebbb50glPSELs%2BK53olayhBe3m9wwli7B7Nq7A4PHYUCMuFfIzr6qtjsk6Hkg6q3PeH8ThTxab5v9RghilCHj1C9ANtDtJ7s2yI6%2BpY9%2FOhFLxM%2FPttsu2J47cD3%2FBb8dZlpJXeiY%2FZoTCPXi%2BVeNR4xx45N3h17E%2BMcvbaec2fI%2BQENww%2FsyK%2BlIfDMtG1PBS%2FDFCLrrfPuEZAt76j%2FypcGuNIOIqB4%2BsF8geBClQYvC91tRfQqufF04suksPVomkjIpzCEwKUW40ynzuqAMkenPZMAr3EbBxVnakYNQ%2F9qAcb8JOUBIBykWLoWxtSRLs9DqhQC3QtVt71M4%2BrrdyPx8%2BegqVNLUU%2FNNW28FgXiYGMCdnStg4%2BoBDwWyda2K9X6EUWSlypEjhIKZ8wypnVyQY6pgESFKDMI6v1%2FbqWnmbgTwk%2BJgsZ8gcoXPxTRjl02inqHL3Iiw%2FMTazt%2BLPmCXGkivZMRIP7FoweaTZtxb5q4V3A8%2B1qFnTW79OzQDp0IIAkj0r616RY%2BJEaElUGM8o0wkyJ4yEa18uJ3xWmElVdKnwZsE9iIOqHWXbnkRESaImGAnanghg8icOGYh20VbmN7aigTzkQhIhe9Fbqs9N9EUJMR3bePEik&X-Amz-Signature=c849a66631319db0fcdb71788978b2ecd574be4faf698ae97d1765e50e7c6957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

