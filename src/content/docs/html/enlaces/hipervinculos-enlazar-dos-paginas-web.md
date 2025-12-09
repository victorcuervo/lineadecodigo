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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIJVCPN5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T063222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRb1jJWaMqSWLy3QTAbtM5cvu8AQWrIh8vb8cQ4Op5jgIgelrMbBpIE8zp5LwkU%2BcVCXGmHlad9BAAPSlkfraDvlMqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEQ4uf3bRkCUj%2FVdSrcA4rgVL9Pi9S0pbUTEwf%2B2ZZZSa7fB7%2FZ%2FX8%2Bredj4auUyy2iAGziSl3r%2B5aVw7QLNNS%2BvWXHHnGIfU3nZRfpP8dS0OvR77y8GKsmywFqDN6%2BeClLWTgxJMnZ2Z0cC0Zt1AAkPU31PCRVPZ9%2BSwn04u8h2SvY9nuPraO4yQhC3mObA5D1uWW3UoU5Qho7J1cYnZifhUDOCXYXspktcpQq1asfyzrM5gxD4neV1zhXfgxNkfDSCiMo7Yg1MSvpAwoAglVWVjesluADEMx%2FRFd%2Bwayhfm9hQj6mKKOXMTAMDAYrNu9%2Bztslb2OwsTcYxHoYrf%2FyPEBrBikTEonRGtVzJnrM%2Fu5YcMu5HEx1Sk7y9xS%2Fnij38iOWu4BF8k7kPCXzVA659TmtDE7FCLSFxXcaUVUklRx9lEIu%2FNeuStziJ2A%2BOjIjX4S85OxsTF%2FDlAcd96qlCiwdTZV0WBU%2BjU%2F3Mjpm1rtXWzfuEMtqjcdHO6%2FbI1IDuumwiHjSElVAPyBIJdYzkCQe7eNoU72jB%2BwvUjyt2kBo6wKh2mZvfuQGidkEEq1TosrL8EvYIaUxPT7p6RTuUSee7JWnBfK6Rws5B4c8RQNN93IFwF49ZbVT0dj4HL5yRzQzQM%2BYHXASMNTl3skGOqUBN7LMAiG8%2FpgTNkleCJHae4kBLC96SplOIjDR1VtHOEcVTtWxlvnqPVUGe86RxpSglMHiW1Isa0KHVx8FPMp1z227BH3rw66945YAXnSKmHv8%2FlFsHEc5Hk9aMZHHKvtLVe2j%2FfajTzguwPtPg%2FAx0CiABxxkWbSJtOJDMQ5GGtMXXPtNaHG4BWtK60ZwoROjRl%2B41HasmvoEM9VaegIxhSUdoY9Z&X-Amz-Signature=dda39babe03923ea1f31a6b4909ea16b25ee25996b8daba31fb25010ca33bd00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

