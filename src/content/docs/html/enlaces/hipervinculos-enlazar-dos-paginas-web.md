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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDRDKIEN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T174906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgu4O%2F0cB1bHMds0Lb3k6pb%2BgNI0Cg9HoGKyMUYjme2AIhALs7iBI6fR75hfEgYUGntpCmSewSqhDX3108CWwMKoW6Kv8DCGEQABoMNjM3NDIzMTgzODA1Igx5NiNxsezKyVCWJMcq3APwpbqTgUkOvmXcQW9uw0xMWQ%2FyqjBR40u9VOmZC%2F9AxL%2Fh7jdfydfK%2FYNUKLZz7ZCLytfJYdrakdPM%2Ba0SLInmczszAOgu6DUxyyImbca%2FqZB5NLFhx2gKIrC8uihnp3lVhOK0J3IIeOWauByvNkNLkFbiAHR0n8YyRzl5WciBMpJVxFBz6Xxl1%2Ba0T9a8dfXyXkJoPnzSnu%2FjX59MTW4ufHeqPVIk7435qvG7sY9Th0acZ6TmpE5TAcgH%2FSb5WTu1Eic3aaz%2Fkr7AtHWamcJ9VN4iXJ64b1qBZ6MOP0v%2BtpmqRqbtAbAxQJ5IkB6s35U6y93Md51MxiAgiSpgCPSoYz%2BNTZyWvf%2BveCg3KbTwYZV%2FODkNcRkMYgxpPiz4ed0TU7e0SIl3Ob%2FmW1lHHu6cU%2FPPrZk0he%2F00rXyt2NatGXSq6L4ZXo6gVdMo5LWPvP8gSROQh7TjiQoNVKDrx586ipUAyN5HIbbx07lq15OVd84QR6JhLu%2FrmiLOWgG2xbLyu6hhEfU0AaB4oUrY2sPYy2hfisosyT5HUCkHBGaW0We5zJL9QYgx2CArTZ%2FEnBU%2FMi8d5evsFXKGh583cffZbQ9olDh0xOsUY9aaZijTgH6kzDrTxY5fo7r0TDx%2FMvJBjqkAddR4zHh710TSq8UKhS2qGob%2Fas2Qx6N9G5H3SVl9%2FYUzdiLJqnwUbdnULZYaSTXwALGaDu81cImE3n2P0BEiJ2xXWaynxn64wd00oNW1CcbLmzSoQxnIzTEstIpR1Tja%2FRk9y3JZGN%2F22bZiHuAFWxXRYrs3PoGxu7XqITVAkDPtCDGGw1kwn3Xk%2BQZy0DGu39Ht3j0mO%2Bjda2eI6kAdvhp5wrp&X-Amz-Signature=770d816b7080ce5284f19147b6118834512bb623cb33a0b4710c26d25f2a63e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

