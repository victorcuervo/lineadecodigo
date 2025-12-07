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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSW3APCG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T083717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4dq%2B%2FuZnjVqA6xfKcYACAqWP2LurwsEZ2zkfTi0TX1AIgRHkYK%2F37lBbkymCTWs3iAsVdrrWWXPj9%2FtsC%2F%2BffvNgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPeeaZJBPWL%2BaWndOCrcAx38urHaYJ1DnbRlzbCipQqlPq1TsPb%2FJuAKfjusSZyog01s5ykIAJWSVu%2BqwRYqVoniZClLnhHhYN9cUiGqkDWQPYDQGuWgMbLy2brXn5PNfQbnIbTHh0g9Q1tig3yyTxikmhdM30fLYjUbGOZBIfETTeM94hoZ3gUfY7qk8jIPnh283emu1qWdmPF456uWDiUv6B%2FvBoWYc3pkyH8IrhbfMlD3%2F8XVFQirqnvKfAzwVLdBnM11QK586oADwr0gQQ2%2BNUot2PQSebTipF1p6d0A%2BTe7C5pz%2BPIP8LW5gW0BoMaz67FoZnzC%2BEt09wNaM50VbRKBKmydhgSLUtIosXNpMX%2BiK2qiszWbI8%2BUtWapsJSaEAF5Is7Q%2FxsKBQVZep9mA3VjGMngn%2BvjyUUgZv9DBTJb%2Blr1FM4dIGPjSbKJ%2BcrEdF4%2BnAr2ltEyRx9sY%2BJUM%2FzzxNno6SJvL13KA22ZCDLDzyAdGILPNO%2FC46HQ1IUUxm4oDDRYk5jvpeLAPw%2BroFGxCFzq%2BiHZv9qE77YSHidcVOeU9WGsAkvbaihJ5uhPmjTg20oUkbVFiJuAs6eWEwDUIlSS%2FNBcPFeoplpe%2FFZINTFPB5G%2F6JvTgPk38uiClJIPga1%2Fs5JlMPSZ1MkGOqUBjpX2zW9gemFND6J%2Bb7u1Qg2mD9VOwUqEug5zG2QZL9Sz5JmWJv%2BJ80SSuEbNWfDhqxVcUzTOSIM3%2F7fKUdcr%2FYmjISYf%2BA4ar%2Bcc0czaIeosXtN1ofDDKcKQ4%2BBrwu09JUT9DtOr7ag8eSP6UJnOe0LvY01s93bwBXIx5XvTo88W5xtcVJK2MDWG16hahj%2B9C4mu60JBCx8Dv5rdXLUE7mHe0nII&X-Amz-Signature=59569e92a547e50bc0e4fef14c5a0a847c6d16e906bd4713b24b1827352e04fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

