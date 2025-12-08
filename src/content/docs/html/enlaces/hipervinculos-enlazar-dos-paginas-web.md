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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXHYFIWF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T100111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpxud3pirqnyIKmZwGm%2F5UO2DkzDRwSicODtRGSXWMlAiBf737XrRUkz2owA4S%2F0AZGk2YbgzJIWAhvPc%2BfS%2B12ZCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvqo0z6XYVNwKnkyuKtwDy%2Fu%2BAMkRSHLqzuu3KWPnyCXIqibb9jAGLdoepk9e0aPEVXSrNKOozwIaGSZc9r2UKVBX%2BrcS1dFkxV8Jk%2B%2F5Pl%2F0KU6SzrvXDKI6RySoex3VOpaMtqLvfbeV6aG0dJDGOIwxFJBBQTvMKeS43zRkHrYFXy3B%2Bs%2BUqTbnzr4Djxyy53qzD7Mo0k944hwp2wSdfyCXF8PIfKLeXXqPQ113Yejoajcp7e0bec2ndyF8lN9EunD2WYsF3pqFCtPne7N3rOzwff0RQLAliCX1N7zlOJlxCkfBwAJen0Rt0X5r9414Us5bS1jasdLWFdAmrCx3Y6k9OqdNCiDl4zC395XQjnRuz0gULiHdswTJTYXJP72gHNfZp43XUMailJy3sGmhZkRTyKoJczJJfC0gkqkwND%2FMbDlyAcd8LlsfNPO%2Fu%2BU8bYcP8x%2BxOtqwvx8a6Vswt%2Fe2%2FR0Mf7Czv8%2BajXPkXn50pPmRiBFG6%2BVcqfGmiUBO%2Bhby%2FgAicajIuPZrSicANIvWIOcHprQTbbdpfwUcP8miPyq54ytNeYHuhBsXoBbJvjteaYnW09UmpT99g7jQjcuqaUJyFGHp7GLVZvTJfiGP0iOp82htjUa%2Fk0cqh055S%2Fv50xSmTUZi5v8w%2B%2B3ZyQY6pgHqy4oJ9ivmZYGwgalnoQU4IiFVzxmRsQqtRtV%2F4tDUa3VUZ5n%2FbZVPXgyAirotS7VYcEhDBtwItoyDeFPyCxHEhvGcTM00ilvZ7x7gO2Tyb8vacK6vMV84kq6kYIJiktvYgSpD6%2BCCo7ILgxZ76QigR7lzJT510Zk%2FS%2FQuGqTWFrU7z66mk6LEnn9XNw7hRK7pPmuYbZnxmgv4B4yynun4BtXHFHJR&X-Amz-Signature=6ad4a71dc8bf8d3f2e1b646a634517d350e6788879915286821d71c8533215c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

