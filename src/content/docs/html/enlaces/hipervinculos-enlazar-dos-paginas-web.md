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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM46IEAJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T192508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BNForu0%2BRJs8Xvu4aGqbps9jgLLHMEOqx%2FaI7%2FoFgWAiBKaFFCT6vC5eq6QEnQVjW0DsuJ9OmkmTUEbE7MxkTvZyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKx4SFknroMVewV1xKtwD6aCAgKQSBOzl3KXzroi%2B7%2F2fpn4QqawgxNlYzHRv4juQrSiunVExZEAVf3wOGZXykUsaIpglOjVN%2BQa7WVHs1Y18IDGfDJ9ji%2FH%2BVcGHJBTRkATJysqSg7h804rP2hPlxYKi4pdehljWDbTDFTb3ndkPpD95edc36jJaRgH%2B8LLVkVQORen%2BxssUfb5gnAulBrgcJtGC1RxqD4Q4hLtK3eL4ts9j1UmLwgkCPCPelEWO6GhlD9fQOmrrJgT8nRXaI30Enw%2FKj%2F6pxTsdTsMACVgPis%2FwtnlYWxxtf%2BuobJjfTRgoVGSUHLjaYDbUKSghZJj4lRwkzfXT657Fbla6x2tLiAlqs7ng%2FLczMQJk6Hhv%2F2CoXUinxjRKtbrx%2BYaxiGJdqt96m8rXY2FEvAAKaLCutwUZksS8t4SzgmYAI8alFDk54W%2F0wiIUbCILFcc8qtv4uHiAsyoOB9UrWV93oh8POsFNydPxmZJjY4hLannXNV8vpOKV6g9p05HL7VP3qe9zll0m5CIkPCkTQtu5qDpTomRUWkQ7RmgW8ea5LaJ910wl9taPLM6RqLBF0kBq5CXnEHAhP%2F9z%2FHzuQ8I7fC49B8L9VRo7oyXf0zuYrcYb3oCqfWMkpgujiycwqN7hyQY6pgEIPG2GDUSCPDssiAymVS9Tw1v5dv2PtWtMG80m6x0x1ZZgqv68BslfrpQjBt2SP0Xgch%2BvfWmdRw3bxxmF%2FnmD7lxVJOzpZp34YylLs07tq2c3bfZa6j79QCqENW53tP6rxUlRnFMyk3TK%2BMwicknY9KHPyuhEmy%2BXhXw9pxpSPmSdiyTDgtFoSbSy%2FPbKxARt7nWHMLdQztHUbp%2Fi8RHzw5BrPQSc&X-Amz-Signature=4aa5f6e5ddd01bedf42b94ffed7d70d118bdd20d2f9372ed12c1107418c52593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

