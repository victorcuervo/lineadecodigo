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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBL2WDXI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T022327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGv37Pf41PU0SMsCBd2J1ghK2QRkFMASUiz%2FL%2BOcWC%2BXAiEArLmXqXOTmXMHmetGsxD2rzlKDzg28jyStEADmYD%2F0tsq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDBWVpWbARV5MbzH9jircA8121O7M89sEflav94UWNQws03ANFQvi%2B3dWLN49Kj0hTtwxDIjvtn628xqaSi8rju8CDvG1Jv62gV4BZ31cTQmvFb05banQ0byenG07hf46UZm9bpf4zCxdn7KdqNBtdL3A7%2FubJ0UKMWg4gM8Os30HYl%2FPo4M%2FeTPQ57gKQN4hRwqPAbMiCDdFwE7iQpCIXIUEDMg8eXoKILbi%2FHrfbd%2BnEs34V59HKRySc%2F01NSS%2BN%2BxkzSjPTOFJ%2B6I8aZyulsT9T%2F1I2s6h9goGHTlLIYmjLTAWvGt%2Fk70fRXnu7JwLjFL8hXw4Ecb9cbp2XYr6xA7ywcdHe2IPwQoluJRyTz%2BedKUjc95%2F8uWr1R9q2sbiz3DZenj49O%2BxdNsdcwDJkakin2wQ%2BdmWKorLqsgtid18kHXZpK%2BkXtVEOE2OAgZAvRxDtVhTSI6%2BnPN1xJ5LSrojyaBdDwZLy9we7KN%2FopaL8Ot49x9Ut7DMbuZkfA6PT7OT474cleiZhD%2Bdt8inwoJl5%2FBeM0MSqCsl2pkvt6tcTSbvIe96jvAo10ShTSJZc3vAe0liOXbdLTOSeXJy4XiMKxlvkvDGpycLtZCiCzboaneq05oRDzWgA2Jchfox5cHAZT98ET92BehiMN%2BKzskGOqUBbm4xyDlDL7VRuBGmt32bwB56Cm8IUPVYjO17Y28aOoCKRvFQkfjJ7Oe301l3Yd8nijJul2Q8bh9pvuxPdsCWYRIBwp6uPpk7uTB91M6z9qb41yGgdNOo0fJo4mSCeZXzmDlyygTUvpYkyisOtQMcQWnmx8QGW3c42Wvu1AWnwj1JeS55sg7iCcsC6UhQQbP28CSvrq%2FUB9fjL%2FUZS8wV7jXHsBuu&X-Amz-Signature=0dcf8b1792c9c2863fcc1d2442b15c99f6e70eda0551d3ad343e8984d8b0d7bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

