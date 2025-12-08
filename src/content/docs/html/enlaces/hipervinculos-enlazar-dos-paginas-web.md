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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPWDGHOL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T042741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9sELy5i01YFbm4FjRh4T%2Fn%2FgQXTx%2FLjQDcMHh3cUHrAiAa3kWVgX7KcWoRUFB5vVkWxQuhG3kHFEWYXY%2Bt9zl30yqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHVTlnCtztbkipy%2FwKtwD37iVHPiys9DTIypmR7do8jZo1LNoOHPaecASsL4scvgBiJfphM0bWqXWPQLAqr9HlGQCulkhS%2BzHRA7ZIJrTijwlkNokx906MYijPVt7qN9gBXqs9Wb7DQTIobT1sEMNiLyCfqKBaVpr2NtvPbY60P9y6KX4EeW57%2Bgaxa59aw%2FmvyIVRd8ZIMIvQ7J18mC53XiyGc5mSLsOLHhPpV%2FCBEY7S4wa2Tr0uSHiMzhf%2Buq9J%2B4Cw6bNXYCI0VSiriQMU8TtQOCqm3CqylbVZDS7hTExOG6dFTfUXU27gJqHrAvlCibWFYveVR4EoYgdrtLvutXVfamX8QAxp9JihVUGQbkEzJqYzSnUIFV2VMnvkeG0pMlTaWD9ClxTfZsKQceUq3JRqR8cktpBY7Br9MG3NXznX8NV4o9UQwf2m6XD9puLjBDCKlEOjJDStTGyIsx3PJfx%2BG2Nb%2FAuZAdt5m61WjUHUMIdLKG%2B4sJgz6FK8fZNf6H9Of7xHiduISAKoS2SR%2F6Mbjx8s8cgmUsuR1ciiNkRfdTuow4cTre3bIHX4aHaxx2fsZ%2F8bmVpxmNuAiKwPcYjxxgOJEM4PaMmAc9PCJEKF%2B%2FSK882eEozTo8dnaDebgxGir%2BmVwdEsyww%2F5PZyQY6pgEtUh5pMEPjYCsJdNZKdAFUQxWiVQwVqjoIGtgteFyOP1FKLc7hqVxnarVGF8aE3s2raMCuhSBHqQI05MITYZnALk4OKv%2BMfS13NMzH7IJLWqD2nbjYJhFE5MhNprPc4XmEOmTZhho9ohl7a2Br5n7Xlja7xRSL8o5r7GBthrsx8pZgRsJRk0U4si63tRWmH6SQpDWaRaMgF09q4Xc%2Bra20MkzOOr9%2F&X-Amz-Signature=07a8c7500e1954e3c126c5c871f50950ed004cf6f409d857be0a2ec5fd7d70ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

