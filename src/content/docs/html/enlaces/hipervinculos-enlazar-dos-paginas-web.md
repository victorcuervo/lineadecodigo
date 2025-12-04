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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3N3CGNL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIHk1VJQc1Tr1FSrqdZRmFw%2By0cuU8gZ1p3iu3ZVypRcPAiANz%2B2EGq6MSDWNwZMKnB2lml3fRKWdnlBXg11pkgjB6Cr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMTwCUE4rpuSCDqALbKtwDLTbUtXK9c2QaLdhs2f6noLQj9JHuqe8V7yu%2FQRoYTfVKMaDNBbidpVS3khDCtjpPnMWPhmnx4nHIQtENjOV4EVi4Z1AXKUfUiGhLlpP7pYDo2kxbAaitWgDcnIUYjkNw5q7OXs8BRz1SbI6O%2BQ6ux2fh0vjrIJ0m%2BCSjwN1Db2XER2UYYJ9WT9ZTc2bEdFgRfkqggueCuAGQIfF%2BwQLmWzVoDm3fmUaFHm%2BFFBWSdRqaAbbOnaDS3%2BZ9g7iGa5NQznkK2UL1crSmBs%2BhB%2F%2BOerv8mZtyiFZYOYjARg6x%2FXW%2BsjAMFLRGJ5RdRvZsjBYqp%2FAAKlXgpAxHNjWMq7VNeYCmW5KyfdneDY9Y4YbJkJaBCHWYon14hic9vUvnIWtTPittInhyO1TJWeOSfwE1IcVEgghnJbElVC%2FIDGbCZJnDHDdbY0F1vDcnQzJEgAkafBh%2F26SWOzEoEtMN6WXVPDlVN2kWwWUkrz0Wh0ZP0m4wCDCEQTN%2BNzhbSyB77UBhk4%2B3LhhWlGMHxaJv6E5uXAI9AgG5T2sUdlhmprU0x3s5aFwAXZ5tu%2BFQ%2FHgpMu6wQhg84SUnk7tWocP1kZS8qvb8BgFZW5w%2FGJiV1FCC%2FOFlo9jGFvWZ34SfvDYw3ejEyQY6pgFDNmaQ0Vh865yYbzUfPWDRqGFye%2FSMMOFaIs7Gx4oTxU83dSaDj8d9NV2U9sPr8V%2B5K%2FNOKcD87BOZ3z1qg6ddK1xkArmohhgurtkwQRSd3k5KZsmbWuBwcOxkwiSJjP0uAFQIQfHRNg7lZVVCCzXbybg4wi48GH4u8IW4EYDglyEw7yxHws34jmM2LpY4q4%2Bw%2BqBsGS%2F1Lp8joJxLCl%2BzZ18%2FexZh&X-Amz-Signature=ebf7c2e393c5075810ebd7c606696f762fead6c053f1f73d4eb6bbbd8efa5b27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

