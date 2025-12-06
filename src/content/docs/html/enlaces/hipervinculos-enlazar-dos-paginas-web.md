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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R322HEKG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH175XDQ1VsazdTy%2FboVIfo7FB6X3L06Gx8DH0R7%2BAmcAiAkd2YbBS%2B3PI3N4Xt9Clp2Uzta73EYnn0%2Ff18WMl3GSSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMIXQjj57fIgk9P6zLKtwDpQloRd7hBhPMXcRVZMLbHJhiUWZnjczYpxAypb1s%2F86pjbzts2KJskNUSf33u88AQpkQDmWmrlJwSp2jTD7Utg6DOWR6ktijergdLv8K5qtLZkD5drGrlDi%2FRWvN%2BeClu86mMHz8zgS8CekZYVdDdnijYOpC0gcamDeC22ExdP54U754z7n6eSmFhsRrIO4xPK14066N9LovtLddCUPGZL8dUQsSNqfBLSec6SELzGd%2F6alYFt%2FB5ZQpnj%2BDhxd1a1BdoHiSYO%2BgrsPLegDsxcLE%2B7KnJvKzLq92xUDd%2FqTQtPvqRC3waWT%2BDn%2FnUN0gNPurRNHZofq9ypUJkZrmTm2RkMWGvNW6DliNLNpG6qAV%2FQho5OBgblX6NOTNTHVxSDP4H3JUYUqHiFAf%2BRSQAsk3TTJZuBDM9KdcWGHpwx6uYHWsJJnZgT0ZKPDsdopnAZ82Gz%2FZet9nI8xJWXE50GVe9Wk8iCxLMdUCQ0JLJtBaKieXNi1SxRRpi%2Bw3gSlXTRkYkhx%2F70H5u8CRKXQoBr1wuKI5lhyDXhOKqBX3Uzu9qaPoOd%2B%2B68cYM6i5PRvJXvAZ7dbBbA7XUiYHHKsNFRN2eASS%2FZlZyndIT7xXUIESN%2FLsKlMEGnoODTMwtOvPyQY6pgEyHoPf%2FVjSPuemadlKTkhxPGfGEpUgkG81O75ziZTH6VPith1VBIYAzhF1HywhcF2F7fXKRUavnZ712p1KPdgyHde%2FGbSaJCSxXHN1%2FJsVvpFT33LzKUm5vcVmYBI%2ByXmr%2BVTdFy%2F2mOWo7fWEGLlPmHbWLDHN4Qbkj37dGRj5Pq1eoGPT3QqVtkOWI%2FQ04SE%2B2MSwKHFG7SEFynN4XPvumxwnVBHe&X-Amz-Signature=7576b8f24e76ffe5eae852ed5e6c49eee303a86a9ade35f3d9accc227d6f818d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

