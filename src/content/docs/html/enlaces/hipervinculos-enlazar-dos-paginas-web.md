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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU76PZYQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T162622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGIq5V5Ik44WvDdfoUzPXNgixSRWjBSLHJIeEQ5BXfxAiEAixZWvgypCKx6Xf%2FbHnPIV1gXVuV4xPoiocTmx9IAORwqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5zUvH6Jd3TKOwi2CrcA%2FdDv49C1dtgY8ALc6%2BCiLpPIlTIPPjMPiXKZZYHAm3fpp3C5RV8FW1%2FIMPL9MHR7KVvOFFS1YprmFvI9i97oHjKfR%2FKgHGPbnGsEOdjSD3fFk3hAi2sgF4q%2BN8thl5IcWQ2aLaxLpiXOkHYTo7d6WF6CNhAGE3L9wQ9URcbqmMWs76KhcbYa5c7pD9nvdqNj9JA7KR1MqEvoEF5TjwW9jkymg%2B%2F8vfo5tGJkbo21GS0%2FTampHF6cLuNmJ6Uk2Hgj6uCtbj4b5dG6yEUf78eiHaICKobIGBEzIzZcC4XMqrNUHWVMyoYalTJevoGiqO6kfonkAmdIp3lcukYoFmkmfK51OynI2kzcwe3Z0Yog9Nb%2F5v7M8F4%2Bno2fHtlyHP7tL8cDYE3dg1Fo2wNODB1cpg9ccpERAQvpqNWiKFXF4V5gfjW%2FeZW7aaugqS2kNMqog0tQoz8UgGbDhjoy6SdNUxDObYEz3Gg9tjTgawwRXC3HVarNdAzHWKf8pj1SZ7iMWwVPaUfxVNcsr0j4DyxzhPiTHF6d8OC1E9RoxPbhJ0Ssi8%2FvNswli1FgpZ5Gv0LP%2BkDWW3jFmBCvJFTTnJFmXx9IrhqpX0VvgD7EPCNJqjLvxtac%2F4NZxZ5vz4yMOyX4ckGOqUBM%2BJCvWHRN7S4sYS9eD64cDHTYup2X%2Bfw%2BVsY4mvBJM8Ylrh4W5fqw1D8matHryxC%2FUOTjJGwv9E%2FypTi1DZwf4lx%2Br02sQwYkly0aEA%2Bg89ucRvTO1vxx84eqqnYf3d3lXwbFTElDgC4%2F47LMwheinQhs6iX6H%2FGNR71zRScCpCsB%2FlPc8YmZo58eTXYL21N%2BQmp4O0pJyyK8st3f%2Fwno3nl8mCm&X-Amz-Signature=62646cc3466181b1717ee4d55b3749e149fac40750287d5aa7ae4a5c40edea8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

