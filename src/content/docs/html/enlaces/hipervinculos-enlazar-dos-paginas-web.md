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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RU2GTH6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T182259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZvC2uvfv5c%2FxSxGq%2FZkffZNhUOWgWztlaSoa9ve7uGAiBprAdCv2rrtPM8BK9u9szqi46O3Rln8UphWz1z9tvvtiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlj3AT1JXEx8C%2FmsNKtwDxZH%2FwINV7XvTx%2Blea0F7f9a01%2BraUfuVjRNj9%2BLyLynBvXTpyXwE1bKH5RDm7tlDcaoKJusF2jSnT2iZeXL1ywuhuZDSVM0%2BFEEn2zDmDemlfd8VtXAyGVTpsgUDVT%2BO2yk4robqcLk6ZbxxeXnAbpo%2F%2BGlfYtVcjlCidNo4IfcML27pvR6AJPWP%2Frsp2VFI35qEfwiAiCGtWccRhCA2h50xowH9l2b8ld3y31eGJud4ba47QM08qedHZ7NP5BDc%2FCFolSZq%2F1wwgihU7MwkKU046P6EYeKhUzH%2FtjhfFQNNPKNBiO3C389ubNvuUxDYr9CmDs97GWLUTpCcj8LhqoGoHt5kScjoIycszNuhOct89NDzC87of49q7hzk%2Bksg9KSvmxwZS3rU3oDgaH05n%2FF60mps%2BOTXR7PKSluy4uWIjGK080nAv1tOjQejMHSO5O7uHukCRIatAiJLg4CLlnxxVpsopCZfluJaCMyJOjkp4jmb9Cwxi%2FeKt9XLLk6vRtsTLM4nLrtEstPSkSqJwTjUTQNUTKMpHa51an%2BqnIeGoc4LomDRH%2BiYRKn0g4xRC4sBui0ToQ8eZb614W6BL4UZF%2BZK%2FXdSIUrIkbgruo3aYoJ6Cmsu%2BbFXrrsw4YfcyQY6pgHkbZJA5XFPLOqg9lixwdfL%2Bj7j0xoSe3vAMoDUytEuO%2FIxr1UunVPOvh4miCwpgMdDyxW%2FP298akA1cfLrtHkBXPHr4X7AjN%2FLxor3Sk9brRQPp7O1CWs0T9%2Fn1QDhU58vNAWIMQrO2y31E8HHBDws3NSZsQS3B6lXzQGG4uaq4Gn2zR23O%2FQiDaxNoIh7WIUpfqzQO%2FtWYHRWOf7hnsOOU9hBhjtH&X-Amz-Signature=35c56dd94b79aca84f3c208ddfd650a7dc56579f96865b2f93c783690dcfa6d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

