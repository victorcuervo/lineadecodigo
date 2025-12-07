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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNSXSZIS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T004930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNuDluptCoosK0KmhbdcIHvC%2FuIc0yVRJX%2BfmZ0LPvHQIhAPgPkZbT33CMCYgaok3n%2FG4FnAHS3CXoxIMBz7yGK%2B%2BYKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylO4B4vgDYC0Rs%2Fe4q3APywaSu%2F75aVhfTiWaIBXCt5M4WdeFZ9LYDhI5xsWtoq3ODPn%2BryC9hW8Lo0%2B5XoZsdxwrm5a2mA6I2JdYas6DGpLWfJlO%2BvAqR6ASGu4ZQZAOgSSm37D7vt%2Fm%2BSuyPHa0LtvmtDkfreHFlUcE6IDSTyMz8%2BMnLTqqAny2bpMMnW1KoSiodfZf2mYKn2ZLkAxqCFITAY42zrKP%2FRy4SEmYxwb7vmW1wtJPJxmGzI5plBJiZWq7dTk1qEX2aSKLPWO4VkLYDL2B9N0ZErTXNke1MBnz7us6MFggwOvEdJkyrBfTHWDfjPr6IcOr7GhqZtjAJ0VEYT2Mm2gJD2v1X20e%2ByB1%2Bw3JthB79CjtaV2cnmFha%2FDsLIhJcH%2BLb5NeLsxrO01O6Qv0%2B3KEY7lohLGnD6QSnDedXJ5otsovlh8n%2Fh5olLAzRLYYEDgNt6f6D5eaeb2KBMZyEcFpUgHKN%2BP2QvXtbtneXuRPkt5IvcMv9JjglGWtPycZV%2FY5NtWrNJlsbHFzDkDT%2FWtwaY%2Ftb4eWjTOTrF0SM2h3GC3WqP8LtwN3JKnv%2FAfKNyTBqHLfHgZzkCKEn3M9AkfjEDs7W6xV1a1uSWxSSSwap1np8yfmSQQCSCJ9vKmeGw%2FeYvTCu%2FtLJBjqkATkOU9X1SzPrYC9gdGnE7Bxf3ko9iZKPSI9dvX%2FZd1Sl8chiFhJSbVRB1P%2BtfLWBdj9%2FltltBpT1CvsbXqlQSIOzvfCsM7hc1DmkCSoE%2FLG8IwmL%2BzWQIPHgJ47KUiXv%2FxcggceYXJ4Xfnn44X6%2BSSE7TOlp0z%2FkAtdo9hH5oQoDjny23X3fEzj9N3hIlN5TYohZ0TTGx9kotQvVHeHiLBSGiHDy&X-Amz-Signature=6ecad4b00065b4aa587cb646a4816a8976fcb29256ec3243e56145821086b19b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

