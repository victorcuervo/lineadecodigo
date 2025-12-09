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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTOC3UGP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T192629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXlSt9s1YCtwF7u8Ws6bIaRQJzhPrJ2lgwHirCWh3FHAiBIt4ehmwa3xv4gEsGDNiVD%2Bc%2FttiNmW644GcEvTAFHDiqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDbLpzMNQ9rbeGQM3KtwDn3SqyyZNnrO8hJfojcoVhnHb%2FpyGmFh2VSuK79d2RwpLbZFTVoBNwgntoxtXZjT9REM4SqR7PQ4cJ3y2Jo%2FzGGe3BgeQZLmZPP%2B74QgfhwV0BSTv%2FtT6leg1qL4n%2Fglc9gIUhDn9e5Lpsx1hQU44vof8ETnmBwF2laeJVHXhAPYd0YBCLbg4LzpC2XS9jS%2BJSj%2Bprlw1QWb0paWTeLfdL2UwuwSUur2UdAgO%2BbmLgsnqsCUTtSoM0EEnR22kW4S1R%2BgQ3k7GgwRsoEPJ%2FR1AADhDRSi0oaM4NOEyrZilHo9%2BtTLq8W%2B7zH98W1yCgvz5o9XHg6WhmrsiNmU5TWpnmrewhy1moP2kQocm87YOY9Y3kUUP4f9Wg6N8%2FUj5r0b%2BZALSNLjYJHFqlppWQ9sY4FzuuQxTR58dBPq27oXxVS%2FuQhj5wPH4YxjaYDAn1xlhlb45Lh8wW%2Fj6MaCa%2FUnoiUfEnB21DLX%2BHwCBeBtFMRu0SRUioDlXVfOVPB4jUvbKGDJe%2FgP2cujb8i4I6bjmNXmgacaDeFB%2BryR%2FFzhdjpLiXSMcr9BPmKa%2FJiA8KUnd3Okw7vBCZv6bVpedfUf9cshvUhAofWy1iPrkN7HGRCsY5wRfZM9LoqMPF9kwnt7hyQY6pgGDWoYeHUxfYwtvqHQX%2FAnCmeGh6JzD45ZPpnnqXejA%2BF9kSuQl74vXuzE1WR3xnlGGXZqYeOoRmOgzUdYl0tTqIoCvgi37t051TRoNltn3o3%2BqRZGfPyQw%2BCdfpWvHxsHFKBgtnbSOP%2BvQNNnr6EoJdnK%2BtUFAJNjfSON6BSAKL9WxcdRHkgOnkUkOascXModMji1E8WEO5%2Bg8oG%2B%2FNBI1F%2B%2FGhKXS&X-Amz-Signature=0c0290a43291b2e127dd115a81a88b85ce9d249ba7746cb14def9cc17efb6a19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

