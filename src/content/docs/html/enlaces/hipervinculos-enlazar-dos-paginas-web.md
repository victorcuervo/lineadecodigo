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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2S3ZPB7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrqitEXZlE%2BczHmHgaJG38s4zxAVkwodkcgoJ%2FTIfdHAiEAzy25DLWAWSMBamfVQkgQsGVchCHQFrcOgC4j2oDzaFEqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLO6rrxmqnyt4c%2F0sSrcAy87HfFy0EcjKuabNsGBicHvC5jz2ovUJMY%2BgoGhJ2NU4pR%2FNq%2FrbSPTDYuXA0XxMFEG2CtW1lgxnloaJS8PNb%2B8cUjJVnPmFt4783HOg3eRne3teFgtXU5DgY%2BLIFMD1X9vx2vaxpKbGsRX94RQTOgF2ow922tG5coDQFA%2FGzr6o3pfYD%2FGDMhtaNEYJ5YMPD%2BcYthnwi%2FIdHrcghBwlVPTRnHy0k%2FFgQ2%2FeSqxPJz2O5idfct3m1eov6xPt1NJOGURIvOrt46FADTjAc7HcPrCrEgVw3%2F%2B5zkom6AVgH9IqwaB%2FPKEotIKjP2lCTIg0D088BPwO36sKSbSoXy4gej6SLmYkVxtA4c7Cy3EJY0pHwW8JeiIkP38vIWGSvSfOHPAoaeexzRs7c75%2B3NR%2Bu2ttOjc8kUCKRVJkusRMfKwerbK0Ivfq%2FzzndWJwXRxCK7zA2yjaqm10AoJ3XUL9EvAhIdgn5DsooSZdPaWy08vGqCMvP0N2RYA%2F5EpfE%2BPJSEPSuz0kLWLbZKbr0L07ngGZIvfbuqcRsbEZE%2BOsn0FQS43%2FiNBpUwWBP%2BB7CyRwihnlcvjNo41pM4UO%2FCNJpZc6o7Gfzo1ET2yAM46oanxV4fTOFb8rrAqqTmHMMXd4MkGOqUBWQcEJwX6dTgJ6ZUO1KOQ0O34l8CrnbU7APRowUs03thFer0CxVH2zV%2FwkccIHpmnmYVSBjtNBd1ztlGby9sP%2FGgPe12b%2FmNTuO5XiPqnnN7Mq0VU1x2frT0kKP%2BoVE0FtuttSUFrq4ZRCCX4WxqCzvFrCVVGA1O%2Bct4TfcMG7Aw7lb8KkR5WHHy%2FXPscZKjuW9aY6ZCvmX%2BCJt%2Bkr0Pb5PR%2BdQy2&X-Amz-Signature=4c8de8357993dafe95eb5999dd50d99707b1b9dbf005a20f4efdbe0ae59c3bd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

