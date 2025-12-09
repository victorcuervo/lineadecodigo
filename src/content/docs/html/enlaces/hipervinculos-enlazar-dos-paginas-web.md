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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LDEJM2Z%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T163618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH46h3CD5Djk72CJZXvxxBBpLinfUR1ixXajUKbQ%2BQ7lAiEAhZy4WZBul0MRywf3TPjghpPRFzWGzNn7xOGUxKMJSSgqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAJE9EVD90qjCVPHircAxgpctUc%2FvnSaLdj6kd8V0GIoTy1bfh6YcLvdGVTnSRTgUhZ4ge6LRa4mBAYiUBlocgSddilerk0n4ueMK52T3rPLkXybyOHv4A3O2RobwdwDAGzmi%2FSkREakxHcozauquhioZj%2B5GI1r89lD2eDbKCll3ZmxlXUySRO3Z1soWukPrPT9FVPTfCMM6Cbh252VSaa16968P0B5vo8VqD%2B9r9KnO1LYR9q%2FOvMHO4qkqx2z%2BC5CZTjNzWYBGiJl%2FhDXuVB0s2AG2EOBAPTR%2Fn5SBm3xi%2F%2FXo%2B7NgnyXAnTm4kkL1tlxZtNNRj2UW4%2FPO5ia9kF9HIlYbqK%2FypeTG%2BT78RJDrkZDcs8ZxibR%2BQa%2FoLkPbIek4q74q0l1FF291jCCrYFdfgJGEm5RvWK5RhrFV0CPeALvzZ93%2FvSGFmilZUgOJPznqGJAjjtDMBgpnyZ%2Bdb%2Fx1vgm%2BGr72g3VANGChU%2FA9ZcBNSrFjJImwywpZdIMzO37idztAJun%2BYrQFkS4Cc0f92SFva1IYp%2FcBkwCH%2FdrAK7HdXW%2BNkvP9QfYRgU5oLq%2B2gDxS29n1NsTNRg4BqGCxHnKY234vhs2%2Baj%2BaLWOUP8gLoZU6KmMSrw1nUknFnlgmM8Utq2WnKGMK2Y4ckGOqUBg0n88q4fojRfsfi05F5smQwPNLBDsP9ZDBCgZt0guJd%2BRKBg0GzI%2FKw42TTUB%2B6gCQmesT7NIJB3Q%2BkzwNiiMSJKM3ck92AULpInZ6FRjkmJlt5J8BJNzzl8e2fNOvWwpcitBGtvGZzq0XbA%2Fkcv0EUwmzS5gaVQO1bBtCxmPhiAD%2BuhNyv%2Fhbzs4z51vPrsu6ZPGMwc%2FwWQFnHOOZtTVhS3CLe7&X-Amz-Signature=8245515da21324aeac0c47e4afb946b688e019989c51cce2c8cf34411fa26237&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

