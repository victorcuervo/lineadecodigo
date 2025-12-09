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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU3QAZVI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzBVKRXEpa2uHE2d0R%2F7bgcxpL5vV0WViDFmb4MJBBcgIgXt86XsLd2CoFcVt2Ms2%2FKz7Wcs1AsMfXrFGlGNWLDeEqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdOl%2BjlZuAHZTcuOircA3QEv6IZB7tFwAogbRvbd5ugTfJB%2Fi2ztOa6Ublercf0t%2FBXvlcfem2iRbnP38HPNXnLTp5ksJ%2FqBh04bSu8APa4wYOM%2F4tnNedUbzpPaLfVXYMZg%2BhoMQwrRH%2BJ411VL%2Fb2USanOB27ugrwgTcNFU2ZG3L1YEm6ibBVkzOR4QGRXZEZsgxfFoUEYc2dP7ggSnf2oOFtBKj1GxJSqkY%2BfAKxyN0twpjcc7ImHC13R1Fzl%2BrDE1dP%2BchR58BDJdn%2Bzk4wh2H%2FJ0n7W6w8Py6M%2Fp4mBqltfoNUHJ%2F3xjwn31DDDakFhVZqf8uAjc%2FU5dL91OQlLWWM3jjT7u2vrIBOzpW2IWecQB6zTs9Gf17jRRgrFWmAWCKftiw26iRlH9xYpIWJkp3WnYHHhVaympzjk9RmBHD4iTXP8ttJCmHvcETq%2FbCe35ssjwoP98qRXxJKBLxce7BeWXJmip2y7rmz5fQvEKrvCt7EPAfVVF90MpzIV8mAFSoPzEryE%2BPuyznftzpmugtdtuYGsZ63ONVZ%2B4er57g4mwFBqkaX2WoRWVjgYyB0JTz%2FZjo2KhayTDzfbHXNMpn7NakFNBUOsQdx1igK8YC5lKUdmiyoJ65rscP7SvcavC4Y1gbuIf8lML%2BQ3skGOqUB7MKvzsEvvcUkokvTKt1FUnZ%2FXxuexdXKzlk6sE1xnBg7qAHkVi7ns83BTUPgXikG0UfKUyRzbOSBBAglPwmMohPWUjeUaTRNUq1LMfoBRD7mmrEYsAaVZcSr353Yw9KrN%2B92co364GkNO5cQEgRqRz3h6VPDRU9KYl0um21Uzzbg6d%2BitlDXP8GUWFqXGelS5d5N2PfiArW3vU8yZYV48Du81jsX&X-Amz-Signature=fa9ce76ef7e239e4d2b5641200f153a17e063fe8c200cca8733ddae825036e0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

