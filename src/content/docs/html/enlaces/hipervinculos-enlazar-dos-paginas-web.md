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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSLEVVCJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T133704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJnMOmxy1DvUCvpk9vTSCt1DOWMScZx0Caw%2BmRWMLIcwIgTrvIugggmOXzZSrzDWOIPwuv46EkVCLNWOuvQs14QFQqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKD1lSX78pdaJmJd%2FSrcA86jhjzruo%2FOdtlfQSd4Ls%2F2pHz%2FnVf5ridgppcMi%2Fg3y8e69kBMUW8BvAAPom4ASq1p4V5oX4bD84nr31a1mpPEtFSn1JUdUDggxujNLwpjWf6uh5YvozZy2nCdYDRCQodOMqH3AWtj6mnDc61b1oJ2PStL6qOQPhv%2FzlR6%2BzHFRdb%2BKD0%2Fz0qDcBDuGoJlHgGNWbcJZAwf8wgmvVUkACHGYA5NDwPYdYM3GMzi8PqvAmXEdZ9%2Fm7RSqKs%2BsIrW0sizMUKBWTksLVqlqzoNlahm59iyXGZKDO%2B%2BBZb8HIdtD5Ysy3RE%2Bp%2BrdCl5uBHi3jKZZLfSp5kn5rAn4dEMTL5TeHYAa1YbGZt4Yof222gNfWS9P%2BtqkgDbCog3Wxaf4uUjLwqp2NO3SpCGNSZ3uuHLroPmUZiP5hvxB72TD1f%2FnbCoh6B3%2BZfH7UjeFJFy5NYNaIRPC3bYKFa92X%2FGuQ87rpp8PLe6x1omEXnVFzczFGkcFIZ6FZzgCPbezeRG7SynphDvuP8efCIfYEzEbZ8I7GY2lmYgCEkaeysGk4JCXJKgQ5VUm4I%2BO9OJgK%2BhmszY0ifhAwFD747vzsEE75gNgugVfWm7dus9RBIKieG%2B4awI6A6XY%2FLyWND0MMyQ28kGOqUB4Dylw35WBH%2FRGbhWO4xrP5uho0uWsezrtGWzI3g0YYl%2FJqjR2%2B%2FbSo7Myk14Q5m8%2FvVptPAT6AyGjHG9MLh94zBC2zBGVXCrIlDniMpfEo7jYm%2F1ijskEO0rgTRmndokFV9RGkSk9KKYwUJVt9TRqlC92%2F%2FvholZTdk3RZzfd2M0ddEFfoFeeAm5hOxYBxhw8j8rLulIF5l9dknzg0Y%2FgZVevT6Z&X-Amz-Signature=38bc4d4f1a3fa43aec332d20978cba83d3edc091106ba1d3e135e945d5bad60d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

