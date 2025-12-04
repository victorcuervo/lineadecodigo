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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAG2J7XE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIFzYBzQq3IhCcuezb8L9jhQdzta2W4isWst%2F98wHSvwZAiEAzO6%2FSpg%2Bu2PrknDwt26DAunTkHZ6wOylr%2FsL7cib8fQq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDPKNoY70OiZoZKBUsCrcA4gPnfGKy5tCQJgxClLsJnJOCgANIkaSR%2FCwHAjmiq%2B2lxsHBXa%2BeO6X%2B2KG5TTfRv%2Fq4zvtca3ekH85B%2Fzb7RZT2EyqnSEVSnz8f9Qre7Yf%2FvUpXmt1cvfHOkBzxsI4zf%2BEi47bWAi14zajUfgFsbIC9lLVbSz1iL6rAi6H8A20nPPUf2EIE3M6qbxr08GP5G%2BhktwDNgj1hDgfJHA0fXegdaHzF7%2BRTUtVaaVAYP3xeeiT9QZkibB6Gp%2Bvd%2FyDGQktc1%2FZrNlvPGGOxLg%2Bb01jWM1WJsccxeHwFLsbACVi3Tth7W4vHQsyWqiBIa6j%2FuHI%2ByIqhVV4%2FqZLj7xN33u1Cb9NMakoiJ5MhH1i01bzJO%2FycIg8f%2FUcBZmj1gZOv6D0cTksgCvvZfZ4L6DBLCgoabO8uhO%2B0MNY6P3X96tLEOjfSKrU8kTsKubsoLR3xDwV%2FLpJnf0cRrMIGj3peY%2Fad%2FYpOaPHNZudj2q7usxQlplrMWI7i2dgkXUj8XW4Dh2UzOcjat4QK0iacuYGxNp5PjJ%2F0G1r5W9Xue8yexVvBgSQgIxf8lKfSSBcIdMdN4%2B6I%2FnQdnijTH86CTL9UeDqEGpijmXvrzMGFQfEWAdzFaDQzf7OdgL%2FOSCUMMW1w8kGOqUB74tip5mZy0FiOcycYd9OGGt6%2F4YbQlol%2Bw4dR0CfOCbVObuAHOtcP%2BJ0K0J4935MxJh%2BxRBcM4nvXuUp5QLVvX1mpu1XUY%2B8NM7fLo33QO0nCrs8jQaE%2Bt53JRGhb7mY7CpFLeyXDL%2F21zgQTNZUa93u9udRegg%2BmIaPDz23Ukb6w8zA125f7GELamRQSOFJbIJbb1M6a6s3MtoeTrlwr0oa7okS&X-Amz-Signature=bb003330c412875baede1c41e89e0bb0b3aa480dd849b3b48b4ae1f7b5fa8e47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

