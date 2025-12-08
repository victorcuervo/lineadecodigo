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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPUGFMSY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T153410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAcFO8jpRN4OcLXdLGKzgndmBMR0gpfQArqpeYiB4d4AIgc34k9iNn%2FCsaPwg%2BGAKwgvhvR3NOAmaNQzAFTZWqLeIqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7F4HpybIH3bjPCaSrcA3JTXY4JP4ubgzoTCcsQBcHadRRvIKPMG0lyG1iKnBd04Anpim5tIoCqmN3MKI61aLg23lVrwfju3s0kHfANuxqQelnKo%2FZ%2Fr%2BuD697%2BW2LIdnUss4UXaqvQdnsLHn0uM2n0NAmVt4%2Br6LDWl3YWcp2mE%2Fmgb%2FENAPEGnTWNbdzgx7Fl09%2BcmBZ9XwhSIFRz6lm%2F0sdGdSEdAEpbWLg0wDN18BpAIeDF7hGlBu0iruUomzIHmossbe%2BAZLyZ%2Bp%2BCT9sBn0h1NohAqewxcRd9Jc4%2Bm1wPzk9h4Wx4KMrwFmqitVpNbkICvVfiU2C8RAxDXlx%2FAWGxHrkLnxzwst03wsoEkCzYv1vm%2Bhl5wcO7OStxyP1irbNZQcUc%2FMgn0JMoDqznnOxwx01I16mw2kIY73wmAvVghtGkQaxIN%2FTfjxJ%2FqlRBLwYghWQbvn%2BEGzryGRoUAgIvXw%2FZ%2BR4n9NYD%2FdAX3YILu22yU7Gz8DtgJwFamFC8v1X%2FRkHkNU0J0Ycryi6wexMPzYYjKCYWIGbq%2F2xp0BrtvS8BdaRd1f6Xka54sFqHm214ai%2BF9dRh%2B5mX8ig0DlCQRgyJatB6erwSCUXMzUNlLTourCX34ZEOtrdMZzha4osL8%2BDawCZ1MODD28kGOqUBs%2BkrcFHenAU3Yqx26Km6KY0mFhKGGYgOclaXKNLt57pinX%2FeWx81MtRRz9hocP42ehfiVqcTnwyUjBuy20F3sHmbrI6N6K3D5JrX0IqRSglgO6kk2ZVPxSSTIo8qkiz2Ofi4Xis40CxP7Aqx7Lcye6JSFfwvAnlT0sHy%2Fct8mK65w%2B1X%2Bc2AUkbxU72SXetEZ5Bc%2F7nRjHeoqpgvT79IWgPuDY0n&X-Amz-Signature=c5c08bf596489c6e08573fa953f3c3b9449aced7ce6d5de38a5f7ddaf5301a20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

