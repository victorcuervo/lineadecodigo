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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FDRTTJ5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeaEsAMb4YyJqIHnSPUiTQUN8uy2qzmdOGGoRokVCcBgIhAL5L9R1WTcSzZeBaXahTp3M9OcA0WNl0HQkAvNG669wzKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQKdfqeCJz7q0fYgUq3ANUrKfDnR5XD0%2Fc5l1trqnBWkDRWx85hdAW1zJLgG2YApb%2FhpKX4KuoapOpXEM4kMVHymnXGlU8kKQFg3Z1nY2yNHa33HyYQFoZgiOPJL%2F67HNmVK%2FTY4u4aLsC4st%2BT%2B72XYqDdGNkUapZZaqHDwlYe1YecdbIJJ1QaDOMo3E3OGqMMbkftnXBaneiIH8WFHxCBenU%2Fwq7m9Wh%2BJXU7VItkAeo231jlkghniyHDEmr7DA34b3iV165FixlEUvpzklUEIJ6Th0fbmSSSpLa%2Fr7R9nWB1bkpl%2BuV1zXwSea1%2BS8g6IdI4jVLgGTYU%2BMwgmx2dwV1mquXTi4aooReOwcy7GSvDzcZ4hCws3cl7TWdpW9VfatzBRbpWHSNQGP47sM%2BQQ2OdOFBOmzC6Rjs%2FTbNSgI9RGwZC8LK7%2F2943fILAykv81Pbj7RV7gPGdwsYRswhjIyN2DCd58h6QA6FJSKLoovobqVFd2%2Fq1L8P75ZpsEQM%2BS8pSI03tgzUslZDhzKe4NrHsTtXlWRm6Zmdu%2BAyPIdJPjlL5DvrDzoDxeo3mJbMKuThTmiw39a26ixDtjt6Gif9jjQ%2BC113IlYPi9us6E67kqOh%2FyHC0ueeg8hzWguSUV%2BwQiZ%2FIThsDCo6d3JBjqkAbcHiHj7JHKQvANpzF6sXgYm5SfcYOiRF4apfNJhuPEEX%2BcapGr4vjrbwGLgHSMo0KREnjX1zsQSA5MQB9oj5ZtOPtzBKHGIvgHCkmTlMZLTM%2BivY9R5AXEKEH9QVi8gSKP7TLie57%2F0QfyEz9gRZhYTVOuduP8Huz1qRNF4MD2HkvuPCFR7uUC54ctmeezTkGP2brUgqzTmgLUg06AMdxKNKHI7&X-Amz-Signature=480ad494a76eb2a5374f96e7270319cc1a90530824a420a341c682ea733413b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

