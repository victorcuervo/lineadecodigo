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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVNQE5ST%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T223341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlQ489YvLHKhN5bSNKN63wr7Lw9IhEzr3YWxApH5r0dwIgGKVbkUX%2BGSYgYO4I4rtWtkVuCN%2FzM6uNCa1vU7epruwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDH3LXmZL5YbbJoZY%2FSrcA4A%2FikrKmPU%2BW6V0QYW8j%2F3N5TJjjIV9qM7XgGb309S%2B34wOK6r2I29BNzRUMm15WSQxJOzkW%2BQcqcLQLvuop9OqF4Zwq8KVW9djO40Oc%2BP0nOrL5O0mNCz4a8GK1Ekl2K%2B4BnM142XuJxmZW%2FOeQfSENxZ2nL1ysKDQxaUu4gouqjKGOVno2odNEVILSvnoRJfBzUrPi%2BEiulr6G2gcifM%2Bt7%2FRtDTFvsFfKWeskJUHs1gUK5HKZQaKAtMDBYyKn5xy6qQROW0scjImf2Y7tHaBSrh8HMc7kati1FZChdPkAL%2FpfIkXPliJqi4ebd44VMFieuciz1RrOeXumtJhfC0toOfc%2BOIHksWoyoYs1vPq40ka2BIBSvU8M7H6ryEtr%2FIFC182KRxlvQzKb13IpuX3qRDKkeVChZrhF0FaOS65XlEQBguBZ4L6px3QmIvkHbv72ZTwfiqGz8hOtxzNgXEkDUpuNmhwuRewQnDCvFJQvOcD1by%2BpHv7Fx7IgskjbkjMHTvV%2FlexNncQpFypHvSOUDa6tlXeFF08ZA1doy4z%2Fdj2P6c1jZar%2BntJV3SWIeYOXHKmcQ%2BOtyNzV9plfuHSrNKdlWtDv3inx15YvckI%2B%2BbiqIVFf%2FRbPmchMLeazckGOqUBPTQzCY2o99f9SfmG60QZ4Qscemv7Xm4hLqNlqTLtzMfxeajFzIN1ly6JacP3HezSPdFGd6x2vkncpwkZz%2F2AXDW8EGChx%2FJvBwhT0CimfVeao%2FMx1Pjfh9RklQ%2BBJEXHZFmMjzKmRuHWmOy0mWSSrj%2B9JM3t%2BAv6JXvMYFFub0WAug5wcXqtLzGlGT5wK7vXetgMLL9LNgzUzgP2Mf0JKC4mr7CE&X-Amz-Signature=e5536db4e8b6838c17b36a4e3764f58f1c8838d37e169381078b710910f407b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

