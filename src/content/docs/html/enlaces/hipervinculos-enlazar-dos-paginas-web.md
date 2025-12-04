---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTGOKAVQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICgMnP6OYWNvNX9hpmx5A1w8Vzb0UErJcU1BN472VwSgAiEAunMAM9nMF7AT%2BiJy5EY9sHoZRBjxj2FmzTNJj44obzoq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDBwztxck5kpEzqn9dircA2uAedRSZEe2%2FUrT7ee3iP91IMLK6IiQ3KJsSrlYNDfUWDZbM%2Fdvz6ATH61TmVqIHgWt5RvofCy%2FvC%2By33QRyTrQtJT1uAzU6pQJdmUaOlAbLVsJhgKhDxZBUuhpAoUsgQf5cfaPsBrGMGovMTRd2Dbf3XgpGevZwA1%2BR9ydEIvLYb62%2BuZzQKH2FVGgMndwJWAstihm8xmB15tjXcqBu0ACWth4KxVGwPjLn%2F1yguijiKxCQYt9ryglV3RPyoWpJ7zZz5AkryHOHDJinqNTwjEMAkfyWrV%2BKQw9aobpEvNDNfB9EE%2FKxeZnVB9r6sKN7fPhaBvQgHledBdun6S73WGuLaUfMIqaF4%2BPMS%2FFYQdR0u5ieofBQenpKTEHIlk9Z2C%2BMnJKxv4tr1F38LgJ8XEoQj%2BnL9sufMXB7bNi8ruywhkG7UEQ4Uk%2FS8H6nD3u21WzWDq4tZ0kdT5Lu2cfvffeEU7D1heltScGYmeEWyAMuYqjsS0sCkGGfCrtGL%2F%2BNMi12XKYUF0Q2TKlgWqI5II2WvoN4YxslN%2F%2BzrHYZDHEPP9ryB2H1qZr6v2IQfp%2FZMg9MshMTFThouOIVbuniqcBoGaSabmnG3UgkLgZUGhLZ7fNYNFt4KXxWg99MMiqxckGOqUBRPFqdj6RZOumAwB9XhVnUY4O0c7k%2B%2F4pbte5zVfdv%2FVq0BRe8KPQnVwjOEb%2B98qwvAWtWnZ2vBMqY%2FBJZ3Z0QT49nHAL%2BNJhLiP27xKYan1%2FBlQWI9jR9T%2BxJtiMiNPg%2FYoMUKUdIOeFxusbGXqdVRWyB83fU1pXHh%2FAdl%2FJQUGP9kqEkeckeJdG135vMaKhyLLQUzxdxvRn7lEHvehewHJZjr9d&X-Amz-Signature=e94602bd8d3dcc2739cc359a873a24e0418df1c7a65d24a104dcb376cd3ffb84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

