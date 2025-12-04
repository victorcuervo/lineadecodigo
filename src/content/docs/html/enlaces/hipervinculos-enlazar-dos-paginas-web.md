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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ7JLNKA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD%2BNQTJGW3lOH%2F%2BaGR4JlZMN1puAjt%2BgLcRL1M5eqZzkwIgd0%2F2ZTV%2B5XlFK%2BICJbmwkNZ3S3K%2BwKxNPkRFVrM9bVcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFKPL%2BlUb02WTM%2BcoircAxRaDkOAvBMC6Pvn4scFFEqcXjaGSGDAgZxPViHz2E7%2B5TLEnlPCwZH5MWSsSnUSNqq9mfDmA1D%2F6BVrrbYIZ4ndZOseTnoIF7tFxEvZ8ZSOwo8b%2FmzheAGpdqnydvYngdcTwGCym90oCWUxswUH5iNIXPga%2FIIgfjw5rO21yuZp9t7ZSWo9S3unWMN6Gg%2Fc%2BoySACHtHOIvS58mNE%2FS3JEOXvJDC8sPWIGWwdBgxRE9mo%2F%2BLCbj8K38%2F9Hu736fb7W8xLj6PCcVcLM1grEAGRuWRzL4VEJBdqTztpCjH%2F2K1u0eGpvGiVYFxqruoUI9pGfknmQ4iTnL8Usq3BJbqNqokii%2Fk2DFHhnpOE2KDuXwkhhGk29H412VeivHsjvZmEoPidFbA2N6kcmvf77BTdePcXjpOJvcDEui3yJzSuJ4FYC35DRCr2N%2F5FICwK0thJrQtMJ%2FGWeEjvv9eLwjwSasqAr7eSj49FllDLhT34kj%2ByG%2B12qn2gLY9Oia7HJ4JM3joZoUIU2uCKF9Oy8%2BcmOhm8NoB7I79zROaeDHPXAYW6xnu6EFXgY5gmXKjs5P4szVzLyUawKEYWaLSVvfF4F5Bn6YHxnYhx5BzpxEbGCfoNxqgOx1kV1%2FEhZtMPuFxckGOqUBXwg9g6J50NSQWw%2BGtTwTpL%2BlTYLbLlLhbzfKFzrDJTacXp0HzTeZM%2FAgyWQaA%2B1xVUlFlbrfAPpIE0AIfDUiERq0oWAi7YRU6sJ8VQHCcMYuTB2ZIME4yBn2Xn198rLdUgCSyQEAgzVmxF3nuMgOle6Sa4RZJymptTpAsHNttrSVS49fB8kM79M6F9fqTmIs%2FRtF3FQGMwXi687jqIOWOC7vtHZB&X-Amz-Signature=ddfe1e1424215c07c2af3bed55370edc37c23cd73d1f3534ef83987896621084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

