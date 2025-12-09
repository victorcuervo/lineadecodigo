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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665RIQQIF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T005822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1Oz9kF7L%2BPwwk95js1sEvIh1L6puMyRcwIaYl0%2FBeWAIgNmvAu9vK1opL3aUB4TSvrQZnB3Pv59EyI7uwcIu7YTkqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETIwgwyqw1SeIhVQCrcAxM1b%2Bm7%2FEna6P208aeVQKLg14heI29Tej6cjJ4M%2BIf%2FWJrY1bYM%2FrgfdcXnYS4%2B1iAsyBX3K6kKRn2O6q2Zlj2MdI8jDHp5r7hk2JjXibm5baOYnf1CvPalWd0WJGEyK%2Fzr%2FLKR8SrcKtnAqHEQ2sEPT1WoEdYdkNz1fZVhD4zbMJc44G82LDhZ3aI1ET1PnviDg3myZ3YGsVXDBeoyazwE%2FKv%2FQRYjWpSQR5ZkNy%2BBsiGx6PMwgGGqnUgnR0Jm4jh4ykmzGxTPL0XJRu6wHuClRD9hek40RyyYhzIFT2TnTRPcRPgFuMdcb043NTVbwQ%2FScWKGv30jgVOuNAb4DQp1ETCi55zJRaCE%2Bar9eo9PT5QKx8np0c06P5vPomP31ov5IyzutpX5Y8yXeC%2FFyJH%2BSznaA1rUau4PXa4%2B8g05G09mylKziiCKSfYvM1sEtDZGqJKhq0KNaXqTvKwVr3uvSA5DgwvTDOVys6xyN1h2YyCk4pjffKar1t3HHA59HoxisERZI8MdS%2BcHmk%2F58Q7bYz0Do8r8EG9UPekt%2Fgxp6l4xRaDNuVLvZKt43XaMSEZDIBkzoIabISOJA7TDDu3MQxMVXywOvQ2u9cE6BVQ%2FP4FlbCgPSm%2BgJkJaMLTD3ckGOqUB6qAGZbONN%2FcvqXdRYlwGeBGmt5aNv8KURiZxAIhIY93hS6KBht1eQlvnniqpmGIU5trm6heuiuSb48Mh603Ds%2FO4u7mcmkX3ciRRqsAFCG3IzIq1YZckl60KRqu5brSy6R8jkHTwURNegDhG3TDfHME4S3tz8mSpcqd3lYQlxrJQ87WS0sHIi05wVJyISj%2FwFqwtDpEJJec5aZ6AEQpAz7cnfb1m&X-Amz-Signature=f080570be2d8d723869b4146df1d30777d2b2fe71be121be46f5e1674a52a40e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

