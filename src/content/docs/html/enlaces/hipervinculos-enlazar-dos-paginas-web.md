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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TVVKZ7T%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T204145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICiTpW6f5HPbniZfBYamBb4As2tqm3Q3GUUoQrLhaBhOAiEApzZXpqJPy0c88S1SGKG%2F0K389b%2BKIXJ80pMIo9wuS0kqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoRSEcmEeCJGbd9cCrcA1IB%2FNc5S3buI3qWb%2BZtryasYJIUmqnrqgSwH0SumCO4a0tD9mmWhmFm7ojDXjJrvxpjILR2HqgIwMUBODyLN8QB3v6gYU7uot19bbwDKXIwa8Njgq3xQA2L1JH05SFvmRcjTYc0RQ3fY7t5PC1GSTjHF%2Bzh3ETJ5BJ18yT6PMZaBGBbFlNsoAjwz2jpe54fPEzugOKy2fC7YGveBVBZLV0PHvn3TC6l3KEeRaLisLF3tmN9iccPzs2xlbcR0q3Xp692K8vsGrmr9lKHMunTxhd0Zcm4cnIfnyyvNvSglSJHtI7yVGjjsh8fkDWsVFT9ILdrAXLo%2FQBDZe7n4Fip4BE%2BZYwMF5q4hShsRSMB8JHpN0%2BcgGihUYbt591Mcgii1pKriZk3iuW0G%2BAi1Bk%2B%2BZYNLWvyQsGRlsaJya6kfDGoNlJV%2BzpKzT2evcsDrlhqrgKa7GuNqofW4%2BbNWNdFRGymIYKx%2BufPSGLaEUAhjuWlpuni1nBLBbuD5Ytci3ECccDrzIlxtARnN%2BEUQPnoHw8LznuuAYPuYBMzI1hHe%2FAIop4XN5MY7K3WQAgQhlwTtIOcKOON0nsJPkofrVhdOVfIlIaH%2FStj2HpPpyfZsNEVgwCadkm8DVHcMIiRMKzd3MkGOqUBzY%2FIEelVW8iolJtGxt5UDb1FM4%2FR%2Bgwo742DnJxc4BANx4kP0sgbUInV6At5woCQKFC1qNTkPJWpMtENzqojXY1t8hFLq%2F8%2F1sldbRZRJgnVGcJCGuiunpVdX8JFXDTUUwjn2wHyW772xzDX5vYOQY19SeIkJPHD6h5Log5xjktzSlbqdcRxucYkxwX8t4%2BNDG12LwDCNm8HDYE8fJkkOewnBdFG&X-Amz-Signature=ce2baa1ababcdf871b96f8d600f6157e3cbb48ac1379dbb1f6ca1a577e7a0424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

