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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLDN7VL5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T055949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoa%2B7xJWu1R1Z2Sk%2F2NLFLkam4yDWZQ6e2VV6a0oKGmQIgB8WUK67VCdRN8bWu1bzQhU3wAHT%2B1iOSnc%2FXolQ%2BGSEqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhPDFHKOqXyacP3MircA0m9kl8CAlfwumCZaNCgwXtivwUMNYyNWYAHAtKE%2BDy%2BO5g0Iq1%2FPcBDOtyD3li6%2FZMvSmn6CdjNMX7U%2BIQ7hwAVECida91BMFAJCpzdnupN23PaG9gPX8c%2FXrtreyJYyHEK4k8UHQF%2FoVP1TR15IXlxRuYv9NSyK2Hg%2Fj5oo0%2BkOrQ9IZJlooNdhIy5aIO1CsVa9VAzHsjgWTXJAaPdty2vlq9vmJcqZLUe336LP2MhPOEHLvifKY%2BAu089k4w7%2BptmEKGmSF5bpkHSUEx7fh4vIAqjBFA2uF0Ic9YNncJMNAD09k94IWLRwU%2FKRCZI4StgQ9iy9Tqs%2BXL0vwhyFvpJaB3KVIfOXck0b%2BNeUrl1l6hWKmXQZzDpVRFnjr46JhBTz8mTXM44GUvKnBUO%2F3e4smz76KGymubdODMi6dkmbcEismdrFuNf2oOg%2B%2Fwc0h3CW6jF2hVm9L0tkhSjcXcOAobYadiIs0DJy4zV0rxcYKwUt6ZCAp2f84XTzHQe4a0bFXfDjX5UIno2BdJIIa1%2F9Uk79r7TOTvFup5FXS3CHOPCjYV3WXU12HEeLjrf2DUpiuVXTiCBkOXKyDInzTXO6y67H5f%2BeBOfPzFrSsRmCWpJTSSB27xMc2bmML7P2ckGOqUBwaREdxLGHb1l%2FMeEnGkvu9StDVeGAeotCbeSIIRIFgcYpyLi74mnQsbe%2BXfFBPY3arAgm%2FGEA1XYgSDqtyOfWQCf4Rwj6qHoAqiy5RjSjors8IR7ELd2wGcwoYbXCY038rRjKA4nlmgfxWREu0XCcb%2FkurMmIf0t%2FigK0OK8IxkPxwCqWUI7NQ74cXnKH7SaNxmx27ae%2BSa6SXuxF3qB2K5fxvto&X-Amz-Signature=fcadd0f8c1f1a0e3967b88a8bd3d47ba74d766004a9e0e8cd6bf5ad4ad62b880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

