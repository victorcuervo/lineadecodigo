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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM3FXP5H%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T024635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGxbOw1HhQraASDNLjcLqKETT%2Fe04w4svNAst27jmswAiBQykrmgFoHGwtzUiUsXsT1KjBD%2FnjCVJKYv%2FBtd0nyrCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMgmqGgRR4sOlOer2dKtwD66lzZ4xtzMuwaRzoT9bJkQSnLIvJAAOwUUAwr2Rw%2FYgSSY5oaaCMOUhK5o4u%2BZ3dXh3BDMvIhb45OK8bDN1LGhbkOe0RNz1BsH230cmIS7Ka9J7GBLXNgnr0l1DIPOgwtPMlryjbgtbuMazFwsf2nFJfKLI%2FITG4HsLTBq21TwTDvjrKDD82KZCdWSM31J8W3TBIoQMfhG7%2F%2BBbL9eyPe9ZzmbYBRkUWqwa5SZssWuTueA5EVXkX69TunwY%2BPVPIx9aTt%2B8zm40xapltWK20BS7idFBhw4fyRP4nkM1KcB6LhFTcreI3r2mVpdVUal4yT4AtIIaIrp1SXZyiCUo1B7jxJVoIkRDgvVUP4%2BrwmdGI3pAfvNiuJkMDz3%2FxlRtuUxgwafAbUWfFqSsiF24Nw8nyWbTKx0SnhWni29CUIhKvkZKpACSKzleGnleBbrEiaLLqMwN%2BXBFddFuFNaB1uc0EX9ayqDOhsFQ%2BrPsOG2bEvsnuWygGyZLaJa%2BYc5RQQ82B%2BQKG%2FgJGmz%2FvxSH7pnIBNCZAn9X4sX0ID23cLjmCdNb3AlQmYcXwIaD2ViqiUUpnvv6FPpv1SyL9jsAxulmvZ5lwGd5emeDbzQ0G6EpXiKm35wEw%2Bahb%2FGUwyYzIyQY6pgHnihlLe1%2B8C9DWdYF8i%2FkA1YTVMnlA7XSjiMDD%2B8pUbGsCAmBtTuoZ6%2BtdBxu1Eh0QGGKVyzbNLqpvKjeoopnUJHQLGQ9CO5sHpaRpJrMTnQ6aZEY1078aT956DdS5puWV09HEu60Tl9KuMiozZ3wOirJ7qhQOmiA1Gghqsy1gT6rYFTUv2nKeX1%2FyILbmDp10NYAcmx99RndxmcatnbAu8KR9j37Z&X-Amz-Signature=46aa28cc749cb23f019b6957a91b4fc6959014d13472435261dea0dbd31614e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

