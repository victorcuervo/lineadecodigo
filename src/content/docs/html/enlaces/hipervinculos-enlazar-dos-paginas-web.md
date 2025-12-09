---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FEWLP7J%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T192901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcLCQF%2BosswlyR4bIGMzA1Fjg5uwjqyQ%2FkzSKvVfpPDAIgONE4fx%2B312f8wDXRvqvp%2FKWeWr0cFVCxoLWdz2JaI74qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDc9vfY9QF3XbhksircA1hdChGjqHrb1nd82TUJWT0po%2FfDnqfxozTWXukEEZjqdA2Ti2KwlTTTHl3hrHko5JO7NxYIlJdQasBWBphqHynCrlb3gS%2FqyrJI%2BagcHpttYmvpObi%2BKm3zA93jnL%2Fl9FEBVGl%2FNuDebKPmAtnIRdNuGY9Qt2W2HIF28ZpYteVEha9Xd1KgH4BSoKT90U%2BsI966Xg%2FlXsMLLe%2B5vNHXRrw9Ae8heFtFwo37EFjRmnnQhNcKgtY8NTF%2FKc1k%2BRwKo3ttUdsDbxXDuMGZ4MIyCv%2F1U6XSj9Y5hHtjxQQQf23JKbRjVIZrp9WYarKn%2FLgrWXyPr%2FPs1xi32DTlYnMsWXVOkzWW7Achy75If9oCDG%2Bigky2v4wsAo4SfzvRBFSHZdJKVL8onpQAyP3Am%2FOVXk8LAr%2BRSkb%2FnXyBI44LikB4Pe50oWS67MTnMV7U%2FA8OORqtb8O723tijirrc4n4t5mK%2F0OPPc51HxcbKD7rLPrzHPuxRnz8LnZUkbOzEPluS0B1OgSB3kCCEGwSRKp7AFqND7W9l%2FXaT53%2BJRLFV9BTT%2Fm8Q%2BO3WcB7ylMoBh7HpV67yUWzNyVYyKGYfiCk30TnV3hwrF4903iAzMcABu5Cp%2F1Lxj%2F7pW4Rc%2FcmML3e4ckGOqUBUKQOAShkcI5qXYbnPyfTu4PlMXaYdk7qa7WmOLNQ9MixO46kgim6IX1VFJPYMSccXtv%2BzwuWttPVDNBYIirfVsPFpA90A4GgYLzBc2BMjYpBmg%2B0vFC%2FulbdWcQSnEOw1Z6EmZv%2F%2FS2CdwV8gUQr4gTb2mVPWxPYbdv2jjPwjeyAN3CaBIbvUGydrwLBrXT%2F%2BoPNesI9O%2Brq%2F33aTW2vPtSwuxvf&X-Amz-Signature=332eb6840c6940c749b2b199cd80c5c9ef228ebb3c17a7027f73d08bd4335484&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

