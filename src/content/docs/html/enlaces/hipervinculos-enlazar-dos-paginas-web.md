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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B2OYVIL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T173900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwgbHqSrv1vQj99bZybTWfGBqt1INP%2BXdzMDUcbafmigIgGgiIyofpFSnNjO%2FpcdjxnpZXD6XiS1orTvpIstsM6aMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDAinWsRKcR0oFESCTircA9RMwIjb6VWQlXw6eDtiZF1MA7OxUAB%2BNJtTDKDNvc8uDMYJ6OM3qgFBDU5LHgMExD%2BDDen04kDxtrRYJWzJnKuXguC9MxpgwF%2FZUAEOF8L9KRRLows2%2Bdo4p2ttVVQtYByPC7oIiZzkBHBtrDlQ1AdiEE6aHHRy%2BNUoZLndfeoVyvIhWc%2FSbf%2B3Cdxlwz4b7ESBtyV%2FfSnXp6F6Fo4gBvf2EVOvipgutoMAKHFGkI3IGy%2FdLtuWloeikXdnhWFOWzAeWx2E1y0TNadUYl86N%2BQb0XQTu3joB2Rkdr9ludtP7YuvjYop4BXwJu3y%2F%2Brac6HqSq3DeM949ULBMChf%2BWbAF7x%2Fu9aRPMMXkL9EtbUQl6QCQPfFuEMESeYGBD7IzMgcTBl%2BcHAdq0MKLN9h1EtZGgElJLRfttrJnP7wEbSttsTkNFN%2B45j8lYjKel2a0VCO3MrFubYDI4ekiYdyXHKkJ2a74I0hRBbLOWhMvEAksvJ35cK%2FvLApM2vAtjhr4Km0Tc9RNUssL2rVTi%2FWpfvTDpt17PRY1Zadrez7z6MrbxzcytAVVS2Xvxo7dHldwZj%2B3GwSunlXEUlTxVvnFF92qZr%2FTxBq1gFhay3i8TOFX62%2F8YtOcOOQi0zcMPHKy8kGOqUBNff2FufyyHdDpd%2BpL%2Fiok2QpXxO7Miy0E236d307Va%2BTYd8mZLaO2Tpu5YiWfJVYTy%2Fq427%2FPHky046GDk%2Bd1w9B%2BtC%2Fg971JhM%2BVkbAVbya8oeKgo1u32mef6%2FhHY%2F6TT5D5hv8MQjbxLxdVTbi7f3u0ipkeRhwd%2FXLTEwHYfehN7z0ZHOdiNn7sH%2FfIxSsvfBeyoMOD%2F9DcLyY4xQgbLryNZEI&X-Amz-Signature=057385fd7aad0c9986f9a0a21526b4ae54e234e93fd9b5559958af8aad269b63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

