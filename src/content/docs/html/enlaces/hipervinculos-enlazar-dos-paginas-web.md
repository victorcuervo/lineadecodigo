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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWW5QEHL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEgLDtpVtMl%2FpW37nRpP%2B6wMGTo5mT%2FY0qC0Gqzs2TcAiEA4j4dlBer4nST9tk4NbClXldKa77Ahzx1cwTAFJEmtoIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDH4Kmnj7jzN6hUR%2FTyrcA5LSbFNhpYz1E6LKCoxcStxpThJSe4RAyCeN263P%2FVjY4y7zxc805ydzUW522Pq%2B%2FEB%2F9ebf6rrAfYh97xvIdsb5kHdxlCpEMjhFuEo0P0Os9U4sGpkunnonLs06w8zcd4aNfcSt3SqrpLrHWwsrgb9TBR1qfLRU4u7LGezvSzIPaTt0ScRbJFgaWHDjFLpeVshLyiky9DmIIPKBn8KNRlr3BV%2FNSxjYeMZs9jn1NKygUiEwYQjarhQIzoJi67yseHFMzz5mc1Y2ORMekKJe6dH61idk2qTbT3M%2FeJBDW%2BgBTSnPWLb5u0RSBu7VIPAbOYJgszJSSk1zxuIdTtal8TXIWV%2Bvk0RmQWMyfAyxLbyAVM%2BAyyyG5EpBQqTreYESuXe%2BMnsZsd3otWbIYHVC4XMrWwa%2FMRsgU1XanhLkEPj5TWv5IKn0caEJpkStlgLSufbZ1RmZKVvDmFf3bR%2BsEeTJVOAbBknuxsQYPqCTHpTRpBq%2BRm%2BziZ6qawcuNH1UPsDkcidOUeQCox4s%2F%2FX%2FnZayZg9BFwECM7OKpZSBBXDdUoEqgMzlvpLm9Ja9lUdZAQ8wI%2BZghI%2BMf785lERjcGiN47Qm5tDZWNW6YARNYfeto8ue4BWkWZo2lq%2FdMJS8z8kGOqUBIUM0o6waBPSAkXTljBAR7HuwppjTmQXC1Hre7AVr5btMCOZsJbYNZvUmdwSLW0iJkrz5VSfqMcc9TUphxpPNPluAEb8xo4getFyXJAUhTncJMbadE%2Fw5CZbgzEQBdY0WZrTCCnkoQDKZTqwBWv%2B2yD46F5wYYtHi42bUuBM%2FNu2VQCeooe8CWa%2FyiIT%2F23Eu3wIW2Lx2OQAOsop3O8L1O2lCgIm3&X-Amz-Signature=b7338ad99048a4d74df498267b50fe030c4e25f2164adcf7dff9b3af6b187469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

