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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVD2UTXQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T145457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQXCB5SxcK0ZTMSXIub4nQE9IgR4v%2BfTgpp2yVf84UyAiB0VG59DXbz0iT60EGhnJgzbT1txbw95mnI5aj%2ByuXpwyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMaUjrnBQDVoTGZ6ASKtwDKaw3wG27zBp7XvoT3zQO2ZUiaB%2F7hudEfhWFiC%2F7PZnYx%2F6AfMz9MsDKwBAcRft6vCQK%2BJAqJKG%2Bdk%2BBK1MDqynF0p6iw7qquFBQzkf2GcB5KrJ2P2KPrMTqLnXIuZ8k0gks9cjpp2AR2UFqUP3lEtJbrQYJSy%2BFleqY5Jbv5kBrym8CoHlfK3xJ4zb84sylHL%2BBDMfT745Lg615wNLIAWLrUtWW0lz3OsjY2bhRrxUb10t0BAjF0mVYutFGCtwSI3oSAFM7dtDelae1iwDo3V8Ou9Mfm4BY5shN534ETOIV16VdDJp4Nx%2FSvLFEWTUlzq%2BfIHIe3vYU816JA47GYUAB9roZ002lLX0WTeM3Oi0fS61vdoxl0qStNJsHcDG1r6yIiDhSXqt6%2BBj2%2B%2BemAuYptQqo6agoBE6okU25XqrxRKlKM5ZxR64%2BVmZgrAVuSdV8UIYccxSbhR5g1p%2BtB4TUoVZv5xDhXJzuu8lPvhxPz4Upg%2Bh0BH%2Bv4C9gQnqSzhmVcgwFtAcae0OwxobJNODhC83sNFtviCr1KfHvUAyJlwyJ313Evh6hYyZRdclfcTNCh%2Fe69n%2BkbjVriPXsC%2BUQPND5rcJrsxuczzYFjQxwz0q1kL8c2D9oBiYwzqbQyQY6pgHFZKumuz%2BoUDf00hCpm%2Bd495QuRfFi2eJnVOkUy6yPIPQrF2Cj1Vk369FDABA7H4hxihRcWwUiD%2B2TPwXQ8p%2Fg6OPvUGCBqdDSUp8xRyxxOl4f%2B884F3EaJ9jETuFAJ2cFioK35hCgYnZlNRdNRhcbOCTUegmbEbja%2Bi73yksisYVXFhziwUm3t7HOhytf5AJzjFkET6pdBBYrDFzVhsaT%2FroK%2FJCc&X-Amz-Signature=372d269d8694584b6b43029539b3ef2f1f3f34672390f1d63bad4792d2d45e1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

