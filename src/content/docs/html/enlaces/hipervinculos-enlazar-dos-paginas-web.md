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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDNCQAXF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T165316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIColUjNGJZAuMM2avAP2RMI%2F9uTD3jqaJX98sgnHFpyXAiEAx8lyBFRwTcFbRDRPlsONWx3fFrc0l%2FziGd%2Bk%2BBzYcaEqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FWrX5WA8fwnsQ1MircAwoz%2BG1Rlvdqbdejey0XGejx7DIpVfxdvVqqU82t8Y05shX1Feg0Po9AvEE0P6tlQGBq2VcMyRtZpcNNv2u2UxHWy19AYdecPIIUQMS1ZuOeGWvTyVhq4Z8LUeIqtROrzP83VioJsRk9tdSbuxN0CfUYoV8QmS5Jt%2BTG%2FstnSI9UHbz23Qb4wu4t4PwZ7GpG8QAjqPVeyAEDFY4p3wSqBHKdl5x9Ct4wFYpqE%2F%2BVk3OlG%2BbXy%2F6H2rEuKYFATHQ3iURKWRhkqHxPSIzy%2FQQ3jPy98HA0JErPj7%2B71gyvpf99YEAjjLhGgpH35t5bDWTq2oO5YIwCeJByIeY2JlLeqYoZLRFhvyY%2BILttEt1UQFVQ8Pry5dke8PucfmHE52c3%2FQQpn2S7TbzJi8SPa0g9A8EVtObmVEMu2n7GxjZ5DZr%2FiSkNIykk5OZF3Sw7ww%2BKxANpktNupXEKLBQck%2F2dbCB9E3cFdfXVgVB94yA4zGbMtEKZ5HRip3gDoLCAVakzrdslXgtlX44aAcRimU8nSi0V%2B6R%2Fyf6l76udeQOxgG1ufMVeZiKAbAyjG6qO4azjpWA1v64pQDE6LGRhujtLxUlxgToYRs2M1f9JArEd8DvH4kfQMURfF9FShdZ1MNCX4ckGOqUBs5jC2bbJ%2Btu%2BRAa85WrLo9rhDshKRq7DwUun52eUgokhknK3p%2FG8upoKHxfluIlr303iNVbITPmFk%2FqLgJsP4Sf9bjBTm6ZDOxsXiQQL019O80sqzdQYb%2FHTtyoeseUbphajlqC7RNiF8pHTzTxcHiFypR9c0i%2Bpq%2BchDaBow%2Fg5dammD1vlwCozF3P3KkiuN6e4%2F1Y%2Bc9jSHlzIPnXetvdz%2FZVG&X-Amz-Signature=914268fa3cf9021000111fbd3c1dbc112481f46e0c836e9ae49ead23181130e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

