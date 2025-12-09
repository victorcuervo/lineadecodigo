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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZNYS67S%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyTYP7JxhHNZk59MkmMoeD9ThQLr1K0XFxFSws5ripsAiEAjPFJYl7lSAXVBgjmPCIsbx039YNWQf7%2F%2Bv6wJ5wwy1gqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVMe55ARFzgEQMpvCrcA2ppbalrl7cSm797IK9pOjtyuHkE2laXW7XI4VqoGiao0%2FDZPBjPgBbmRFuSyf7hzeavedq5x53tdLkzM9lf11FxpFGuK55tLpzPmBqNp5xR142EUjVVKlsmzzLP3CxxrNBAFd5sfaKKBGByj33HHIQZEwzVjzfBi6JsLxvXE8jULIpXm5lyk9czLnG71HD%2F%2Fjk8qXyWHGJKUBxcrYS7K3FZ7PM4Pf6GqfhHu9%2FlcOmYpccMakJGDG%2B7Ae29lFtONi3hEcw12B%2F%2F%2BRX2%2FHErKJrjOP2IR6sYILOpjxcp4C2h9Ew4%2BJa2lj8Y2aNtIc39D1E3a%2FUzFxOyQtNOz0URrD6iAn6Dcx2rZ%2B9uqRsm6fYW050f5R3FzA%2BO7hYYwuzH3gv4XHXPEWWGzMJeqSUxKEZTC4M0nel6faHUdFbWZaDYiojsKUJWx3TsojUFA2JJ%2FtO3fuAM4UUAddqTWtalHQTn5JCBtz%2BRaI2F7dE7V35ITBGsSSdv3FKH4cphr3SJ5thKgWY9iUE%2FQT7csRvBewIrPVHA1RrQJ1m%2FTCqk2lRTt6Pky43sdHoc3LR9kXKGxmW0UJRXCMtGxjt9HR7YaqtkFbbADPB38Z7W8TxMG1z8j3Te5aYUapwq%2FbOAMMCO3skGOqUBrPJm4r6vMnpim835oASQd%2Fta4Ai2TEnG1Jlhc4CqDdXj1tgE9B5oHYNWDkfLWBmgqNx%2B6YQecGl2%2FO7yMRLQ2YL0Q4TIC4YEoyWBn9MHrmxl%2Fl7ubgibAFXk6fgcKwv61uL%2BazTPTZpazSpzRnRy1GQKZA2RpZ8L5ltEICsKByvNpIGGjw2nVVrrLCSP61zAj5mlHBdDiglm7KW5pRx66LgnxE2S&X-Amz-Signature=5baed440bad078a15188c38bd75d13b3a253c958e646beeac16d0259d1403e6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

