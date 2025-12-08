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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKCCTU5P%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T082249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD58xGH%2FfmuQ8m9u6coDd4ziHZBZdK56KDhlleQhIYHFQIgYg26d1atZA0zj3dlwo5tYBym6JYF%2FuoHqDEqXuEyLNAqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD29wd2w57deSf16pCrcA6ZdqYZ5LbofltrsnZ5h30obIJqNS%2FXchmCXOCS1ZW4%2Bh%2B3KWJ90sG00mJ8Gp%2FizH2aAle%2FdB55i9UvnVTsS199B1APJfFiKDpKtLUTNPxGDZdGr2m1H6RSLKWPBYJrxNX6w%2BgvUi7EBMSRPn%2BH1EfJ9kiIRjvfJUCKgfOQxdgnzJogFOz3%2FKu2KAmTr0JBNiOAf0es0Y9gmaGhGueV34gGHAwNIABCcvuS%2Fm8gZdqzy5zm3VCoTN0dwM2hYvDUvhASsG65%2BjQLVEtCdOzQ%2BnoEJCrFN5YFkLNFlK4dfG%2BSddsV6SRCFrhnaeKBHYDirGUnQr6DD%2FqSRSISJO1kTSrJUp1%2BB0vAR1c70LBKCST1kqK63%2BSxSGVfJhWs76CiRYEBpO9uA9EpEpxFKEKj9vtMa0QHLPcOpS99LtmGy7rtKz1N%2BR2QY9MW82TXnRhFakwit%2FgW3DjJHQ2qB74o4ON8yQ2LWBj5gMQI8%2FnU9G%2FAOUCGMYEoqQ53GSbtXt3I0EK3Rb2fy9vpdCiZffDtFS37fRolJFziqCWFZFMutDqSscCykPpVl1gsmQ09cmQHkMheFZwj60Oydbc5eq3thjsLHF0F%2FJQXgeDlrCpdk98spEwTptDaksOqrcdAwMO3t2ckGOqUBEDhL7MM3sOU7EWaeg45nplpzSg8%2F%2BlblIVH%2FZZQkPJrJ2BkG4qUz2vSNyqiTnYB9f%2Fxgp4EEQFg%2BXDS7DPWKdibYHKTW6hNgRcp8wV5snWYqx8ad2Bh%2BSBosMJCd3yByiV3LyJ0pAgJPuNVPXcfEhral3MYBhfPu2F%2FzqHFnmMEyTo2ZX%2FprRDdWqQRkEdJjd1uhoGwFMyD3ZsWAy035UIGtz0j2&X-Amz-Signature=af8c884913b88e1b53b2eb9ba9635833fedac2e76981103886d039f73eca6b55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

