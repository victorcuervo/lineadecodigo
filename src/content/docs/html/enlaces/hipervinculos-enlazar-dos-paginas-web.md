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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YII4OMVD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T225306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1qh7HuJGLuG8H8vq1M5BADBo%2FxZ1fQfkk5LSCMuAOjQIgT2kMNHOkpGwXRtXRcYj1JD3SDFpJkEh1HXgmPFBDAZYqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ08FWAdV%2FHOhVlhYSrcA55bjgHEKXTVizUmcqs8yLKh39N8npAOEfka1vSgmh7g%2B%2FfpM8SxItBelenrFPBGfKgB8rCxskGl9YM9JoZ9oaIdVW1ONlCUqu%2F5oxp9lPNlSfuAYBN1MpHdEqAHYQcXmw2%2FIqrXTHihWiJSsrxh5W5vXlkb%2FVp%2Bb%2BiwgL6kjlZ1rFRHKirNG1NLoAX0Eu8UR3i0SppQY21z8XiiHp%2B3Y8LjR3T8RR%2F7XY7xzHUu%2BFBMg21fBrqZb7ReP4u8qdexl66yNm1VjrygCrePwM9B%2FUeRzyGADCEaNTs5Iofd0FwKdkRktI5h9uaHd4fBwIlPfXh5fiBtbJNIyANY8%2F9J3twjRoOTJD3XbiOrgfsMa6CLYAYctC2Yrr6s6C9cvny3b5lLelLaBRAIfIa3adODNeVnjjgHWXApQA0LpYUW6YmENgFdBVAb18cgzuCiQhk7hH2tfmSi9RZQ0NmGkyOMFmg5QVz3mpT33LGUCn64ADXhlt9Y6Qi5bWlOFyS5ivmMgWN%2B7HvGz0Xzri4Ryah81G3%2F7w1WHk6xKVa8jNIkKD8nfTK%2BLBTpZqsd9MzxbnAGnJ5Owh%2BElZsbYT6my5%2B7O8RqgmxRYSm655GF%2FB%2Be4SjK%2F9xst4YxdeoSGRxTMPGE2MkGOqUB4NwWQrHCPZmr8T13VAc42gA1gZGwYg%2BiO6eHtFQw4sK7x6nd3nMaQXb%2Bkdo6HrDaLNSPEUwZg9LTuAjF1mDURIRDiP1QJjNGpQS%2BSoTO%2FHCLMPaR%2FWe14vg3Rjs5w4w7aV1cJjrELlL8pNAk2JFCh5pulANTg2T%2FYZMzH%2FOBP%2B2hWqAPZNo1GDNgJ5lW243mjRoz5O%2Ftnu95Jof5xPakIEb8HyE0&X-Amz-Signature=3ad07a7a1441a71fad7437c717598a8ce1e4ddf45be9ab85a96c7d9afacb4d63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

