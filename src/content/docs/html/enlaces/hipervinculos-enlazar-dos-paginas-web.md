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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUXB6NTA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T190554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC9eC%2BBemzXWhGAQwpnHuZIZdzjMWTFa2a20RnL2uQ3QIhAK5agac5MwHRa2pbNV0UB7irhQVVJdUBuCcK27OXEqlJKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXV9lKXvF%2F%2BUrVo50q3ANorwVhQvR1ygzMzc4Ypqg7edmBoLHJpLqr4qNVHtU%2FqB3lGUBzpWAv%2B89LB6ix%2FjQVb6Mmg65s758vsqRSrqE%2FkIgEFFP9eTW%2FjO6QOKspinjQtk6CJ6lZBrOwPEbiSGTwZsQAz9kSDTRsHYZ%2Bx7DT55esh4b5sl9tubWr15leefpJhTV72iHlIge0kw2HSrS%2BZngAVN5oxTTdt73x4Ej4B%2BKdMl1qi66K%2BnYW%2Bg4AK1hGrrYatHdeVmLOvmhxlaodeMLLwMA7ZYFV9OSZJriaZ6Bcpu7AN9zAJm0YCglZXJrZDGCM7ciWHOfb51SjNf97iqpsRUrLHxolLpxkdXtwphHrwBDq2IQkgzNSqBjdx9F1n0BYS3%2BJjcN3nAequN9E%2F1nN86Av3PtX20RIjsl54exo8phqwvJBdMPdU9Yd1t64z5kG2dVQKrtu2DV21xHEIIwU8RdcpmBzftBPCO%2B6LOeyrf%2FCvLsdWjkZi2ve6Dg4nv93YbBcdipqMxI4bmKF0dneVfYFyR6HF3%2F%2Bq6pRFwYJFFrTV59Hly281I%2Bd4cHyC6xVn8fNNL1ymjTSmP54EpxSHppDCxSXNgIv%2BL7CPbATAfCkTixnf4IewSM4wV0%2BTfx7ibdUB9pmFjDKs9zJBjqkAdgFXmk7gK7BhkEJCO7u0qdXAxD7TleNKlTTQdUXXnP3atpaF7MtHhrrwwZA5ujAOE706h9vLWLCm6Pxb0PTF51OpNFBLUtzYfs%2FgKOQxk68ndYv6eXVezSGS2NMyx8CNnGoKyofOV2wgXn69qKiwvjmiSf%2B8%2Bg2HWFO5rch7lXXiOqqC47az0z2Lybgzl34aJW7TeqrLVoPMFhHVvxOY6Q8bC8s&X-Amz-Signature=79c51da44ea4aaf07a4c667424230344f2a6c24ca0819f96ac9c4ccf551fc3a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

