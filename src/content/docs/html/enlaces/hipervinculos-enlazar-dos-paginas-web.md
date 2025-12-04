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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDKFAT76%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCfFSx0vDwQjFGMuPIE2u%2Fc6lsTemYyIhNC82YwjNhxrgIgJ9mdAtNjj%2FVrwTjmVFoBW8N%2FTu93q193AdrSDfSL18wq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDJIslGpWfGhcLPi8EircAy9bK4XpjSIt8gRdMonuCRX7cFD8o9cooEvOBxQj3v5mpVwMxp0RjUsOcdn6ZiRMhWpbuI5x%2BaCXFNElwTKYtQfQMWH%2BgwK6u52XlgkcisrAQxVKDYgN2vxqsBWSdl7zWczwfmx1srsAybx3nK99CHwH8spJmuQvocHrbYsJUAQArXuRO1dVyIl5hquRb%2BN5ei%2FNK9f8%2FyyvrcxuK6QmnaIMtoSgsIGjzOujvItuFQ8VgkWq8LZYZ1NB00WY%2BBz2LGxVLsu42%2FQheDJLzmIQPhq5HKWF09awNy%2Bw9jJjxNd0iyrrBcmb3VJUQyd1VT5F8jd0o865hWOlU4WOC8rZwgjLCjhlfv%2BjZckjwDJ10Gqa7dW9qS%2FD17A0Pa6wZM0u4%2FWrHGHG9kE2cilhxaPzIg4dpcpfbZjFKE%2B97Rd5Hj34OvlaTR4xF2qFs9ju3YAsclqVuAD78TpH6qJsnpkprsPEVhl0mb5sLCFmeRd6pEkv6dEtSeYWGXfNlLVpW83r2QvVJ1vQnYLM%2FoHecKCqU%2BLXRhPI4ibflr5Y4doQNSEjT7s04J%2BTJOZ7eSJBchwXcV0fMmJCqqQtN%2FErh9IJX3X8co5kl8MIUp%2FYefRPsrXKesVguJyKu25j%2FW26MOXyw8kGOqUBhTmfSkVBAyeR%2BzIH6MfcPJL6zETuIVsWa48xxnT%2FvCU2gzmnsHg4b%2B92t%2BRxktnc8jJ%2Fi%2FwSPux3fLOuKSOm7z9krQF7PjsskY6yc9mgGEAOMO09D%2F%2BlGeyUjrMQB5%2B88rABCLwTFesyCspVTdWgaWjBQYiUJpBVqAaFchQgqHyqDjB018fG4NUxNHAU9SC%2Ben%2BtVukfpF7jGLBsN1tudEivmDXT&X-Amz-Signature=a42ed5117b93c68fee6014a5f04478c0893c7d4c9baed29340f1d651bf31792f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

