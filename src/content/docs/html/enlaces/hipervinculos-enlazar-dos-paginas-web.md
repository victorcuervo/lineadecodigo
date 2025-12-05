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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTMNZBG4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T021754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3G4yfK%2F9kgGDLjsGav6mMce37co6nuvNbYykjuPytEAiEA3am7yfInDAaZXJYvgY%2FR%2BQ9JjnLd2Q5UE7EYT1L0ZrAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBS5ATdv2HAxZNdLLSrcA%2BKNkHmN5SvYVSaU8Kx1bE7NkyF3FOoGyirhtigYQQkXgZIPGWaWtJ18N0Q%2BSt5zS40WWMxE2OLNYdO%2B5PWkWRFhW33FcL6FVQ3A11SlTvxlTlEi6Es4b8rf%2BAVwCW5cNL1qzv2X9a5l2ZvqcWiju6RXPrJHGaekY2etpNnw7q3Jvgmt4mW60rZFAML4VatMFRHgOuAmkBIah0XuPqSPwfAfXYzNe4vaSCDu5TYNNIBMionsFZlssQhjpciI7oUHq9ucQ%2Fa0l3TXE3SDIsWNx%2BorJsmqPjQT1qmmkiit94bXKzV3MpIy0V70lwhnvk3qYLNHXM%2F9%2FEcc7B%2FV3zxy7msuHAB3p3iO8BGO%2BRnmhsD9smpx0X5GP3kawqsjwMjGTwOmvFPv1Ysgn3G4ADG8zCCmXU0SAhbkNhCSJqu0bUAycAyHpiBzo1htNNeVQpD62DcxhWFa1QNpAbFRJA%2BExgiJUaqiu0s8wtBx8WWRH2ZAg7FR1emPzCPRhePwO1v6xoc%2FuKJPx2aeJdhOPb6v3LocRHNWges9y1x9fWlkZh4mICxIgaGH5rITzCVWaYlE%2FZD6rElRDMq9ipSP2jCOdpObaQ4QGsLCyIwRZNdCgYsw0LNAMzREJmmr6nm4MICMyMkGOqUB8MrezZx4byVBxga6241nCKPRCc09gFKnO%2BkLIWFjdgCPM3V13Q7LIkgfHIxGZz1tQvJ92qHHGR%2BCCV7GP8CXs84xMoGU9KqqHveCxWBvyiZ3doolHNJz7SPppybBI2%2FRskhQI%2Fbxml8mJYW9lA8%2FV2DSZwg9f4jTaoXaWZmf20VjPyR7Vkfyr2rLgSlE4ekwuz%2FVSmWUtt72U26VPZqQgnlWGli8&X-Amz-Signature=075e8c60117e588e6da7f9356485f849174d67dfec2cc1effb5050ca919c0d82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

