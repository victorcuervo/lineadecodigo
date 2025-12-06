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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GZHOFW5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXZbL6%2B%2B5aOiyUssgN%2FpChgVeMwyr2ZeSJrFJS0cwZkAiEA0VcSQwlj%2BrhN0yv%2FnuTR%2F0GGOlIMhWujpd1oNe5%2FVIgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDC4%2F%2BHiOQ%2F4ALfd5DSrcA2QHuMgay1lfvzxG5gLvUAo6HOTVNKd%2FYPSfLRnF6VHaExNtrfoSAaF4w4kjH9j5a0Ifx3yNjrApnLXXsMf8ZsGl7se9L2N7WZJDGqUwpN8y962IkayD2zLamAAqfp%2Fhq%2BiT6T0L9XdaZsJjZCEZ3ZB2BHM%2BJ2QfYtcyWJUyxDn82JokHq6QnnJLvxPp1fY7ydYz8zkxEsPhe8aue40%2FQ239Pb0kKELJ7R959ImL%2B9Xdr211SIhEmjlCtHAOh%2BSwMs0ayOeLKhqSs5I7GS596WxZ59ZdBVsTyqjIBnQyRN0D40qEauxy9Igf8BOSKhKp1vAuADbUYAA8A7gu3D8Ev3Y18Go%2BC5ntDllOf1%2BLahnoIIF9CYeX8rWcOZxMG20HKlb9ZU0FSsATMHp1S%2BHpl3hdAd5nQ%2B7FvS1pMQngqraus9tPnn%2BgtvURQUv6j2HxDU17%2BBdrl8DfXfDb68hl8zGEmi1zk0Z%2BBhq4y9WPzkukCf%2BLz%2BGNaYxTuyWbTHXw%2FXrexKHac2mVFuJL4gNu%2BbtwXofIj09ReDJCfqGes2PxwCurgpdIENRtBAPy4UUrpJeyaXeH7MELQegjSoXUD3L88gvbjlAwZpTDj95fmO35sdCLCk6eVA3yv2gVMLLH0ckGOqUBTuTDeuCv5NMTtqCxUuy4HubIGcW2lO2zJyo05fPfHade55IlN2KvL23ycWt%2FiZwtgCB7cwIZI5TSf2VnnKVTIdX5HWsZ2wlUnj4dnvMOdeWKXZCltKty7sBziVG7Vcg%2FihOMBz1nBTeGkn%2BvRLN0AMOxlCEBcJobT5ycnF9pme%2Fw7c8Yj0ZOrjJMUyzTGjQOh%2Bk3cXCmP1w%2FhCVQ9rcLtZebTTnz&X-Amz-Signature=518d8c8ed4dddf6bcd2fdb96abdf0b93b06dfcb9ca408dc94ba5431caa5b4cdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

