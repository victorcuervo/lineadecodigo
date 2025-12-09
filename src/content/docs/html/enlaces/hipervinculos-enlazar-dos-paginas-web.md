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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCGYN37U%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T054907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSmBaw4ihwFpFhWKv7ObMtwjzUueDCXVIfFBQpm9GCpAIgGX4lXNQocB78kv5Je06uy0R4XeY2grxd1mxf%2BgJuDBEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIz%2BrjAVM4p5vGanCrcA5yp1Q5RKFUOWrYmg6e3Q4yqumNAs82MoI0Aec7pMk19DbhnSHaAkRvOA6LV27XFBIn1csCKp79mKzTjQ1TcDMSk1obPd96NjpRUZa2HseMqs0UxHwXbOX04k7N6CI%2BCh%2FdyOV%2FbV13RPGsEJboLJuZOb1shWGEXprkeg2gPxp9n%2BHOC6A33p%2Bb5S%2BmXqaz2S8MNESe9C4z3EdwhmKyQfZiQ84Soq3rKdbhTDu6ZAInhwp10fsHAcaosWeOgQqBkoMN2t0ZxTV42JHR4gmDBYnX7jK4KLRmpuV8fmfZ5un8zdnbW9NEgGEG%2Fn07as8iUBl3c5cl7ekgIjHRhUL0xjHrCFY9%2Btp0xoFLu1%2FCttQX7Bor5d0K2hK9LA%2FipGEwZshB8AjNjzN5qkCu31IgCtFEBuUENHGfZ6Z50itToYTPYF72VEfb6bVXI4M2Oqt24b7aI1meSOGVgzsqg2OLBzQPfQYS0iZ5QPSEmzorCU3Q7czZJ5WHY5X7drKur%2BWjPMCifqI00e6fBMFsZvidgbhh9kgIJ9CQm3wnFqAGbQfqjrl83rfnPv6y%2B6cHKBu1X1wnHd%2FD6VwoyCtQngh8SD4VIucOF9UAfRdRbUzDWq4OSwcTtbhNHIk3t04wOMNTl3skGOqUBEmwzt6Mi3wY5JOMIjZtB8VSFwbET3UJdrC7UKmAqrrQKMU5ZVPonB2RxB1yXR6mPb7fGEZ6LaO1aItizglm9o32ODGCoZ1KxXFx%2BSkYjQojKMr61jFlJ176TZUbVAY%2FRG5RGf%2F8GlkbcaJygvJvk1uVS3v5rUhIbrh5bmINRzbiJtFdFlRikecJhPkccGTkR7UyxUGjoU6TVtv2gBRAO9x7IGCdL&X-Amz-Signature=c3f273e0d9f07c6a7c960e3f1329f92907f1736e55bffc5c1eb0c8d01be9f3c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

