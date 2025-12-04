---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMMTYEQD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T112703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCMeAOYsXyr3OtQPTPfxhphNWjpncra%2FEpPm86%2FSGvHjwIhAPobO%2FFjmf4XF4RS%2FVn7OIM6Zv46zKIvcp7EmneAHO9gKv8DCEQQABoMNjM3NDIzMTgzODA1IgypegASVdObSMdgfP4q3AMr3fXfGA%2F1ZUFysyJDTuxmMurjua8gtnEMihaG9jpeSFO9YmgMkkPLmCJa6WzkyTVhcjNR9zj0GucTeXRiG5SmIN6Jd%2FMy2THxSqx%2B%2FPHj4PpzNmtKzFiChGhJtoApeaagWCIJNUbYP%2FeUFs0wGjDMjTRcdav1KIiz9XNAKrJoOWE4g6XjoSvcWy%2B%2FU3KpYozpq21ns39gqNeOSW8FPUHHfaC8s4ZdLYZ4D0UZqq61vHh7j7btHNK4OQkJiHk06kZPHoQBCpbEfKT85smBENsEg7a%2FRkgydvWR7RoJi37SxERSL07xKY5oNlzwusFhvg0eyO18zC6owZLI1faSxarZzgBoqd81FC97YJ02L8uYE9Xk7lPia5kXOBCnwsp1csKjCr90nj6g9eqSekXBAhCJURGwLCMMbHOsFlTLX3Urwqj%2FRwhrs1Ukp%2BIAKiXheiTorzXr6cvF8taLNjSClyOuPvtUcPOX%2BqBSMk4MGvNSZU%2Ffg9y0wYM%2BiTJFxfYia8l8itsfiIrAFDf5Oh9v9lyE26sWwOWIS4%2BlsVVpa3W5hw108DtZtw003KwXyinxwiSwy5hXGiRLJOLSTW%2BjygvnrmNAXn5%2FEWn2afpSeSER9RS9jpDmvKWQJjcIRjD5ycXJBjqkATD7UgsFVma33ydErbeUMehE43dAiuMkfZBQ%2BQWaJSiVV6GF32Y9YmeG%2Ft7TROctRiUqjUp1DB%2BOSeuo52DwUlxT%2FAIzKiqPViIC%2FvyfPr1vrEAMjW7pfBN2NEkfrTxAMYJl%2F806MWwk51vyBb%2FJAmrjNaioMXx52vWm8tFax06hdPWyHubhznl0eyej1ry9BhvxmX%2FfhubeTSlId24TSm9a6GJL&X-Amz-Signature=a65493d94d04e1078ce6c306644a97653ac95b1ae823ff4d4270d1c72a900718&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

