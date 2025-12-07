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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBJMTKDT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T031933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4PLIub8xJCaNRLQhKy1tFS%2FJ8p7MsLqtggSUg0gjDpQIgLYhRhPSM6YgOsm1NzSO7aGDr5jMpE7rbvdPDjQNCsQMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM66iL1bkCYJ3QsHHircA1RjQayiK9%2F8guWjew%2BraiW%2BpVCCjN0SsxaZ%2BAMU13Xlyyz%2FSTCJYsd9m4bMHn%2BBa8kszv6XgtgOuI6quKsvVYnvZR84M%2FCCUeqpf4m21IDB60UUHa70FpLs4SoIX%2B0aYrM%2FDLYxhMNNIvr4ZDRsKqRTSnSPrqvyQ0sHe7F4IGRPl%2B3%2FKQ7YuOP7M6nWxHmWUa2qKbOdYtrAXAxFuHzvd4KRsfIKFOKon7CntEOFS3rIQeciS3Y%2FxWE0YTLgrzActI6n2zYf2Xtx5bieQtjyLouif8CbLw0Dp96GY6zGIiep6fGqKH%2FPfcgaAL7M6hhosR%2BWFXKMIsPt5O7b3JmSdm2jevCmYCup73KSDw3hsBE3xlesi925M3Mu%2BwJTnZMAdwLI3Zb6IwnZuzKiPCV%2Fhg5%2FDLNoxtIsKqQFjWlfGb6LmxlrOGdFrBDRKvPuJT42l3DFOUjjjITgdASrxOW2DR2CGp12f6HvKVLEnKGGnETY8TDDDi1CeYVOf06bjmpkUOS7f7od14RoILSPdRZTf%2BeEKkJyFUKZkj%2F64lXxWwH9TbaU3EODv2E6Z1Nin8sJjU3xeqDStH8xeSYrZ85x2Sf8noGPJilOWhYGVt5uFlixnyQPGMYwqAXlJ%2FtgMOj90skGOqUBOrrcX7Azsw9jp5Ew%2FC7WG9QBPknAVTKt08ZTR5QFJBItzI8ZI4bFgd%2BPb22dSZdFM8pnpGR6gSTVd8%2FNi9LMYBDlhchuIsRZjNAP%2Ftq%2B1s8KapNJlX3C621I8Ld4%2B8M1ay%2BknFa0zjC8WDhisLd%2BM1FQ%2BZ4a%2BmiCvRYeMB5imdA8Dj%2FctzT2EBHM6wbRzKgie2ksMk8gq%2FEYB2KH2Z3jJQdV4S9p&X-Amz-Signature=e88b176d3ae1c309f9c3e6cf29b65f7ebcfe0dbc3f6e6b17499cd2dfdcb769eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

