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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMWSHPPN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T013631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCeRGYZTJdJV3uNZRYt80UU9Wy8zeC9QaKvRowcdueQAiEAw%2BmFnPGFqCH1s70bSUHZfNcwTSgStNpnsSa2LPdvIYIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOtV9wU6RqHRk%2BysrSrcAx91B1GIvMDADBhoT3xf4VnXl6LjfbDpX5%2B5sNnJcVi5fyoUBJuLzp8gibft7t4VtNJXPP2R3T1cF6V5R1ssIrzh923J9Uk2ctiXrW2ZJ3ArByKN1nlNzsJ8i%2FeLo0o%2B%2FiHwXVX0pfVguaE5pHJJRGqWN1A6Aph%2FPUQjkSXa24gMIx7v5JaYq9BnSc4uqImN6KW97NeDkEOsBkEzmqPOGlDtesb6LGHuItzclCgm9N806tmX6C%2BCeo9pBGdDYPRGuGJj5DoqV%2FEBoxANQyZykHKHbgVzQf8cq8qeERdg2V4wkOrVgQY7GWxnvTxhfY9vu%2FKz4hO9aAX4cI%2FR9MmqpuVZPinT4EDNS%2BqsMO764PYnhdxE9plbajOLDhzFjoq8Wpyb4iXktGO%2BANcCd%2F9UPyWgy7yiw8F1jZ1N%2FNVYbCwJ%2BBFrBkmuN88AMQoR6KCk%2BIDWxMiX0FkSRikwlbDLDL2cDcVhBG7HD8gSEe8JmCfOtHmFkjyIhf4vND2Rf4exVBUqSuJcatGrpZhji%2B3dqQHGJHllVraTImTwRi4SGXr3W1yami7xdtuoc07ECCbmWV8b2ItkeRkOPb%2B%2BzL90FyitbQMgmI51P2xdf6r0f%2B4dmC0kyBT0R6vC%2BjfVMOnQ2MkGOqUBnnMdBuGwhX6dTyA0IwVaruFLU4bjz5IPhwLsFuxMKQx%2BQ6US4c%2FOYMHyAeRbkTM30pCkUG3v17iC0Echkd%2B%2FkDtW3R4q8mcl7bD830HMUFGU5%2Bd9klJEungVj3EhPj%2Bj0WZ4yCSsgDKSeePs71cF6PQVTAs1NskuWKpi%2FPecR8Io9DC998wNkzOlE%2BiV6SVjHcDORyUqDbY%2B7pFR3HkNJTM%2FPhof&X-Amz-Signature=27fcad65108c452b1c317f7b98d03f976e3cfa4eca36d648a380004a7b615591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

