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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZKWT6RX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWUJ4KbhB1ihEY%2BMByu4MxVGqf0%2BKR%2B%2FuQ%2Fkq%2FzCldjwIgT7aptPys%2FLXLfpC0igk7%2FkwhCkF2ZHgihNgRcG1tk24q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOC%2BV5ouLx8H5wIxaCrcA0rgkvwEIchJZNuSyrSQjC9%2Fy%2Bq%2Fa3x0Oipd%2BBqLElJfd%2BOCyHroMR9K2h7a5Cgkx8CTEbZRCMt3EdUBLanT4qBSyzgnlctjaIyM1RlvcCjrTYX02zt1%2FQVhX4QVH7HtAYhEWiLvtCZdHQJpCIl1xLVSRG0%2FYjT4X5P0X%2BeIt%2BTjFRFGPC3sU%2F2ePXzhLlcOkcdaeotaQ%2Fge63F9MR7MghCXM2E9CBdmvWui3qy5S%2BjgPOAi5m3hziIPDTFB8j8mcfquxQqznrKZ88nG24rF8Bxr4wbpdL%2B99PBnpu5v7T4NlMzmmuaOpMqJLPlK3s88zwHoQLsNs4nQhKI2iS5sdsaiJaiTSCUCehW2lWHKyMLjidKNCmiU%2BYO1xKuOUo58A7GfR5zPZe54ZqtKYwUJvcXCG%2Bttf%2B2KRx9yCuNmzaR9U8jxA3MKWAGPTEFwDtlO%2BCneON%2BAtwppQA6BbiU4MVzWCC9vsg9KLbDo3PbP0PEeiTTYb2BOqeo%2Bt%2FrpJsP1tUY1q0XP%2FmWmZvG1HRUYUe9kCl6I40GBcfiUJF2QzVkjv4XpbwUfPS%2BMiFFsTFH4XIPWfEYa0ZSCk%2Fqs8C7y%2F6m%2BPLGq79%2BcnfCwswo%2FW6%2BeFUAiTbYsA%2BTSG56aMOT8zskGOqUBPc22jHzDDcZkO7%2FrBNxmB%2FAv%2B%2BwgdH0mwIHRjFVf0D3Ez7afzUh07zdltmKNqICpm4QNOkAJA1cGT1GkmRfzj1QPVulxYNM4YB%2FJMmAys1moIDX36U7LueAKphgAuLa3sFTYqsC6CpjQ%2BvWT0asHf%2Bm1bgsvhD%2FBrrN4K2LC83ogw1j4ddahw9edFvQguRqw9NrYUuyS6JDTLgFWFL%2B3%2Bbl5K6w%2F&X-Amz-Signature=a7c61928e88678da3cb0901aa03154dadb2008f06d3f08477cfa013ea19d549e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

