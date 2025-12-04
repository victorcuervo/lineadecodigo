---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UABB7SLY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCVzqSHVRzQqubgl5ruWJl%2FGh6AZg2Y4EGhgydQvxvYUQIgbCL3nminIPOoSOmoHKc9AL1YU0dxLLFJhPs8DwF54Z8q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDPga4ZVX5bFiUczHXyrcAy37eFVmPX62Hcs2%2Bb0jON6RhBgrJFAtaqWK3IAvlwWnOXuwwC3gqSY87VQOI3ca5QU%2BuUT%2FnRmwUGpCjb9RvTkI%2FDCt%2BAHR3vNyDse37Gd0WQYKsbw%2F3IcMoLBcKi6R0j043JKxFgv953qv2u8GhznL%2F842ifcMMWShuC6bhtxit9I2atECchUAZ05JDkZzQ49u5Ii12aZI%2FgZhdXeky2eFlPD4UvdjGq0OIPbEzYCXHE%2FkWUAnEv4WpAN2DtVIQ4fuaM96UpoyIftHR6rwzZZkoss55YDH0GeZpasTxyYgNdu6LEegVHUZ34xKaIKSh1pA0Ppbgoh7VT61f4Ikwtu91sdqnyLZKj9sodPCVb01lLU34mlavuS9oBRniX2V2xOl2ljJjUuxJrDTS2Bg1ZhRUvHQuE5F35Kb8WIIMsw8eofWBdUh9pSfho5ngExWc9OKiuE5ImfWt9WkeC1zPs6VCvF7Nb%2BDCYJxzqPyWeVxNFKymVq1ycCxLZ5I2ORpk%2FNmAbZ%2BxRlgAm6d4ltJ0v21BpCaYnEWH%2FLDiAGXHGh8fACaUSsc6XJ6%2BTtJTYpB%2FN8sbrkl%2FiBuz4uwf64yG4Ux7BycMxEPUyuSI4ntyObwWsJIWxjd32Jkybh%2FMIS0w8kGOqUBa%2BqrvKPlKhlY%2F3DLrwNj2FXN0UqUWRSZ0b72NFFSsBSWhAanei6S5RFiU8Fqg%2FlIw3mw5W0%2FLyY9zCcVzgvDYPFAeAA0xPrFYrfYiSZEfyk%2F19giaqeakYo%2BGUw2%2FXM1jiufm%2BqwLo%2BaZ5gHYMaDGIV9RXK8t2exNCngdz09AGJtTK9SXUAaw1OKeZ%2FCPuabMS8DvHM4GhCX4FKTYDH%2Fmmq2mb5m&X-Amz-Signature=cc9d3bb1360b04e6f7ed007242fc4dcd6db12bfcdb90b5c96111d01a84cae651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

