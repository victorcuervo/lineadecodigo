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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOUA6XFV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T044932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYXRh77QFLgDc3B7hpTeeM7xmJlw5KjQPWEwfCcCzKXAiEAz8OFb0WT6KSXGSlpuU%2BcNwTj2FQdwe3n85kPGFHnytEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMIML3f2FEZ5eO%2FwICrcAwHSgLeUyXNdGOctCWw%2FnEZVNEKRwE0oNX4cginOmaeJky0ei5B0OQpqbbFgb0iMxHVvWsGY3CeibzNEf4E%2BfTRoTLtv0UnC%2F2gHB0JxSVpVbOFtK5Sp7WizagCiZ%2B3Ee70Ri4%2BCxfhKYLuFWLFOOEusF9XTzu6aeKmOMufbEKbex0G7GiGQmLEUVSeHul5Px5CmhcoTvOCvSfXrfVGtLLJUy4uck9hsDdTvTppIQQT7Xi5p0EhZnRV9hUlP%2Fy4nxDmSiGS2WtDFKhgE0zbePqqZeuZWmeFrKWf4XHCEwKR2DlUlixUVb0bqTQ7M%2BJ%2B9D5KAkkAyvoFF%2F%2BjFlfszkWxS1d%2Bk0ztBwXTPM7GnrUFH4mrZYistonuPoU75B8PENsxDEiH3td%2FajFXC3GftSreTU57JH7Sj%2FdbU%2B1fDyc0RDev3eEuTt2Nj1VnXLkqdvYoA8CGTllJZy4ZLlP8t%2FGyG2M6QPvbG7tCeoYMO1r6pmFA15nfSrZCfwjXp6GI5jqnxRBtsvGSwDQO4J8IB5G7c5fE7OgIq7ApZ6Sl0x0QJssm2F3N0xrvr8NEp8Wt84UOILHTyjOS8NyIrMc6MZAWKCRjcK3BjhOX%2BggmilCgpNSSIrzD1DSHZQpuwMLWwyckGOqUB4BoG7%2BnItyL7glScPFhIkTcWbCyn9BBolL7bV66LK3cU3srN%2B8RMyePM%2FFTRsJ93l6Scx6%2B0Ys0EPGntwuHIZYpRAcEkffNGA3Fmiw718QF962VUtOaQUleXGW3%2FMgZa2VFy954AF9aAUOFCM5lS7fuzEvQjfgHSXeUi01P6exI6xLHzYExsE%2BCMwXfQjuUf7ToAX0AUg7iXPgX5TL4aJkI6KOLB&X-Amz-Signature=f463866fcc7f9b56b8ca3a03c859fa550c0e0d1b2a8979dc9b99a02a66ef9d05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

