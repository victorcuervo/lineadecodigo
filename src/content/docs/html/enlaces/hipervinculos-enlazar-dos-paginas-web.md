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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQKUHS2N%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T203248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnop6LkOClGaZ5WxJUtXnd3ND5zuVu040YfFoltGWiNAiAXbqkAQhNe2Eyx8IrNqnvnYU12GbmiYYwVJNlV6XRBAiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMknnttmU7ROTVqKWzKtwDcPaZqUqJBfAiHL9lECa0Xx%2BOQdfVM1TQXS544fOfFwGXX9QYme9afTPdSTSQl%2BWTIlk78CuYwzk6hEcVjEw%2BcrK%2F%2BC6ydsrjeIaqZXeaneGvG6%2Baad6BM25b5rz91r8KxTKglO8bb6%2F8DYeFlj66YWUBu%2BBacFUe%2FMbWI58WJPAo%2BJI2JXYmA%2FkNzEELPmwGEesBtaZQBd0CuuUW%2BXF6rFO%2BfLQFamp5nustdk714tidatuuPlwF9k0fiUWYq0K7RhpTJd4PSWk8%2Bi0yNHKYd1L%2BQOEVXl8yejscfNOQepuQVvJMFBW1dlITgWT2m22R%2FUGqqG8FjLC7VQ5N6z3Lm%2FMKvSngtxWiXOBFWsNc879G2t1eFUpY1NdKmJJYOk48tE9ggpn3NY88hpOZD%2B62E6iRDzuKOFH5rCRSSmjEmvnrk95Sj1etURMgcmi28w9lM3QDod9fUk%2B5MWbjp11j3tM5frdV4xJqqmQD2TtcwDaREXylsV84XoIZGJK1I1CSSBSInuN9x7OOnRzrr748zRZZn%2B7kJkLFza0sU4grrC7GHDu%2FuSND8q5v00TJr5nHtJbPIIhz08QP4npYSl4z8gZP0SZ%2FHabPhe8%2BRTZlBjQAPzAp8Bh13c5ey8gwyNzcyQY6pgFVuB4RXPwS4yJRipI2AMRkjLw%2BUhpegKLApEFXrboVlX4kMDOjrTGMNM17R%2FPmHugInXbruGn%2FdeyLEGF3xkboUko7SuMr3CWdkLYoQFzANhwzn15yFwGFwzzkav55XcV7Qx7GluNHo7QkBjG6G1I84K6iSrTv%2FR%2FWX7N3i5tH0Kap5bAUxcOdHX8GDN1OPzPyoWefCOZkE8faAj7EWs5OPMQ07hN8&X-Amz-Signature=8fa7cba4e3abbf826d7dedbcc590140301cd7f8c27b803c19c92d0836682c7c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

