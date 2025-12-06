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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EE3IHTZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T215418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD37z62L23kRQcclykAJXhC2m58MiSsM4vUp1uW%2BVfedgIgBxeMIJRAzAnv5xie%2BqA6zARLM%2BhiSvpTRr8%2Bv8VOLrIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDOliGeKXJ%2BoWFf7JHCrcA2QHscAhARc9qjO6pk5BRpa2yKsMTTyywzWa12cdR21uzpznJL6YYZvb26pT2Iit4oX7Ai3lw9mJj%2BGT0TVJo3R6qjiUCbQRUUxQrc5mmeFKXNRWnL2kzbo2KNnEBVYXIHpg%2Fet6csMgAlYkVYi65e3slBju85FuVy2WThXb0XMaXzj1xHR79ts30Qb53G%2BImLR4UdpyUzlaoP84nB4v7S%2BUtUyLAplR7zE%2F5xsq41%2BE78BVtnhvLwxqntbiSZLrGKOZx%2F3GsRYrCQHm21wJneK25YPnZjVYJdarTJ1jVClUfdBkASa5tqp%2BLSkiNTFoGjW9a63uUzJQO%2Bh7Lo3wvL5w1JgPzTYUaXXEAYJQFdUjw7TGaRdX1%2FQ75uVf6qWEU1W%2FlbBJT8e2SabOZtLZ438QQ7fcHvD8r%2BIRvabYFmZbtaZ4LpE7cLk4cFFAf5qxl9MurGtIfuHWr%2BI5WWCGsdSzQ2j4tJ8bIdrETRwVvNc1EchChGb5xULdPwEUsTr1JXTyLasTajWeMGN6uB6Gaf2ilNtK1MSsaTk6No7ucq84DIV4TYj3%2FLJngbFjmID%2FmhSYuOAPTR%2Bip3KC8LqHI%2FMmlw16L5LV8FKB3U7J9M2xoWgIPyPkmXJx9FlXMLLF0ckGOqUBgyE7dAhDRHzTTwslp4z%2B6eAa%2BpY8Jp4LmU0SK1flmOzPNizFVOT0rKNnPwzcTRww4bSqM6%2B8aVtud9ntVP%2FA3eyyVJdN5dAb95t3Lk%2BodhRUGu%2FB1sgABM37PHLTB2%2Fj0JU3tmNgCkZlwDuEZqvK0FRb4mddEnRonVJO8Yoaddn1pLaYlWw3ji3TDGxJltCfvu0cuFRl8LbPGBZ%2FW4LMvFhrdFOJ&X-Amz-Signature=c03f2d6bd2dc33fa7d6c3e85c89c694d15cb2e93bb98aef4e70e681b9ee85527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

