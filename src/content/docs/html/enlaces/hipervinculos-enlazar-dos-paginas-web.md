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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U2KLIER%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T013553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpYOdgfbFBUYrAJRaVjzme5SprejIUE8DSLpRKug%2BpPAIhAN0N0t3m10INXOYbNSqz4b1VypyGOehQwl%2FSfcKz3X7CKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzSVadc51YlX44BdUq3APU66xqkY3yqR31bBHzdeLnEmutKJrqMsinZz%2BEwVVMQ6vZDEP02oPAGRuFYgwajdZmkCyvgN10DwJSg42%2Fm3%2BRcI2sjYko%2BU7%2BP1PgCuXpimXWkUip3Y7C%2F3GXZ3icW%2BkF1YMJviP51whGmbtn9i504DUoQtGpeCVQG5MRx4YeALU6qvZgbCtm4fix5%2BC66gfvHQsepqobm6e2Zeo%2B3O6J0VBWuMi7UW2qEGTaJYcXj1UkAP%2F6aT9kr%2FBe5wUkqgM7NXOEn03WCNOLJlxJJB%2B3tDxOgJKNnQtaV3CgFftRBy7BscYQozsFSY1YW%2FSMXqt%2Btwjcw0WbLwmVDSd2HfkOI98GBSKoG%2Fr3x%2BcGn3Gzm1eF%2FSK18Lbn5dKLYSwHAqWIIhpTlN7GRwt%2F6v3wsOISlXZfqvzM4fXZ9UJCZdn8Oy%2Bfm7DpPMQQ%2BJWOEeqhx1%2BKWBJliVxdrs52BCagmfRLfTqS4MoCE%2BODe%2B9RQQF5Ya4lhTz1B0TxPWL2libStOlg0QnFpYe89zaLgRftNQeG7ImNS04qPotmiju2ySlUeNdA6%2FV9fIzbzG7p8a7dJU66khKHSq2kfDyifFquOxTrwEJJeaTpmFrIHQxgkfcD9A4q8UkKYxcltPjFzTD4%2FdLJBjqkAQM4tLUgfFrzEH3Y3JjQTrhjsiacwRl71K%2F9i3qcGEbT%2BgkTzLlpODyrAfCSAwvc65byukq4FBgDrD6dhbYWu3gR%2FXzXYsyHO4XC9ogXZwctvdbltXLXB4vgvB2FpUufQvn6moetK5L1AAzo6dN8dtzcXnn3wCSlsoeyuRt5odvGDkPi1WaQGqrjmb087aLwZJ0WqLTtArrmk8vj8LRlN8%2B6glbm&X-Amz-Signature=3e428ffa9e48f055eab71d57204671b874a034b5a6e3ed675984d09b41d40924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

