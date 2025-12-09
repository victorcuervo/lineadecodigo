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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHAT347I%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T230112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMSrX%2Fxf66tv30GIfbz3SCnnrxZ1Xsbcy7oLFxeeWDBAiBviBQSSFuMmlVbq5qyhZcEpEbvKZ30AnkwqT5mTPnVwSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLvK8blBCI8uNMZLaKtwDzRJ6lRFk%2BJ7e6yA9Q2NRQiwl%2F3huEySUNiCJeMt3JBowI01bQpuS2slSKu0tNsQNTxWmklKfhIBD6uQkQZPNz7Fq%2BkBDYjdrz3B0XqJojNTfuK65T9tyBUnLpqaFcqKZq5D5RkrGrOLaAeMlwiMc2vPtxixSvnSek180UycN4h%2F8Nf%2FcUzjS%2Ftvvw0e%2FmyZ1qpcWNXIv7biqkt93DrB%2F%2BzOY1s4cNApa06tc8nQUkzy3trhY7A6MNFZsX6KbDU7X8uQtbUCTbVxFCmSKbsxr4jT7eFf0emSCHE1H59ASeWm1f90FJIxL4fbces9jQ0FlxUEfyy0q1Mxple7pBZEJIKS8qO%2BlPFjBjH9i4KxaDrELpT6b4kgZmeTHtrXznwWbRPBLegMzwCmlLcAMxFpkLlS1WzhY%2Fye4UFBXkYc4kiE%2BmwWFTbSZZ2I0xSlVok%2BWHdaYxTy5RCuUi0AP8DbcJ2mvI7ZSFFqBbhl%2BwqEQAlnexvyAB22bbmq3R1HIyz5luvPwV5T%2B%2FBBHRuJ0W%2FH5WCBFh8gNalogbxtu%2BXy1IX4B%2BvRDbmVVq%2Fy2kFRk0pApj2c4i5ftW8SAl7JQW2RwsvSTl58qYB5faYcqWD%2Ffk1CARlGWky%2FES28RcrownsTiyQY6pgEhBNe6xtFXc6xc%2FDHCWVIeFgVghE%2FqYk566EhrHdqcAlHd%2B6vw2ZK914DXNGwjiBFWb93C196t7F0mSfciwBLhXAO7IrYIF7rqwUU8P8PrFdXstp7kFq1jGdC2%2F1Fz9F7CQzWRcjbvByix1yx8O5YkrGIhmZ%2BWHNIIdyqsQl7SddYwsf1ZTIobMAiUXREV0ekvAxmuGfpVyC%2FRFEAjjiCtOHdrERJ9&X-Amz-Signature=30945efebf7b5f0c6a3cb83e05b3ec128520a28f03faeb9b307eb44f627294e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

