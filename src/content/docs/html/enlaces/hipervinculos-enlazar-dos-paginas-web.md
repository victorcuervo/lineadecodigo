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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SBEKCGV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T181701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGdP6f1nIXQ%2F9Jd8IyySw9wlpPWOeXwHL%2Fl0dTI250RzAiBU%2Fz4Ldp0tkPONMvoPASFU8prX%2FM1HlTZV8MY8RZez2Sr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMGzDrn00kEdLKW7DjKtwDuz9bnoY44uLjq3uRXtwebWWRGlZzj%2Bd%2FaviVWnL%2B42Y%2F9xUpV4jOHXRjhMX87HSMF%2Bfsl30glkQMykTMCSoJkj%2FMEg4NuQ1oo2YuHc9LDoxv3aO%2BFHDSNNGgw2S75E1mh7LdKrxeJNbq6aJ9WKSmBpi7yVQLyPRLhWXD2wrRSLCPIH3176AWG%2FI91e2qQxJWSp1SQgM0uAlXLfc%2F1XsSnJumptgcmByjnynfIzeN5jFr5ML252tizrNDAoLQdqREpgKzR23q49KHBu0qzhls05N3URCTx7fZqLiCLLKo6rV34qDZ0L6oKdh7kukohB%2BKhyLm5knSqOG9RyjdPqlYyiiZPPJeiZD919kxibWIPlbrId3sbzPjPjdv%2FD60B6V%2BdolGeDkcxdkHBlJsj4KQJ1z6Ol%2BbR1xbfH3IHUpw2n%2BjvNikASseaPfJpNaARm41hrsRpziZbMSvU0ijxa%2FYjY%2FXTF9uZKfOEx3FUNey4m0utQQJ1Qd%2F1Sh5U%2BnpOUxxIBCObNtBx59yFmT6bgU1saKxdmpCj01aqH9IoBbybkcejLBIcEOtiKAzsXaPER9v9NfNh8irg3sntGWNEwf2yDrGBikcZ6g1wVewKKAPl%2F9Fhu2%2BVgY3oaVWxoEw5cHRyQY6pgFgcQTnf8iv2p9POqnlPp%2BFG62qoD%2BOHnpd%2BxhuvIsbpElZ0p2vYghCK01pMl7A0xnge3mtAv%2FwM1UdxYxqbu%2FySs%2Bv3ocY3J9Ixh35KuMGcvGafMTUsNBjW1IAJG%2ByRLabj70q0XaGHhw4eltWTQdb8JZOAdZjReZSp51TVkds702ZIp2iNiuMlxcVjdVZ15zQFmnzstAlNiB1BZp41DoVnsAW3jyq&X-Amz-Signature=20061148f52b2ce339622743e3dd549b5e9145c3ea9544ea4c88bd566727e032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

