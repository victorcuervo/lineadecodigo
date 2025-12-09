---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBZPTWRV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T154825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLj5n1L5SyG8nmIi10BNpMW2kHxrVO7ukUjhMVSpbOqAIgWgjcTCXJpJ9M%2B5orMgx6IY%2FhszjVY0FO%2FSBJ6eJsrlUqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHwWAz1XN%2BHdAgXkCrcA4YaVJHPKz16Gqgxzl2tpuMGMp9Uu%2FsvJ%2Bi0jOe3HjLicSOCt%2BmDPu%2BRrFIajELAw7z45jQP4QskwihFFH4CKmZXU3MdZFkLzJWt2B5YbZ7WbK9lg2FbjFT1Dm%2FQFlZVztFwt%2BW4dWQy0tGWOe698%2F6DRvXCcLt2DP6ddAv4XyEOhyFKJpiwhFXhxlBj%2BwRoSCm2DAZw5zvsix%2B1T46iGnEZmB6EtawRjIbWEQrTv8I3TpW3WBX1LkzlMnTyQCDTcF8zwWdkauudSDAOwuYDJFNMJ8kh3EFyzL6%2Bn56JmrFjgUqtm%2BRXz7%2FYG4XB%2B7Dt%2FsOthAswIp3KDMd1CFARcH6L2B2feK8i6ARg4Lrk%2BkyL8Ea6v9CySdp9vGz%2FA%2FjS65YlrT3xkCcOyPDOrkHtOFi36m0UqMGKQBEl6b31KNncjjx5vNFT2vnXhZQvrPrUd8xQ3765DNoBlBJJS9bznezRoC7tL1qfnwur9BVHIuMEITdcKnZXFmSkoxRA9%2Be7OE4Avuwq6rqBsRriEH3mBJs%2BDij1nqdTeW95LHKf0VzNx%2BAvjehzI2i2Ood4Ten0nr85x5%2FOCGGS0oqT9lXzt5SsRsoIy6u%2Ba8I%2BSt0BxXsPQjhF%2BVN4lusyo%2FmWMPjd4MkGOqUBXUwtIIXd5PMYmpt8WQgYFEobVCk6OMmC1T5zNJPxzZIYQuxfCrePTp3CBbuePDreUWYMcJL2X3AvTansqcfCG5XOVGrYYZpJEDEOmrTZfa6qreg04E80tP9r7SadXGNdrSyOHIrj6sxr6GgGIKwAcfbktKJKleOwK1560W%2Fr6MorlsqSTzHYMnZpFS2Zd%2BTD8KNzRKRdO%2BD4mn%2BMSQnIP05IOtwK&X-Amz-Signature=19f218e92ed4d6a3cf5f6c406a6514ee4bcd7a22a13977f9f89557474dd01f95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

