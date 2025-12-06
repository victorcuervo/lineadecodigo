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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6CZRMWS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWQK3%2Bz8SHYljEec3pF4y%2BDtQvUAmfGK2dJ9Vac3C7iwIgckFLGrV6DyePQSJpSxACuVp1a8zdI%2F1qg5%2Brw5%2BEAtgq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDJSuzjIS127YoSVgHyrcA0czm4QT0VUKq1eNA%2Bnth66uWsQ8rOK2GYxfDqCxzcXQrY4p3f9XIUI%2FgGe3FW4fcr5oWYiUQ8fnRW9yaECv8H8ExOb0kPChOCTLfgtjJbjCCZoFQF1p%2BIdY3RWM61UAk8bRyuNVJoiNk6QH5Hu65BrTR3KiQNRPteL%2BlhqOZaU62S%2BsNvvjFHKHpC8Roep39BGUAlPZc4z4eIRyWTAO6dMQ1KMSXBM9oVlQYqBYsC3BqteKtjG6pt%2F9ytDlVRas0py47qNXn2ZyxByg07ZW%2F7qcUaua6f8Jye%2BzlizcSsKohO4U%2BeIhX%2BUzk2xhKMu4VZvN2cjtC%2FsP5sPB1Z3wPgtfjMUqoB3t1S%2FO1o%2FmGnMvx0LpFNf%2FQB86pweNwJGRP8T4UbXfhPhMCiJQdZrKbFEfbuROK%2FnCf6juHU3hK90ksNRf3OQWVAfG5gL1UhZX4r0ooyDoKjfmXA%2BMEFaQxw4F1oRCQdxM5cTCLuQtJUSNYhxoDf4ssEcU2%2BUkympGWKBcRG3nQ6sFBsrwrYVcQ3ohndemk4lGXDcwxe%2FOXKie7LgXnbWx0oKH5dSqFQhVfe2WzqKTA2SPt9P66B8%2BOwk3nqy04WZHgPwX42c3P%2F7B3Ds4ZqVtUkH2GKVnMJeozskGOqUBygzI%2Fz0oecUPmjlAn6AQwSp37zQ%2FrvbMapmMF49myq59uT3icke1g9XVQ%2BnnVd3lmFS0goerT2at77nsuz0EE0cRMatkZXe6nCO%2FYpWCPmb2BsjEUA46gNShtslAGcnXnMPjiDAov1S2jxA%2FSfltuMkWWHUsy15%2FXzh8YtHkvw%2FeQ08zWKq35G6v8T%2Bd65CTYikV%2BPGsU2rR8KVzGXN5BuzhoJvx&X-Amz-Signature=1227b1e87fc781206a937f8e30884c8cd120fa7e726157de6816f1e40a6ffe25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

