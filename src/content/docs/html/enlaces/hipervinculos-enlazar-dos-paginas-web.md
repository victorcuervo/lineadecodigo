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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXLAEP5X%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T182623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsdCZ0%2FmtT7%2B54e2B4dvtmno4Y%2BRK9re1EXAqgt45NRAiAYfbx1Wrnhc0%2FymEyfF4zYbLwLqZZu2uETEs2cXGK9lyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMJuayY5eZpmwD2cPdKtwDW5NH3hrlx8aNLWfdrdDkze8scCbpuYsXIp%2Fs9B6vr4y6DOIduzC2xrmjAC%2BHCOSZzgV6E%2BsH%2B9G5wxXBNsHCTxmS9I7oLFN7rPDjgdfEO0ZI5SZlyjXlClQ8cCFC3XRLpbZM4%2FSejjAlwawPuyKSgL1IORfoqzUvFZXTkwkntb5p8w2TMOiQTrSqfF%2Fkwkgs3wOHHvR59wOgQmvwfrd8UyKHgqJ5abvXWsCXaIE7VnrG%2FN%2FXxABtxF1rYS2VuRlTDsAC2i9EaeUaX%2Bwec%2BFeOuKqimvgm6QdkTmYeA6w53jS3tsLDriQ9LCT8MlLEV%2FhGNLTyXolV31gCW01MQeIA6nrjgDNEBzSy2yMUQ4BgHMswxgDSlf9%2B6mjpElcTxCUp%2BPw3dlGL6soWK0C%2Bug6awQbngWsxlhbRrNfefLkHNrIXaboamEtkSkCtwacMXMSrQSmtuieBhGVvYpQoMi6mokHFGHhqlKL3G5VK%2BIDFhMtsCqWRasxAC9MwYZsjnEgFqIjxq6kwQv7OCUAtPJLUtJ6QA2V0XibBZ7ffrz4u1MSWvT3nBHWvEtlnBSKf9HS0KEJ1nIz4LRgelOY2Ur4RShLz1pK8GAz6CDWsqrAJumrWZ94Gexsxo84M6cw2f7LyQY6pgFZQqfWpNPdW%2Fogil29pamzQOsXfs0l48jCq5%2BFR%2FbTKNmGLcolv%2FOqXusMr1iVuxylNRJD8PlwMENGiym0jirMbWqKv35CdFTpdJT2u6OD7CpNdOZ7s1YviBxZZtNwSf8M8sp7z%2BLR%2FjWV2xOb6JtqeQhfZhWKKDLXTXzkzXDNgr%2FvQeoMES04l902BgeS5JaokXe3iLirx8%2BRUN7eA0F%2BHMbcDzvu&X-Amz-Signature=7957aab193e695c8a3189e032aef1d1cb0f8354f0c1924353b3ec56fb47301a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

