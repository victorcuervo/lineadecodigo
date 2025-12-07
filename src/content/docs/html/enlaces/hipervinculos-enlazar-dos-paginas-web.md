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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT3WLD25%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T214034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCijJwuDrSVUboIUq0vB19yA7wR4NdjtOSAn0vi%2FYXPTwIhAJKiui45sjlqP8ZApPifTYFADgruyI6eGSEzlwtjDLIeKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwALaaURdR7Msy%2BAN0q3AM0dIhIulqCxspMi1QlDiKatJPhYotaNeTyIDkBVsdMIStyrKF%2B01o8pdslLjlnu92HBi%2FvxJbBeDh0poJGfGE9BDB3AAqxUVyLsp2sj9Wp7xwAZ3L5TW%2B7bRJpTD%2BTBSDDbGhR4zHxSJQ9QfebS2xk0L8o1ySwy0sudg%2BsH3Xx9%2F0biyTxP1jS9rE5tb%2BOCsXJpRVFuR978UWzb%2FX0Seohp1rup2qWFgHlCuWcbqXzYoO%2B%2BU0Veyni6JnAwQ4BX91vrOrqmGGMJCUqDqMw6KiQSTy%2BXtmy2smvGSNTXZS6fLBeeH9AGh3EFFkQhttDBR0aGbyboKpkLefXkAZQIC75VQL9fTZ4Gl%2B7JDOCletqhGefZtXI9WO9yl4Zv884GrR4r3rg8U8Lcs2p8KSNqgnXT0U2CAn%2Fn64N2deBbI2URlYF8H6HBDVEKAERMx%2Fi9tFtbsPsOC6UMB4DF2R2GL59EWm2gIjhxW80bcXxG3kQbaMWz%2Bn5KsPYjAFgI62nErKgGUjqPFnP75F2ibmo6hfs3ksEHy%2FfY1eCh%2FKMTzfvrQebU5e11fBkokKA6dJ17tDM1cd4G5uZTByqaFSCa4%2FxM5jf9jdsPXWe4E7bfjsKQ3M%2FQeBtQV8W%2FMiFQTDzx9fJBjqkAftSZn3%2FU%2FdVOPb0up%2BUDYk553EyzBSR9FEQjfo7X13Vks63jpvaZ4rMrNDvDUbsIUcqXhdvC5B%2Fv1tFbAE8EbSZ3OIpgM7j3Zp55dgxJYi9868Yv7N%2FyWdQhwhDSznvwnAFfIIhuaOcm5Vf91IZH%2FajHDFa40bDgxd83yGs18u4jVtSIssVR3HSNFWcsLIB3BcquW3CTDNDRKD3vfeaEaV6Fhzr&X-Amz-Signature=8027fceaf8be82c66eac21fbcb2f090bf8fc92e3400c2099c340bccd6eaedd6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

